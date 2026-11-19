import test from "node:test";
import assert from "node:assert/strict";
import { topKFrequency } from "../src/top-k-frequency.js";

test("selecciona los valores más frecuentes", () => {
  assert.deepEqual(topKFrequency([1, 1, 1, 2, 2, 3], 2), [1, 2]);
  assert.deepEqual(topKFrequency([7, 7, 7], 5), [7]);
  assert.deepEqual(topKFrequency([], 4), []);
});
test("desempata ascendentemente y admite k cero", () => {
  assert.deepEqual(topKFrequency([4, 2, 4, 2, 9], 3), [2, 4, 9]);
  assert.deepEqual(topKFrequency([-1, -2, -1, -2], 2), [-2, -1]);
  assert.deepEqual(topKFrequency([1, 2], 0), []);
});
test("valida entradas sin mutarlas", () => {
  const values = [1, 2, 1];
  topKFrequency(values, 1);
  assert.deepEqual(values, [1, 2, 1]);
  assert.throws(() => topKFrequency("12", 1), TypeError);
  assert.throws(() => topKFrequency([1, Infinity], 1), TypeError);
  assert.throws(() => topKFrequency([1], -1), RangeError);
});
