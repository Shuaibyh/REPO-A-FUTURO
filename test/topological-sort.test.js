import test from "node:test";
import assert from "node:assert/strict";
import { topologicalSort } from "../src/topological-sort.js";

test("ordena dependencias con precedencia válida", () => {
  const graph = new Map([["A", ["C"]], ["B", ["C"]], ["C", ["D"]], ["D", []]]);
  assert.deepEqual(topologicalSort(graph), ["A", "B", "C", "D"]);
});
test("incluye vecinos que no son claves explícitas", () => {
  assert.deepEqual(topologicalSort(new Map([["A", ["B"]]])), ["A", "B"]);
});
test("admite grafo vacío y componentes aislados", () => {
  assert.deepEqual(topologicalSort(new Map()), []);
  assert.deepEqual(topologicalSort(new Map([["X", []], ["Y", []]])), ["X", "Y"]);
});
test("rechaza ciclos y autorreferencias", () => {
  assert.throws(() => topologicalSort(new Map([["A", ["B"]], ["B", ["A"]]])), RangeError);
  assert.throws(() => topologicalSort(new Map([["A", ["A"]]])), RangeError);
});
test("valida la estructura de vecinos", () => {
  assert.throws(() => topologicalSort([]), TypeError);
  assert.throws(() => topologicalSort(new Map([["A", null]])), TypeError);
});
