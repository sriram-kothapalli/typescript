// ══════════════════════════════════════════════════════════════
//  MASTER CHEATSHEET V4 — The Definitive SDET Arsenal
// ══════════════════════════════════════════════════════════════
//
//  KEYWORD/SYNTAX         WHAT IT IS                   EXAMPLE
//  ─────────────────────  ───────────────────────────  ─────────────────────────
//  [ TYPESCRIPT: BASICS & OPERATORS ]
//  let / const            variable / constant          let x = 5; const y = 10;
//  :string / :number      type annotation              let name: string = "Ravi"
//  boolean / null         true/false or empty          let isActive: boolean = true
//  unknown                safe alternative to any      let data: unknown = ...
//  string[]               array of strings             ["a", "b"]
//  [string, number]       tuple (fixed positions)      ["x", 1]
//  ===                    strict equality check        if (x === 5)
//  `${var}`               template literal (string)    `Hello ${name}`
//  ?.                     optional chaining            user?.address?.city
//  ??                     nullish coalescing           text ?? "default fallback"
//  ...                    rest / spread operator       const newObj = { ...oldObj }
//
//  [ JS / TS: NATIVE METHODS (DATA MANIPULATION) ]
//  arr.map()              transform array items        const ids = users.map(u => u.id)
//  arr.filter()           keep items matching rule     const active = users.filter(u => u.isActive)
//  arr.find()             get first matching item      const user = users.find(u => u.id === 1)
//  arr.reduce()           accumulate array to 1 value  const total = prices.reduce((sum, p) => sum + p, 0)
//  str.includes()         check if string contains     if (url.includes("login"))
//  str.split()            split string into array      const parts = date.split("-")
//  Object.keys(obj)       get array of object keys     const keys = Object.keys(config)
//  Object.entries(obj)    get key/value pairs          for (const [key, val] of Object.entries(obj))
//  JSON.stringify(obj)    convert object to string     const payload = JSON.stringify({ a: 1 })
//  JSON.parse(str)        convert string to object     const data = JSON.parse('{"a": 1}')
//  Date.now()             get current timestamp (ms)   const startTime = Date.now()
//
//  [ TYPESCRIPT: ADVANCED TYPES ]
//  type X = {}            type alias                   type User = { name: string }
//  interface X {}         object shape / blueprint     interface Config { url: string }
//  A | B                  union (one of)               string | number
//  A & B                  intersection (both)          TypeA & TypeB
//  enum X { A = "a" }     named constants              Status.Pass
//  keyof T                extract keys as union type   type Keys = keyof Config
//  typeof x               get type of existing code    type MyType = typeof myObject
//  function f<T>          generic placeholder          wrapValue<string>("x")
//  as SomeType            type assertion (forcing)     el as HTMLButtonElement
//  Partial<T>             all fields become optional   Partial<Config>
//  Readonly<T>            no field can change          Readonly<Config>
//  Pick<T, "a">           keep only listed fields      Pick<Config, "url">
//  Omit<T, "a">           remove listed fields         Omit<Config, "retries">
//  Record<K,V>            typed key→value dictionary   Record<string, number>
//  ReturnType<T>          get function return type     ReturnType<typeof getData>
//  Awaited<T>             unwraps a Promise type       Awaited<Promise<string>>
//
//  [ TYPESCRIPT: ASYNC & CLASSES ]
//  async / await          async setup and pause        async function f() { await g() }
//  Promise<T>             async return type            Promise<string>
//  try/catch/finally      handle async errors          try { } catch(e) { } finally { }
//  Promise.all([...])     run multiple async at once   await Promise.all([a, b])
//  for (const x of arr)   ONLY safe async loop         for (const item of list) { await... }
//  class X extends Y {}   class & inheritance          class LoginPage extends BasePage {}
//  super()                call parent constructor      super(page)
//  private/protected      access modifiers             private locator: Locator
//
//  [ NODE.JS: NATIVES USED IN PLAYWRIGHT ]
//  process.env.X          access environment vars      const url = process.env.BASE_URL
//  path.join()            create OS-safe file paths    const p = path.join(__dirname, 'data.csv')