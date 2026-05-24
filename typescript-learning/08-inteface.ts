// ══════════════════════════════════════════════════════════════
//  SECTION 8 — INTERFACE
//  Describes the shape of an object (similar to type alias)
//  Keyword: interface
// ══════════════════════════════════════════════════════════════

interface TestCase {
  // interface → is the keyword for defining an object shape
  // TestCase  → is the name of the interface
  // {}        → is the body containing all the key definitions

  id: number;
  // id     → is the key name
  // :      → separates the key name from its type
  // number → is the required type — value must be a number
  // ;      → ends the key definition (like a full stop)

  name: string;
  // name   → is the key name
  // string → is the required type — value must be text

  url: string;
  // url    → is the key name
  // string → is the required type

  priority?: string;
  // priority → is the key name
  // ?        → means this key is OPTIONAL — caller can skip it
  // :        → separates key from type
  // string   → if provided, value must be text
}

const tc1: TestCase = { id: 1, name: "Login", url: "/login" };
// const    → is a constant keyword
// tc1      → is the constant name
// :        → is the type annotation symbol
// TestCase → is the type (object must match TestCase interface)
// =        → is the assignment operator
// id: 1    → key=id, value=1 (number ✅)
// name: "Login" → key=name, value="Login" (string ✅)
// url: "/login" → key=url, value="/login" (string ✅)
// priority is not here → that is fine because ? made it optional ✅

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 2 — EXTENDING AN INTERFACE
//  Build on top of an existing interface using the 'extends' keyword
// ══════════════════════════════════════════════════════════════

interface APITestCase extends TestCase {
  // interface   → is the keyword
  // APITestCase → is the name of the new interface
  // extends     → is the keyword that means "copy everything from..."
  // TestCase    → is the interface we are copying from (id, name, url, priority?)
  // {}          → is the body where we add NEW keys

  endpoint: string;
  // endpoint → is a new key required ONLY for APITestCase
  // :        → separates key from type
  // string   → value must be text
}

const apiTest: APITestCase = {
  id: 2,
  name: "Get User",
  url: "https://api.example.com",
  endpoint: "/api/users"
};
// const       → is a constant keyword
// apiTest     → is the constant name
// :           → is the type annotation symbol
// APITestCase → is the type (must have id, name, url from TestCase, PLUS endpoint)
// =           → is the assignment operator
// id, name, url → are the keys inherited from TestCase
// endpoint    → is the new key required by APITestCase

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 3 — READONLY KEYS
//  Lock a property so it can never be changed after creation
// ══════════════════════════════════════════════════════════════

interface TestUser {
  readonly username: string;
  // readonly → keyword that locks the property. It cannot be changed later!
  // username → is the key name
  // : string → value must be text
}

const myUser: TestUser = { username: "tester1" };
// myUser.username = "hacked";  → RED ERROR! 
// error reason → TypeScript prevents you from changing a readonly key. This keeps test data safe!