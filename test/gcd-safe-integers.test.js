import test from "node:test";
import assert from "node:assert/strict";
import { gcdSafeIntegers } from "../src/gcd-safe-integers.js";

test("calcula MCD por Euclides", () => {
  assert.equal(gcdSafeIntegers(54, 24), 6);
  assert.equal(gcdSafeIntegers(17, 13), 1);
  assert.equal(gcdSafeIntegers(-54, 24), 6);
  assert.equal(gcdSafeIntegers(-6, -9), 3);
});
test("gestiona ceros", () => {
  assert.equal(gcdSafeIntegers(0, 0), 0);
  assert.equal(gcdSafeIntegers(0, -12), 12);
  assert.equal(gcdSafeIntegers(8, 0), 8);
});
test("valida enteros seguros", () => {
  assert.throws(() => gcdSafeIntegers(3.5, 2), TypeError);
  assert.throws(() => gcdSafeIntegers(NaN, 2), TypeError);
  assert.throws(() => gcdSafeIntegers(Number.MAX_SAFE_INTEGER + 1, 2), TypeError);
});
