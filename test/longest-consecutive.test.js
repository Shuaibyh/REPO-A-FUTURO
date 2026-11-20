import test from "node:test";
import assert from "node:assert/strict";
import { longestConsecutive } from "../src/longest-consecutive.js";

test("cuenta la secuencia consecutiva más larga", () => {
  assert.equal(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
  assert.equal(longestConsecutive([-2, 0, -1, 3, 1, 1]), 4);
  assert.equal(longestConsecutive([9, 7, 8, 10, 6]), 5);
});
test("ignora duplicados y acepta vacío", () => {
  assert.equal(longestConsecutive([5, 5, 5]), 1);
  assert.equal(longestConsecutive([]), 0);
  assert.equal(longestConsecutive([8]), 1);
});
test("mantiene la entrada y valida enteros", () => {
  const data = [2, 1, 4];
  longestConsecutive(data);
  assert.deepEqual(data, [2, 1, 4]);
  for (const invalid of [null, [1.1], [NaN], [2 ** 54], ["1"]]) {
    assert.throws(() => longestConsecutive(invalid), TypeError);
  }
});
