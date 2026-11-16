/**
 * Ordena una copia del arreglo mediante inserción estable.
 * Complejidad: O(n²) tiempo en el peor caso; O(n) para la copia.
 */
export function insertionSort(values, compare = (a, b) => a - b) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  if (typeof compare !== "function") throw new TypeError("compare debe ser una función");
  const sorted = [...values];
  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    let j = i - 1;
    while (j >= 0 && compare(sorted[j], current) > 0) {
      sorted[j + 1] = sorted[j];
      j--;
    }
    sorted[j + 1] = current;
  }
  return sorted;
}
