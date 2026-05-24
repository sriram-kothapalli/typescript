// ══════════════════════════════════════════════════════════════
//  SECTION 4 — ARRAYS
//  A list of multiple values of the SAME type
// ══════════════════════════════════════════════════════════════

const browsers: string[] = ["chromium", "firefox", "webkit"];
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

const waitTimes: number[] = [5000, 10000, 30000];
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

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 2 — COUNTING ITEMS IN AN ARRAY
//  Used to verify things like: "Are there 3 items in the cart?"
// ══════════════════════════════════════════════════════════════

const totalBrowsers: number = browsers.length;
// const         → is a constant keyword
// totalBrowsers → is the constant name
// :             → is the type annotation symbol
// number        → is the type
// =             → is the assignment operator
// browsers      → is the array variable we made above
// .length       → is a built-in property that counts exactly how many items are in the list
// result        → totalBrowsers = 3 (Because counting length starts at 1, even though index starts at 0!)

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 3 — ADDING TO AN ARRAY
//  You can add items to an array even if it is a 'const'
// ══════════════════════════════════════════════════════════════

browsers.push("edge");
// browsers → is the array variable
// .push()  → is a built-in command that adds a new item to the END of the list
// "edge"   → is the new string being added
// note     → Even though 'browsers' is a 'const', you CAN change what's inside the list! 
//            'const' just means you can't replace the whole list with a brand new list.
// result   → browsers is now ["chromium", "firefox", "webkit", "edge"]

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 4 — THE ALTERNATIVE SYNTAX
//  Another way you might see arrays written online
// ══════════════════════════════════════════════════════════════

const testUsers: Array<string> = ["alice", "bob"];
// const     → is a constant keyword
// testUsers → is the constant name
// :         → is the type annotation symbol
// Array     → is the alternative keyword for array
// <string>  → is the generic type (means "an Array holding strings")
// note      → Array<string> does the EXACT same thing as string[]. It is just a different way to write it!