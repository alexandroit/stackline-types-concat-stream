# Changelog

## 1.0.0

- First Stackline maintenance release based on @types/concat-stream 2.0.3.
- Preserve the declaration API, compatibility line, contributors and MIT license.
- Add isolated TypeScript compilation tests, complete dependency audit, CodeQL and exact-artifact GitHub publication with provenance and immutable release evidence.

The selected declaration incorrectly restricted `encoding: "array"` results to `bigint[]`. The runtime concatenates arrays without converting elements; source and a real number/string array execution confirm this. The original numeric-array compile fixture failed with TS2322. The overload now returns `any[]`, preserving existing bigint consumers while allowing number/string/object arrays; other encoding constraints have positive and negative compile tests.
