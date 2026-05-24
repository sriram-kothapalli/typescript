// ══════════════════════════════════════════════════════════════
//  SECTION 5 — TUPLES
//  Fixed-length array where each position has its OWN type
// ══════════════════════════════════════════════════════════════

const credential: [string, string] = ["admin@test.com", "Pass@123"];
// const          → is a constant keyword
// credential     → is the constant name
// :              → is the type annotation symbol
// [string,string]→ is the tuple type (position 0 = string, position 1 = string)
// =              → is the assignment operator
// "admin@test.com"→ is the string value at position 0
// "Pass@123"     → is the string value at position 1

const viewport: [number, number] = [1280, 720];
// const          → is a constant keyword
// viewport       → is the constant name
// :              → is the type annotation symbol
// [number,number]→ is the tuple type (position 0 = number, position 1 = number)
// =              → is the assignment operator
// 1280           → is the number value at position 0 (width)
// 720            → is the number value at position 1 (height)

const [emailVal, passwordVal] = credential;
// const        → is a constant keyword
// []           → destructuring syntax — extracts each position into its own variable
// emailVal     → is a new variable that gets the value at position 0 ("admin@test.com")
// passwordVal  → is a new variable that gets the value at position 1 ("Pass@123")
// =            → assignment operator grabs the values from the tuple
// credential   → is the tuple being destructured

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 2 — MIXED TYPES
//  The true power of tuples: enforcing different types in exact order
// ══════════════════════════════════════════════════════════════

const apiResponse: [number, string, boolean] = [200, "Success", true];
// const             → is a constant keyword
// apiResponse       → is the constant name
// :                 → is the type annotation symbol
// [number, string, boolean] → is the tuple type (Position MATTERS here!)
// =                 → is the assignment operator
// 200               → MUST be a number (Position 0)
// "Success"         → MUST be a string (Position 1)
// true              → MUST be a boolean (Position 2)
// note              → If you swapped 200 and "Success", TypeScript would throw a red error!

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 3 — THE STRICT LENGTH RULE
//  Why we use tuples instead of regular arrays
// ══════════════════════════════════════════════════════════════

const exactSize: [number, number] = [10, 20];
// exactSize        → is a tuple that only allows EXACTLY two numbers.
// exactSize[0] = 50;  → This works perfectly (changes the first number to 50).
// exactSize = [10, 20, 30]; → RED ERROR! 
// error reason     → A tuple locks the length. You told TypeScript it only holds 2 items, so 3 is illegal!