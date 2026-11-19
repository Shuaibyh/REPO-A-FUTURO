import test from "node:test";
import assert from "node:assert/strict";
import { transposeMatrix } from "../src/transpose-matrix.js";

test("transpone matrices rectangulares y cuadradas", () => {
  assert.deepEqual(transposeMatrix([[1, 2, 3], [4, 5, 6]]),
    [[1, 4], [2, 5], [3, 6]]);
  assert.deepEqual(transposeMatrix([[1, 2], [3, 4]]), [[1, 3], [2, 4]]);
});

test("gestiona vacío, una fila y matrices sin columnas", () => {
  assert.deepEqual(transposeMatrix([]), []);
  assert.deepEqual(transposeMatrix([[], []]), []);
  assert.deepEqual(transposeMatrix([[7, 8]]), [[7], [8]]);
});

test("no cambia las filas originales", () => {
  const original = [[1, 2], [3, 4]];
  transposeMatrix(original);
  assert.deepEqual(original, [[1, 2], [3, 4]]);
});

test("rechaza filas irregulares y no arreglos", () => {
  for (const input of [null, 1, [[1], [1, 2]], [1, 2]]) {
    assert.throws(() => transposeMatrix(input));
  }
});
