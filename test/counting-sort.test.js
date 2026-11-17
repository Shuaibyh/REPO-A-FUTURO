import test from "node:test";
import assert from "node:assert/strict";
import { countingSort } from "../src/counting-sort.js";

test("ordena repetidos y números negativos", () => {
  assert.deepEqual(countingSort([2, -1, 2, 0, -1]), [-1, -1, 0, 2, 2]);
});
test("maneja vacío y valores iguales", () => {
  assert.deepEqual(countingSort([]), []);
  assert.deepEqual(countingSort([8, 8, 8]), [8, 8, 8]);
});
test("devuelve arreglo nuevo sin mutar", () => {
  const input = [2, 1];
  const sorted = countingSort(input);
  assert.deepEqual(input, [2, 1]);
  assert.notStrictEqual(sorted, input);
});
test("rechaza decimales, infinitos y rangos excesivos", () => {
  assert.throws(() => countingSort([1, 2.5]), RangeError);
  assert.throws(() => countingSort([Infinity]), RangeError);
  assert.throws(() => countingSort([0, 1000], 100), RangeError);
});
test("respeta rango configurable en límite", () => {
  assert.deepEqual(countingSort([-2, 0, -1], 3), [-2, -1, 0]);
  assert.throws(() => countingSort([], 0), RangeError);
  assert.throws(() => countingSort("1,2"), TypeError);
});
