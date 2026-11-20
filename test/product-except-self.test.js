import test from "node:test";
import assert from "node:assert/strict";
import { productExceptSelf } from "../src/product-except-self.js";

test("calcula productos sin división", () => {
  assert.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
  assert.deepEqual(productExceptSelf([-1, 2, -3]), [-6, 3, -2]);
});
test("maneja ceros, vacío y un elemento", () => {
  assert.deepEqual(productExceptSelf([0, 2, 3]), [6, 0, 0]);
  assert.deepEqual(productExceptSelf([0, 0, 3]), [0, 0, 0]);
  assert.deepEqual(productExceptSelf([7]), [1]);
  assert.deepEqual(productExceptSelf([]), []);
});
test("no muta la entrada y rechaza valores inválidos", () => {
  const input = [3, 4, 5];
  productExceptSelf(input);
  assert.deepEqual(input, [3, 4, 5]);
  for (const invalid of [null, 5, [NaN], [Infinity], [1, "2"]]) {
    assert.throws(() => productExceptSelf(invalid), TypeError);
  }
});
