// ══════════════════════════════════════════════════════════════
//  SECTION 16 — UTILITY TYPES
//  Built-in TypeScript helpers that transform existing types
// ══════════════════════════════════════════════════════════════

interface Config {
// Config → is the interface name — defines required fields for configuration

  baseURL  : string;   // key=baseURL  | type=string  | required
  timeout  : number;   // key=timeout  | type=number  | required
  headless : boolean;  // key=headless | type=boolean | required
  retries  : number;   // key=retries  | type=number  | required
}

type PartialConfig = Partial<Config>;
// Partial    → is the utility type keyword
// <Config>   → is the type being transformed
// result     → ALL fields in Config become optional (?)
// PartialConfig → is the name of the new type

const override : PartialConfig = { timeout: 60000 };
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

const timeoutMap : BrowserMap = {
  chromium : 30000,
  // chromium → is the key (must be one of the three browser names)
  // :        → separates key from value
  // 30000    → is the number value assigned to the key chromium

  firefox  : 45000,
  // firefox  → is the key
  // 45000    → is the number value assigned to the key firefox

  webkit   : 60000,
  // webkit   → is the key
  // 60000    → is the number value assigned to the key webkit
};