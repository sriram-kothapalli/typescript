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

interface ApiResponse<T> {
// interface   → is the keyword
// ApiResponse → is the interface name
// <T>         → T is a placeholder for the shape of the data field

  status  : number;
  // status → is the key — value is always a number, never changes

  data    : T;
  // data   → is the key — value TYPE is whatever T is (changes per use)

  message : string;
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