// ══════════════════════════════════════════════════════════════
//  SECTION 9 — UNION TYPES
//  A variable that can hold ONE OF several types
//  Syntax: type1 | type2
// ══════════════════════════════════════════════════════════════

let testStatus: "pass" | "fail" | "skip";
// let         → is a variable keyword
// testStatus  → is the variable name
// :           → is the type annotation symbol
// "pass"      → is the first allowed string value
// |           → means OR
// "fail"      → is the second allowed string value
// |           → means OR
// "skip"      → is the third allowed string value
// no value assigned yet — it will be assigned below

testStatus = "pass";
// testStatus → is the variable being assigned
// =          → is the assignment operator
// "pass"     → is the string value being assigned ✅ (it is in the union)

let idOrName: number | string = 42;
// let       → is a variable keyword
// idOrName  → is the variable name
// :         → is the type annotation symbol
// number    → is the first allowed type
// |         → means OR
// string    → is the second allowed type
// =         → is the assignment operator
// 42        → is the number value assigned — number is allowed ✅

idOrName = "TC_001";
// idOrName  → is the same variable
// =         → is the assignment operator
// "TC_001"  → is a string value — string is also allowed ✅

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 2 — UNION WITH NULL
//  Used heavily in web automation when an element might not exist
// ══════════════════════════════════════════════════════════════

let pageTitle: string | null = null;
// let         → is a variable keyword
// pageTitle   → is the variable name
// :           → is the type annotation symbol
// string      → is the first allowed type (if we find the title)
// |           → means OR
// null        → is the second allowed type (if the title doesn't exist)
// =           → is the assignment operator
// null        → initially, we assign null because the page hasn't loaded yet ✅

pageTitle = "Dashboard";
// pageTitle   → is the same variable
// =           → is the assignment operator
// "Dashboard" → later, we find the title and update the variable to a string ✅

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 3 — UNIONS INSIDE ARRAYS
//  When a single list needs to hold multiple types of data
// ══════════════════════════════════════════════════════════════

const mixedTestData: (string | number)[] = ["Test A", 123, "Test B", 456];
// const             → is a constant keyword
// mixedTestData     → is the constant name
// :                 → is the type annotation symbol
// (string | number) → parentheses group the union ("either string OR number")
// []                → means an array of the grouped types
// =                 → is the assignment operator
// [...]             → the array containing both text and numbers ✅