// ══════════════════════════════════════════════════════════════
//  SECTION 9 — UNION TYPES
//  A variable that can hold ONE OF several types
//  Syntax: type1 | type2
// ══════════════════════════════════════════════════════════════

let testStatus : "pass" | "fail" | "skip";
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

let idOrName : number | string = 42;
// let       → is a variable keyword
// idOrName  → is the variable name
// :         → is the type annotation symbol
// number    → is the first allowed type
// |         → means OR
// string    → is the second allowed type
// 42        → is the number value assigned — number is allowed ✅

idOrName = "TC_001";
// idOrName  → is the same variable
// =         → is the assignment operator
// "TC_001"  → is a string value — string is also allowed ✅