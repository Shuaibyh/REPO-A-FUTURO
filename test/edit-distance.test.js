import test from "node:test";
import assert from "node:assert/strict";
import { editDistance } from "../src/edit-distance.js";

test("calcula inserciones borrados y sustituciones", () => {
  assert.equal(editDistance("gato", "pato"), 1);
  assert.equal(editDistance("kitten", "sitting"), 3);
  assert.equal(editDistance("sábana", "sabana"), 1);
  assert.equal(editDistance("abc", "abc"), 0);
});
test("es simétrica y opera por puntos de código Unicode", () => {
  assert.equal(editDistance("😀", ""), 1);
  assert.equal(editDistance("😀", "😃"), 1);
  assert.equal(editDistance("", "abc"), 3);
  assert.equal(editDistance("abc", ""), 3);
});
test("rechaza tipos y longitudes no admitidas", () => {
  assert.throws(() => editDistance(null, "a"), TypeError);
  assert.throws(() => editDistance("a", 2), TypeError);
  assert.throws(() => editDistance("x".repeat(1025), ""), RangeError);
});
