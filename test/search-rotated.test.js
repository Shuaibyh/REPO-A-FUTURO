import test from "node:test";
import assert from "node:assert/strict";
import { searchRotated } from "../src/search-rotated.js";

test("encuentra elementos a ambos lados de la rotación", () => {
  const values = [4, 5, 6, 7, 0, 1, 2];
  assert.equal(searchRotated(values, 0), 4);
  assert.equal(searchRotated(values, 5), 1);
  assert.equal(searchRotated(values, 2), 6);
  assert.equal(searchRotated(values, 3), -1);
});
test("maneja arreglo sin rotar, vacío y unitario", () => {
  assert.equal(searchRotated([1, 3, 5], 3), 1);
  assert.equal(searchRotated([], 3), -1);
  assert.equal(searchRotated([9], 9), 0);
  assert.equal(searchRotated([9], 0), -1);
});
test("no altera valores y rechaza no finitos", () => {
  const values = [3, 1, 2];
  searchRotated(values, 1);
  assert.deepEqual(values, [3, 1, 2]);
  for (const args of [[null, 3], [[1, 2], NaN], [[Infinity], 1], [[1, "2"], 1]]) {
    assert.throws(() => searchRotated(...args), TypeError);
  }
});
