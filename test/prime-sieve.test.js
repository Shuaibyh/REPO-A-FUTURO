import test from "node:test";
import assert from "node:assert/strict";
import { primeSieve } from "../src/prime-sieve.js";

test("no existen primos menores que dos", () => {
  assert.deepEqual(primeSieve(0), []);
  assert.deepEqual(primeSieve(1), []);
});
test("dos es el primer primo", () => {
  assert.deepEqual(primeSieve(2), [2]);
});
test("descarta compuestos y conserva los primos hasta treinta", () => {
  assert.deepEqual(primeSieve(30), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
});
test("incluye un primo cuando coincide con el límite", () => {
  assert.deepEqual(primeSieve(11), [2, 3, 5, 7, 11]);
});
test("rechaza límites fuera de contrato", () => {
  assert.throws(() => primeSieve(-1), RangeError);
  assert.throws(() => primeSieve(3.5), RangeError);
  assert.throws(() => primeSieve(1_000_001), RangeError);
  assert.throws(() => primeSieve(NaN), RangeError);
});
