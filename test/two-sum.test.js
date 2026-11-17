import test from "node:test";
import assert from "node:assert/strict";
import { twoSum } from "../src/two-sum.js";

test("encuentra una pareja de índices", () => {
  assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
});
test("admite dos valores iguales en posiciones diferentes", () => {
  assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
});
test("admite negativos y respeta orden de hallazgo", () => {
  assert.deepEqual(twoSum([-2, 8, 4, 6], 6), [0, 1]);
  assert.deepEqual(twoSum([1, 2, 3, 4], 5), [1, 2]);
});
test("retorna null sin solución y no modifica la entrada", () => {
  const input = [5, 6];
  assert.equal(twoSum(input, 50), null);
  assert.deepEqual(input, [5, 6]);
  assert.equal(twoSum([], 0), null);
});
test("rechaza entradas no numéricas", () => {
  assert.throws(() => twoSum(null, 3), TypeError);
  assert.throws(() => twoSum([1], NaN), TypeError);
  assert.throws(() => twoSum([1, "2"], 3), TypeError);
});
