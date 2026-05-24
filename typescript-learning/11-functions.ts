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
//  EXAMPLE 7 — ASYNC FUNCTIONS (CRITICAL FOR PLAYWRIGHT)
//  Web actions take time, so we must 'wait' for 'promises' to resolve
// ══════════════════════════════════════════════════════════════

const clickLoginBtn = async (buttonId: string): Promise<void> => {
  // const         → is a constant keyword
  // clickLoginBtn → is the name of this arrow function
  // =             → assigns the arrow function
  // async         → keyword meaning "this function has actions that take physical time"
  // (buttonId)    → is the parameter (must be a string)
  // : Promise<void> → return type! Because it's async, it MUST return a Promise. (Means: "I promise to finish later, but I return no actual data")
  // =>            → is the arrow

  // await page.click(buttonId);
  // await       → pauses the function right here until the browser finishes clicking!
  console.log(`Successfully clicked ${buttonId}`);
};