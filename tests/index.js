import assert from "assert";
import { add, factorial } from "../build/debug.js";
assert.strictEqual(add(1, 2), 3);
assert.strictEqual(factorial(6), 720);
console.log("ok");
