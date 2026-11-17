import test from "node:test";
import assert from "node:assert/strict";
import { selectionSort } from "../src/selection-sort.js";

test("ordena enteros, negativos y repetidos", () => {
  assert.deepEqual(selectionSort([5, -2, 5, 0, 1]), [-2, 0, 1, 5, 5]);
});
test("acepta orden descendente", () => {
  assert.deepEqual(selectionSort([4, 1, 3], (a, b) => b - a), [4, 3, 1]);
});
test("acepta arreglos vacíos y unitarios", () => {
  assert.deepEqual(selectionSort([]), []);
  assert.deepEqual(selectionSort([9]), [9]);
});
test("devuelve copia sin mutación", () => {
  const source = [8, 2, 4];
  const sorted = selectionSort(source);
  assert.deepEqual(source, [8, 2, 4]);
  assert.notStrictEqual(sorted, source);
});
test("valida entrada y comparador", () => {
  assert.throws(() => selectionSort("1,2"), TypeError);
  assert.throws(() => selectionSort([], 2), TypeError);
});
