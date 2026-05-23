// ══════════════════════════════════════════════════════════════
//  SECTION 18 — HOW A REAL TEST FILE LOOKS
//  (copy this pattern into your actual .spec.ts files)
//
//  Uncomment everything below when inside a Playwright project
// ══════════════════════════════════════════════════════════════

// import { test, expect } from "@playwright/test";
// → import  → is the keyword to bring in code from another file
// → test    → is Playwright's function for defining a test
// → expect  → is Playwright's function for writing assertions
// → "@playwright/test" → is the Playwright package name

// const validUser : LoginFormData = {
// → validUser     → is the constant name holding test data
// → LoginFormData → is the type (object must match this interface)
//   email      : "user@example.com",  → key=email    | value=string
//   password   : "ValidPass@123",     → key=password | value=string
//   rememberMe : true,                → key=rememberMe | value=boolean
// };

// test("login with valid creds", async ({ page }) => {
// → test        → is Playwright's test function
// → first arg   → is the test name (string describing what is being tested)
// → second arg  → is the async function that runs the test
// → { page }    → Playwright automatically injects the page object here

//   const loginPOM = new LoginPagePOM(page);
//   → creates an instance of LoginPagePOM, passing the injected page in

//   await loginPOM.goto();
//   → await  → wait for navigation to complete
//   → goto() → is the method on LoginPagePOM that navigates to the login page

//   await loginPOM.loginUser(validUser);
//   → loginUser(validUser) → fills and submits the form using validUser data

//   const result : LoginOutcome = await loginPOM.getOutcome();
//   → result        → holds the LoginOutcome returned by getOutcome()
//   → :LoginOutcome → type annotation on the result constant
//   → result.success        → is boolean (true or false)
//   → result.errorMessage   → is string | undefined (optional key)
// });
