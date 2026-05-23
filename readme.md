step 1 : npm init playwright@latest
step 2 : npm install --save-dev @types/node
step 3 : tsconfig.json

# Why Do We Need Step 2 and Step 3?

After running `npm init playwright@latest` (Step 1), you might wonder:
> *"Playwright is already installed — why do I need to do anything else?"*

This document explains **exactly why** Step 2 and Step 3 exist,
what problem each one solves, and what happens if you skip them.

---

## Quick Recap of Step 1

```bash
npm init playwright@latest
```

**What it does:**
- Creates your project folder structure (`tests/`, `playwright.config.ts`)
- Installs the `@playwright/test` package
- Downloads browser binaries (Chromium, Firefox, WebKit)

**What it does NOT do:**
- It does NOT make TypeScript understand Node.js built-in features
- It does NOT configure TypeScript with the strict rules a real project needs

That is exactly why Step 2 and Step 3 exist.

---

## Step 2 — `npm install --save-dev @types/node`

### The One-Line Answer
This package teaches TypeScript what Node.js is.

---

### The Problem It Solves

When you write a Playwright test, you will naturally use things like:

```ts
process.env.BASE_URL        // reading environment variables
__dirname                   // getting the current folder path
__filename                  // getting the current file path
Buffer.from("hello")        // working with binary data
```

These are **Node.js built-in features** — they exist in your runtime environment.

But TypeScript does not know that.

TypeScript only knows what you explicitly tell it about.
If you never tell it "Node.js exists and it has these features",
it will throw an error the moment you type `process.env` or `__dirname`.

**The exact error you will see without Step 2:**

```
Cannot find name 'process'
Cannot find name '__dirname'
Cannot find name 'Buffer'
```

---

### Why Does This Happen?

Think of it this way:

| Layer | What it is | Knows about Node.js? |
|-------|-----------|----------------------|
| **Node.js** | The runtime that actually runs your code | ✅ Yes — it IS Node.js |
| **TypeScript** | The type checker that reads your code | ❌ No — unless you tell it |
| **`@types/node`** | The bridge between the two | ✅ Yes — this is the bridge |

`@types/node` is a package full of **type declaration files** (`.d.ts` files).
These files do not contain any real code.
They only contain **descriptions** of what Node.js provides —
so TypeScript can understand and type-check your usage of Node.js features.

---

### What `@types/node` Actually Contains

It tells TypeScript things like:

```ts
// This is what @types/node tells TypeScript (simplified):

declare var process: {
  env: { [key: string]: string | undefined };  // process.env is an object of strings
  exit(code?: number): never;                  // process.exit() never returns
  argv: string[];                              // process.argv is an array of strings
};

declare var __dirname:  string;  // __dirname  is always a string
declare var __filename: string;  // __filename is always a string
```

None of this is real code. It is just TypeScript learning the shape of Node.js.

---

### Why `--save-dev`?

```bash
npm install --save-dev @types/node
```

- `--save-dev` means: install this as a **development dependency**
- Type declarations are only needed when writing and checking code
- They are NOT needed when the code actually runs in production
- So they belong in `devDependencies` inside your `package.json`, not `dependencies`

---

### What Happens If You Skip Step 2?

Your tests will still run — Node.js does not need `@types/node` to work.

But your **editor and TypeScript compiler will show red errors** on every
line that uses `process`, `__dirname`, `Buffer`, or any other Node.js built-in.

This means:
- No autocomplete for Node.js features
- Red underlines everywhere in VS Code
- TypeScript compilation will fail if you have `strict` mode on

---

## Step 3 — `tsconfig.json`

### The One-Line Answer
This file is the rulebook that tells TypeScript exactly how to behave in your project.

---

### The Problem It Solves

TypeScript has dozens of settings that control:
- How strict it checks your code
- Which version of JavaScript to compile to
- Which folders to include or ignore
- Whether to allow shortcuts like `@pom/LoginPage` instead of `../../page-objects/LoginPage`

Without a `tsconfig.json`, TypeScript uses its default settings —
which are **very loose and not suitable** for a serious Playwright project.

---

### The Full `tsconfig.json` and What Every Line Does

```json
{
  "compilerOptions": {
```
> `compilerOptions` is the key that holds ALL TypeScript settings.
> Everything inside this block is an instruction to the TypeScript compiler.

---

```json
    "target": "ESNext",
```
> **`target`** — tells TypeScript which version of JavaScript to compile your code into.
>
> `ESNext` means: compile to the **latest modern JavaScript**.
> Playwright runs on Node.js which supports all modern JS features,
> so there is no need to compile down to older versions.
>
> If you wrote `"target": "ES5"` instead, TypeScript would rewrite your
> `async/await` and arrow functions into old-style code — unnecessary overhead.

---

```json
    "module": "CommonJS",
```
> **`module`** — tells TypeScript which **module system** to use when compiling.
>
> Node.js uses CommonJS by default, which means:
> - `import x from 'y'`  compiles to  `const x = require('y')`
> - `export const x`     compiles to  `module.exports.x`
>
> Playwright and Node.js both expect CommonJS unless you explicitly configure
> your project for ESModules. Setting this wrong causes:
> ```
> SyntaxError: Cannot use import statement in a module
> ```

---

```json
    "moduleResolution": "node",
```
> **`moduleResolution`** — tells TypeScript **how to find files** when you import them.
>
> `"node"` means: follow the same lookup rules Node.js uses.
> When you write `import { LoginPage } from '@pom/LoginPage'`, TypeScript
> knows to look inside `node_modules` and your configured `paths`.
>
> Without this, TypeScript may fail to resolve your imports and show:
> ```
> Cannot find module '@pom/LoginPage'
> ```

---

```json
    "types": ["node"],
```
> **`types`** — tells TypeScript **which `@types/*` packages to include globally**.
>
> Even after installing `@types/node` in Step 2, TypeScript will only
> use it if you tell it to here.
>
> `"types": ["node"]` means: make Node.js types available everywhere
> in the project without needing to import them in every file.
>
> Without this line, you may still see `Cannot find name 'process'`
> even after Step 2.

---

```json
    "strict": true,
```
> **`strict`** — the master switch that turns ON a collection of strict checks all at once.
>
> It enables all of these in one line:
>
> | Sub-rule | What it prevents |
> |----------|-----------------|
> | `noImplicitAny` | Variables cannot silently become `any` type |
> | `strictNullChecks` | You must handle `null` and `undefined` explicitly |
> | `strictFunctionTypes` | Function parameters must match exactly |
> | `strictPropertyInitialization` | Class properties must be assigned in the constructor |
>
> Without `strict: true`, TypeScript lets many mistakes through silently —
> exactly the kind that cause flaky tests and runtime crashes.

---

```json
    "noImplicitAny": true,
```
> **`noImplicitAny`** — TypeScript will **error** if it cannot figure out a type
> and would have to fall back to `any`.
>
> Already included in `strict: true`, but written again here for clarity.
>
> **Without it:**
> ```ts
> function greet(name) {   // name is silently typed as any — no error
>   return name.toUpperCase();
> }
> ```
>
> **With it:**
> ```ts
> function greet(name) {   // ❌ Error: Parameter 'name' implicitly has an 'any' type
>   return name.toUpperCase();
> }
>
> function greet(name: string) {  // ✅ You must declare the type explicitly
>   return name.toUpperCase();
> }
> ```

---

```json
    "strictNullChecks": true,
```
> **`strictNullChecks`** — forces you to handle the case where a value might be
> `null` or `undefined` before using it.
>
> Already included in `strict: true`, but written again for clarity.
>
> **Without it:**
> ```ts
> const el = document.getElementById("submit");
> el.click();   // no error — but el could be null and crash at runtime
> ```
>
> **With it:**
> ```ts
> const el = document.getElementById("submit");
> el.click();   // ❌ Error: 'el' is possibly null
>
> if (el) {
>   el.click(); // ✅ TypeScript now knows el is not null inside this block
> }
> ```
>
> This rule prevents the most common runtime crash in JavaScript:
> `Cannot read properties of null (reading 'click')`

---

```json
    "baseUrl": ".",
```
> **`baseUrl`** — sets the **root folder** for resolving non-relative imports.
>
> `.` means the project root (wherever `tsconfig.json` lives).
>
> This is required for the `paths` aliases below to work.
> Without `baseUrl`, TypeScript ignores `paths` entirely.

---

```json
    "paths": {
      "@pom/*": ["page-objects/*"]
    }
```
> **`paths`** — defines **import aliases** (shortcuts) so you do not have to
> write long relative paths everywhere.
>
> `"@pom/*"` is the alias you will use in your test files.
> `["page-objects/*"]` is the real folder it maps to.
>
> **Without paths alias:**
> ```ts
> import { LoginPage } from '../../page-objects/LoginPage';
> import { HomePage }  from '../../../page-objects/HomePage';
> // every import is a different mess of ../../../
> ```
>
> **With paths alias:**
> ```ts
> import { LoginPage } from '@pom/LoginPage';
> import { HomePage }  from '@pom/HomePage';
> // clean, consistent, works from any file in the project
> ```
>
> **Important:** `paths` only affects TypeScript. At runtime, Node.js does not
> know about these aliases. You also need to configure `moduleNameMapper`
> inside `playwright.config.ts` or use a tool like `tsconfig-paths` so
> Node.js can resolve them too.

---

```json
  },
  "include": ["tests/**/*", "page-objects/**/*", "playwright.config.ts"]
```
> **`include`** — tells TypeScript **which files and folders to type-check**.
>
> | Pattern | What it includes |
> |---------|-----------------|
> | `tests/**/*` | Every file inside the `tests` folder and all sub-folders |
> | `page-objects/**/*` | Every file inside the `page-objects` folder and sub-folders |
> | `playwright.config.ts` | The Playwright config file at the root |
>
> `**` means any sub-folder depth.
> `*`  means any file name with any extension.
>
> Without `include`, TypeScript checks every `.ts` file in the entire project —
> including files inside `node_modules`, which causes thousands of false errors
> and slows down the compiler significantly.

---

## Summary — The Full Picture

```
Step 1: npm init playwright@latest
│
│   Installs Playwright and creates the project structure.
│   Does NOT know about Node.js built-ins.
│   Does NOT have strict TypeScript rules.
│
Step 2: npm install --save-dev @types/node
│
│   Teaches TypeScript what Node.js is.
│   Fixes: Cannot find name 'process'
│   Fixes: Cannot find name '__dirname'
│   Required for: reading env variables, file paths, Buffers
│
Step 3: tsconfig.json
│
│   Sets the rules TypeScript must follow in this project.
│   target        → compile to modern JS (ESNext)
│   module        → use CommonJS (Node.js style)
│   moduleResolution → find files the Node.js way
│   types         → activate @types/node globally
│   strict        → turn on all safety checks
│   noImplicitAny → no silent any types
│   strictNullChecks → no unchecked null access
│   baseUrl       → set project root for aliases
│   paths         → @pom/* shortcut for page-objects/*
│   include       → only check tests/ and page-objects/
```

---

*These three steps together give you a fully configured, strictly typed,
alias-friendly Playwright + TypeScript framework ready for real projects.*