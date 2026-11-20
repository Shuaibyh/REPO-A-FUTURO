import test from "node:test";
import assert from "node:assert/strict";
import { longestIncreasingSubsequence } from "../src/longest-increasing-subsequence.js";

test("encuentra la longitud máxima sin exigir continuidad", () => {
  assert.equal(longestIncreasingSubsequence([10,9,2,5,3,7,101,18]), 4);
  assert.equal(longestIncreasingSubsequence([0,1,0,3,2,3]), 4);
});
test("es estrictamente creciente y maneja límites", () => {
  assert.equal(longestIncreasingSubsequence([7,7,7]), 1);
  assert.equal(longestIncreasingSubsequence([5,4,3,2]), 1);
  assert.equal(longestIncreasingSubsequence([-4,-2,-3,0]), 3);
  assert.equal(longestIncreasingSubsequence([]), 0);
});
test("no modifica la entrada y rechaza valores inválidos", () => {
  const values = [3, 1, 2];
  longestIncreasingSubsequence(values);
  assert.deepEqual(values, [3, 1, 2]);
  for (const invalid of [null, 2, [NaN], [Infinity], ["2"]]) {
    assert.throws(() => longestIncreasingSubsequence(invalid), TypeError);
  }
});
