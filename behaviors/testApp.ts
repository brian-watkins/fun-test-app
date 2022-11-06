import { Context } from "esbehavior";
import { Locator, Page } from "playwright";

export function testAppContext(page: Page): Context<TestApp> {
  return {
    init: () => new TestApp(page)
  }
}

export class TestApp {
  constructor(private page: Page) {}

  async start() {
    await this.page.evaluate(() => {
      window.showTestDisplay()
    })
  }

  pause(): Promise<void> {
    return this.page.pause()
  }

  elementWithText(text: string): DisplayElement {
    return new DisplayElement(this.page.locator(`text=${text}`))
  }

  element(selector: string): DisplayElement {
    return new DisplayElement(this.page.locator(selector))
  }
}

export class DisplayElement {
  constructor (private locator: Locator) {}

  async click(times: number): Promise<void> {
    return await this.locator.click({ clickCount: times, timeout: 100 })
  }

  async text(): Promise<string> {
    return await this.locator.innerText()
  }
}