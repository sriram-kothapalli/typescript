// ══════════════════════════════════════════════════════════════
//  SECTION 2 — EXPLICIT TYPES
//  You tell TypeScript exactly what type each variable is
// ══════════════════════════════════════════════════════════════

let siteName: string = "Google";
// let         → is a variable keyword
// siteName    → is the variable name
// :           → is the type annotation symbol (means "this variable holds this type")
// string      → is the type (only text is allowed)
// =           → is the assignment operator (means "give this value to the variable")
// "Google"    → is the string value assigned to the variable siteName

let timeout: number = 30000;
// let      → is a variable keyword
// timeout  → is the variable name
// :        → is the type annotation symbol
// number   → is the type (only numbers allowed)
// 30000    → is the number value assigned to the variable timeout

let headless: boolean = false;
// let       → is a variable keyword
// headless  → is the variable name
// :         → is the type annotation symbol
// boolean   → is the type (only true or false allowed)
// false     → is the boolean value assigned to the variable headless

let nothing: null = null;
// let      → is a variable keyword
// nothing  → is the variable name
// :        → is the type annotation symbol
// null     → is the type AND the value (means intentionally empty)

let empty: undefined = undefined;
// let       → is a variable keyword
// empty     → is the variable name
// :         → is the type annotation symbol
// undefined → is the type AND the value (means declared but never given a value)

let anything: any = "skip type checking";
// let       → is a variable keyword
// anything  → is the variable name
// :         → is the type annotation symbol
// any       → is the type (no type checking at all — AVOID this)
// "skip type checking" → is the string value assigned to the variable anything

let safeData: unknown = "I don't know the type yet";
// let         → is a variable keyword
// safeData    → is the variable name
// :           → is the type annotation symbol
// unknown     → is the type (The safe alternative to 'any'. It means "I don't know the type yet, but force me to check it before I use it!")
// =           → is the assignment operator
// "I don't know..." → is the string value assigned right now