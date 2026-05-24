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

const myStatus: Status = Status.Pass;
// const    → is a constant keyword
// myStatus → is the constant name
// :        → is the type annotation symbol
// Status   → is the type (must be a member of the Status enum)
// =        → is the assignment operator
// Status.Pass → is the value (you use the enum name DOT member name)
// result   → myStatus holds the string "PASS" behind the scenes

console.log(myStatus);
// prints → "PASS"

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 2 — NUMERIC ENUMS
//  Storing numbers instead of strings (perfect for timeouts!)
// ══════════════════════════════════════════════════════════════

enum Timeout {
  Short = 5000,
  // Short  → member name (use Timeout.Short in your code)
  // 5000   → the number value stored in milliseconds

  Medium = 15000,
  // Medium → member name
  // 15000  → the number value stored

  Long = 30000
  // Long   → member name
  // 30000  → the number value stored
}

const waitTime: Timeout = Timeout.Short;
// waitTime → is the variable
// Timeout.Short → assigns the enum member
// result   → waitTime holds the number 5000 behind the scenes

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 3 — DEFAULT NUMERIC ENUMS (AUTO-INCREMENT)
//  If you don't assign a value, TypeScript automatically counts from 0!
// ══════════════════════════════════════════════════════════════

enum Environment {
  Dev,
  QA,
  Prod
}
// Environment.Dev  → automatically equals the number 0
// Environment.QA   → automatically equals the number 1
// Environment.Prod → automatically equals the number 2

// note → While this is a cool trick, we usually prefer String Enums in test automation. 
//        Seeing "QA" in an error report is much better than seeing the number 1!