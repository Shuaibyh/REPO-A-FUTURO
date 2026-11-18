import test from "node:test";
import assert from "node:assert/strict";
import { isPalindrome } from "../src/is-palindrome.js";

test("reconoce palíndromos y no palíndromos", () => {
  assert.equal(isPalindrome("reconocer"), true);
  assert.equal(isPalindrome("radar"), true);
  assert.equal(isPalindrome("algoritmo"), false);
});
test("comparación conserva caso y espacios", () => {
  assert.equal(isPalindrome("Aa"), false);
  assert.equal(isPalindrome("a a"), true);
  assert.equal(isPalindrome("a a "), false);
});
test("compara Unicode por caracteres y normaliza NFC", () => {
  assert.equal(isPalindrome("🙂a🙂"), true);
  assert.equal(isPalindrome("e\u0301xé"), true);
  assert.equal(isPalindrome(""), true);
});
test("rechaza entradas que no sean cadenas", () => {
  assert.throws(() => isPalindrome(null), TypeError);
  assert.throws(() => isPalindrome(12321), TypeError);
});
