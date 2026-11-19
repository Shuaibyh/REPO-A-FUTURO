import test from "node:test";
import assert from "node:assert/strict";
import { mergeIntervals } from "../src/merge-intervals.js";

test("agrupa superposiciones, contención y extremos comunes", () => {
  assert.deepEqual(mergeIntervals([[8, 10], [1, 3], [2, 6], [10, 12], [5, 5]]),
    [[1, 6], [8, 12]]);
  assert.deepEqual(mergeIntervals([[1, 4], [2, 3]]), [[1, 4]]);
});

test("conserva intervalos separados, negativos y entradas vacías", () => {
  assert.deepEqual(mergeIntervals([]), []);
  assert.deepEqual(mergeIntervals([[-5, -3], [0, 1]]), [[-5, -3], [0, 1]]);
});

test("no muta la entrada ni sus intervalos", () => {
  const input = [[3, 4], [1, 2]];
  assert.deepEqual(mergeIntervals(input), [[1, 2], [3, 4]]);
  assert.deepEqual(input, [[3, 4], [1, 2]]);
});

test("rechaza rangos inválidos", () => {
  for (const input of [null, "x", [[3, 1]], [[0, Infinity]], [[1]], [["1", 2]]]) {
    assert.throws(() => mergeIntervals(input), TypeError);
  }
});
