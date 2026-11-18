import test from "node:test";
import assert from "node:assert/strict";
import { fixedWindowMaxSum } from "../src/fixed-window-max-sum.js";

test("encuentra la suma máxima para k fijo", () => {
  assert.equal(fixedWindowMaxSum([2, 1, 5, 1, 3, 2], 3), 9);
  assert.equal(fixedWindowMaxSum([4, 5], 2), 9);
});
test("admite números negativos y preserva entrada", () => {
  const data = [-5, -1, -3];
  assert.equal(fixedWindowMaxSum(data, 2), -4);
  assert.deepEqual(data, [-5, -1, -3]);
  assert.equal(fixedWindowMaxSum([7], 1), 7);
});
test("rechaza ventanas fuera de rango", () => {
  assert.throws(() => fixedWindowMaxSum([], 1), RangeError);
  assert.throws(() => fixedWindowMaxSum([1, 2], 0), RangeError);
  assert.throws(() => fixedWindowMaxSum([1, 2], 3), RangeError);
  assert.throws(() => fixedWindowMaxSum([1, 2], 1.5), RangeError);
});
test("valida datos numéricos", () => {
  assert.throws(() => fixedWindowMaxSum(null, 1), TypeError);
  assert.throws(() => fixedWindowMaxSum([1, Infinity], 1), TypeError);
});
