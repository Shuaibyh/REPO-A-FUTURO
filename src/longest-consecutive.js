/**
 * Longitud de la secuencia más larga de enteros consecutivos,
 * independientemente del orden y sin contar duplicados.
 * O(n) tiempo esperado y O(n) espacio con Set.
 */
export function longestConsecutive(values) {
  if (!Array.isArray(values) || !values.every(Number.isSafeInteger)) {
    throw new TypeError("values debe contener enteros seguros");
  }
  const unique = new Set(values);
  let best = 0;
  for (const value of unique) {
    if (unique.has(value - 1)) continue;
    let length = 1;
    let current = value;
    while (unique.has(current + 1)) {
      current++;
      length++;
    }
    best = Math.max(best, length);
  }
  return best;
}
