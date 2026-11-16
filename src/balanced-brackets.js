/**
 * Valida paréntesis (), corchetes [] y llaves {} balanceados.
 * Ignora otros caracteres; no es un analizador de cadenas/código fuente.
 * Complejidad: O(n) tiempo y O(n) espacio.
 */
export function hasBalancedBrackets(text) {
  if (typeof text !== "string") throw new TypeError("text debe ser una cadena");
  const pairs = new Map([[")", "("], ["]", "["], ["}", "{"]]);
  const openings = new Set(pairs.values());
  const stack = [];
  for (const char of text) {
    if (openings.has(char)) stack.push(char);
    else if (pairs.has(char) && stack.pop() !== pairs.get(char)) return false;
  }
  return stack.length === 0;
}
