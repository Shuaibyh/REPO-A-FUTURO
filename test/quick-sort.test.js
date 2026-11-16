import test from "node:test";
import assert from "node:assert/strict";
import { quickSort } from "../src/quick-sort.js";

test("ordena números desordenados y duplicados", () => {
  assert.deepEqual(quickSort([5, 3, 5, -2, 3, 1]), [-2, 1, 3, 3, 5, 5]);
});

test("termina con entradas de valores iguales", () => {
  assert.deepEqual(quickSort([7, 7, 7, 7]), [7, 7, 7, 7]);
});

test("no modifica el arreglo y soporta vacío", () => {
  const input = [9, 1, 4];
  assert.deepEqual(quickSort(input), [1, 4, 9]);
  assert.deepEqual(input, [9, 1, 4]);
  assert.deepEqual(quickSort([]), []);
});

test("admite orden descendente", () => {
  assert.deepEqual(quickSort([2, 9, 3], (a, b) => b - a), [9, 3, 2]);
});

test("rechaza arreglos y comparadores inválidos", () => {
  assert.throws(() => quickSort({}), TypeError);
  assert.throws(() => quickSort([1], false), TypeError);
});
