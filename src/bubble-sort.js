/**
 * Bubble sort estable con parada anticipada si no hubo intercambios.
 * Tiempo O(n) en arreglo ordenado y O(n²) en peor caso.
 * Devuelve una copia de values.
 */
export function bubbleSort(values, compare = (a, b) => a - b) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  if (typeof compare !== "function") throw new TypeError("compare debe ser una función");
  const result = [...values];
  for (let end = result.length - 1; end > 0; end--) {
    let swapped = false;
    for (let i = 0; i < end; i++) {
      if (compare(result[i], result[i + 1]) > 0) {
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return result;
}
