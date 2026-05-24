// ══════════════════════════════════════════════════════════════
//  SECTION 16 — UTILITY TYPES
//  Built-in TypeScript helpers that transform existing types
// ══════════════════════════════════════════════════════════════

interface Config {
  // Config → is the interface name — defines required fields for configuration

  baseURL: string;   // key=baseURL  | type=string  | required
  timeout: number;   // key=timeout  | type=number  | required
  headless: boolean;  // key=headless | type=boolean | required
  retries: number;   // key=retries  | type=number  | required
}

type PartialConfig = Partial<Config>;
// Partial    → is the utility type keyword
// <Config>   → is the type being transformed
// result     → ALL fields in Config become optional (?)
// PartialConfig → is the name of the new type

const override: PartialConfig = { timeout: 60000 };
// override  → is the constant name
// PartialConfig → allows any subset of Config fields — only timeout given ✅

type FrozenConfig = Readonly<Config>;
// Readonly  → is the utility type keyword
// <Config>  → is the type being made immutable
// result    → every field becomes read-only (cannot be changed after creation)

type UrlOnly = Pick<Config, "baseURL" | "timeout">;
// Pick       → is the utility type keyword (keep ONLY the named fields)
// <Config    → is the source type
// "baseURL" | "timeout"> → are the keys to KEEP
// result     → UrlOnly has only baseURL and timeout

type NoRetries = Omit<Config, "retries">;
// Omit       → is the utility type keyword (REMOVE the named fields)
// <Config    → is the source type
// "retries"> → is the key to REMOVE
// result     → NoRetries has all Config fields EXCEPT retries

type BrowserMap = Record<"chromium" | "firefox" | "webkit", number>;
// Record        → is the utility type keyword
// first part    → is the key type ("chromium", "firefox", or "webkit")
// second part   → is the value type (number)
// result        → an object where keys are browser names and values are numbers

const timeoutMap: BrowserMap = {
  chromium: 30000,
  // chromium → is the key (must be one of the three browser names)
  // :        → separates key from value
  // 30000    → is the number value assigned to the key chromium

  firefox: 45000,
  // firefox  → is the key
  // 45000    → is the number value assigned to the key firefox

  webkit: 60000,
  // webkit   → is the key
  // 60000    → is the number value assigned to the key webkit
};

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 2 — ReturnType
//  Automatically copy the exact output type from an existing function
// ══════════════════════════════════════════════════════════════

function getLoginData() {
  return { email: "tester@x.com", pass: "123", role: "admin" };
}

type LoginData = ReturnType<typeof getLoginData>;
// ReturnType  → is the utility type keyword
// <typeof getLoginData> → looks at the function and figures out exactly what it returns
// result      → LoginData automatically becomes { email: string, pass: string, role: string }
// note        → If you add a new field to the function later, this type updates automatically!

// ══════════════════════════════════════════════════════════════
//  EXAMPLE 3 — Awaited
//  Unwraps a Promise to get the actual data inside (Crucial for Playwright)
// ══════════════════════════════════════════════════════════════

type AsyncTitle = Promise<string>;
// Promise<string> → means this variable is a Promise that will EVENTUALLY be a string

type ActualTitle = Awaited<AsyncTitle>;
// Awaited    → is the utility type keyword
// <AsyncTitle> → is the Promise type we are unwrapping
// result     → ActualTitle becomes a pure 'string' type (it strips away the Promise wrapper!)