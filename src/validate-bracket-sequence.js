/**
 * Comprueba el balance de (), [] y {} mediante una pila.
 * Ignora caracteres no delimitadores. O(n) tiempo y espacio.
 */
export function validateBracketSequence(input) {
  if (typeof input !== "string") throw new TypeError("Se esperaba una cadena");
  const closing = { ")": "(", "]": "[", "}": "{" };
  const opening = new Set(["(", "[", "{"]);
  const stack = [];
  for (const char of input) {
    if (opening.has(char)) stack.push(char);
    else if (Object.hasOwn(closing, char) && stack.pop() !== closing[char]) return false;
  }
  return stack.length === 0;
}
