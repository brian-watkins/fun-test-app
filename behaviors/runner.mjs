import { createServer } from "vite"
import { chromium } from "playwright"
import { validate } from "esbehavior";
import funBehavior from "./fun.behavior"

// Start Vite
const server = await createServer({
  server: {
    port: 5957
  }
})

await server.listen()


// Start the browser
const browser = await chromium.launch({
  headless: !isDebug()
})

const page = await browser.newPage()
page.on("console", console.log)
page.on("pageerror", console.log)


// Load the Test Display
await page.goto("http://localhost:5957/behaviors/index.html")


// Run the tests
await validate([
  funBehavior(page)
])


// Close
if (!isDebug()) {
  await browser.close()
  await server.close()
}


// Helper functions -->

function isDebug() {
  return process.env["DEBUG"] !== undefined
}