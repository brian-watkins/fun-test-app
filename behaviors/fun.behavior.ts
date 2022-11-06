import assert from "assert";
import { behavior, effect, example } from "esbehavior";

export default
  behavior("Test Behavior", [
    example()
      .description("Just a test")
      .script({
        observe: [
          effect("it fails as expected", () => {
            assert.equal(7, 5)
          })
        ]
      })
  ])