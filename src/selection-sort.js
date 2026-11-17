/**
 * Selection sort. O(n²) tiempo y O(n) espacio por la copia.
 * No modifica la entrada; no garantiza estabilidad en empates.
 */
export function selectionSort(values, compare = (a, b) => a - b) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  if (typeof compare !== "function") throw new TypeError("compare debe ser una función");
  const result = [...values];
  for (let i = 0; i < result.length; i++) {
    let min = i;
    for (let j = i + 1; j < result.length; j++) {
      if (compare(result[j], result[min]) < 0) min = j;
    }
    if (min !== i) [result[i], result[min]] = [result[min], result[i]];
  }
  return result;
}
