// ══════════════════════════════════════════════════════════════
//  SECTION 6 — OBJECTS
//  A collection of key : value pairs
// ══════════════════════════════════════════════════════════════

const user = {
// const → is a constant keyword
// user  → is the constant name
// {}    → is an object (collection of key:value pairs)

  name     : "Ravi",
  // name  → is the key (the label / property name)
  // :     → separates the key from the value
  // "Ravi"→ is the string value assigned to the key name

  age      : 25,
  // age   → is the key
  // :     → separates the key from the value
  // 25    → is the number value assigned to the key age

  isActive : true,
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