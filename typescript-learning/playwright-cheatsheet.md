//
//  KEYWORD / SYNTAX               WHAT IT DOES                      EXAMPLE IN CODE
//  ─────────────────────────────  ────────────────────────────────  ────────────────────────────────────
//
//  [ 1. TYPESCRIPT & JS NATIVES ]
//  const                          variable (cannot change)          const timeout = 5000
//  let                            variable (can change)             let retries = 0
//  ?.                             safe property access              data?.user?.name
//  ??                             fallback if null/undefined        text ?? "default fallback"
//  arr.map()                      modify each array item            const ids = users.map(u => u.id)
//  arr.filter()                   keep matching array items         const active = users.filter(u => u.on)
//  Promise.all()                  run multiple tasks at once        await Promise.all([req1, req2])
//  for (const x of arr)           safe loop for async/await         for (const item of list) { await... }
//  val is type                    custom type checker               function isStr(v: any): v is string
//  Record<K, V>                   key-value object type             Record<"chrome", number>
//
//  [ 2. TYPESCRIPT UTILITIES ]
//  Partial<T>                     make all fields optional          Partial<Config>
//  Required<T>                    make all fields required          Required<Config>
//  Pick<T, K>                     keep only chosen fields           Pick<Config, 'url'>
//  Omit<T, K>                     remove chosen fields              Omit<Config, 'id'>
//  Exclude<T, U>                  remove specific types             Exclude<"a" | "b" | null, null>
//  NonNullable<T>                 remove null/undefined             NonNullable<string | null>
//  ReturnType<T>                  get function's return type        ReturnType<typeof get>
//  Awaited<T>                     get type inside a Promise         Awaited<Promise<string>>
//
//  [ 3. PLAYWRIGHT CLI COMMANDS (INSTALLATION & TOOLS) ]
//  npx playwright install         download test browsers            npx playwright install
//  npx playwright install ...     download browsers + OS needs      npx playwright install --with-deps
//  npx playwright codegen         record clicks to write code       npx playwright codegen example.com
//  npx playwright show-report     view test results in browser      npx playwright show-report
//  npx playwright show-trace      view detailed test replay         npx playwright show-trace trace.zip
//  npx playwright clear-cache     delete downloaded browsers        npx playwright clear-cache
//
//  [ 4. PLAYWRIGHT CLI COMMANDS (TEST RUNNER) ]
//  npx playwright test            run tests invisibly               npx playwright test
//  npx playwright test --ui       open test runner dashboard        npx playwright test --ui
//  npx playwright test --headed   run tests so you can see it       npx playwright test --headed
//  npx playwright test --debug    run tests step-by-step            npx playwright test --debug
//  npx playwright test --list     show all tests but don't run      npx playwright test --list
//  --project="..."                run only a specific browser       npx playwright test --project="chromium"
//  --config="..."                 use a different config file       npx playwright test --config=ci.config.ts
//  --grep "@smoke"                run tests with specific tag       npx playwright test -g "@smoke"
//  --grep-invert "@skip"          skip tests with specific tag      npx playwright test --grep-invert "@skip"
//  --update-snapshots             save new screenshot baseline      npx playwright test --update-snapshots
//  --workers=n                    run N tests at the same time      npx playwright test --workers=4
//  --retries=n                    retry failed tests N times        npx playwright test --retries=2
//  --max-failures=n               stop running after N fails        npx playwright test --max-failures=1
//  --repeat-each=n                run the same test N times         npx playwright test --repeat-each=3
//  --shard=1/4                    split tests for cloud server      npx playwright test --shard=1/4
//  --pass-with-no-tests           don't crash if no test found      npx playwright test --pass-with-no-tests
//  merge-reports                  combine multiple reports          npx playwright merge-reports ./blob
//
//  [ 5. PLAYWRIGHT.CONFIG.TS — GLOBAL SETTINGS ]
//  testDir: '...'                 folder where tests are saved      testDir: './e2e'
//  timeout: ms                    max time allowed per test         timeout: 60 * 1000
//  globalTimeout: ms              max time for all tests            globalTimeout: 600000
//  expect: { timeout }            max wait time for expect()        expect: { timeout: 10000 }
//  retries: n                     times to retry if test fails      retries: 2
//  workers: n                     how many tests run at once        workers: 4
//  forbidOnly: boolean            block test.only() from cloud      forbidOnly: !!process.env.CI
//  reporter: [...]                how to save test results          reporter: [['html'], ['json']]
//  projects: [...]                setup browsers & environs         projects: [{ name: 'api', testDir: './api' }]
//
//  [ 6. PLAYWRIGHT.CONFIG.TS — THE "use: {}" OBJECT ]
//  baseURL: '...'                 default starting website URL      use: { baseURL: 'https://example.com' }
//  trace: '...'                   when to record test replays       use: { trace: 'retain-on-failure' }
//  video: '...'                   when to record test videos        use: { video: 'on-first-retry' }
//  screenshot: '...'              when to save test pictures        use: { screenshot: 'only-on-failure' }
//  viewport: { w, h }             set browser window size           use: { viewport: { width: 1920, height: 1080 } }
//  ignoreHTTPSErrors: boolean     ignore insecure website errs      use: { ignoreHTTPSErrors: true }
//  actionTimeout: ms              max wait time for click/type      use: { actionTimeout: 15000 }
//
//  [ 7. AUTHENTICATION & STORAGE STATE ]
//  context.storageState()         save login cookies to file        await page.context().storageState({ path: 'a.json' })
//  test.use({ storageState })     use saved login for 1 file        test.use({ storageState: 'auth.json' })
//  use: { storageState: '' }      use saved login for all tests     use: { storageState: 'auth.json' }
//  browser.newContext()           open browser with saved auth      await browser.newContext({ storageState: 'a.json' })
//
//  [ 8. PROJECT SETUP & FIXTURE LIFECYCLE ]
//  globalSetup: '...'             script that runs BEFORE ALL       globalSetup: require.resolve('./setup')
//  dependencies: [...]            tests that must run first         projects: [{ name: 'e2e', dependencies: ['setup'] }]
//  teardown: '...'                cleanup script after tests        projects: [{ name: 'setup', teardown: 'cleanup' }]
//  await use()                    pause here to run the test        async ({ page }, use) => { await use(page); /* clean */ }
//
//  [ 9. TEST HOOKS, TAGS & SCOPES (THE RUNNER) ]
//  test.describe()                group related tests together      test.describe('Suite', () => { /* tests */ })
//  test.beforeAll()               runs ONE time before tests        test.beforeAll(async () => { await seedDB() })
//  test.beforeEach()              runs before EACH test starts      test.beforeEach(async ({ page }) => { await login() })
//  test.afterEach()               runs after EACH test ends         test.afterEach(async ({ page }) => { await logout() })
//  test.afterAll()                runs ONE time after tests         test.afterAll(async () => { await cleanDB() })
//  test('...', { tag: '@a' })     add a tag to a specific test      test('Login', { tag: ['@smoke'] }, async () => {})
//  test.step()                    group code into a neat step       await test.step("Create", async () => { return 1 })
//  test.setTimeout(ms)            give this test more time          test.setTimeout(120000)
//  test.fail()                    tell Playwright it will fail      test.fail(!!process.env.BUG_123)
//  test.fixme()                   skip test because it broken       test.fixme(true, 'Backend is down')
//
//  [ 10. PAGE LIFECYCLE & EVENT HOOKS (THE BROWSER) ]
//  page.on('domcontentloaded')    trigger when HTML loads           page.on('domcontentloaded', () => console.log('Ready'))
//  page.on('load')                trigger when everything load      page.on('load', () => console.log('Loaded'))
//  page.on('request')             trigger when browser asks         page.on('request', req => console.log('>>', req.url()))
//  page.on('response')            trigger when browser gets         page.on('response', res => console.log('<<', res.status()))
//
//  [ 11. RESOURCE DISPOSAL & CACHE CLEARING ]
//  page.close()                   close current tab                 await page.close()
//  context.close()                close incognito session           await context.close()
//  browser.close()                close the whole browser app       await browser.close()
//  request.dispose()              clean up API memory               await request.dispose()
//  context.clearCookies()         delete all cookies                await context.clearCookies()
//  context.clearPermissions()     reset camera/mic permissions      await context.clearPermissions()
//
//  [ 12. MODERN LOCATORS ]
//  .getByRole()                   find by element type (btn)        page.getByRole("button", { name: 'Submit' })
//  .getByPlaceholder()            find by empty input text          page.getByPlaceholder("Enter email...")
//  .getByLabel()                  find by form label text           page.getByLabel("Password")
//  .getByAltText()                find image by its alt text        page.getByAltText("Company Logo")
//  .getByTitle()                  find by hover title text          page.getByTitle("Close window")
//  .getByTestId()                 find by special test ID tag       page.getByTestId("submit-btn")
//  .getByText()                   find by visible text on page      page.getByText("Welcome", { exact: true })
//
//  [ 13. ADVANCED LOCATOR FILTERING & LAYOUT ]
//  .filter({ hasText })           keep only if it has text          rows.filter({ hasText: "Active" })
//  .filter({ has })               keep only if it has child         rows.filter({ has: page.locator('svg') })
//  .and()                         must match THIS and THAT          page.getByRole('button').and(page.getByTitle('x'))
//  .or()                          must match THIS or THAT           page.locator('button').or(page.locator('a'))
//  :right-of()                    find element to the right         page.locator('input:right-of(:text("User"))')
//  frameLocator()                 go inside an iframe window        page.frameLocator('#auth').getByRole('textbox')
//
//  [ 14. CORE ACTIONS, INTERACTIONS & VISUALS ]
//  .goto()                        go to a website                   await page.goto('/home')
//  .click()                       click on something                await btn.click()
//  .fill()                        type text instantly               await input.fill("text")
//  .clear()                       delete text inside input box      await input.clear()
//  .pressSequentially()           type text slowly like human       await input.pressSequentially("text", { delay: 100 })
//  .check()                       check a box or radio button       await box.check()
//  .selectOption()                pick option from a dropdown       await drop.selectOption('US')
//  .hover()                       move mouse over element           await menu.hover()
//  .focus()                       select input without click        await input.focus()
//  .dragTo()                      drag item and drop somewhere      await source.dragTo(target)
//  .setInputFiles()               upload file from computer         await upload.setInputFiles('data.csv')
//  .highlight()                   draw a red box round element      await locator.highlight()
//
//  [ 15. MULTI-TAB, POPUPS & DOWNLOADS ]
//  context.waitForEvent('page')   wait for a new tab to open        const [tab] = await Promise.all([context.waitForEvent('page'), btn.click()])
//  page.waitForEvent('popup')     wait for a popup window           const [pop] = await Promise.all([page.waitForEvent('popup'), btn.click()])
//  page.waitForEvent('download')  wait for a file to download       const [dl]  = await Promise.all([page.waitForEvent('download'), btn.click()])
//  download.saveAs()              save file to your computer        await dl.saveAs('/path/to/save.pdf')
//
//  [ 16. WAITS, STATES, DIALOGS & HANDLERS ]
//  page.addLocatorHandler()       auto-click annoying popups        await page.addLocatorHandler(btn, async () => await btn.click())
//  .waitForLoadState()            wait for page to stop load        await page.waitForLoadState('networkidle')
//  .waitForURL()                  wait until URL matches            await page.waitForURL('**/dashboard')
//  page.on('dialog')              auto-accept browser alerts        page.on('dialog', dialog => dialog.accept())
//
//  [ 17. DATA EXTRACTION, RAW HTML & PDF ]
//  .all()                         get list of all matches           const btns = await page.getByRole('button').all()
//  .allInnerTexts()               get text from all matches         const texts = await list.allInnerTexts()
//  .getAttribute()                get value of href, src, etc       const link = await aTag.getAttribute('href')
//  .inputValue()                  get text typed inside input       const text = await emailInput.inputValue()
//  page.setContent()              put custom HTML onto page         await page.setContent('<h1>Hello</h1>')
//  page.pdf()                     save the page as a PDF file       await page.pdf({ path: 'report.pdf' })
//
//  [ 18. NETWORK, APIS, WEBSOCKETS & TIME ]
//  .waitForResponse()             wait for site to get API          await page.waitForResponse('**/api/v1/users')
//  .route()                       block or change network call      await page.route('**/api/*', route => route.abort())
//  .route().fulfill()             fake an API response              await page.route('**/data', r => r.fulfill({ json: { id: 1 } }))
//  page.on('websocket')           listen to live socket data        page.on('websocket', ws => ws.on('framesent', f => console.log(f)))
//  page.clock.install()           freeze or fake system time        await page.clock.install({ time: new Date('2026-05-24') })
//  request.get()                  fetch data from an API            await request.get('/api/user')
//  request.post()                 send new data to an API           await request.post('/api/user', { data: { name: 'A' } })
//  request.put()                  update data on an API             await request.put('/api/user/1')
//  request.delete()               delete data on an API             await request.delete('/api/user/1')
//
//  [ 19. ASSERTIONS (EXPECT) ]
//  expect().toBeVisible()         check if element is on screen     await expect(btn).toBeVisible()
//  expect().toBeHidden()          check if element is invisible     await expect(modal).toBeHidden()
//  expect().toBeAttached()        check if element exist in DOM     await expect(node).toBeAttached()
//  expect().toBeChecked()         check if box is ticked            await expect(checkbox).toBeChecked()
//  expect().toBeDisabled()        check if button is greyed out     await expect(btn).toBeDisabled()
//  expect().toHaveText()          check if text match exactly       await expect(msg).toHaveText("Success")
//  expect().toHaveValue()         check text inside an input        await expect(emailInput).toHaveValue("a@b.com")
//  expect().toHaveCount()         check how many items exist        await expect(listItems).toHaveCount(5)
//  expect().toBeOK()              check if API call successful      expect(response).toBeOK()
//  expect().toHaveScreenshot()    compare page to saved picture     await expect(page).toHaveScreenshot('dashboard.png')
//  expect.toPass()                keep trying code until pass       await expect(async () => { expect(await count()).toBe(1) }).toPass()
//  expect.poll()                  keep checking custom code         await expect.poll(() => checkDBStatus()).toBe('Ready')
//  expect.soft()                  log fail but keep test run        expect.soft(logo).toBeVisible()
//
// ══════════════════════════════════════════════════════════════════════════════════════════════════════