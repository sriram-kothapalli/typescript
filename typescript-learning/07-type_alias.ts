// ══════════════════════════════════════════════════════════════
//  SECTION 7 — TYPE ALIAS
//  Give your own name to a type so you can reuse it
//  Keyword: type
// ══════════════════════════════════════════════════════════════

type UserCredentials = {
  // type            → is the keyword for creating a type alias
  // UserCredentials → is the name you are giving to this type
  // =               → assigns the definition to the name
  // {}              → is the object shape being defined

  username: string;
  // username → is the key name
  // :        → separates the key from its type
  // string   → is the required type for this key's value

  password: string;
  // password → is the key name
  // :        → separates the key from its type
  // string   → is the required type for this key's value
};

const creds: UserCredentials = {
  // const            → is a constant keyword
  // creds            → is the constant name
  // :                → is the type annotation symbol
  // UserCredentials  → is the type (the object must match this shape)
  // =                → is the assignment operator
  // {}               → is the object value

  username: "admin",
  // username → is the key (must match the key defined in UserCredentials)
  // :        → separates the key from the value
  // "admin"  → is the string value assigned to the key username

  password: "Secret@123",
  // password     → is the key
  // :            → separates the key from the value
  // "Secret@123" → is the string value assigned to the key password
};

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 2 — LITERAL UNIONS
//  Locking a variable down to a specific set of allowed words
// ══════════════════════════════════════════════════════════════

type BrowserName = "chromium" | "firefox" | "webkit";
// type        → is the keyword for creating a type alias
// BrowserName → is the name of the type alias
// =           → assigns the type definition
// "chromium"  → is the first allowed string value
// |           → means OR (either this one or the next)
// "firefox"   → is the second allowed string value
// |           → means OR
// "webkit"    → is the third allowed string value

let chosenBrowser: BrowserName = "chromium";
// let           → is a variable keyword
// chosenBrowser → is the variable name
// :             → is the type annotation symbol
// BrowserName   → is the type (only "chromium", "firefox", or "webkit" allowed)
// =             → is the assignment operator
// "chromium"    → is the string value assigned to the variable chosenBrowser

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 3 — COMBINING TYPES (INTERSECTION)
//  Use the '&' symbol to merge two types together
// ══════════════════════════════════════════════════════════════

type BaseAPIResponse = {
  status: number;
};

type LoginResponse = BaseAPIResponse & {
  // type          → is the keyword for creating a type alias
  // LoginResponse → is the new name for the combined type
  // =             → assigns the type definition
  // BaseAPIResponse → is the first type we are bringing in (it has 'status')
  // &             → is the intersection symbol (means "combine this AND the next part")
  // {}            → is the new object shape we are adding on top
  token: string;
};

const myLogin: LoginResponse = {
  // const         → is a constant keyword
  // myLogin       → is the constant name
  // :             → is the type annotation symbol
  // LoginResponse → is the type (it now requires BOTH 'status' and 'token')
  // =             → is the assignment operator
  // {}            → is the object value

  status: 200,
  // status      → came from the BaseAPIResponse type
  token: "abc123xyz"
  // token       → came from the added {} type
};