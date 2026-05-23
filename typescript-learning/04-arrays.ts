// ══════════════════════════════════════════════════════════════
//  SECTION 4 — ARRAYS
//  A list of multiple values of the SAME type
// ══════════════════════════════════════════════════════════════

const browsers : string[] = ["chromium", "firefox", "webkit"];
// const       → is a constant keyword
// browsers    → is the constant name
// :           → is the type annotation symbol
// string[]    → is the type (an array where every item must be a string)
// []          → the square bracket means "this is an array"
// =           → is the assignment operator
// [...]       → is the array value (list of items inside square brackets)
// "chromium"  → is a string item at index 0 (first position)
// "firefox"   → is a string item at index 1 (second position)
// "webkit"    → is a string item at index 2 (third position)

const waitTimes : number[] = [5000, 10000, 30000];
// const       → is a constant keyword
// waitTimes   → is the constant name
// :           → is the type annotation symbol
// number[]    → is the type (array where every item must be a number)
// 5000        → is a number item at index 0
// 10000       → is a number item at index 1
// 30000       → is a number item at index 2

console.log(browsers[0]);
// console.log → is a built-in function that prints to the terminal
// browsers    → is the array variable
// [0]         → is the index accessor — 0 means first item
// result      → prints "chromium"

console.log(browsers[2]);
// browsers → is the array variable
// [2]      → index 2 means third item
// result   → prints "webkit"