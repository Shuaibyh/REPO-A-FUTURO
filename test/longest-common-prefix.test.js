import test from "node:test";
import assert from "node:assert/strict";
import { longestCommonPrefix } from "../src/longest-common-prefix.js";

test("encuentra el prefijo común", () => {
  assert.equal(longestCommonPrefix(["flor", "florero", "flota"]), "flo");
  assert.equal(longestCommonPrefix(["abc", "xyz"]), "");
  assert.equal(longestCommonPrefix(["único"]), "único");
});

test("compara caracteres Unicode suplementarios completos", () => {
  assert.equal(longestCommonPrefix(["😀 hola", "😀 mundo"]), "😀 ");
  assert.equal(longestCommonPrefix(["😀", "😃"]), "");
});

test("conserva los casos vacíos", () => {
  assert.equal(longestCommonPrefix([]), "");
  assert.equal(longestCommonPrefix(["hola", ""]), "");
});

test("valida cada elemento", () => {
  for (const input of [null, "hola", ["hola", undefined], [1]]) {
    assert.throws(() => longestCommonPrefix(input), TypeError);
  }
});
