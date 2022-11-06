import { TestDisplay } from "./testDisplay";

window.showTestDisplay = () => {
  window.currentTestDisplay?.destroy()
  window.currentTestDisplay = new TestDisplay()
  window.currentTestDisplay.start()
}