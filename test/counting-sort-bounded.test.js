import test from "node:test";
import assert from "node:assert/strict";
import { countingSortBounded } from "../src/counting-sort-bounded.js";

test("ordena números negativos, duplicados y ceros", () => {
  const values = [3, -1, 3, 0, -1];
  assert.deepEqual(countingSortBounded(values), [-1, -1, 0, 3, 3]);
  assert.deepEqual(values, [3, -1, 3, 0, -1]);
  assert.deepEqual(countingSortBounded([]), []);
});
test("respeta el ancho máximo", () => {
  assert.deepEqual(countingSortBounded([1, 2, 1], 2), [1, 1, 2]);
  assert.throws(() => countingSortBounded([0, 100000]), RangeError);
  assert.throws(() => countingSortBounded([1, 3], 2), RangeError);
  assert.throws(() => countingSortBounded([1], 0), RangeError);
});
test("rechaza valores no enteros seguros", () => {
  assert.throws(() => countingSortBounded([1, 1.2]), TypeError);
  assert.throws(() => countingSortBounded([NaN]), TypeError);
  assert.throws(() => countingSortBounded(null), TypeError);
});
