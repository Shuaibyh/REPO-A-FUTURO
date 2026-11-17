import test from "node:test";
import assert from "node:assert/strict";
import { fibonacci } from "../src/fibonacci.js";

test("F(0) y F(1) son casos base", () => {
  assert.equal(fibonacci(0), 0);
  assert.equal(fibonacci(1), 1);
});
test("calcula términos conocidos", () => {
  assert.equal(fibonacci(2), 1);
  assert.equal(fibonacci(10), 55);
  assert.equal(fibonacci(20), 6765);
});
test("alcanza el último Fibonacci entero seguro", () => {
  assert.equal(fibonacci(78), 8944394323791464);
});
test("rechaza overflow a partir de F(79)", () => {
  assert.throws(() => fibonacci(79), RangeError);
});
test("rechaza negativos, decimales e infinitos", () => {
  assert.throws(() => fibonacci(-1), RangeError);
  assert.throws(() => fibonacci(1.5), RangeError);
  assert.throws(() => fibonacci(Infinity), RangeError);
});
