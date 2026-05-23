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