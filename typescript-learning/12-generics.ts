// ══════════════════════════════════════════════════════════════
//  SECTION 12 — GENERICS
//  Write code ONCE that works for ANY type
//  T is a placeholder — replaced with the real type when called
// ══════════════════════════════════════════════════════════════

function wrapValue<T>(value: T): T[] {
  // function  → is the keyword
  // wrapValue → is the function name
  // <T>       → is the generic declaration (T is a placeholder for ANY type)
  // value     → is the parameter name
  // :T        → is the parameter type (whatever T turns out to be)
  // :T[]      → is the return type (an array of whatever T is)

  return [value];
  // [value] → wraps the value in an array and returns it
}

wrapValue<string>("hello");
// <string>  → T is replaced with string for this call
// "hello"   → is the string value passed as the parameter value
// returns   → ["hello"] which is a string[]

wrapValue<number>(100);
// <number>  → T is replaced with number for this call
// 100       → is the number value passed as the parameter value
// returns   → [100] which is a number[]

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 2 — GENERIC INTERFACES
//  Used heavily in API testing to handle different response data
// ══════════════════════════════════════════════════════════════

interface ApiResponse<T> {
  // interface   → is the keyword
  // ApiResponse → is the interface name
  // <T>         → T is a placeholder for the shape of the data field

  status: number;
  // status → is the key — value is always a number, never changes

  data: T;
  // data   → is the key — value TYPE is whatever T is (changes per use)

  message: string;
  // message → is the key — value is always a string, never changes
}

type AuthData = { token: string; userId: number };
// type     → is the keyword
// AuthData → is the type alias name
// token    → is a key — value must be a string
// userId   → is a key — value must be a number

type AuthResponse = ApiResponse<AuthData>;
// ApiResponse<AuthData> → T becomes AuthData
// so data field is now typed as { token: string; userId: number }

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 3 — GENERIC CONSTRAINTS (Restricting T)
//  What if T can be anything, but it MUST have a specific key?
// ══════════════════════════════════════════════════════════════

function getTestId<T extends { testId: string }>(testObject: T): string {
  // function         → is the keyword
  // getTestId        → is the function name
  // <T extends ...>  → is the constraint! It means "T can be ANY object, BUT it MUST have a 'testId' key that is a string"
  // testObject       → is the parameter name
  // : T              → is the parameter type (the restricted T)
  // : string         → return type is string

  return testObject.testId;
  // .testId        → TypeScript allows this because we FORCED T to contain 'testId' using 'extends'!
}

const loginTest = { testId: "TC-01", browser: "Chrome", retries: 2 };
getTestId(loginTest);
// loginTest        → passes! It has 'testId' (plus extra stuff, which TypeScript ignores because T is flexible)

const badTest = { browser: "Firefox", retries: 1 };
// getTestId(badTest); 
// error reason     → RED ERROR! badTest is missing the 'testId' string required by the <T extends ...> rule!