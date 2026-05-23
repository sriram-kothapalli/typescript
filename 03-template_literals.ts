// ══════════════════════════════════════════════════════════════
//  SECTION 3 — TEMPLATE LITERALS
//  Combine variables and text into one string using backtick ``
// ══════════════════════════════════════════════════════════════

const domain : string = "https://example.com";
// const    → is a constant keyword
// domain   → is the constant name
// :        → is the type annotation symbol
// string   → is the type
// "https://example.com" → is the string value assigned to the constant domain

const path : string = "/login";
// const  → is a constant keyword
// path   → is the constant name
// :      → is the type annotation symbol
// string → is the type
// "/login" → is the string value assigned to the constant path

const fullURL : string = `${domain}${path}`;
// const    → is a constant keyword
// fullURL  → is the constant name
// :        → is the type annotation symbol
// string   → is the type
// ``       → backtick starts and ends a template literal
// ${}      → is the interpolation syntax — injects a variable inside the string
// domain   → is the variable being injected (its value is "https://example.com")
// path     → is the variable being injected (its value is "/login")
// result   → fullURL = "https://example.com/login"
