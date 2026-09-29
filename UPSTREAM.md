# Upstream and review

- Source: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/c76c419153bf70858ab82843483657ae1bf11f17/types/concat-stream
- Published baseline: `@types/concat-stream@2.0.3` (2023-11-20T23:53:09.905Z).
- Upstream tarball integrity: `sha512-3qe4oQAPNwVNwK4C9c8u+VJqv9kez+2MR4qJpoPFfXtgxxif1QbFusvXzK0/Wra2VX07smostI2VMmJNSpZjuQ==`.
- `index.d.ts` was compared byte-for-byte with that commit and matched before maintenance changes.
- This standalone snapshot repository preserves original source content, contributors and license, but does **not** claim to preserve the DefinitelyTyped monorepo Git history.
- Only original-parent direct dependencies are in scope; dependencies of this declaration package are not recursively forked.

## Issue review

GitHub search on 2026-09-29 used `repo:DefinitelyTyped/DefinitelyTyped is:issue is:open "concat-stream"` and the corresponding closed query. Counts: open: 0 results (collected 0), closed: 1 results (collected 1). Search results can contain unrelated packages; they are not evidence that every result is a defect here. Archived search responses and baseline comparisons are retained in the release research evidence. No issue was posted or modified.

The one matching closed issue #17491 concerns DefinitelyTyped publishing infrastructure, not concat-stream declarations. Local API/compile comparison checks the encoding overloads.

## Validation

Real declaration usage and negative type assertions are compiled with TypeScript 4.5.5 and 5.9.3, with `strict: true` and `skipLibCheck: false`, from source and isolated direct/alias tarball installs. CI also checks the complete dependency audit, CodeQL, package contents and exact CI archive identity before GitHub-only publication. Registry verification compiles direct and aliased installs rather than importing these type-only packages as JavaScript.

The selected declaration incorrectly restricted `encoding: "array"` results to `bigint[]`. The runtime concatenates arrays without converting elements; source and a real number/string array execution confirm this. The original numeric-array compile fixture failed with TS2322. The overload now returns `any[]`, preserving existing bigint consumers while allowing number/string/object arrays; other encoding constraints have positive and negative compile tests.

The Node ambient dependency is tested against @types/node18.11.18 with TypeScript4.5 and @types/node24.12.2 with TypeScript5.9. Both compiler generations use `skipLibCheck: false`; explicit type roots select the matching ambient declarations. This does not pin or alter the package's inherited `@types/node: *` dependency.
