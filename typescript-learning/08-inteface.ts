// ══════════════════════════════════════════════════════════════
//  SECTION 8 — INTERFACE
//  Describes the shape of an object (similar to type alias)
//  Keyword: interface
// ══════════════════════════════════════════════════════════════

interface TestCase {
// interface → is the keyword for defining an object shape
// TestCase  → is the name of the interface
// {}        → is the body containing all the key definitions

  id       : number;
  // id     → is the key name
  // :      → separates the key name from its type
  // number → is the required type — value must be a number
  // ;      → ends the key definition (like a full stop)

  name     : string;
  // name   → is the key name
  // string → is the required type — value must be text

  url      : string;
  // url    → is the key name
  // string → is the required type

  priority ?: string;
  // priority → is the key name
  // ?        → means this key is OPTIONAL — caller can skip it
  // :        → separates key from type
  // string   → if provided, value must be text
}

const tc1 : TestCase = { id: 1, name: "Login", url: "/login" };
// const    → is a constant keyword
// tc1      → is the constant name
// TestCase → is the type (object must match TestCase interface)
// id: 1    → key=id, value=1 (number ✅)
// name: "Login" → key=name, value="Login" (string ✅)
// url: "/login" → key=url, value="/login" (string ✅)
// priority is not here → that is fine because ? made it optional ✅