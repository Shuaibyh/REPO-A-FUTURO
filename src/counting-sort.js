/**
 * Counting sort para enteros seguros con rango acotado.
 * Incluye números negativos. O(n + k) tiempo y espacio,
 * donde k = máximo - mínimo + 1. Se limita k para cuidar memoria.
 */
export function countingSort(values, maxRange = 100_000) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  if (!Number.isSafeInteger(maxRange) || maxRange < 1) {
    throw new RangeError("maxRange debe ser un entero positivo seguro");
  }
  if (values.length === 0) return [];
  for (const value of values) {
    if (!Number.isSafeInteger(value)) throw new RangeError("Todos los valores deben ser enteros seguros");
  }
  const min = Math.min(...values);
  const max = Math.max(...values);
  const width = max - min + 1;
  if (!Number.isSafeInteger(width) || width > maxRange) {
    throw new RangeError("Rango demasiado grande para counting sort");
  }
  const counts = new Array(width).fill(0);
  for (const value of values) counts[value - min]++;
  const result = [];
  for (let i = 0; i < counts.length; i++) {
    for (let count = counts[i]; count > 0; count--) result.push(min + i);
  }
  return result;
}
