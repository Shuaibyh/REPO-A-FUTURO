/**
 * Longitud de la subcadena contigua sin caracteres repetidos más larga.
 * Cuenta puntos de código Unicode, no unidades UTF-16; O(n) tiempo y espacio.
 */
export function longestUniqueSubstring(text) {
  if (typeof text !== "string") throw new TypeError("text debe ser una cadena");
  const lastSeen = new Map();
  let left = 0, best = 0, index = 0;
  for (const char of text) {
    const seen = lastSeen.get(char);
    if (seen !== undefined && seen >= left) left = seen + 1;
    lastSeen.set(char, index);
    best = Math.max(best, index - left + 1);
    index++;
  }
  return best;
}
