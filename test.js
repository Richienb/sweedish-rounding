import test from "ava"
import sweedishRounding from "."

test("main", (t) => {
    t.is(sweedishRounding(0.49), 0.5)
})
