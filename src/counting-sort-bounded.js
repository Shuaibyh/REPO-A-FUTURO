/**
 * Ordena enteros seguros usando conteo, sin mutar el arreglo.
 * Se limita el rango para evitar asignaciones de memoria excesivas.
 * Tiempo O(n + rango), espacio O(n + rango).
 */
export function countingSortBounded(values, maxSpan = 100000) {
  if (!Array.isArray(values) || values.some((x) => !Number.isSafeInteger(x))) {
    throw new TypeError("values debe contener enteros seguros");
  }
  if (!Number.isSafeInteger(maxSpan) || maxSpan < 1 || maxSpan > 100000) {
    throw new RangeError("maxSpan debe estar entre 1 y 100000");
  }
  if (values.length === 0) return [];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min + 1;
  if (span > maxSpan) throw new RangeError("El rango supera maxSpan");
  const frequency = new Array(span).fill(0);
  for (const value of values) frequency[value - min]++;
  const sorted = [];
  for (let i = 0; i < frequency.length; i++) {
    for (let count = 0; count < frequency[i]; count++) sorted.push(i + min);
  }
  return sorted;
}
