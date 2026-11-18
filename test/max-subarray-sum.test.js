import test from "node:test";
import assert from "node:assert/strict";
import { maxSubarraySum } from "../src/max-subarray-sum.js";

test("encuentra la suma de un tramo contiguo", () => {
  assert.equal(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  assert.equal(maxSubarraySum([2, 3, 4]), 9);
});
test("admite negativos, ceros y vacío", () => {
  assert.equal(maxSubarraySum([-8, -2, -7]), -2);
  assert.equal(maxSubarraySum([0, -2]), 0);
  assert.equal(maxSubarraySum([]), null);
});
test("conserva la entrada y valida tipos", () => {
  const a = [-2, 5];
  assert.equal(maxSubarraySum(a), 5);
  assert.deepEqual(a, [-2, 5]);
  assert.throws(() => maxSubarraySum(null), TypeError);
  assert.throws(() => maxSubarraySum([1, NaN]), TypeError);
  assert.throws(() => maxSubarraySum([Infinity]), TypeError);
});
