import test from "node:test";
import assert from "node:assert/strict";
import { minCoinChange } from "../src/min-coin-change.js";

test("encuentra la solución óptima no codiciosa", () => {
  assert.equal(minCoinChange([1, 3, 4], 6), 2);
  assert.equal(minCoinChange([1, 2, 5], 11), 3);
  assert.equal(minCoinChange([2, 5], 10), 2);
});
test("distingue cantidades imposibles y cero", () => {
  assert.equal(minCoinChange([2], 3), -1);
  assert.equal(minCoinChange([], 1), -1);
  assert.equal(minCoinChange([], 0), 0);
  assert.equal(minCoinChange([9, 9], 9), 1);
});
test("rechaza monedas y montos inválidos sin mutar la entrada", () => {
  const coins = [1, 3, 4];
  minCoinChange(coins, 6);
  assert.deepEqual(coins, [1, 3, 4]);
  for (const args of [[null, 2], [[0], 2], [[1.5], 3], [[1], -1], [[1], 10_001]]) {
    assert.throws(() => minCoinChange(...args));
  }
});
