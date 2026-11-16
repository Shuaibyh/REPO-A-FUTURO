import test from "node:test";
import assert from "node:assert/strict";
import { breadthFirstSearch } from "../src/breadth-first-search.js";

test("recorre en anchura respetando el orden de vecinos", () => {
  const graph = new Map([["A", ["B", "C"]], ["B", ["D"]], ["C", ["D"]], ["D", []]]);
  assert.deepEqual(breadthFirstSearch(graph, "A"), ["A", "B", "C", "D"]);
});

test("evita visitas repetidas ante ciclos", () => {
  const graph = new Map([["A", ["B"]], ["B", ["A"]]]);
  assert.deepEqual(breadthFirstSearch(graph, "A"), ["A", "B"]);
});

test("no recorre componentes desconectadas", () => {
  const graph = new Map([["A", ["B"]], ["B", []], ["Z", []]]);
  assert.deepEqual(breadthFirstSearch(graph, "A"), ["A", "B"]);
});

test("devuelve vacío si el inicio no está presente", () => {
  assert.deepEqual(breadthFirstSearch(new Map(), "A"), []);
});

test("valida formato del grafo y sus vecinos", () => {
  assert.throws(() => breadthFirstSearch([], "A"), TypeError);
  assert.throws(() => breadthFirstSearch(new Map([["A", "B"]]), "A"), TypeError);
});
