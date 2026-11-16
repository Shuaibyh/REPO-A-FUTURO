import test from "node:test";
import assert from "node:assert/strict";
import { gcd, lcm } from "../src/number-theory.js";

test("calcula MCD de enteros positivos y coprimos", () => {
  assert.equal(gcd(48, 18), 6);
  assert.equal(gcd(17, 13), 1);
});

test("MCD admite negativos y cero", () => {
  assert.equal(gcd(-12, 8), 4);
  assert.equal(gcd(0, 9), 9);
  assert.equal(gcd(0, 0), 0);
});

test("calcula MCM con resultado no negativo", () => {
  assert.equal(lcm(12, 18), 36);
  assert.equal(lcm(-4, 6), 12);
});

test("MCM con cero es cero", () => {
  assert.equal(lcm(0, 17), 0);
  assert.equal(lcm(0, 0), 0);
});

test("rechaza decimales, valores no seguros y overflow", () => {
  assert.throws(() => gcd(1.5, 2), RangeError);
  assert.throws(() => lcm(Number.MAX_SAFE_INTEGER, 2), RangeError);
  assert.throws(() => gcd(Number.POSITIVE_INFINITY, 3), RangeError);
});
