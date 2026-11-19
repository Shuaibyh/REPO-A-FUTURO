import test from "node:test";
import assert from "node:assert/strict";
import { fibonacciSeries } from "../src/fibonacci-series.js";

test("genera la serie iterativamente", () => {
  assert.deepEqual(fibonacciSeries(0), []);
  assert.deepEqual(fibonacciSeries(1), [0]);
  assert.deepEqual(fibonacciSeries(2), [0, 1]);
  assert.deepEqual(fibonacciSeries(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
test("no devuelve enteros fuera del rango seguro", () => {
  const values = fibonacciSeries(79);
  assert.equal(values.length, 79);
  assert.equal(values[78], 8944394323791464);
  assert.equal(Number.isSafeInteger(values[78]), true);
});
test("rechaza límites inválidos", () => {
  assert.throws(() => fibonacciSeries(-1), RangeError);
  assert.throws(() => fibonacciSeries(80), RangeError);
  assert.throws(() => fibonacciSeries(3.5), RangeError);
  assert.throws(() => fibonacciSeries("10"), RangeError);
});
