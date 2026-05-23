// ══════════════════════════════════════════════════════════════
//  SECTION 10 — ENUMS
//  A set of named constants — use readable labels instead of raw strings
//  Keyword: enum
// ══════════════════════════════════════════════════════════════

enum Status {
// enum   → is the keyword for defining an enum
// Status → is the name of the enum
// {}     → is the body containing all the members

  Pass = "PASS",
  // Pass    → is the member name (the label you use in code)
  // =       → assigns the actual stored value
  // "PASS"  → is the string value stored when you use Status.Pass

  Fail = "FAIL",
  // Fail    → is the member name
  // "FAIL"  → is the string value stored when you use Status.Fail

  Skip = "SKIP",
  // Skip    → is the member name
  // "SKIP"  → is the string value stored when you use Status.Skip
}

const myStatus : Status = Status.Pass;
// const    → is a constant keyword
// myStatus → is the constant name
// :        → is the type annotation symbol
// Status   → is the type (must be a member of the Status enum)
// Status.Pass → is the value (you use the enum name DOT member name)
// result   → myStatus holds the string "PASS" behind the scenes

console.log(myStatus);
// prints → "PASS"