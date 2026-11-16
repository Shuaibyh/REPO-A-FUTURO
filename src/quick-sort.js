/**
 * Quicksort funcional con tres particiones para tratar duplicados.
 * Caso promedio O(n log n); peor caso O(n²); no garantiza estabilidad.
 * Devuelve una copia, sin mutar el arreglo recibido.
 */
export function quickSort(values, compare = (a, b) => a - b) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  if (typeof compare !== "function") throw new TypeError("compare debe ser una función");
  if (values.length <= 1) return [...values];
  const pivot = values[Math.floor(values.length / 2)];
  const lower = [];
  const equal = [];
  const higher = [];
  for (const value of values) {
    const order = compare(value, pivot);
    if (order < 0) lower.push(value);
    else if (order > 0) higher.push(value);
    else equal.push(value);
  }
  return [...quickSort(lower, compare), ...equal, ...quickSort(higher, compare)];
}
