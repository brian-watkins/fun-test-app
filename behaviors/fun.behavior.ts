import assert from "assert";
import { behavior, effect, example, fact } from "esbehavior";
import { Page } from "playwright";

export default (page: Page) =>
  behavior("Click Counter", [
    example()
      .description("No clicks")
      .script({
        suppose: [
          fact("the home page is visible", async () => {
            await page.evaluate(() => {
              window.showTestDisplay()
            })
          })
        ],
        observe: [
          effect("the counter shows zero clicks", async () => {
            const counterText = await page.locator("[data-counter-text]").innerText({ timeout: 100 })
            assert.equal(counterText, "You clicked 0 times!")
          })
        ]
      })
  ])