import test from "node:test";
import assert from "node:assert/strict";
import { lowerBound } from "../src/lower-bound.js";

test("retorna primera posición mayor o igual", () => {
  assert.equal(lowerBound([1, 2, 2, 2, 5], 2), 1);
  assert.equal(lowerBound([1, 2, 2, 5], 3), 3);
});
test("admite extremos y vacío", () => {
  assert.equal(lowerBound([], 9), 0);
  assert.equal(lowerBound([2, 4], 1), 0);
  assert.equal(lowerBound([2, 4], 8), 2);
});
test("permite comparador y conserva entrada", () => {
  const input = ["a", "ab", "abc"];
  assert.equal(lowerBound(input, "x", (a, b) => a.length - b.length), 0);
  assert.deepEqual(input, ["a", "ab", "abc"]);
});
test("rechaza argumentos inválidos", () => {
  assert.throws(() => lowerBound(null, 1), TypeError);
  assert.throws(() => lowerBound([], 1, 4), TypeError);
});
