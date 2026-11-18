import test from "node:test";
import assert from "node:assert/strict";
import { upperBound } from "../src/upper-bound.js";

test("salta todas las ocurrencias iguales", () => {
  assert.equal(upperBound([1, 2, 2, 2, 5], 2), 4);
  assert.equal(upperBound([1, 2, 5], 3), 2);
});
test("resuelve bordes y arreglo vacío", () => {
  assert.equal(upperBound([], 5), 0);
  assert.equal(upperBound([4, 5], 1), 0);
  assert.equal(upperBound([4, 5], 5), 2);
});
test("admite orden descendente mediante comparador", () => {
  assert.equal(upperBound([9, 7, 7, 3], 7, (a, b) => b - a), 3);
});
test("rechaza argumentos inválidos", () => {
  assert.throws(() => upperBound("abc", "b"), TypeError);
  assert.throws(() => upperBound([], 5, null), TypeError);
});
