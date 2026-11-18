/**
 * Comprueba si dos cadenas contienen los mismos puntos de código Unicode.
 * Normaliza NFC, conserva mayúsculas y espacios; O(n + m) tiempo.
 */
export function areAnagrams(left, right) {
  if (typeof left !== "string" || typeof right !== "string") {
    throw new TypeError("Ambos argumentos deben ser cadenas");
  }
  const a = Array.from(left.normalize("NFC"));
  const b = Array.from(right.normalize("NFC"));
  if (a.length !== b.length) return false;
  const counts = new Map();
  for (const char of a) counts.set(char, (counts.get(char) ?? 0) + 1);
  for (const char of b) {
    const remaining = counts.get(char) ?? 0;
    if (!remaining) return false;
    if (remaining === 1) counts.delete(char);
    else counts.set(char, remaining - 1);
  }
  return counts.size === 0;
}
