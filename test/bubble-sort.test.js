import test from "node:test";
import assert from "node:assert/strict";
import { bubbleSort } from "../src/bubble-sort.js";

test("ordena enteros desordenados con duplicados", () => {
  assert.deepEqual(bubbleSort([3, 1, -2, 3, 2]), [-2, 1, 2, 3, 3]);
});
test("mantiene el orden de elementos equivalentes", () => {
  const records = [{ id: "a", n: 2 }, { id: "b", n: 1 }, { id: "c", n: 2 }];
  assert.deepEqual(bubbleSort(records, (a, b) => a.n - b.n).map(x => x.id), ["b", "a", "c"]);
});
test("tolera vacío, un elemento y ordenado", () => {
  assert.deepEqual(bubbleSort([]), []);
  assert.deepEqual(bubbleSort([1]), [1]);
  assert.deepEqual(bubbleSort([1, 2, 3]), [1, 2, 3]);
});
test("no cambia valores originales y soporta descendente", () => {
  const values = [1, 3, 2];
  assert.deepEqual(bubbleSort(values, (a, b) => b - a), [3, 2, 1]);
  assert.deepEqual(values, [1, 3, 2]);
});
test("rechaza entradas inválidas", () => {
  assert.throws(() => bubbleSort(null), TypeError);
  assert.throws(() => bubbleSort([], "asc"), TypeError);
});
