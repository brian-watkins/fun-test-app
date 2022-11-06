import assert from "assert";
import { Action, behavior, effect, example, fact, Observation, Presupposition, step } from "esbehavior";
import { Page } from "playwright";
import { TestApp, testAppContext } from "./testApp";

export default (page: Page) =>
  behavior("Click Counter", [
    example(testAppContext(page))
      .description("No clicks")
      .script({
        suppose: [
          theHomePageIsVisible()
        ],
        observe: [
          effect(`the counter shows zero clicks`, async (testApp) => {
            const counterText = await testApp.element("[data-counter-text]").text()
            assert.equal(counterText, "You clicked 0 times!")
          })
        ]
      }),
    example(testAppContext(page))
      .description("Some clicks")
      .script({
        suppose: [
          theHomePageIsVisible()
        ],
        perform: [
          clickTheButton(3)
        ],
        observe: [
          effect(`the counter shows three clicks`, async (testApp) => {
            const counterText = await testApp.element("[data-counter-text]").text()
            assert.equal(counterText, "You clicked 3 times!")
          })
        ]
      }),
    example(testAppContext(page))
      .description("More than 5 clicks")
      .script({
        suppose: [
          theHomePageIsVisible()
        ],
        perform: [
          clickTheButton(7)
        ],
        observe: [
          effect(`the counter repeats after 5 clicks`, async (testApp) => {
            const counterText = await testApp.element("[data-counter-text]").text()
            assert.equal(counterText, "You clicked 2 times!")
          })
        ]
      })
  ])

function theHomePageIsVisible(): Presupposition<TestApp> {
  return fact("the home page is visible", async (testApp) => {
    await testApp.start()
  })
}

function clickTheButton(times: number): Action<TestApp> {
  return step(`the button is clicked ${times} times`, async (testApp) => {
    await testApp.elementWithText("Click me!").click(times)
  })
}