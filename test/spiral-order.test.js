import test from "node:test";
import assert from "node:assert/strict";
import { spiralOrder } from "../src/spiral-order.js";

test("recorre una matriz cuadrada en espiral", () => {
  assert.deepEqual(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]), [1,2,3,6,9,8,7,4,5]);
});
test("maneja rectángulos y una sola fila o columna", () => {
  assert.deepEqual(spiralOrder([[1,2,3,4],[5,6,7,8]]), [1,2,3,4,8,7,6,5]);
  assert.deepEqual(spiralOrder([[1],[2],[3]]), [1,2,3]);
  assert.deepEqual(spiralOrder([[1,2,3]]), [1,2,3]);
  assert.deepEqual(spiralOrder([[], []]), []);
  assert.deepEqual(spiralOrder([]), []);
});
test("conserva la matriz original y rechaza filas irregulares", () => {
  const original = [[1,2],[3,4]];
  spiralOrder(original);
  assert.deepEqual(original, [[1,2],[3,4]]);
  for (const invalid of [null, "x", [1,2], [[1],[2,3]]]) {
    assert.throws(() => spiralOrder(invalid));
  }
});
