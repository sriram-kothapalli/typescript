// ══════════════════════════════════════════════════════════════
//  CHEATSHEET — everything at a glance
// ══════════════════════════════════════════════════════════════
//
//  KEYWORD/SYNTAX         WHAT IT IS                   EXAMPLE
//  ─────────────────────  ───────────────────────────  ─────────────────────────
//  let                    variable keyword              let x = 5
//  const                  constant keyword              const y = 10
//  :string                type annotation              let name: string = "Ravi"
//  =                      assignment operator           x = 5
//  string                 text type                    "hello"
//  number                 number type                  42
//  boolean                true/false type              true
//  null                   intentionally empty          null
//  undefined              not yet assigned             undefined
//  any                    no type check                avoid it
//  void                   function returns nothing     : void
//  never                  function never returns       : never
//  string[]               array of strings             ["a","b"]
//  [string,number]        tuple (fixed positions)      ["x", 1]
//  key: value             object property              { name: "Ravi" }
//  key?: type             optional key                 priority?: string
//  type X = {}            type alias                   type User = { name: string }
//  interface X {}         object shape                 interface Config { url: string }
//  A | B                  union (one of)               string | number
//  A & B                  intersection (both)          TypeA & TypeB
//  enum X { A = "a" }     named constants              Status.Pass
//  function f<T>          generic placeholder          wrapValue<string>("x")
//  as SomeType            type assertion               el as HTMLButtonElement
//  typeof x               runtime type check           typeof id === "string"
//  Partial<T>             all fields optional          Partial<Config>
//  Required<T>            all fields required          Required<Config>
//  Readonly<T>            no field can change          Readonly<Config>
//  Pick<T, "a">           keep only listed fields      Pick<Config, "url">
//  Omit<T, "a">           remove listed fields         Omit<Config, "retries">
//  Record<K,V>            typed key→value object       Record<BrowserName, number>
//  async                  marks async function         async function f()
//  await                  wait for async to finish     await page.click()
//  Promise<T>             async return type            Promise<string>
//  try/catch/finally      handle async errors          try { } catch(e) { }
//  Promise.all([...])     run multiple async at once   await Promise.all([a, b])
//  class X {}             blueprint for objects        class LoginPage {}
//  extends                inherit from parent          class B extends A
//  super()                call parent constructor      super("https://...")
//  private                only inside this class       private logs: string[]
//  public                 accessible everywhere        public name: string
//  protected              this class + child classes   protected url: string
//  readonly               set once, never changed      readonly startedAt: Date
//  constructor(x)         runs on new X()              constructor(page: Page)
//  this.prop              access own property          this.url = url
//  namespace X {}         group code under a name      TestData.adminUser
//  export                 share from a file            export const BASE_URL
//  import { X } from      use from another file        import { test } from "..."
//  ??                     use right if left is null    text ?? "default"
//  .locator(sel)          find element on page         page.locator("#email")
//  .fill(value)           type into an input           emailInput.fill("a@b.com")
//  .click()               click an element             submitBtn.click()
//  .isVisible()           check if element shows       errorMsg.isVisible()
//  .goto(url)             navigate to URL              page.goto("https://...")
//
// ══════════════════════════════════════════════════════════════