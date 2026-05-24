// ══════════════════════════════════════════════════════════════
//  SECTION 14 — INHERITANCE
//  A child class gets all the methods from the parent class
//  Keyword: extends | super
// ══════════════════════════════════════════════════════════════

class BasePage {
  // class    → is the keyword
  // BasePage → is the parent class name (shared by all page classes)

  protected pageUrl: string;
  // protected → access modifier (this class AND child classes can use it)
  // pageUrl   → is the property name
  // :string   → is the type

  constructor(url: string) {
    // constructor → runs when a new BasePage (or child) is created
    // url         → is the parameter

    this.pageUrl = url;
    // this.pageUrl → is the property on this object
    // url          → is the value from the constructor parameter
  }

  navigate(): void {
    // navigate → is the method name (shared by ALL pages that extend BasePage)
    // :void    → returns nothing

    console.log(`Navigating to ${this.pageUrl}`);
  }
}

class LoginPage extends BasePage {
  // class     → is the keyword
  // LoginPage → is the child class name
  // extends   → is the keyword that says LoginPage inherits from BasePage
  // BasePage  → is the parent class being inherited

  private formSelector: string = "#loginForm";
  // private       → only LoginPage can use this
  // formSelector  → is the property name
  // "#loginForm"  → is the string value (a CSS selector)

  constructor() {
    super("https://example.com");
    // super()   → is required — calls the parent (BasePage) constructor first
    // "https://example.com" → is the url value passed up to BasePage
  }

  fillLoginForm(email: string, pass: string): void {
    // fillLoginForm → is the method name (only exists on LoginPage)
    // email         → is the first parameter name
    // :string       → is the type of email
    // pass          → is the second parameter name
    // :string       → is the type of pass
    // :void         → returns nothing

    console.log(`Filling ${email} into ${this.formSelector}`);
    // this.formSelector → is the private property "#loginForm"
    // email             → is the value passed in as the parameter
  }
}

const loginPg = new LoginPage();
// loginPg  → is the constant holding the LoginPage object
// new      → creates a new instance
// LoginPage() → calls the constructor (which calls super internally)

loginPg.navigate();
// navigate → is inherited from BasePage — LoginPage did not define it itself
// ✅ works because LoginPage extends BasePage

loginPg.fillLoginForm("a@b.com", "pass123");
// fillLoginForm → is LoginPage's own method
// "a@b.com"     → is passed as the email parameter
// "pass123"     → is passed as the pass parameter

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 2 — METHOD OVERRIDING
//  A child class can replace or modify a parent's method
// ══════════════════════════════════════════════════════════════

class SecurePage extends BasePage {
  constructor() {
    super("https://example.com/secure");
  }

  override navigate(): void {
    // override  → keyword telling TypeScript "I am intentionally replacing the parent's method"
    // navigate  → method name (exactly matches the parent's method name)

    super.navigate();
    // super.navigate() → calls the parent's version of the method FIRST

    console.log("Checking security tokens after navigation...");
    // console.log      → adds NEW behavior specific only to SecurePage
  }
}

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 3 — INHERITANCE IN PLAYWRIGHT
//  Passing the Playwright 'page' object from child to parent
// ══════════════════════════════════════════════════════════════

export class BasePlaywrightPage {
  // export              → allows this class to be shared across files
  // BasePlaywrightPage  → the parent class for your framework

  protected page: any;
  // protected → critical! Allows all child pages to use the Playwright page object
  // page      → property name (will hold the Playwright browser page)

  constructor(page: any) {
    this.page = page;
    // this.page → stores the browser session so every method can use it
  }
}

export class HomePage extends BasePlaywrightPage {
  // HomePage  → the child class for the Home screen
  // extends   → inherits from BasePlaywrightPage

  private header: any;

  constructor(page: any) {
    // page: any → the test file gives the browser page to the HomePage constructor

    super(page);
    // super(page) → passes the browser page UP to BasePlaywrightPage!
    // note        → super() MUST be the very first line inside the child constructor.

    this.header = page.locator('.header');
    // page.locator → we can now find elements normally!
  }
}