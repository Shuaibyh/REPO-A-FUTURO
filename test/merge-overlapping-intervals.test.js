import test from "node:test";
import assert from "node:assert/strict";
import { mergeOverlappingIntervals } from "../src/merge-overlapping-intervals.js";

test("fusiona solapamientos sin cambiar la fuente", () => {
  const input = [[8, 10], [1, 3], [15, 18], [2, 6]];
  assert.deepEqual(mergeOverlappingIntervals(input), [[1, 6], [8, 10], [15, 18]]);
  assert.deepEqual(input, [[8, 10], [1, 3], [15, 18], [2, 6]]);
});
test("considera intervalos cerrados que comparten extremo", () => {
  assert.deepEqual(mergeOverlappingIntervals([[1, 4], [4, 5]]), [[1, 5]]);
  assert.deepEqual(mergeOverlappingIntervals([[-3, -1], [-2, 2]]), [[-3, 2]]);
  assert.deepEqual(mergeOverlappingIntervals([]), []);
});
test("rechaza intervalos mal formados", () => {
  assert.throws(() => mergeOverlappingIntervals([[2, 1]]), TypeError);
  assert.throws(() => mergeOverlappingIntervals([[1, Infinity]]), TypeError);
  assert.throws(() => mergeOverlappingIntervals([[1]]), TypeError);
  assert.throws(() => mergeOverlappingIntervals(null), TypeError);
});
