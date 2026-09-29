import { readFileSync, writeFileSync, mkdirSync, symlinkSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'));
const isJest = manifest.name === '@stackline/types-jest';
export function compileConsumer(cwd, importName, typeName, {minimum = false, source = false} = {}) {
 const fixture = readFileSync(path.join(root,'test/types.ts'),'utf8').replaceAll('__PACKAGE__', importName);
 writeFileSync(path.join(cwd,'usage.ts'), fixture);
 const compilerOptions = {strict:true, skipLibCheck:false, noEmit:true, target:'ES2020', module:'CommonJS', moduleResolution:'node', types:isJest?[typeName]:[], esModuleInterop:false};
 if(source) compilerOptions.paths = {[importName]:[path.join(root,'index.d.ts')]};
 if(source && isJest) compilerOptions.types = [path.join(root,'index.d.ts')];
 writeFileSync(path.join(cwd,'tsconfig.json'), JSON.stringify({compilerOptions, files:['usage.ts']},null,2));
 for(const compiler of minimum?['typescript-min','typescript']:['typescript']) {
  const typeRoot=path.join(root,'.compiler-types',compiler);
  mkdirSync(typeRoot,{recursive:true});
  const node=path.join(typeRoot,'node');
  if(!existsSync(node)) symlinkSync(path.join(root,'node_modules',compiler==='typescript-min'?'node-types-min':'node-types-current'),node,'dir');
  compilerOptions.typeRoots=[typeRoot];
  writeFileSync(path.join(cwd,'tsconfig.json'),JSON.stringify({compilerOptions,files:['usage.ts']},null,2));
  execFileSync(process.execPath,[path.join(root,'node_modules',compiler,'bin/tsc'),'--project',path.join(cwd,'tsconfig.json')],{cwd,stdio:'inherit'});
 }
}
