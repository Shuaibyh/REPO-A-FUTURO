/**
 * Busca la primera posición del objetivo en un arreglo ya ordenado.
 * Complejidad: O(log n) tiempo; O(1) espacio.
 * El arreglo debe estar ordenado según el mismo comparador.
 */
export function binarySearch(sorted, target, compare = (a, b) => a - b) {
  if (!Array.isArray(sorted)) throw new TypeError("sorted debe ser un arreglo");
  if (typeof compare !== "function") throw new TypeError("compare debe ser una función");
  let left = 0;
  let right = sorted.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (compare(sorted[mid], target) < 0) left = mid + 1;
    else right = mid;
  }
  return left < sorted.length && compare(sorted[left], target) === 0 ? left : -1;
}
