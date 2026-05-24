// ══════════════════════════════════════════════════════════════
//  SECTION 17 — PLAYWRIGHT PAGE OBJECT MODEL (POM)
//  One class per page. All selectors and actions in one place.
//
//  In a real Playwright project, add this at the top of the file:
//  import { Page, Locator, expect } from "@playwright/test";
//  Then delete the two stub type lines below.
// ══════════════════════════════════════════════════════════════

// Stub types — ONLY here so this file compiles without Playwright installed
type Locator = { fill: (v: string) => Promise<void>; click: () => Promise<void>; isVisible: () => Promise<boolean>; textContent: () => Promise<string | null> };
type Page = { locator: (s: string) => Locator; goto: (u: string) => Promise<void>; check: (s: string) => Promise<void> };

interface LoginFormData {
  // LoginFormData → is the interface name for what the login form needs

  email: string;
  // email    → is the key name
  // :        → separates key from type
  // string   → is the type (must be text)

  password: string;
  // password → is the key name
  // string   → is the type

  rememberMe?: boolean;
  // rememberMe → is the key name
  // ?          → makes it optional — caller can skip this key
  // boolean    → if provided, must be true or false
}

interface LoginOutcome {
  // LoginOutcome → is the interface name for what login gives back

  success: boolean;
  // success   → is the key name
  // boolean   → is the type (true = logged in | false = error shown)

  errorMessage?: string;
  // errorMessage → is the key name
  // ?            → optional — only present when success is false
  // string       → is the type if present
}

export class LoginPagePOM {
  // export       → KEYWORD ADDED! This makes the class available to other files!
  // class        → is the keyword
  // LoginPagePOM → is the class name (POM = Page Object Model)

  private readonly emailInput: Locator;
  // private    → only this class can use this property
  // readonly   → KEYWORD ADDED! Locks the locator so it can never be accidentally changed!
  // emailInput → is the property name
  // :Locator   → Locator is Playwright's type for a page element

  private readonly passwordInput: Locator;
  // passwordInput → is the property name | Locator is the type

  private readonly submitBtn: Locator;
  // submitBtn → is the property name | Locator is the type

  private readonly errorMsg: Locator;
  // errorMsg → is the property name | Locator is the type

  constructor(private page: Page) {
    // constructor  → runs when you do: new LoginPagePOM(page)
    // private page → shorthand — creates a private property called page on the class
    // :Page        → Playwright's Page type (represents the browser tab)

    this.emailInput = page.locator("#email");
    // page.locator  → is a Playwright method that finds an element by a CSS selector
    // "#email"      → is the CSS selector (# means ID, so it finds element with id="email")
    // this.emailInput → stores the found Locator on the class property

    this.passwordInput = page.locator("#password");
    // "#password"   → finds the element with id="password"

    this.submitBtn = page.locator('button[type="submit"]');
    // 'button[type="submit"]' → CSS selector for a button element with type="submit"

    this.errorMsg = page.locator(".error-message");
    // ".error-message" → CSS selector (. means class, finds element with class="error-message")
  }

  async goto(): Promise<void> {
    // async  → marks this as an async method
    // goto   → is the method name
    // :Promise<void> → async method that returns nothing

    await this.page.goto("https://example.com/login");
    // await      → pause here until navigation completes
    // this.page  → is the Playwright Page object (the browser tab)
    // .goto      → is the Playwright method to navigate to a URL
    // "https://example.com/login" → is the URL being navigated to
  }

  async loginUser(data: LoginFormData): Promise<void> {
    // loginUser → is the method name
    // data      → is the parameter name
    // :LoginFormData → parameter must match the LoginFormData interface

    await this.emailInput.fill(data.email);
    // await              → wait until fill completes
    // this.emailInput    → is the email Locator (element on the page)
    // .fill              → is the Playwright method to type text into an input
    // data.email         → is the value being typed (from the LoginFormData object)

    await this.passwordInput.fill(data.password);
    // this.passwordInput → is the password Locator
    // .fill              → types into the password input
    // data.password      → is the value being typed

    if (data.rememberMe) {
      // data.rememberMe  → checks if the optional key was provided and is true
      await this.page.check("#rememberMe");
      // .check           → is the Playwright method to tick a checkbox
      // "#rememberMe"    → CSS selector for the checkbox element
    }

    await this.submitBtn.click();
    // this.submitBtn → is the submit button Locator
    // .click         → is the Playwright method to click the element
  }

  async getOutcome(): Promise<LoginOutcome> {
    // getOutcome     → is the method name
    // :Promise<LoginOutcome> → async method that returns a LoginOutcome object

    const hasError = await this.errorMsg.isVisible();
    // hasError        → is the constant that holds true or false
    // this.errorMsg   → is the error message Locator
    // .isVisible()    → Playwright method — returns true if element is visible on page

    if (hasError) {
      // if block runs only when hasError is true (error IS visible on page)

      const text = await this.errorMsg.textContent();
      // text          → holds the text shown inside the error element
      // .textContent()→ Playwright method — gets the visible text of the element

      return { success: false, errorMessage: text ?? "Unknown error" };
      // return        → sends the LoginOutcome object back to the caller
      // success: false→ key=success, value=false (login failed)
      // errorMessage  → key=errorMessage
      // text ?? "Unknown error" → if text is null, use "Unknown error" instead
      //   ??          → is the nullish coalescing operator (use right side if left is null)
    }

    return { success: true };
    // return         → sends LoginOutcome back
    // success: true  → key=success, value=true (login worked, no error shown)
  }
}

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 2 — THE TEST FILE (MODULE IMPORTS)
//  This code would live in a separate file (e.g., login.spec.ts)
// ══════════════════════════════════════════════════════════════

/* 
import { test, expect } from "@playwright/test";
// import  → is the keyword to bring in external code
// { ... } → exact names of the tools we want to bring in
// from    → where the tools are located
// "@playwright/test" → the official Playwright library

import { LoginPagePOM } from "./LoginPagePOM";
// { LoginPagePOM } → brings in the class we EXPORTED in the file above!
// "./LoginPagePOM" → the file path to our POM file

test("Should show error on invalid login", async ({ page }) => {
// test      → Playwright's test runner block
// "Should..." → the name of the test
// async     → marks the test as asynchronous
// ({ page })→ destructures the browser page object provided by Playwright

  const loginPage = new LoginPagePOM(page);
  // const     → constant keyword
  // loginPage → variable holding the new instance
  // new       → creates the instance
  // LoginPagePOM(page) → passes the browser to the constructor we built!

  await loginPage.goto();
  // await     → waits for navigation to finish
  // .goto()   → calls our custom POM method

  await loginPage.loginUser({ email: "bad@email.com", password: "123" });
  // .loginUser(...) → calls our form-filling method
  // { email: ... }  → passes the object matching our LoginFormData interface!

  const outcome = await loginPage.getOutcome();
  // outcome   → stores the returned LoginOutcome object
  
  expect(outcome.success).toBe(false);
  // expect    → Playwright's assertion library
  // outcome.success → the boolean we returned
  // .toBe(false)    → validates that the login correctly failed!
});
*/