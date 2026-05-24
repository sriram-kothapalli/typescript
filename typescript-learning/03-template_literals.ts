// ══════════════════════════════════════════════════════════════
//  SECTION 3 — TEMPLATE LITERALS
//  Combine variables and text into one string using backtick ``
// ══════════════════════════════════════════════════════════════

const domain: string = "https://example.com";
// const    → is a constant keyword
// domain   → is the constant name
// :        → is the type annotation symbol
// string   → is the type
// =        → is the assignment operator
// "https://example.com" → is the string value assigned to the constant domain

const path: string = "/login";
// const    → is a constant keyword
// path     → is the constant name
// :        → is the type annotation symbol
// string   → is the type
// =        → is the assignment operator
// "/login" → is the string value assigned to the constant path

const fullURL: string = `${domain}${path}`;
// const    → is a constant keyword
// fullURL  → is the constant name
// :        → is the type annotation symbol
// string   → is the type
// =        → is the assignment operator
// ``       → backtick starts and ends a template literal
// ${}      → is the interpolation syntax — injects a variable inside the string
// domain   → is the variable being injected (its value is "https://example.com")
// path     → is the variable being injected (its value is "/login")
// result   → fullURL = "https://example.com/login"

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 2 — MIXING TEXT AND VARIABLES
//  Used constantly to generate unique test data (like emails)
// ══════════════════════════════════════════════════════════════

const testId: number = 12345;
// const    → is a constant keyword
// testId   → is the constant name
// :        → is the type annotation symbol
// number   → is the type
// =        → is the assignment operator
// 12345    → is the number value assigned

const uniqueEmail: string = `testuser_${testId}@gmail.com`;
// const        → is a constant keyword
// uniqueEmail  → is the constant name
// :            → is the type annotation symbol
// string       → is the type
// =            → is the assignment operator
// ``           → backticks wrap the entire string
// testuser_    → is just regular text written directly inside the string
// ${testId}    → injects the number 12345 right in the middle of the text
// @gmail.com   → is more regular text at the end
// result       → uniqueEmail = "testuser_12345@gmail.com"

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 3 — MULTI-LINE STRINGS
//  Backticks allow you to press 'Enter' without breaking the code
// ══════════════════════════════════════════════════════════════

const errorMessage: string = `
  Error found on login page!
  Please check your username and try again.
`;
// const        → is a constant keyword
// errorMessage → is the constant name
// :            → is the type annotation symbol
// string       → is the type
// =            → is the assignment operator
// ``           → backticks allow the string to safely drop down to the next line
// note         → If you tried this with normal quotes (""), TypeScript would throw a red error