import test from "node:test";
import assert from "node:assert/strict";
import { areAnagrams } from "../src/are-anagrams.js";

test("reconoce anagramas y repetidos", () => {
  assert.equal(areAnagrams("roma", "amor"), true);
  assert.equal(areAnagrams("aabb", "baba"), true);
  assert.equal(areAnagrams("aab", "abb"), false);
});
test("mantiene mayúsculas y espacios", () => {
  assert.equal(areAnagrams("Roma", "amor"), false);
  assert.equal(areAnagrams("a b", "ba "), true);
  assert.equal(areAnagrams("ab", "a b"), false);
});
test("admite Unicode y NFC", () => {
  assert.equal(areAnagrams("café", "e\u0301fac"), true);
  assert.equal(areAnagrams("🙂🚀", "🚀🙂"), true);
  assert.equal(areAnagrams("", ""), true);
});
test("rechaza argumentos no textuales", () => {
  assert.throws(() => areAnagrams(null, ""), TypeError);
  assert.throws(() => areAnagrams("", []), TypeError);
});
