
// ══════════════════════════════════════════════════════════════
//  SECTION 13 — CLASSES
//  A blueprint for creating objects
//  Keyword: class
// ══════════════════════════════════════════════════════════════

class TestLogger {
// class      → is the keyword for defining a class
// TestLogger → is the class name
// {}         → is the class body containing properties and methods

  private logs : string[] = [];
  // private  → is the access modifier (only code INSIDE this class can use logs)
  // logs     → is the property name
  // :        → type annotation separator
  // string[] → is the type (array of strings)
  // =        → assigns the initial value
  // []       → is an empty array (starts with nothing)

  public testName : string;
  // public    → is the access modifier (anyone can access testName)
  // testName  → is the property name
  // :         → type annotation separator
  // string    → is the type

  readonly startedAt : Date = new Date();
  // readonly  → is the access modifier (can be read but NEVER changed)
  // startedAt → is the property name
  // Date      → is the type
  // new Date()→ is the current date and time assigned as the initial value

  constructor(testName: string) {
  // constructor → is a special method that runs once when you do: new TestLogger(...)
  // testName    → is the parameter passed in when creating the object
  // :string     → is the type of that parameter

    this.testName = testName;
    // this        → refers to the current object being created
    // .testName   → is the property on the object
    // =           → assigns the value
    // testName    → is the value received from the constructor parameter
  }

  log(message: string): void {
  // log       → is the method name (a function inside a class)
  // message   → is the parameter name
  // :string   → is the parameter type
  // :void     → is the return type (this method returns nothing)

    this.logs.push(`[${this.testName}] ${message}`);
    // this.logs      → is the private array property on this object
    // .push(...)     → adds a new item to the end of the array
    // `[${...}] ${message}` → is the template literal being added as the item
  }

  getLogs(): string[] {
  // getLogs  → is the method name
  // :string[]→ is the return type (returns an array of strings)

    return this.logs;
    // return    → sends the logs array back to whoever called this method
    // this.logs → is the private array property on this object
  }
}

const logger = new TestLogger("Login Test");
// const       → is a constant keyword
// logger      → is the constant name that holds the new object
// new         → is the keyword that creates a new instance of the class
// TestLogger  → is the class being instantiated
// "Login Test"→ is the string value passed to the constructor as testName

logger.log("Page opened");
// logger     → is the instance (object created from TestLogger)
// .log       → is the method being called on the instance
// "Page opened" → is the string value passed as the parameter message

console.log(logger.getLogs());
// logger.getLogs() → calls the method and returns the logs array
// result           → ["[Login Test] Page opened"]