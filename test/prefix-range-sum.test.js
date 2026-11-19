import test from "node:test";
import assert from "node:assert/strict";
import { buildPrefixSums, sumRange } from "../src/prefix-range-sum.js";

test("consulta intervalos inclusivos y números negativos", () => {
  const source = [3, -2, 7, 1];
  const prefix = buildPrefixSums(source);
  assert.deepEqual(prefix, [0, 3, 1, 8, 9]);
  assert.equal(sumRange(prefix, 0, 3), 9);
  assert.equal(sumRange(prefix, 1, 2), 5);
  assert.equal(sumRange(prefix, 3, 3), 1);
  assert.deepEqual(source, [3, -2, 7, 1]);
});
test("rechaza entradas y rangos inválidos", () => {
  assert.deepEqual(buildPrefixSums([]), [0]);
  assert.throws(() => sumRange([0], 0, 0), TypeError);
  assert.throws(() => buildPrefixSums([1, Infinity]), TypeError);
  assert.throws(() => buildPrefixSums("1"), TypeError);
  assert.throws(() => sumRange([0, 1, 3], 1, 2), RangeError);
  assert.throws(() => sumRange([0, 1, 3], -1, 1), RangeError);
});
