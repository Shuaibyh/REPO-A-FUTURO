import test from "node:test";
import assert from "node:assert/strict";
import { insertionSort } from "../src/insertion-sort.js";

test("ordena números con negativos y repetidos", () => {
  assert.deepEqual(insertionSort([4, -1, 4, 2, 0]), [-1, 0, 2, 4, 4]);
});

test("maneja arreglos vacíos y unitarios", () => {
  assert.deepEqual(insertionSort([]), []);
  assert.deepEqual(insertionSort([8]), [8]);
});

test("no modifica el arreglo original", () => {
  const original = [3, 1, 2];
  const result = insertionSort(original);
  assert.deepEqual(original, [3, 1, 2]);
  assert.notStrictEqual(result, original);
});

test("es estable con claves iguales", () => {
  const values = [{ id: "a", n: 2 }, { id: "b", n: 1 }, { id: "c", n: 2 }];
  assert.deepEqual(insertionSort(values, (a, b) => a.n - b.n).map(v => v.id), ["b", "a", "c"]);
});

test("rechaza entradas inválidas", () => {
  assert.throws(() => insertionSort("3,2,1"), TypeError);
  assert.throws(() => insertionSort([], null), TypeError);
});
