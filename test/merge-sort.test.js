import test from "node:test";
import assert from "node:assert/strict";
import { mergeSort } from "../src/merge-sort.js";

test("ordena secuencias impares con repetidos", () => {
  assert.deepEqual(mergeSort([7, 2, 5, 2, -1]), [-1, 2, 2, 5, 7]);
});

test("no modifica la entrada y funciona en vacío", () => {
  const input = [3, 1, 2];
  const result = mergeSort(input);
  assert.deepEqual(input, [3, 1, 2]);
  assert.deepEqual(result, [1, 2, 3]);
  assert.deepEqual(mergeSort([]), []);
});

test("preserva el orden original de los empates", () => {
  const records = [{ id: "a", n: 2 }, { id: "b", n: 1 }, { id: "c", n: 2 }];
  assert.deepEqual(mergeSort(records, (a, b) => a.n - b.n).map(v => v.id), ["b", "a", "c"]);
});

test("acepta orden descendente mediante comparador", () => {
  assert.deepEqual(mergeSort([1, 4, 2], (a, b) => b - a), [4, 2, 1]);
});

test("exige arreglo y comparador válido", () => {
  assert.throws(() => mergeSort(undefined), TypeError);
  assert.throws(() => mergeSort([1], "no"), TypeError);
});
