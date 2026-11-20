import test from "node:test";
import assert from "node:assert/strict";
import { isBipartite } from "../src/is-bipartite.js";

test("acepta grafos bipartitos y componentes desconectados", () => {
  assert.equal(isBipartite([[1,3],[0,2],[1,3],[0,2]]), true);
  assert.equal(isBipartite([[1],[0],[]]), true);
  assert.equal(isBipartite([]), true);
});
test("rechaza ciclos impares y bucles propios", () => {
  assert.equal(isBipartite([[1,2],[0,2],[0,1]]), false);
  assert.equal(isBipartite([[0]]), false);
});
test("conserva el grafo original y valida la vecindad", () => {
  const graph = [[1],[0]];
  isBipartite(graph);
  assert.deepEqual(graph, [[1],[0]]);
  for (const invalid of [null, [0], [[2],[]], [[-1]], [["1"]]]) {
    assert.throws(() => isBipartite(invalid));
  }
});
