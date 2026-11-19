import test from "node:test";
import assert from "node:assert/strict";
import { twoSumIndices } from "../src/two-sum-indices.js";

test("devuelve índices distintos para un par válido", () => {
  assert.deepEqual(twoSumIndices([2, 7, 11, 15], 9), [0, 1]);
  assert.deepEqual(twoSumIndices([3, 3], 6), [0, 1]);
  assert.deepEqual(twoSumIndices([1, 4, 4, 8], 8), [1, 2]);
});
test("devuelve null sin pareja y conserva la entrada", () => {
  const source = [5, -2, 0];
  assert.deepEqual(twoSumIndices(source, 3), [0, 1]);
  assert.equal(twoSumIndices(source, 100), null);
  assert.equal(twoSumIndices([], 0), null);
  assert.deepEqual(source, [5, -2, 0]);
});
test("rechaza datos inválidos", () => {
  assert.throws(() => twoSumIndices(null, 2), TypeError);
  assert.throws(() => twoSumIndices([1, NaN], 1), TypeError);
  assert.throws(() => twoSumIndices([1, 2], Infinity), TypeError);
});
