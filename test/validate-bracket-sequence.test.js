import test from "node:test";
import assert from "node:assert/strict";
import { validateBracketSequence } from "../src/validate-bracket-sequence.js";

test("admite delimitadores anidados e ignora texto", () => {
  assert.equal(validateBracketSequence("{a: [b, (c)]}"), true);
  assert.equal(validateBracketSequence(""), true);
  assert.equal(validateBracketSequence("sin signos"), true);
});
test("detecta cierres prematuros y anidamiento incorrecto", () => {
  assert.equal(validateBracketSequence("([)]"), false);
  assert.equal(validateBracketSequence(")]"), false);
  assert.equal(validateBracketSequence("{[}"), false);
  assert.equal(validateBracketSequence("("), false);
});
test("rechaza tipos inválidos", () => {
  assert.throws(() => validateBracketSequence(null), TypeError);
});
