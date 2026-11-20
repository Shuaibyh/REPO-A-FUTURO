/**
 * Distancia de Levenshtein por puntos de código Unicode.
 * Inserción, borrado y sustitución cuestan 1.
 * O(m*n) tiempo y O(min(m,n)) espacio.
 * Limita entradas a 1024 puntos de código.
 */
export function editDistance(first, second) {
  if (typeof first !== "string" || typeof second !== "string") {
    throw new TypeError("Se requieren dos cadenas");
  }
  let a = Array.from(first), b = Array.from(second);
  if (a.length > 1024 || b.length > 1024) {
    throw new RangeError("Las cadenas superan 1024 caracteres");
  }
  if (b.length > a.length) [a, b] = [b, a];
  let previous = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const current = [i];
    for (let j = 1; j <= b.length; j++) {
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
    previous = current;
  }
  return previous[b.length];
}
