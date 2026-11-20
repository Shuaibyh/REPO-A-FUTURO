import test from "node:test";
import assert from "node:assert/strict";
import { diagonalSum } from "../src/diagonal-sum.js";

test("suma diagonales sin repetir el centro", () => {
  assert.equal(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]), 25);
  assert.equal(diagonalSum([[1,2],[3,4]]), 10);
  assert.equal(diagonalSum([[7]]), 7);
});
test("admite negativos y matriz vacía", () => {
  assert.equal(diagonalSum([[-1,0],[0,-2]]), -3);
  assert.equal(diagonalSum([]), 0);
});
test("no altera la matriz y rechaza entradas inválidas", () => {
  const original = [[1,2],[3,4]];
  diagonalSum(original);
  assert.deepEqual(original, [[1,2],[3,4]]);
  for (const invalid of [null, [1], [[1,2]], [[1],[2]], [[Infinity]], [["1"]]]) {
    assert.throws(() => diagonalSum(invalid));
  }
});
