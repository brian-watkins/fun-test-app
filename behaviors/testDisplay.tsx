import React from "react"
import * as ReactDOM from "react-dom/client"
import Home from "../pages/index"

export class TestDisplay {
  private testRoot: ReactDOM.Root | undefined

  start() {
    const element = document.querySelector("#test-display")
    if (!element) {
      console.log("No root element!?!?")
      return
    }

    this.testRoot = ReactDOM.createRoot(element)
    this.testRoot.render(<Home></Home>)
  }

  destroy() {
    this.testRoot?.unmount()
  }
}