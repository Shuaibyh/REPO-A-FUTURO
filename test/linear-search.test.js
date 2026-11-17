import test from "node:test";
import assert from "node:assert/strict";
import { linearSearch } from "../src/linear-search.js";

test("encuentra primera coincidencia y respeta duplicados", () => {
  assert.equal(linearSearch([4, 2, 4], 4), 0);
  assert.equal(linearSearch([4, 2, 4], 2), 1);
});
test("devuelve -1 si falta el elemento o el arreglo está vacío", () => {
  assert.equal(linearSearch([3, 5], 4), -1);
  assert.equal(linearSearch([], 5), -1);
});
test("Object.is permite buscar NaN y distingue -0", () => {
  assert.equal(linearSearch([1, NaN, 2], NaN), 1);
  assert.equal(linearSearch([0, -0], -0), 1);
});
test("permite igualdad personalizada por clave", () => {
  assert.equal(linearSearch([{ id: 5 }, { id: 9 }], { id: 9 }, (a, b) => a.id === b.id), 1);
});
test("rechaza entradas inválidas y conserva la entrada", () => {
  const arr = [3, 1];
  assert.equal(linearSearch(arr, 1), 1);
  assert.deepEqual(arr, [3, 1]);
  assert.throws(() => linearSearch(null, 1), TypeError);
  assert.throws(() => linearSearch([], 1, null), TypeError);
});
