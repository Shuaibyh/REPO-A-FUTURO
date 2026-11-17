import test from "node:test";
import assert from "node:assert/strict";
import { shortestPathUnweighted } from "../src/graph-shortest-path.js";

test("elige la ruta más corta por número de aristas", () => {
  const graph = new Map([["A", ["B", "C"]], ["B", ["D"]], ["C", ["E"]], ["D", []], ["E", ["D"]]]);
  assert.deepEqual(shortestPathUnweighted(graph, "A", "D"), ["A", "B", "D"]);
});
test("ruta de un nodo a sí mismo", () => {
  assert.deepEqual(shortestPathUnweighted(new Map([["A", []]]), "A", "A"), ["A"]);
});
test("maneja ciclos sin repetir nodos", () => {
  const graph = new Map([["A", ["B"]], ["B", ["A", "C"]], ["C", []]]);
  assert.deepEqual(shortestPathUnweighted(graph, "A", "C"), ["A", "B", "C"]);
});
test("devuelve null si no hay ruta o falta un vértice", () => {
  const graph = new Map([["A", []], ["B", []]]);
  assert.equal(shortestPathUnweighted(graph, "A", "B"), null);
  assert.equal(shortestPathUnweighted(graph, "A", "X"), null);
});
test("rechaza vecinos mal formados y otro tipo de grafo", () => {
  assert.throws(() => shortestPathUnweighted({}, "A", "B"), TypeError);
  assert.throws(() => shortestPathUnweighted(new Map([["A", "B"], ["B", []]]), "A", "B"), TypeError);
});
