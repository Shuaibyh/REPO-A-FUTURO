/**
 * Longitud de la subsecuencia estrictamente creciente más larga.
 * Mantiene las colas mínimas de cada longitud y búsqueda binaria.
 * O(n log n) tiempo, O(n) espacio; no modifica los datos.
 */
export function longestIncreasingSubsequence(values) {
  if (!Array.isArray(values) ||
      !values.every(value => typeof value === "number" && Number.isFinite(value))) {
    throw new TypeError("values debe contener números finitos");
  }
  const tails = [];
  for (const value of values) {
    let left = 0, right = tails.length;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (tails[mid] < value) left = mid + 1;
      else right = mid;
    }
    tails[left] = value;
  }
  return tails.length;
}
