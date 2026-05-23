// ╔══════════════════════════════════════════════════════════════╗
//   TYPESCRIPT — BASICS TO ADVANCED
//   Every line explained: what is the keyword, name, value, type
// ╚══════════════════════════════════════════════════════════════╝




// ══════════════════════════════════════════════════════════════
//  SECTION 1 — VARIABLES
// ══════════════════════════════════════════════════════════════

let city = "Hyderabad";
// let        → is a variable keyword (can be changed later)
// city       → is the variable name
// "Hyderabad"→ is a string value assigned to the variable city

let age = 25;
// let  → is a variable keyword
// age  → is the variable name
// 25   → is a number value assigned to the variable age

let isLoggedIn = true;
// let         → is a variable keyword
// isLoggedIn  → is the variable name
// true        → is a boolean value assigned to the variable isLoggedIn

const baseURL = "https://example.com";
// const       → is a constant keyword (can NEVER be changed after this line)
// baseURL     → is the constant name
// "https://example.com" → is a string value assigned to the constant baseURL




// ══════════════════════════════════════════════════════════════
//  SECTION 2 — EXPLICIT TYPES
//  You tell TypeScript exactly what type each variable is
// ══════════════════════════════════════════════════════════════

let siteName : string = "Google";
// let         → is a variable keyword
// siteName    → is the variable name
// :           → is the type annotation symbol (means "this variable holds this type")
// string      → is the type (only text is allowed)
// =           → is the assignment operator (means "give this value to the variable")
// "Google"    → is the string value assigned to the variable siteName

let timeout : number = 30000;
// let      → is a variable keyword
// timeout  → is the variable name
// :        → is the type annotation symbol
// number   → is the type (only numbers allowed)
// 30000    → is the number value assigned to the variable timeout

let headless : boolean = false;
// let       → is a variable keyword
// headless  → is the variable name
// :         → is the type annotation symbol
// boolean   → is the type (only true or false allowed)
// false     → is the boolean value assigned to the variable headless

let nothing : null = null;
// let      → is a variable keyword
// nothing  → is the variable name
// :        → is the type annotation symbol
// null     → is the type AND the value (means intentionally empty)

let empty : undefined = undefined;
// let    → is a variable keyword
// empty  → is the variable name
// :      → is the type annotation symbol
// undefined → is the type AND the value (means declared but never given a value)

let anything : any = "skip type checking";
// let       → is a variable keyword
// anything  → is the variable name
// :         → is the type annotation symbol
// any       → is the type (no type checking at all — AVOID this)
// "skip type checking" → is the string value assigned to the variable anything




// ══════════════════════════════════════════════════════════════
//  SECTION 3 — TEMPLATE LITERALS
//  Combine variables and text into one string using backtick ``
// ══════════════════════════════════════════════════════════════

const domain : string = "https://example.com";
// const    → is a constant keyword
// domain   → is the constant name
// :        → is the type annotation symbol
// string   → is the type
// "https://example.com" → is the string value assigned to the constant domain

const path : string = "/login";
// const  → is a constant keyword
// path   → is the constant name
// :      → is the type annotation symbol
// string → is the type
// "/login" → is the string value assigned to the constant path

const fullURL : string = `${domain}${path}`;
// const    → is a constant keyword
// fullURL  → is the constant name
// :        → is the type annotation symbol
// string   → is the type
// ``       → backtick starts and ends a template literal
// ${}      → is the interpolation syntax — injects a variable inside the string
// domain   → is the variable being injected (its value is "https://example.com")
// path     → is the variable being injected (its value is "/login")
// result   → fullURL = "https://example.com/login"




// ══════════════════════════════════════════════════════════════
//  SECTION 4 — ARRAYS
//  A list of multiple values of the SAME type
// ══════════════════════════════════════════════════════════════

const browsers : string[] = ["chromium", "firefox", "webkit"];
// const       → is a constant keyword
// browsers    → is the constant name
// :           → is the type annotation symbol
// string[]    → is the type (an array where every item must be a string)
// []          → the square bracket means "this is an array"
// =           → is the assignment operator
// [...]       → is the array value (list of items inside square brackets)
// "chromium"  → is a string item at index 0 (first position)
// "firefox"   → is a string item at index 1 (second position)
// "webkit"    → is a string item at index 2 (third position)

const waitTimes : number[] = [5000, 10000, 30000];
// const       → is a constant keyword
// waitTimes   → is the constant name
// :           → is the type annotation symbol
// number[]    → is the type (array where every item must be a number)
// 5000        → is a number item at index 0
// 10000       → is a number item at index 1
// 30000       → is a number item at index 2

console.log(browsers[0]);
// console.log → is a built-in function that prints to the terminal
// browsers    → is the array variable
// [0]         → is the index accessor — 0 means first item
// result      → prints "chromium"

console.log(browsers[2]);
// browsers → is the array variable
// [2]      → index 2 means third item
// result   → prints "webkit"




// ══════════════════════════════════════════════════════════════
//  SECTION 5 — TUPLES
//  Fixed-length array where each position has its OWN type
// ══════════════════════════════════════════════════════════════

const credential : [string, string] = ["admin@test.com", "Pass@123"];
// const          → is a constant keyword
// credential     → is the constant name
// :              → is the type annotation symbol
// [string,string]→ is the tuple type (position 0 = string, position 1 = string)
// "admin@test.com"→ is the string value at position 0
// "Pass@123"     → is the string value at position 1

const viewport : [number, number] = [1280, 720];
// const        → is a constant keyword
// viewport     → is the constant name
// [number,number]→ is the tuple type (position 0 = number, position 1 = number)
// 1280         → is the number value at position 0 (width)
// 720          → is the number value at position 1 (height)

const [emailVal, passwordVal] = credential;
// const        → is a constant keyword
// []           → destructuring syntax — extracts each position into its own variable
// emailVal     → is a new variable that gets the value at position 0 ("admin@test.com")
// passwordVal  → is a new variable that gets the value at position 1 ("Pass@123")
// credential   → is the tuple being destructured




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




// ══════════════════════════════════════════════════════════════
//  SECTION 7 — TYPE ALIAS
//  Give your own name to a type so you can reuse it
//  Keyword: type
// ══════════════════════════════════════════════════════════════

type UserCredentials = {
// type            → is the keyword for creating a type alias
// UserCredentials → is the name you are giving to this type
// {}              → is the object shape being defined

  username : string;
  // username → is the key name
  // :        → separates the key from its type
  // string   → is the required type for this key's value

  password : string;
  // password → is the key name
  // :        → separates the key from its type
  // string   → is the required type for this key's value
};

const creds : UserCredentials = {
// const            → is a constant keyword
// creds            → is the constant name
// :                → is the type annotation symbol
// UserCredentials  → is the type (the object must match this shape)
// {}               → is the object value

  username : "admin",
  // username → is the key (must match the key defined in UserCredentials)
  // "admin"  → is the string value assigned to the key username

  password : "Secret@123",
  // password     → is the key
  // "Secret@123" → is the string value assigned to the key password
};

type BrowserName = "chromium" | "firefox" | "webkit";
// type        → is the keyword for creating a type alias
// BrowserName → is the name of the type alias
// =           → assigns the type definition
// "chromium"  → is the first allowed string value
// |           → means OR (either this one or the next)
// "firefox"   → is the second allowed string value
// |           → means OR
// "webkit"    → is the third allowed string value

let chosenBrowser : BrowserName = "chromium";
// let           → is a variable keyword
// chosenBrowser → is the variable name
// :             → is the type annotation symbol
// BrowserName   → is the type (only "chromium", "firefox", or "webkit" allowed)
// "chromium"    → is the string value assigned to the variable chosenBrowser




// ══════════════════════════════════════════════════════════════
//  SECTION 8 — INTERFACE
//  Describes the shape of an object (similar to type alias)
//  Keyword: interface
// ══════════════════════════════════════════════════════════════

interface TestCase {
// interface → is the keyword for defining an object shape
// TestCase  → is the name of the interface
// {}        → is the body containing all the key definitions

  id       : number;
  // id     → is the key name
  // :      → separates the key name from its type
  // number → is the required type — value must be a number
  // ;      → ends the key definition (like a full stop)

  name     : string;
  // name   → is the key name
  // string → is the required type — value must be text

  url      : string;
  // url    → is the key name
  // string → is the required type

  priority ?: string;
  // priority → is the key name
  // ?        → means this key is OPTIONAL — caller can skip it
  // :        → separates key from type
  // string   → if provided, value must be text
}

const tc1 : TestCase = { id: 1, name: "Login", url: "/login" };
// const    → is a constant keyword
// tc1      → is the constant name
// TestCase → is the type (object must match TestCase interface)
// id: 1    → key=id, value=1 (number ✅)
// name: "Login" → key=name, value="Login" (string ✅)
// url: "/login" → key=url, value="/login" (string ✅)
// priority is not here → that is fine because ? made it optional ✅




// ══════════════════════════════════════════════════════════════
//  SECTION 9 — UNION TYPES
//  A variable that can hold ONE OF several types
//  Syntax: type1 | type2
// ══════════════════════════════════════════════════════════════

let testStatus : "pass" | "fail" | "skip";
// let         → is a variable keyword
// testStatus  → is the variable name
// :           → is the type annotation symbol
// "pass"      → is the first allowed string value
// |           → means OR
// "fail"      → is the second allowed string value
// |           → means OR
// "skip"      → is the third allowed string value
// no value assigned yet — it will be assigned below

testStatus = "pass";
// testStatus → is the variable being assigned
// =          → is the assignment operator
// "pass"     → is the string value being assigned ✅ (it is in the union)

let idOrName : number | string = 42;
// let       → is a variable keyword
// idOrName  → is the variable name
// :         → is the type annotation symbol
// number    → is the first allowed type
// |         → means OR
// string    → is the second allowed type
// 42        → is the number value assigned — number is allowed ✅

idOrName = "TC_001";
// idOrName  → is the same variable
// =         → is the assignment operator
// "TC_001"  → is a string value — string is also allowed ✅




// ══════════════════════════════════════════════════════════════
//  SECTION 10 — ENUMS
//  A set of named constants — use readable labels instead of raw strings
//  Keyword: enum
// ══════════════════════════════════════════════════════════════

enum Status {
// enum   → is the keyword for defining an enum
// Status → is the name of the enum
// {}     → is the body containing all the members

  Pass = "PASS",
  // Pass    → is the member name (the label you use in code)
  // =       → assigns the actual stored value
  // "PASS"  → is the string value stored when you use Status.Pass

  Fail = "FAIL",
  // Fail    → is the member name
  // "FAIL"  → is the string value stored when you use Status.Fail

  Skip = "SKIP",
  // Skip    → is the member name
  // "SKIP"  → is the string value stored when you use Status.Skip
}

const myStatus : Status = Status.Pass;
// const    → is a constant keyword
// myStatus → is the constant name
// :        → is the type annotation symbol
// Status   → is the type (must be a member of the Status enum)
// Status.Pass → is the value (you use the enum name DOT member name)
// result   → myStatus holds the string "PASS" behind the scenes

console.log(myStatus);
// prints → "PASS"




// ══════════════════════════════════════════════════════════════
//  SECTION 11 — FUNCTIONS
//  A reusable block of code with a name
//  Syntax: function name ( param: type ) : returnType { body }
// ══════════════════════════════════════════════════════════════

function addNumbers(x: number, y: number): number {
// function   → is the keyword for defining a function
// addNumbers → is the function name
// ()         → parentheses hold the input parameters
// x          → is the first parameter name
// :          → separates the parameter name from its type
// number     → is the type of parameter x (must be a number)
// y          → is the second parameter name
// number     → is the type of parameter y (must be a number)
// :number    → after the closing ) is the return type (function gives back a number)
// {}         → curly braces hold the function body

  return x + y;
  // return → is the keyword that sends the result back to whoever called the function
  // x + y  → is the expression being returned (adds the two numbers)
}

const total = addNumbers(5, 10);
// const      → is a constant keyword
// total      → is the constant name that will store the result
// addNumbers → is the function being called
// (5, 10)    → 5 is passed as x, 10 is passed as y
// result     → total = 15

function logResult(msg: string): void {
// function  → is the keyword
// logResult → is the function name
// msg       → is the parameter name
// :         → type annotation separator
// string    → is the type of parameter msg
// :void     → is the return type — void means this function returns NOTHING

  console.log(msg);
  // console.log → built-in function to print to terminal
  // msg         → is the variable (parameter) being printed
}

const multiply = (x: number, y: number): number => x * y;
// const      → is a constant keyword
// multiply   → is the name of this arrow function
// =          → assigns the arrow function to the constant
// (x, y)    → x and y are the parameter names
// :number   → is the return type
// =>         → is the arrow — means "this function returns what follows"
// x * y      → is the return value (multiplies x and y)

function greetUser(name: string, role?: string): string {
// greetUser → is the function name
// name      → is the first parameter name
// string    → is the type of parameter name
// role      → is the second parameter name
// ?         → means role is OPTIONAL — caller can skip it
// string    → is the type of role if it is provided
// :string   → is the return type — this function gives back a string

  return role ? `Hello ${name} (${role})` : `Hello ${name}`;
  // return       → sends result back to the caller
  // role ?       → is the condition (if role was provided)
  // `Hello ...`  → is the string returned when role exists
  // :            → ternary else — the string returned when role is missing
}

function retryTest(testName: string, attempts: number = 3): void {
// retryTest  → is the function name
// testName   → is the first parameter name (type = string)
// attempts   → is the second parameter name (type = number)
// = 3        → is the DEFAULT VALUE — used when caller does not pass attempts
// :void      → return type is void (returns nothing)

  console.log(`Running ${testName} up to ${attempts} times`);
}

retryTest("Login Test");
// "Login Test" → passed as testName
// attempts     → not passed, so default value 3 is used automatically

retryTest("Login Test", 5);
// "Login Test" → passed as testName
// 5            → passed as attempts, overrides the default value 3

function printAllLogs(...messages: string[]): void {
// ...messages → is the rest parameter (collects ALL extra arguments into an array)
// ...          → three dots means "collect everything into an array"
// messages     → is the array name holding all passed values
// string[]     → is the type (every item in the array must be a string)

  messages.forEach(msg => console.log(msg));
  // messages.forEach → loops through every item in the array
  // msg             → is each individual item during the loop
  // console.log(msg)→ prints each item
}

printAllLogs("Test started", "Navigating", "Test passed");
// "Test started" → is item 0 in messages array
// "Navigating"   → is item 1 in messages array
// "Test passed"  → is item 2 in messages array




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




// ══════════════════════════════════════════════════════════════
//  SECTION 14 — INHERITANCE
//  A child class gets all the methods from the parent class
//  Keyword: extends | super
// ══════════════════════════════════════════════════════════════

class BasePage {
// class    → is the keyword
// BasePage → is the parent class name (shared by all page classes)

  protected pageUrl : string;
  // protected → access modifier (this class AND child classes can use it)
  // pageUrl   → is the property name
  // :string   → is the type

  constructor(url: string) {
  // constructor → runs when a new BasePage (or child) is created
  // url         → is the parameter

    this.pageUrl = url;
    // this.pageUrl → is the property on this object
    // url          → is the value from the constructor parameter
  }

  navigate(): void {
  // navigate → is the method name (shared by ALL pages that extend BasePage)
  // :void    → returns nothing

    console.log(`Navigating to ${this.pageUrl}`);
  }
}

class LoginPage extends BasePage {
// class     → is the keyword
// LoginPage → is the child class name
// extends   → is the keyword that says LoginPage inherits from BasePage
// BasePage  → is the parent class being inherited

  private formSelector : string = "#loginForm";
  // private       → only LoginPage can use this
  // formSelector  → is the property name
  // "#loginForm"  → is the string value (a CSS selector)

  constructor() {
    super("https://example.com");
    // super()   → is required — calls the parent (BasePage) constructor first
    // "https://example.com" → is the url value passed up to BasePage
  }

  fillLoginForm(email: string, pass: string): void {
  // fillLoginForm → is the method name (only exists on LoginPage)
  // email         → is the first parameter name
  // :string       → is the type of email
  // pass          → is the second parameter name
  // :string       → is the type of pass
  // :void         → returns nothing

    console.log(`Filling ${email} into ${this.formSelector}`);
    // this.formSelector → is the private property "#loginForm"
    // email             → is the value passed in as the parameter
  }
}

const loginPg = new LoginPage();
// loginPg  → is the constant holding the LoginPage object
// new      → creates a new instance
// LoginPage() → calls the constructor (which calls super internally)

loginPg.navigate();
// navigate → is inherited from BasePage — LoginPage did not define it itself
// ✅ works because LoginPage extends BasePage

loginPg.fillLoginForm("a@b.com", "pass123");
// fillLoginForm → is LoginPage's own method
// "a@b.com"     → is passed as the email parameter
// "pass123"     → is passed as the pass parameter




// ══════════════════════════════════════════════════════════════
//  SECTION 15 — ASYNC / AWAIT & PROMISES
//  Every Playwright action is async — this is the most important section
// ══════════════════════════════════════════════════════════════

async function fetchTitle(url: string): Promise<string> {
// async         → is the keyword — marks this function as asynchronous
// function      → is the keyword
// fetchTitle    → is the function name
// url           → is the parameter name
// :string       → is the parameter type
// :Promise<string> → is the return type
//    Promise    → means "I will give you a value eventually, not right now"
//    <string>   → means the value that eventually arrives will be a string

  return `Title of ${url}`;
  // return → sends the value back (async wraps it in a Promise automatically)
}

async function runTest(): Promise<void> {
// :Promise<void> → async function that eventually returns nothing

  const title = await fetchTitle("https://example.com");
  // const    → is a constant keyword
  // title    → is the constant name that will hold the result
  // await    → is the keyword that PAUSES here until fetchTitle finishes
  //            without await you get the Promise object itself, not the value
  // fetchTitle("https://example.com") → is the async call being awaited
  // result   → title = "Title of https://example.com"

  console.log(title);
}

async function safeRun(url: string): Promise<void> {

  try {
  // try → is the keyword — attempt the code inside this block

    const title = await fetchTitle(url);
    // if fetchTitle throws an error → execution jumps to catch block
    console.log("Success:", title);

  } catch (error) {
  // catch  → is the keyword — runs if ANYTHING inside try fails
  // error  → is the parameter that holds the error details

    console.error("Failed:", error);
    // console.error → prints to terminal as an error message

  } finally {
  // finally → is the keyword — ALWAYS runs whether try succeeded or catch ran

    console.log("Test finished");
  }
}

async function runParallel(): Promise<void> {

  const [t1, t2] = await Promise.all([
  // Promise.all → is a built-in that runs multiple async calls AT THE SAME TIME
  //               waits for ALL of them to finish, then gives results as an array
  // [t1, t2]    → destructures the results array into two named variables

    fetchTitle("https://example.com/login"),
    // this is the first async call — result goes into t1

    fetchTitle("https://example.com/signup"),
    // this is the second async call — result goes into t2
  ]);

  console.log(t1, t2);
}




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




// ══════════════════════════════════════════════════════════════
//  SECTION 17 — PLAYWRIGHT PAGE OBJECT MODEL (POM)
//  One class per page. All selectors and actions in one place.
//
//  In a real Playwright project, add this at the top of the file:
//  import { Page, Locator, expect } from "@playwright/test";
//  Then delete the two stub type lines below.
// ══════════════════════════════════════════════════════════════

// Stub types — ONLY here so this file compiles without Playwright installed
type Locator = { fill: (v: string) => Promise<void>; click: () => Promise<void>; isVisible: () => Promise<boolean>; textContent: () => Promise<string | null> };
type Page    = { locator: (s: string) => Locator; goto: (u: string) => Promise<void>; check: (s: string) => Promise<void> };

interface LoginFormData {
// LoginFormData → is the interface name for what the login form needs

  email      : string;
  // email    → is the key name
  // :        → separates key from type
  // string   → is the type (must be text)

  password   : string;
  // password → is the key name
  // string   → is the type

  rememberMe ?: boolean;
  // rememberMe → is the key name
  // ?          → makes it optional — caller can skip this key
  // boolean    → if provided, must be true or false
}

interface LoginOutcome {
// LoginOutcome → is the interface name for what login gives back

  success       : boolean;
  // success   → is the key name
  // boolean   → is the type (true = logged in | false = error shown)

  errorMessage ?: string;
  // errorMessage → is the key name
  // ?            → optional — only present when success is false
  // string       → is the type if present
}

class LoginPagePOM {
// class        → is the keyword
// LoginPagePOM → is the class name (POM = Page Object Model)

  private emailInput    : Locator;
  // private    → only this class can use this property
  // emailInput → is the property name
  // :Locator   → Locator is Playwright's type for a page element

  private passwordInput : Locator;
  // passwordInput → is the property name | Locator is the type

  private submitBtn     : Locator;
  // submitBtn → is the property name | Locator is the type

  private errorMsg      : Locator;
  // errorMsg → is the property name | Locator is the type

  constructor(private page: Page) {
  // constructor  → runs when you do: new LoginPagePOM(page)
  // private page → shorthand — creates a private property called page on the class
  // :Page        → Playwright's Page type (represents the browser tab)

    this.emailInput    = page.locator("#email");
    // page.locator  → is a Playwright method that finds an element by a CSS selector
    // "#email"      → is the CSS selector (# means ID, so it finds element with id="email")
    // this.emailInput → stores the found Locator on the class property

    this.passwordInput = page.locator("#password");
    // "#password"   → finds the element with id="password"

    this.submitBtn     = page.locator('button[type="submit"]');
    // 'button[type="submit"]' → CSS selector for a button element with type="submit"

    this.errorMsg      = page.locator(".error-message");
    // ".error-message" → CSS selector (. means class, finds element with class="error-message")
  }

  async goto(): Promise<void> {
  // async  → marks this as an async method
  // goto   → is the method name
  // :Promise<void> → async method that returns nothing

    await this.page.goto("https://example.com/login");
    // await      → pause here until navigation completes
    // this.page  → is the Playwright Page object (the browser tab)
    // .goto      → is the Playwright method to navigate to a URL
    // "https://example.com/login" → is the URL being navigated to
  }

  async loginUser(data: LoginFormData): Promise<void> {
  // loginUser → is the method name
  // data      → is the parameter name
  // :LoginFormData → parameter must match the LoginFormData interface

    await this.emailInput.fill(data.email);
    // await              → wait until fill completes
    // this.emailInput    → is the email Locator (element on the page)
    // .fill              → is the Playwright method to type text into an input
    // data.email         → is the value being typed (from the LoginFormData object)

    await this.passwordInput.fill(data.password);
    // this.passwordInput → is the password Locator
    // .fill              → types into the password input
    // data.password      → is the value being typed

    if (data.rememberMe) {
    // data.rememberMe  → checks if the optional key was provided and is true
      await this.page.check("#rememberMe");
      // .check           → is the Playwright method to tick a checkbox
      // "#rememberMe"    → CSS selector for the checkbox element
    }

    await this.submitBtn.click();
    // this.submitBtn → is the submit button Locator
    // .click         → is the Playwright method to click the element
  }

  async getOutcome(): Promise<LoginOutcome> {
  // getOutcome     → is the method name
  // :Promise<LoginOutcome> → async method that returns a LoginOutcome object

    const hasError = await this.errorMsg.isVisible();
    // hasError        → is the constant that holds true or false
    // this.errorMsg   → is the error message Locator
    // .isVisible()    → Playwright method — returns true if element is visible on page

    if (hasError) {
    // if block runs only when hasError is true (error IS visible on page)

      const text = await this.errorMsg.textContent();
      // text          → holds the text shown inside the error element
      // .textContent()→ Playwright method — gets the visible text of the element

      return { success: false, errorMessage: text ?? "Unknown error" };
      // return        → sends the LoginOutcome object back to the caller
      // success: false→ key=success, value=false (login failed)
      // errorMessage  → key=errorMessage
      // text ?? "Unknown error" → if text is null, use "Unknown error" instead
      //   ??          → is the nullish coalescing operator (use right side if left is null)
    }

    return { success: true };
    // return         → sends LoginOutcome back
    // success: true  → key=success, value=true (login worked, no error shown)
  }
}




// ══════════════════════════════════════════════════════════════
//  SECTION 18 — HOW A REAL TEST FILE LOOKS
//  (copy this pattern into your actual .spec.ts files)
//
//  Uncomment everything below when inside a Playwright project
// ══════════════════════════════════════════════════════════════

// import { test, expect } from "@playwright/test";
// → import  → is the keyword to bring in code from another file
// → test    → is Playwright's function for defining a test
// → expect  → is Playwright's function for writing assertions
// → "@playwright/test" → is the Playwright package name

// const validUser : LoginFormData = {
// → validUser     → is the constant name holding test data
// → LoginFormData → is the type (object must match this interface)
//   email      : "user@example.com",  → key=email    | value=string
//   password   : "ValidPass@123",     → key=password | value=string
//   rememberMe : true,                → key=rememberMe | value=boolean
// };

// test("login with valid creds", async ({ page }) => {
// → test        → is Playwright's test function
// → first arg   → is the test name (string describing what is being tested)
// → second arg  → is the async function that runs the test
// → { page }    → Playwright automatically injects the page object here

//   const loginPOM = new LoginPagePOM(page);
//   → creates an instance of LoginPagePOM, passing the injected page in

//   await loginPOM.goto();
//   → await  → wait for navigation to complete
//   → goto() → is the method on LoginPagePOM that navigates to the login page

//   await loginPOM.loginUser(validUser);
//   → loginUser(validUser) → fills and submits the form using validUser data

//   const result : LoginOutcome = await loginPOM.getOutcome();
//   → result        → holds the LoginOutcome returned by getOutcome()
//   → :LoginOutcome → type annotation on the result constant
//   → result.success        → is boolean (true or false)
//   → result.errorMessage   → is string | undefined (optional key)
// });




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