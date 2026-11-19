import test from "node:test";
import assert from "node:assert/strict";
import { nextGreaterElements } from "../src/next-greater-elements.js";

test("encuentra el primer mayor estricto a la derecha", () => {
  assert.deepEqual(nextGreaterElements([2, 1, 2, 4, 3]), [4, 2, 4, null, null]);
  assert.deepEqual(nextGreaterElements([-2, -1, -3, 0]), [-1, 0, 0, null]);
});

test("trata iguales como no mayores", () => {
  assert.deepEqual(nextGreaterElements([3, 3, 3]), [null, null, null]);
  assert.deepEqual(nextGreaterElements([5, 4, 3]), [null, null, null]);
  assert.deepEqual(nextGreaterElements([]), []);
});

test("no modifica el arreglo original", () => {
  const values = [1, 3, 2];
  assert.deepEqual(nextGreaterElements(values), [3, null, null]);
  assert.deepEqual(values, [1, 3, 2]);
});

test("rechaza entradas no numéricas o infinitas", () => {
  for (const values of [null, {}, [NaN], [Infinity], [1, "2"]]) {
    assert.throws(() => nextGreaterElements(values), TypeError);
  }
});
