# @stackline/types-concat-stream

> TypeScript definitions for concat-stream.

[![npm version](https://img.shields.io/npm/v/@stackline/types-concat-stream.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/types-concat-stream)
[![license](https://img.shields.io/npm/l/@stackline/types-concat-stream.svg?style=flat-square)](https://github.com/alexandroit/stackline-types-concat-stream)
[![GitHub repository](https://img.shields.io/badge/GitHub-alexandroit%2Fstackline-types-concat-stream-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-types-concat-stream)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/types-concat-stream/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/types-concat-stream/)** | **[npm](https://www.npmjs.com/package/@stackline/types-concat-stream)** | **[Issues](https://github.com/alexandroit/stackline-types-concat-stream/issues)** | **[Repository](https://github.com/alexandroit/stackline-types-concat-stream)**

**Current package version:** `1.0.1`

---

## Why this package?

`@stackline/types-concat-stream` is the Stackline-maintained distribution of `@types/concat-stream@2.0.3`. It is an independent continuation of [@types/concat-stream](https://github.com/DefinitelyTyped/DefinitelyTyped); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/types-concat-stream@1.0.1` |
| API target | `@types/concat-stream@2.0.3` |
| Supported Node.js | `See supported framework requirements` |
| License | `MIT` |
| Types | `index.d.ts` |
| Runtime dependencies | `@types/node` |

## Installation

```bash
npm install --save-dev @stackline/types-concat-stream
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install --save-dev @types/concat-stream@npm:@stackline/types-concat-stream
```

Use the original `@types/*` alias for automatic TypeScript type discovery and existing `compilerOptions.types` settings. A scoped-only installation does not automatically expose the original type-package name.

## Usage and API reference

### Installation
> `npm install --save @stackline/types-concat-stream`

### Summary
This package contains type definitions for concat-stream (https://github.com/maxogden/concat-stream).

### Details
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

### Credits
These definitions were written by [Joey Marianer](https://github.com/jmarianer).

## Credits and original authors

- Original project: [@types/concat-stream](https://github.com/DefinitelyTyped/DefinitelyTyped).
- Joey Marianer.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## License

`MIT`. See the license and notice files in the [repository](https://github.com/alexandroit/stackline-types-concat-stream).

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
