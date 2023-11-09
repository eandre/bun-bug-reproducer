This repository is a small reproducer for an issue with Bun.

## Steps to reproduce

```
git clone https://github.com/eandre/bun-bug-reproducer.git
cd bun-bug-reproducer
bun ./main.ts
```

You should see:
```
3 | export interface BarClient {
4 |   bar: typeof Bar;
5 | }
6 | 
7 | export const barSvc: BarClient = {
8 |   bar: Bar,
           ^
ReferenceError: Cannot access uninitialized variable.
      at /path/to/repo/clients/bar.ts:8:7
```

## Expected behavior
The script should output the line `Foo`.

Everything works correctly when using `bun build --target=bun main.ts`:

```
$ bun build --target=bun main.ts | node
Foo
```