import test from "node:test";
import assert from "node:assert/strict";
import { commonPrefixUnicode } from "../src/common-prefix-unicode.js";

test("encuentra prefijos compartidos", () => {
  assert.equal(commonPrefixUnicode(["flower", "flow", "flight"]), "fl");
  assert.equal(commonPrefixUnicode(["interior", "internet", "interno"]), "inter");
  assert.equal(commonPrefixUnicode(["a", "b"]), "");
});
test("trata emojis como puntos de código completos", () => {
  assert.equal(commonPrefixUnicode(["😀abc", "😀axy"]), "😀a");
  assert.equal(commonPrefixUnicode(["😀", "😃"]), "");
  assert.equal(commonPrefixUnicode([]), "");
  assert.equal(commonPrefixUnicode(["único"]), "único");
});
test("rechaza entradas incorrectas", () => {
  assert.throws(() => commonPrefixUnicode(null), TypeError);
  assert.throws(() => commonPrefixUnicode(["uno", 2]), TypeError);
});
