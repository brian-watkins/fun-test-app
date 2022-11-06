import { TestDisplay } from "./testDisplay";

export declare global {
  interface Window {
    showTestDisplay(): void
    currentTestDisplay: TestDisplay | undefined
  }
}