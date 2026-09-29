# @stackline/types-concat-stream

Maintained TypeScript declaration fork of `@types/concat-stream@2.0.3`. This package supplies declarations, not JavaScript runtime code. The original declarations, contributors and MIT license are retained; focused changes are listed in [CHANGELOG.md](CHANGELOG.md).

```sh
npm install --save-dev @stackline/types-concat-stream@1.0.0
# Keep existing type imports and automatic @types discovery:
npm install --save-dev @types/concat-stream@npm:@stackline/types-concat-stream@1.0.0
```

For direct installation, use `@stackline/types-concat-stream` in type imports, or in `compilerOptions.types` for Jest globals. Aliasing to `@types/concat-stream` preserves the upstream module names. Requires TypeScript 4.5 or newer, subject to the dependencies selected by your lockfile. No library runtime engine requirement is introduced. Development tooling uses Node.js24.

[Source and issue review](UPSTREAM.md) · [Issues](https://github.com/alexandroit/stackline-types-concat-stream/issues) · [npm](https://www.npmjs.com/package/@stackline/types-concat-stream) · [Stackline](https://alexandro.net/)

## Original package documentation

# Installation
> `npm install --save @types/concat-stream`

# Summary
This package contains type definitions for concat-stream (https://github.com/maxogden/concat-stream).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/concat-stream.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/concat-stream/index.d.ts)
````ts
/// <reference types="node" />

import { Writable } from "stream";

declare function concat(cb: (buf: Buffer) => void): Writable;
declare function concat(opts: { encoding: "buffer" | undefined } | {}, cb: (buf: Buffer) => void): Writable;
declare function concat(opts: { encoding: "string" }, cb: (buf: string) => void): Writable;
declare function concat(opts: { encoding: "array" }, cb: (buf: bigint[]) => void): Writable;
declare function concat(opts: { encoding: "uint8array" | "u8" | "uint8" }, cb: (buf: Uint8Array) => void): Writable;
declare function concat(opts: { encoding: "object" }, cb: (buf: object[]) => void): Writable;

export = concat;

````

### Additional Details
 * Last updated: Mon, 20 Nov 2023 23:36:24 GMT
 * Dependencies: [@types/node](https://npmjs.com/package/@types/node)

# Credits
These definitions were written by [Joey Marianer](https://github.com/jmarianer).
