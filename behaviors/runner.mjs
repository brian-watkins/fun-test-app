import { createServer } from "vite"
import { chromium } from "playwright"
import { validate } from "esbehavior";
import funBehavior from "./fun.behavior"

const server = await createServer({
    server: {
        port: 5957
    }
})

await server.listen()

const browser = await chromium.launch({
    headless: true
})

const page = await browser.newPage()
page.on("console", console.log)
page.on("pageerror", console.log)

await page.goto("http://localhost:5957/behaviors/index.html")

await validate([
    funBehavior(page)
])

await browser.close()
await server.close()