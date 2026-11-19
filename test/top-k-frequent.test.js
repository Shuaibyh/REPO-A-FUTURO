import test from "node:test";
import assert from "node:assert/strict";
import { topKFrequent } from "../src/top-k-frequent.js";

test("prioriza frecuencia y resuelve empates por primera aparición", () => {
  assert.deepEqual(topKFrequent(["pera", "uva", "pera", "manzana", "uva", "pera"], 2),
    ["pera", "uva"]);
  assert.deepEqual(topKFrequent(["z", "a", "z", "a"], 2), ["z", "a"]);
});

test("acota k y distingue mayúsculas y minúsculas", () => {
  assert.deepEqual(topKFrequent(["A", "a", "A"], 10), ["A", "a"]);
  assert.deepEqual(topKFrequent(["x"], 0), []);
  assert.deepEqual(topKFrequent([], 2), []);
});

test("no altera las palabras originales", () => {
  const original = ["b", "a", "b"];
  topKFrequent(original, 2);
  assert.deepEqual(original, ["b", "a", "b"]);
});

test("rechaza palabras o límites inválidos", () => {
  for (const args of [[null, 1], [[1], 1], [["a"], -1], [["a"], 1.5], [["a"], NaN]]) {
    assert.throws(() => topKFrequent(...args));
  }
});
