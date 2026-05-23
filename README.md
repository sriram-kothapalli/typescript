# typescript# TypeScript — Basics to Advanced
### A Spoon-Fed Guide for Absolute Beginners (Playwright-Ready)

---

## What Is This File?

`typescript-basics-to-advanced.ts` is a single TypeScript file that teaches you **everything** you need to know about TypeScript — from your very first variable all the way to writing a real Playwright Page Object Model.

Every single line of code has a comment below it explaining:
- **what the keyword is**
- **what the name is**
- **what the value is**
- **what the type is**
- **how they are all connected**

**Example of how comments are written inside the file:**

```ts
let siteName : string = "Google";
// let         → is a variable keyword
// siteName    → is the variable name
// :           → is the type annotation symbol
// string      → is the type (only text is allowed)
// =           → is the assignment operator
// "Google"    → is the string value assigned to the variable siteName
```

---

## How to Open the File

1. Download `typescript-basics-to-advanced.ts`
2. Open it in **VS Code**
3. Read from **top to bottom** — every section builds on the previous one

> **Tip:** Paste any section into [typescriptlang.org/play](https://www.typescriptlang.org/play) to run it instantly in your browser with zero setup.

---

## What Is Covered — Section by Section

| # | Section | What You Learn |
|---|---------|----------------|
| 1 | **Variables** | `let`, `const`, and why we never use `var` |
| 2 | **All Basic Types** | `string`, `number`, `boolean`, `null`, `undefined`, `any`, `void`, `never` |
| 3 | **Type Inference** | How TypeScript guesses the type from the value |
| 4 | **Template Literals** | Joining variables and text using backticks `` ` `` |
| 5 | **Arrays** | Lists of same-type values, index access, `.push`, `.pop`, `.length` |
| 6 | **Tuples** | Fixed-length arrays where each position has its own type |
| 7 | **Objects** | Key-value pairs, dot notation to access values |
| 8 | **Type Alias** | Naming and reusing your own types with `type` keyword |
| 9 | **Interface** | Describing object shapes, optional fields with `?` |
| 10 | **Union Types** | A variable that can be one of several types (`\|`) |
| 11 | **Enums** | Named constants instead of raw strings or numbers |
| 12 | **Functions** | Parameters, return types, `void`, arrow functions, optional params, default params, rest params |
| 13 | **Generics** | Write once, works for any type using `<T>` placeholder |
| 14 | **Classes** | `private`, `public`, `protected`, `readonly`, `constructor`, methods |
| 15 | **Inheritance** | `extends`, `super()`, sharing methods from parent to child |
| 16 | **Async / Await** | `Promise<T>`, `await`, `try/catch/finally`, `Promise.all` |
| 17 | **Utility Types** | `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record` |
| 18 | **Page Object Model** | Full Playwright POM class using all the types together |

---

## Key Concepts Explained Simply

### What is a Variable?
A box with a name that stores a value.
```ts
let city = "Hyderabad";
// let   → variable keyword
// city  → variable name
// "Hyderabad" → string value stored in the box
```

### What is a Type?
A rule that says what kind of value is allowed.
```ts
let age : number = 25;
// number → only numbers allowed here, no text, no true/false
```

### What is a Key and Value in an Object?
```ts
const user = {
  name : "Ravi",   // name  is the KEY  |  "Ravi" is the VALUE
  age  : 25,       // age   is the KEY  |  25     is the VALUE
};
```

### What is async / await?
Every Playwright action takes time (clicking, typing, navigating). `async` marks the function and `await` pauses until the action is done.
```ts
async function openPage(): Promise<void> {
  await page.goto("https://example.com");  // wait here until page loads
  await page.click("#submit");             // then wait here until click is done
}
```

---

## The Most Important Pattern — Page Object Model

The file ends with a full Playwright Page Object Model (POM). This is the pattern you will use in every real Playwright project.

```
One class  →  One page of your application
Properties →  Locators (element selectors)
Methods    →  Actions (goto, fill, click, assert)
```

```ts
class LoginPagePOM {
  private emailInput : Locator;     // the email field on the page
  private submitBtn  : Locator;     // the submit button on the page

  constructor(private page: Page) {
    this.emailInput = page.locator("#email");
    this.submitBtn  = page.locator('button[type="submit"]');
  }

  async loginUser(data: LoginFormData): Promise<void> {
    await this.emailInput.fill(data.email);  // type into email field
    await this.submitBtn.click();             // click submit
  }
}
```

---

## To Use in a Real Playwright Project

**Step 1 — Create a Playwright project**
```bash
npm init playwright@latest
```

**Step 2 — Replace the stub types at the top of Section 17 with the real import**
```ts
// Remove these two stub lines:
type Locator = { ... };
type Page    = { ... };

// Add this real import instead:
import { Page, Locator, expect } from "@playwright/test";
```

**Step 3 — Uncomment the test blocks in Section 18 and run**
```bash
npx playwright test
```

---

## Symbols Cheatsheet

| Symbol | Name | Meaning |
|--------|------|---------|
| `:` | Type annotation | This variable holds this type |
| `=` | Assignment | Give this value to the variable |
| `?` | Optional | This key or parameter can be skipped |
| `\|` | Union / OR | Value can be one of these types |
| `&` | Intersection | Must satisfy ALL combined types |
| `<T>` | Generic | Placeholder for any type |
| `...` | Rest | Collect all extra args into an array |
| `=>` | Arrow | This function returns what follows |
| `??` | Nullish coalescing | Use right side if left is null |
| `${}` | Interpolation | Inject a variable inside a template literal |
| `[]` | Index access | Get item at this position in an array |
| `async` | Async keyword | This function does something that takes time |
| `await` | Await keyword | Pause here until the async thing finishes |

---

## All Types at a Glance

| Type | Allowed Values | Example |
|------|---------------|---------|
| `string` | Any text | `"hello"`, `"Ravi"` |
| `number` | Any number | `42`, `3.14`, `30000` |
| `boolean` | Only true or false | `true`, `false` |
| `null` | Only null | `null` |
| `undefined` | Only undefined | `undefined` |
| `void` | Nothing (function returns nothing) | return type only |
| `never` | Nothing (function never returns) | return type only |
| `any` | Anything — avoid | `"abc"`, `42`, `true` |
| `unknown` | Anything — check before using | safer than `any` |
| `string[]` | Array of strings | `["a", "b"]` |
| `number[]` | Array of numbers | `[1, 2, 3]` |
| `[string, number]` | Tuple | `["TC_01", 1]` |
| `"a" \| "b"` | Union — one of these strings | `"pass" \| "fail"` |

---

*Written for absolute beginners stepping into TypeScript and Playwright for the first time.*