import test from "node:test";
import assert from "node:assert/strict";
import { UnionFind } from "../src/union-find.js";

test("inicia cada vértice en su propio conjunto", () => {
  const sets = new UnionFind(4);
  assert.equal(sets.componentCount, 4);
  assert.equal(sets.connected(0, 1), false);
});
test("une conjuntos y mantiene transitividad", () => {
  const sets = new UnionFind(4);
  assert.equal(sets.union(0, 1), true);
  assert.equal(sets.union(1, 2), true);
  assert.equal(sets.connected(0, 2), true);
  assert.equal(sets.componentCount, 2);
});
test("unión redundante no cambia cantidad de componentes", () => {
  const sets = new UnionFind(3);
  assert.equal(sets.union(0, 1), true);
  assert.equal(sets.union(0, 1), false);
  assert.equal(sets.componentCount, 2);
});
test("admite estructura vacía sin acceso a índices", () => {
  const sets = new UnionFind(0);
  assert.equal(sets.componentCount, 0);
  assert.throws(() => sets.find(0), RangeError);
});
test("rechaza tamaño e índices inválidos", () => {
  assert.throws(() => new UnionFind(-1), RangeError);
  assert.throws(() => new UnionFind(1.5), RangeError);
  assert.throws(() => new UnionFind(100_001), RangeError);
  assert.throws(() => new UnionFind(2).connected(0, 2), RangeError);
});
