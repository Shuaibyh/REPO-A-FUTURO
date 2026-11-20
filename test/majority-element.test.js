import test from "node:test";
import assert from "node:assert/strict";
import { majorityElement } from "../src/majority-element.js";

test("encuentra una mayoría estricta", () => {
  assert.equal(majorityElement([2, 2, 1, 2, 3, 2, 2]), 2);
  assert.equal(majorityElement([-1, 4, -1]), -1);
  assert.equal(majorityElement([8]), 8);
});
test("descarta empate y candidato sin mayoría", () => {
  assert.equal(majorityElement([1, 2, 1, 2]), null);
  assert.equal(majorityElement([1, 2, 3]), null);
  assert.equal(majorityElement([]), null);
});
test("no modifica la entrada y valida los valores", () => {
  const input = [2, 1, 2];
  majorityElement(input);
  assert.deepEqual(input, [2, 1, 2]);
  for (const invalid of [null, "x", [NaN], [Infinity], [1, "1"]]) {
    assert.throws(() => majorityElement(invalid), TypeError);
  }
});
