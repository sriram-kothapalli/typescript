// ══════════════════════════════════════════════════════════════
//  SECTION 5 — TUPLES
//  Fixed-length array where each position has its OWN type
// ══════════════════════════════════════════════════════════════

const credential : [string, string] = ["admin@test.com", "Pass@123"];
// const          → is a constant keyword
// credential     → is the constant name
// :              → is the type annotation symbol
// [string,string]→ is the tuple type (position 0 = string, position 1 = string)
// "admin@test.com"→ is the string value at position 0
// "Pass@123"     → is the string value at position 1

const viewport : [number, number] = [1280, 720];
// const        → is a constant keyword
// viewport     → is the constant name
// [number,number]→ is the tuple type (position 0 = number, position 1 = number)
// 1280         → is the number value at position 0 (width)
// 720          → is the number value at position 1 (height)

const [emailVal, passwordVal] = credential;
// const        → is a constant keyword
// []           → destructuring syntax — extracts each position into its own variable
// emailVal     → is a new variable that gets the value at position 0 ("admin@test.com")
// passwordVal  → is a new variable that gets the value at position 1 ("Pass@123")
// credential   → is the tuple being destructured