/**
 * Suma máxima de un subarreglo contiguo no vacío (Kadane).
 * Devuelve null para un arreglo vacío; O(n) tiempo y O(1) espacio.
 */
export function maxSubarraySum(values) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  if (values.length === 0) return null;
  let current = 0, best = -Infinity;
  for (const value of values) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new TypeError("Los valores deben ser números finitos");
    }
    current = Math.max(value, current + value);
    best = Math.max(best, current);
  }
  return best;
}
