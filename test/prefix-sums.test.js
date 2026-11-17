import test from "node:test";
import assert from "node:assert/strict";
import { prefixSums, rangeSum } from "../src/prefix-sums.js";

test("construye prefijos incluyendo el cero inicial", () => {
  assert.deepEqual(prefixSums([2, -1, 4]), [0, 2, 1, 5]);
});
test("suma intervalos semiabiertos y vacíos", () => {
  const pref = prefixSums([2, -1, 4, 7]);
  assert.equal(rangeSum(pref, 1, 3), 3);
  assert.equal(rangeSum(pref, 2, 2), 0);
  assert.equal(rangeSum(pref, 0, 4), 12);
});
test("funciona con colección vacía", () => {
  const pref = prefixSums([]);
  assert.deepEqual(pref, [0]);
  assert.equal(rangeSum(pref, 0, 0), 0);
});
test("rechaza intervalos no válidos", () => {
  const pref = prefixSums([1, 2]);
  assert.throws(() => rangeSum(pref, -1, 1), RangeError);
  assert.throws(() => rangeSum(pref, 2, 1), RangeError);
  assert.throws(() => rangeSum(pref, 0, 3), RangeError);
});
test("rechaza valores no finitos y entradas incompatibles", () => {
  assert.throws(() => prefixSums(null), TypeError);
  assert.throws(() => prefixSums([NaN]), TypeError);
  assert.throws(() => prefixSums([Infinity]), TypeError);
  assert.throws(() => rangeSum([], 0, 0), TypeError);
});
