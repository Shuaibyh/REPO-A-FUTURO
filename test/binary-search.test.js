import test from "node:test";
import assert from "node:assert/strict";
import { binarySearch } from "../src/binary-search.js";

test("encuentra la primera coincidencia aunque existan duplicados", () => {
  assert.equal(binarySearch([1, 2, 2, 2, 5], 2), 1);
});

test("retorna -1 para vacío o un valor ausente", () => {
  assert.equal(binarySearch([], 3), -1);
  assert.equal(binarySearch([1, 3, 5], 4), -1);
});

test("encuentra extremos y valores negativos", () => {
  assert.equal(binarySearch([-5, -1, 0, 7], -5), 0);
  assert.equal(binarySearch([-5, -1, 0, 7], 7), 3);
});

test("admite un comparador para cadenas ordenadas", () => {
  const values = ["ana", "luis", "zoe"];
  assert.equal(binarySearch(values, "luis", (a, b) => a.localeCompare(b)), 1);
});

test("rechaza entradas que incumplen el contrato", () => {
  assert.throws(() => binarySearch(null, 1), TypeError);
  assert.throws(() => binarySearch([1], 1, 7), TypeError);
});
