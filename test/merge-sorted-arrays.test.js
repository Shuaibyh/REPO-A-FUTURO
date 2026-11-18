import test from "node:test";
import assert from "node:assert/strict";
import { mergeSortedArrays } from "../src/merge-sorted-arrays.js";

test("fusiona listas ordenadas sin mutarlas", () => {
  const left = [1, 3, 5], right = [2, 4, 6];
  assert.deepEqual(mergeSortedArrays(left, right), [1, 2, 3, 4, 5, 6]);
  assert.deepEqual(left, [1, 3, 5]);
  assert.deepEqual(right, [2, 4, 6]);
});
test("admite vacíos y duplicados", () => {
  assert.deepEqual(mergeSortedArrays([], []), []);
  assert.deepEqual(mergeSortedArrays([1], []), [1]);
  assert.deepEqual(mergeSortedArrays([1, 1], [1]), [1, 1, 1]);
});
test("comparador personalizado conserva estabilidad", () => {
  const a = [{v: 1, id: "a"}], b = [{v: 1, id: "b"}];
  assert.deepEqual(mergeSortedArrays(a, b, (x, y) => x.v - y.v).map(x => x.id), ["a", "b"]);
});
test("rechaza entradas inválidas", () => {
  assert.throws(() => mergeSortedArrays(null, []), TypeError);
  assert.throws(() => mergeSortedArrays([], {}, () => 0), TypeError);
  assert.throws(() => mergeSortedArrays([], [], 0), TypeError);
});
