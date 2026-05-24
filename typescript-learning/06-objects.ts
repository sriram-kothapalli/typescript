// ══════════════════════════════════════════════════════════════
//  SECTION 6 — OBJECTS
//  A collection of key : value pairs
// ══════════════════════════════════════════════════════════════

const user = {
  // const → is a constant keyword
  // user  → is the constant name
  // =     → is the assignment operator
  // {}    → is an object (collection of key:value pairs)

  name: "Ravi",
  // name  → is the key (the label / property name)
  // :     → separates the key from the value
  // "Ravi"→ is the string value assigned to the key name

  age: 25,
  // age   → is the key
  // :     → separates the key from the value
  // 25    → is the number value assigned to the key age

  isActive: true,
  // isActive → is the key
  // :        → separates the key from the value
  // true     → is the boolean value assigned to the key isActive
};

console.log(user.name);
// user      → is the object variable
// .         → is the dot notation used to access a key inside the object
// name      → is the key being accessed
// result    → prints "Ravi"

console.log(user.age);
// user   → is the object variable
// .age   → accesses the key age inside the object
// result → prints 25

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 2 — UPDATING A PROPERTY
//  Even if the object is 'const', you can change the values inside it
// ══════════════════════════════════════════════════════════════

user.age = 26;
// user   → is the object variable
// .age   → accesses the key 'age'
// =      → is the assignment operator
// 26     → is the new number replacing the old one
// note   → 'const' stops you from replacing the WHOLE object with a new one, but changing the pieces inside is allowed!

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 3 — EXPLICIT TYPES AND OPTIONAL KEYS (?)
//  Telling TypeScript EXACTLY what the object should look like
// ══════════════════════════════════════════════════════════════

const testConfig: { url: string, timeout?: number } = {
  // const      → is a constant keyword
  // testConfig → is the constant name
  // :          → is the type annotation symbol
  // { ... }    → this block defines the TYPE (the strict rules for this object)
  // url: string→ rule 1: MUST have a key named 'url' that holds text
  // timeout?   → the question mark (?) means this key is OPTIONAL
  // : number   → if you do include 'timeout', it MUST be a number
  // =          → is the assignment operator
  // { ... }    → is the actual object data being assigned

  url: "https://example.com"
  // url      → matches the required string rule
  // note     → we skipped 'timeout', and TypeScript is completely fine with that because of the question mark!
};