import test from "node:test";
import assert from "node:assert/strict";
import { longestUniqueSubstring } from "../src/longest-unique-substring.js";

test("calcula la ventana máxima sin repeticiones", () => {
  assert.equal(longestUniqueSubstring("abcabcbb"), 3);
  assert.equal(longestUniqueSubstring("bbbbb"), 1);
  assert.equal(longestUniqueSubstring("pwwkew"), 3);
});
test("admite cadenas vacías y sin repetidos", () => {
  assert.equal(longestUniqueSubstring(""), 0);
  assert.equal(longestUniqueSubstring("abcdef"), 6);
  assert.equal(longestUniqueSubstring("abba"), 2);
});
test("cuenta puntos de código Unicode", () => {
  assert.equal(longestUniqueSubstring("🙂🚀🙂"), 2);
  assert.equal(longestUniqueSubstring("😀😀"), 1);
});
test("valida tipo de entrada", () => {
  assert.throws(() => longestUniqueSubstring(null), TypeError);
  assert.throws(() => longestUniqueSubstring(["a"]), TypeError);
});
