import test from "node:test";
import assert from "node:assert/strict";
import { hasBalancedBrackets } from "../src/balanced-brackets.js";

test("acepta pares correctamente anidados", () => {
  assert.equal(hasBalancedBrackets("{a:[(b+c)*2]}"), true);
});

test("rechaza cierres en orden incorrecto", () => {
  assert.equal(hasBalancedBrackets("([)]"), false);
  assert.equal(hasBalancedBrackets("{]"), false);
});

test("rechaza aperturas o cierres incompletos", () => {
  assert.equal(hasBalancedBrackets("(()"), false);
  assert.equal(hasBalancedBrackets("())"), false);
});

test("admite texto sin delimitadores y cadena vacía", () => {
  assert.equal(hasBalancedBrackets("texto 123"), true);
  assert.equal(hasBalancedBrackets(""), true);
});

test("exige una cadena como entrada", () => {
  assert.throws(() => hasBalancedBrackets(undefined), TypeError);
});
