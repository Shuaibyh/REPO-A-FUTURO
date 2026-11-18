import test from "node:test";
import assert from "node:assert/strict";
import { rotateArray } from "../src/rotate-array.js";

test("rota a la derecha sin mutar", () => {
  const values = [1, 2, 3, 4];
  assert.deepEqual(rotateArray(values, 1), [4, 1, 2, 3]);
  assert.deepEqual(values, [1, 2, 3, 4]);
});
test("rotación negativa, grande y nula", () => {
  assert.deepEqual(rotateArray([1, 2, 3, 4], -1), [2, 3, 4, 1]);
  assert.deepEqual(rotateArray([1, 2, 3], 7), [3, 1, 2]);
  assert.deepEqual(rotateArray([1], 90), [1]);
  assert.deepEqual(rotateArray([], -5), []);
});
test("rechaza entradas inválidas", () => {
  assert.throws(() => rotateArray(null, 1), TypeError);
  assert.throws(() => rotateArray([1], 1.5), RangeError);
  assert.throws(() => rotateArray([1], Infinity), RangeError);
});
