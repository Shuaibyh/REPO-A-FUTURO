import test from "node:test";
import assert from "node:assert/strict";
import { encodeRuns, decodeRuns } from "../src/run-length-encoding.js";

test("codifica rachas consecutivas", () => {
  assert.deepEqual(encodeRuns("aaabbc"), [["a", 3], ["b", 2], ["c", 1]]);
  assert.deepEqual(encodeRuns(""), []);
});
test("hace ida y vuelta de Unicode y caracteres numéricos", () => {
  for (const value of ["😀😀🍎", "111222", "hola", ""]) {
    assert.equal(decodeRuns(encodeRuns(value)), value);
  }
});
test("rechaza rachas inválidas y grandes", () => {
  for (const input of [null, [[1, 2]], [["a", 0]], [["ab", 1]], [["a", 1.5]], [["x", 1_000_001]]]) {
    assert.throws(() => decodeRuns(input));
  }
  assert.throws(() => encodeRuns(null), TypeError);
});
