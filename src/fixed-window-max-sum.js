/**
 * Mayor suma de una ventana contigua de longitud k.
 * O(n) tiempo y O(1) espacio. Requiere 1 <= k <= values.length.
 */
export function fixedWindowMaxSum(values, k) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  if (!Number.isSafeInteger(k) || k < 1 || k > values.length) {
    throw new RangeError("k debe estar entre 1 y la longitud del arreglo");
  }
  for (const value of values) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new TypeError("Los valores deben ser números finitos");
    }
  }
  let sum = 0;
  for (let i = 0; i < k; i++) sum += values[i];
  let best = sum;
  for (let i = k; i < values.length; i++) {
    sum += values[i] - values[i - k];
    best = Math.max(best, sum);
  }
  return best;
}
