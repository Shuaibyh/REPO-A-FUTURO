import test from "node:test";
import assert from "node:assert/strict";
import { depthFirstSearch } from "../src/depth-first-search.js";

test("recorre en profundidad respetando el primer vecino", () => {
  const graph = new Map([["A", ["B", "C"]], ["B", ["D"]], ["C", ["D"]], ["D", []]]);
  assert.deepEqual(depthFirstSearch(graph, "A"), ["A", "B", "D", "C"]);
});

test("evita ciclos y vértices repetidos", () => {
  const graph = new Map([["A", ["B", "B"]], ["B", ["A"]]]);
  assert.deepEqual(depthFirstSearch(graph, "A"), ["A", "B"]);
});

test("no incluye componentes desconectadas", () => {
  const graph = new Map([["A", ["B"]], ["B", []], ["Z", []]]);
  assert.deepEqual(depthFirstSearch(graph, "A"), ["A", "B"]);
});

test("devuelve vacío para un inicio inexistente", () => {
  assert.deepEqual(depthFirstSearch(new Map([["A", []]]), "X"), []);
});

test("rechaza entradas inválidas", () => {
  assert.throws(() => depthFirstSearch(null, "A"), TypeError);
  assert.throws(() => depthFirstSearch(new Map([["A", "B"]]), "A"), TypeError);
});
