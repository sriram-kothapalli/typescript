// ══════════════════════════════════════════════════════════════════════════════════════════════════════════════
//  MASTER CHEATSHEET  — The Veteran Architect's Manual (Perfectly Aligned)
// ══════════════════════════════════════════════════════════════════════════════════════════════════════════════
//
//  COMMAND / SYNTAX               THE VETERAN'S ADVICE (PLAIN ENGLISH)           EXAMPLE IN CODE
//  ─────────────────────────────  ─────────────────────────────────────────────  ───────────────────────────────
//
//  [ 1. TYPESCRIPT & JS NATIVES ]
//  const                          A variable that you cannot change later.       const timeout = 5000
//  let                            A variable that you are allowed to change.     let retries = 0
//  ?.                             Safe check. Won't crash if data is missing.    data?.user?.name
//  ??                             Use the right side if the left side is null.   text ?? "default fallback"
//  arr.map()                      Loop through a list and change every item.     const ids = users.map(u => u.id)
//  arr.filter()                   Keep only the items in a list that match.      const active = users.filter(u => u.on)
//  Promise.all()                  Run multiple async tasks at the exact same timeawait Promise.all([req1, req2])
//  for (const x of arr)           The only safe way to loop async Playwright codefor (const item of list) { await... }
//  val is type                    Custom rule to check what type of data this is.function isStr(v: any): v is string
//  Record<K, V>                   A strict dictionary of keys and values.        Record<"chrome", number>
//
//  [ 2. TYPESCRIPT UTILITIES ]
//  Partial<T>                     Takes a strict object and makes all fields opt.Partial<Config>
//  Required<T>                    Takes an object and forces all fields required.Required<Config>
//  Pick<T, K>                     Create a new type keeping only chosen fields.  Pick<Config, 'url'>
//  Omit<T, K>                     Create a new type but delete chosen fields.    Omit<Config, 'id'>
//  Exclude<T, U>                  Remove a specific type from a mixed list.      Exclude<"a" | "b" | null, null>
//  NonNullable<T>                 Guarantees a value will never be null.         NonNullable<string | null>
//  ReturnType<T>                  Extracts whatever a function is going to spit. ReturnType<typeof get>
//  Awaited<T>                     Extracts the actual data inside a Promise.     Awaited<Promise<string>>
//
//  [ 3. CLI COMMANDS (THE WORKBENCH) ]
//  npx playwright install         Downloads the browsers. Run this on setup.     npx playwright install
//  npx playwright install ...     Downloads browsers AND fixes missing OS files. npx playwright install --with-deps
//  npx playwright codegen         Opens a browser and writes code as you click.  npx playwright codegen example.com
//  npx playwright show-report     Opens the HTML test report in your browser.    npx playwright show-report
//  npx playwright show-trace      Opens the time-travel debugger. Lifesaver.     npx playwright show-trace trace.zip
//  npx playwright clear-cache     Nukes downloaded browsers if things get weird. npx playwright clear-cache
//
//  [ 4. CLI COMMANDS (THE RUNNER) ]
//  npx playwright test            Runs all tests in the background (headless).   npx playwright test
//  npx playwright test --ui       Opens the beautiful UI dashboard to run tests. npx playwright test --ui
//  npx playwright test --headed   Runs tests visibly so you can watch them run.  npx playwright test --headed
//  npx playwright test --debug    Runs tests step-by-step. Great for fixing bugs.npx playwright test --debug
//  npx playwright test --list     Lists all your tests without actually running. npx playwright test --list
//  --project="..."                Run tests on one specific browser config.      npx playwright test --project="chromium"
//  --config="..."                 Point the runner to a different config file.   npx playwright test --config=ci.config.ts
//  --grep "@smoke"                Run only tests tagged with a specific word.    npx playwright test -g "@smoke"
//  --grep-invert "@skip"          Run everything EXCEPT tests with this tag.     npx playwright test --grep-invert "@skip"
//  --update-snapshots             Overrides old screenshots with new baselines.  npx playwright test --update-snapshots
//  --workers=n                    How many tests to run at once. Don't fry CPU.  npx playwright test --workers=4
//  --retries=n                    Band-aid for flaky tests. Retries on failure.  npx playwright test --retries=2
//  --max-failures=n               Stop the whole suite early if N tests fail.    npx playwright test --max-failures=1
//  --repeat-each=n                Run the exact same test N times. Flake hunt.   npx playwright test --repeat-each=3
//  --shard=1/4                    Splits tests across 4 servers for CI/CD speed. npx playwright test --shard=1/4
//  --pass-with-no-tests           Don't crash the pipeline if zero tests match.  npx playwright test --pass-with-no-tests
//  merge-reports                  Glues CI/CD sharded reports back into one.     npx playwright merge-reports ./blob
//
//  [ 5. GLOBAL SETTINGS (playwright.config.ts) ]
//  testDir: '...'                 Tells the runner which folder holds the tests. testDir: './e2e'
//  timeout: ms                    Max time a single test can run before we kill. timeout: 60 * 1000
//  globalTimeout: ms              Max time for the whole suite. Stops hang-ups.  globalTimeout: 600000
//  expect: { timeout }            Max time Playwright waits for an assertion.    expect: { timeout: 10000 }
//  retries: n                     Global retry count. Usually 2 in CI, 0 locally.retries: 2
//  workers: n                     Global parallel limit. Default is half your CPUworkers: 4
//  forbidOnly: boolean            Fails the build if a dev left test.only() in.  forbidOnly: !!process.env.CI
//  reporter: [...]                How to output results (HTML, JSON, Terminal).  reporter: [['html'], ['json']]
//  projects: [...]                Define environments (Chrome, Firefox, Mobile). projects: [{ name: 'api', testDir: './api' }]
//
//  [ 6. BROWSER SETTINGS (The "use: {}" Object) ]
//  baseURL: '...'                 Base URL so you don't type it in every test.   use: { baseURL: 'https://example.com' }
//  trace: '...'                   When to record the time-travel debug files.    use: { trace: 'retain-on-failure' }
//  video: '...'                   When to record MP4 videos of the test run.     use: { video: 'on-first-retry' }
//  screenshot: '...'              When to take a picture of the screen.          use: { screenshot: 'only-on-failure' }
//  viewport: { w, h }             Forces the browser window to a specific size.  use: { viewport: { width: 1920, height: 1080 } }
//  ignoreHTTPSErrors: boolean     Stops tests from failing on bad SSL certs.     use: { ignoreHTTPSErrors: true }
//  actionTimeout: ms              Max wait time for a specific click or typing.  use: { actionTimeout: 15000 }
//
//  [ 7. AUTHENTICATION (Stop Logging In Via UI) ]
//  context.storageState()         Saves your logged-in cookies to a JSON file.   await page.context().storageState({ path: 'a.json' })
//  test.use({ storageState })     Tells one test file to use the saved cookies.  test.use({ storageState: 'auth.json' })
//  use: { storageState: '' }      Tells ALL tests globally to use the cookies.   use: { storageState: 'auth.json' }
//  browser.newContext()           Manually launch an incognito tab with cookies. await browser.newContext({ storageState: 'a.json' })
//
//  [ 8. PROJECT SETUP & CLEANUP ]
//  globalSetup: '...'             Old way: run a script before tests even start. globalSetup: require.resolve('./setup')
//  dependencies: [...]            New way: run the 'setup' project before tests. projects: [{ name: 'e2e', dependencies: ['setup'] }]
//  teardown: '...'                New way: run a cleanup project when tests end. projects: [{ name: 'setup', teardown: 'cleanup' }]
//  await use()                    The pivot. Code before sets up, code after ripsasync ({ page }, use) => { await use(page); /* clean */ }
//
//  [ 9. TEST HOOKS & SCOPES (The Runner) ]
//  test.describe()                A folder to group related tests together.      test.describe('Suite', () => { /* tests */ })
//  test.beforeAll()               Runs ONE time before the block of tests starts.test.beforeAll(async () => { await seedDB() })
//  test.beforeEach()              Runs before EVERY SINGLE TEST to set state up. test.beforeEach(async ({ page }) => { await login() })
//  test.afterEach()               Runs after EVERY SINGLE TEST to wipe test data.test.afterEach(async ({ page }) => { await logout() })
//  test.afterAll()                Runs ONE time when all tests in the block end. test.afterAll(async () => { await cleanDB() })
//  test('...', { tag: '@a' })     Tag a test so you can run it via CLI later.    test('Login', { tag: ['@smoke'] }, async () => {})
//  test.step()                    Groups code in the HTML report for readability.await test.step("Create", async () => { return 1 })
//  test.setTimeout(ms)            Give one specific, slow test a longer leash.   test.setTimeout(120000)
//  test.fail()                    Tell Playwright this test is SUPPOSED to fail. test.fail(!!process.env.BUG_123)
//  test.fixme()                   Skips the test and marks it as "needs fixing." test.fixme(true, 'Backend is down')
//
//  [ 10. EVENT HOOKS (The Browser) ]
//  page.on('domcontentloaded')    Fires when the raw HTML is fully downloaded.   page.on('domcontentloaded', () => console.log('Ready'))
//  page.on('load')                Fires when everything (images/CSS) is done.    page.on('load', () => console.log('Loaded'))
//  page.on('request')             Fires every time the browser asks for a file.  page.on('request', req => console.log('>>', req.url()))
//  page.on('response')            Fires every time the browser gets a file back. page.on('response', res => console.log('<<', res.status()))
//
//  [ 11. RESOURCE DISPOSAL (Clean Up Memory) ]
//  page.close()                   Closes the current tab.                        await page.close()
//  context.close()                Closes the incognito session completely.       await context.close()
//  browser.close()                Shuts down the entire physical browser engine. await browser.close()
//  request.dispose()              Frees up RAM used by the API testing tool.     await request.dispose()
//  context.clearCookies()         Nukes all cookies so you are logged out.       await context.clearCookies()
//  context.clearPermissions()     Resets location, camera, and mic permissions.  await context.clearPermissions()
//
//  [ 12. MODERN LOCATORS (The Gold Standard) ]
//  .getByRole()                   Finds elements how screen readers see them.    page.getByRole("button", { name: 'Submit' })
//  .getByPlaceholder()            Finds empty inputs by their ghost text.        page.getByPlaceholder("Enter email...")
//  .getByLabel()                  Finds inputs connected to an HTML label.       page.getByLabel("Password")
//  .getByAltText()                Finds images by their hidden description tag.  page.getByAltText("Company Logo")
//  .getByTitle()                  Finds elements by the hover-tooltip text.      page.getByTitle("Close window")
//  .getByTestId()                 Finds elements using custom dev-added tags.    page.getByTestId("submit-btn")
//  .getByText()                   Finds elements by the visible text on screen.  page.getByText("Welcome", { exact: true })
//
//  [ 13. LOCATOR FILTERING & LAYOUT ]
//  .filter({ hasText })           Narrows a list down to items holding this text.rows.filter({ hasText: "Active" })
//  .filter({ has })               Narrows a list down to items holding a child.  rows.filter({ has: page.locator('svg') })
//  .and()                         Element MUST match the left AND right locator. page.getByRole('button').and(page.getByTitle('x'))
//  .or()                          Element can match EITHER left OR right locator.page.locator('button').or(page.locator('a'))
//  :right-of()                    Finds the element visually to the right.       page.locator('input:right-of(:text("User"))')
//  frameLocator()                 Pierces the wall of an iFrame safely.          page.frameLocator('#auth').getByRole('textbox')
//
//  [ 14. CORE ACTIONS (Human Interactions) ]
//  .goto()                        Navigate the browser to a specific URL.        await page.goto('/home')
//  .click()                       Playwright waits for it to be clickable, then..await btn.click()
//  .fill()                        Wipes an input instantly, then types text.     await input.fill("text")
//  .clear()                       Empties an input box completely.               await input.clear()
//  .pressSequentially()           Simulates a real human typing on a keyboard.   await input.pressSequentially("text", { delay: 100 })
//  .check()                       Safely ticks a checkbox or radio button.       await box.check()
//  .selectOption()                Picks an option from a native HTML dropdown.   await drop.selectOption('US')
//  .hover()                       Moves the invisible mouse over an element.     await menu.hover()
//  .focus()                       Puts the flashing cursor into an input box.    await input.focus()
//  .dragTo()                      Clicks, drags, and drops on a target element.  await source.dragTo(target)
//  .setInputFiles()               Uploads a file without opening the OS window.  await upload.setInputFiles('data.csv')
//  .highlight()                   Draws a red box around the element (Debugging).await locator.highlight()
//
//  [ 15. MULTI-TAB, POPUPS & DOWNLOADS ]
//  context.waitForEvent('page')   Wait for a new tab to open, then capture it.   const [tab] = await Promise.all([context.waitForEvent('page'), btn.click()])
//  page.waitForEvent('popup')     Wait for an old-school popup window to open.   const [pop] = await Promise.all([page.waitForEvent('popup'), btn.click()])
//  page.waitForEvent('download')  Wait for a file download to start, capture it. const [dl]  = await Promise.all([page.waitForEvent('download'), btn.click()])
//  download.saveAs()              Move the downloaded temp file to your PC.      await dl.saveAs('/path/to/save.pdf')
//
//  [ 16. WAITS, STATES & HANDLERS ]
//  page.addLocatorHandler()       Auto-smashes annoying cookie popups for you.   await page.addLocatorHandler(btn, async () => await btn.click())
//  .waitForLoadState()            Wait for network to go completely quiet.       await page.waitForLoadState('networkidle')
//  .waitForURL()                  Wait for the URL in the address bar to change. await page.waitForURL('**/dashboard')
//  page.on('dialog')              Auto-accepts ugly browser alert boxes.         page.on('dialog', dialog => dialog.accept())
//
//  [ 17. DATA EXTRACTION ]
//  .all()                         Grab all matching elements as an array.        const btns = await page.getByRole('button').all()
//  .allInnerTexts()               Extract text from all matching elements at onceconst texts = await list.allInnerTexts()
//  .getAttribute()                Read the hidden HTML attributes (href, src).   const link = await aTag.getAttribute('href')
//  .inputValue()                  Read the text that a user typed into an input. const text = await emailInput.inputValue()
//  page.setContent()              Inject custom HTML straight into the browser.  await page.setContent('<h1>Hello</h1>')
//  page.pdf()                     Save the current page as a PDF (Chromium only).await page.pdf({ path: 'report.pdf' })
//
//  [ 18. NETWORK, APIS & TIME CONTROL ]
//  .waitForResponse()             Wait for the UI to finish a specific API call. await page.waitForResponse('**/api/v1/users')
//  .route()                       Intercept network calls to block/modify them.  await page.route('**/api/*', route => route.abort())
//  .route().fulfill()             Fake an API response if the backend is broken. await page.route('**/data', r => r.fulfill({ json: { id: 1 } }))
//  page.on('websocket')           Listen to live WebSocket data streams.         page.on('websocket', ws => ws.on('framesent', f => console.log(f)))
//  page.clock.install()           Time travel. Fake the system clock.            await page.clock.install({ time: new Date('2026-05-24') })
//  request.get()                  Fetch data straight from an API. Fast setup.   await request.get('/api/user')
//  request.post()                 Send new data straight to an API. Fast setup.  await request.post('/api/user', { data: { name: 'A' } })
//  request.put()                  Update data on an API.                         await request.put('/api/user/1')
//  request.delete()               Delete data on an API. Wipes test data clean.  await request.delete('/api/user/1')
//
//  [ 19. IRONCLAD ASSERTIONS (EXPECT) ]
//  expect().toBeVisible()         Check if the element is actually on screen.    await expect(btn).toBeVisible()
//  expect().toBeHidden()          Check if the element has vanished.             await expect(modal).toBeHidden()
//  expect().toBeAttached()        Check if it exists in HTML (even if invisible).await expect(node).toBeAttached()
//  expect().toBeChecked()         Check if a checkbox is currently ticked.       await expect(checkbox).toBeChecked()
//  expect().toBeDisabled()        Check if a button is greyed out and locked.    await expect(btn).toBeDisabled()
//  expect().toHaveText()          Check if text matches EXACTLY. Case sensitive. await expect(msg).toHaveText("Success")
//  expect().toHaveValue()         Check the text typed inside an input box.      await expect(emailInput).toHaveValue("a@b.com")
//  expect().toHaveCount()         Verify exactly how many items are in a list.   await expect(listItems).toHaveCount(5)
//  expect().toBeOK()              Verify an API response returned a 200 series.  expect(response).toBeOK()
//  expect().toHaveScreenshot()    Visual test. Compare page to saved picture.    await expect(page).toHaveScreenshot('dashboard.png')
//  expect.toPass()                Keep retrying a block of code until it passes. await expect(async () => { expect(await count()).toBe(1) }).toPass()
//  expect.poll()                  Keep running a custom function until it's true.await expect.poll(() => checkDBStatus()).toBe('Ready')
//  expect.soft()                  Logs a failure, but keeps running the test.    expect.soft(logo).toBeVisible()
//
//  [ 20. ADVANCED LOCATORS & COLLECTIONS ]
//  .first()                       Grab the first one. Careful, it hides bugs.    page.locator('.item').first()
//  .last()                        Grab the last matched element on the page.     page.locator('.item').last()
//  .nth(n)                        Grab element by exact index. Avoid if possible.page.locator('.item').nth(2)
//  locator.count()                Count how many exist before doing an action.   const total = await rows.count()
//  locator chaining               Chain locators to drill down into the DOM.     page.getByRole('table').getByText('Active')
//
//  [ 21. BROWSER JAVASCRIPT (The Dark Arts) ]
//  page.evaluate()                Run raw JavaScript in the browser.             await page.evaluate(() => localStorage.clear())
//  locator.evaluate()             Run raw JavaScript on one specific element.    await btn.evaluate(el => el.textContent)
//  locator.evaluateAll()          Run raw JavaScript on an array of elements.    await rows.evaluateAll(r => r.length)
//
//  [ 22. TEST CONTROL & METADATA ]
//  test.skip()                    Skip this test conditionally. Fix it later.    test.skip(browserName === 'webkit')
//  test.slow()                    Triples the timeout for this one heavy test.   test.slow()
//  test.info()                    Extract test name, retries, and status data.   test.info().title
//  test.describe.configure()      Force how a block of tests executes.           test.describe.configure({ mode: 'serial' })
//  mode: 'serial'                 Run tests one-by-one. If one fails, stop.      test.describe.configure({ mode: 'serial' })
//  mode: 'parallel'               Run tests at the same time. Default mode.      test.describe.configure({ mode: 'parallel' })
//
//  [ 23. REPORTS & ATTACHMENTS ]
//  test.info().attach()           Attach text logs or files to the HTML report.  await test.info().attach('log', { body: 'error' })
//  page.screenshot()              Take a picture of the whole page manually.     await page.screenshot({ path: 'a.png' })
//  locator.screenshot()           Take a picture of just one specific element.   await btn.screenshot({ path: 'btn.png' })
//
//  [ 24. API REQUEST CONTEXT (Skipping the UI) ]
//  request.newContext()           Create a standalone API client, no UI needed.  const api = await request.newContext()
//  response.json()                Parse the backend data into a JSON object.     const data = await response.json()
//  response.status()              Get the HTTP status code number (200, 404).    response.status()
//
//  [ 25. NETWORK INTERCEPTION ]
//  route.continue()               You paused a request, now let it finish.       route.continue()
//  route.fetch()                  Fetch real response, tweak it, send to browser.const res = await route.fetch()
//
//  [ 26. COOKIE MANIPULATION ]
//  context.cookies()              Read the cookies currently in the browser.     await context.cookies()
//  context.addCookies()           Inject cookies manually to skip login screens. await context.addCookies([])
//
//  [ 27. FILES, DOWNLOADS & UPLOADS ]
//  filechooser                    Listen for the OS file upload window.          page.waitForEvent('filechooser')
//  download.path()                Find where Playwright hid the downloaded file. await download.path()
//
//  [ 28. RAW KEYBOARD & MOUSE (When Locators Fail) ]
//  keyboard.press()               Hit a system key like 'Enter' or 'Escape'.     await page.keyboard.press('Enter')
//  keyboard.type()                Type raw text without clearing the input first.await page.keyboard.type('hello')
//  mouse.move()                   Move mouse to exact X/Y pixels. Fragile.       await page.mouse.move(100, 200)
//  mouse.click()                  Click exact X/Y pixels. Desperation move.      await page.mouse.click(100, 200)
//
//  [ 29. FRAMES & IFRAMES ]
//  page.frames()                  Get an array of every iframe on the page.      page.frames()
//
//  [ 30. ERROR HANDLING ]
//  page.on('console')             Catch what the Devs logged to the console.     page.on('console', msg => console.log(msg.text()))
//  page.on('pageerror')           Catch silent JavaScript crashes in the browser.page.on('pageerror', err => console.log(err))
//
//  [ 31. WAITS & STABILITY ]
//  waitForSelector()              The old way. Use locator().waitFor() instead.  await page.waitForSelector('#login')
//  locator.waitFor()              Wait for element to hit a specific state.      await btn.waitFor({ state: 'visible' })
//
//  [ 32. ENVIRONMENT VARIABLES ]
//  process.env['KEY']             Keep secrets out of your code. Read them here. process.env['BASE_URL']
//
//  [ 33. FIXTURES & FRAMEWORK DESIGN ]
//  base.extend()                  Build reusable tools injected into every test. export const test = base.extend({})
//  await use()                    The core of fixtures. Pass the tool to the testawait use(page)
//
//  [ 34. TYPESCRIPT GENERICS ]
//  <T>                            Placeholder types. Don't overcomplicate this.  function get<T>(v: T): T
//
//  [ 35. TYPESCRIPT ENUMS ]
//  enum                           Fixed lists, like PASS or FAIL. Stops typos.   enum Status { PASS, FAIL }
//
//  [ 36. TYPESCRIPT INTERFACES & TYPES ]
//  interface                      A strict blueprint for your data objects.      interface User { name: string }
//  type                           A custom, reusable data shape.                 type User = { name: string }
//
//  [ 37. TYPESCRIPT CLASS FEATURES ]
//  readonly                       Lock a variable so juniors can't change it.    readonly baseUrl: string
//  public                         Accessible anywhere. The default.              public login()
//  private                        Accessible only inside the class itself.       private token
//  protected                      Accessible in child classes but hidden outside.protected page
//  override                       Change a parent's method in your child class.  override navigate()
//
//  [ 38. FUNCTION FEATURES ]
//  optional param (?)             Parameter not mandatory. Good for flexibility. function run(name?: string)
//  default param                  Fallback value if nothing is passed in.        function run(retry = 3)
//  destructuring                  Extract fields from an object instantly.       const { page } = fixture
//
//  [ 39. ASYNC PROGRAMMING ]
//  async                          Marks a function so it can use 'await'.        async function login()
//  await                          Pause the code until the Promise finishes.     await page.click()
//  Promise.race()                 Run multiple asyncs. First one finished wins.  await Promise.race([a, b])
//
//  [ 40. COMMON ENTERPRISE FRAMEWORK TOPICS ]
//  POM                            Page Object Model. Keep locators out of tests. class LoginPage {}
//  reusable utilities             Shared helper methods for common actions.      export async function wait()
//  data-driven testing            Run the same test looping over external data.  users.forEach(user => {})
//  CI/CD                          Automated pipelines. Run tests on every push.  GitHub Actions / Jenkins
//  flaky tests                    Tests that fail randomly. Bane of my existence.timing/network issues
//  parallel execution             Run tests at the same time to save CI minutes. workers: 4
// ══════════════════════════════════════════════════════════════════════════════════════════════════════════════