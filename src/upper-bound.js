/**
 * Primera posición con valor > target en una secuencia ordenada.
 * O(log n) tiempo y O(1) espacio; usa el mismo comparador del orden.
 */
export function upperBound(sorted, target, compare = (a, b) => a - b) {
  if (!Array.isArray(sorted)) throw new TypeError("sorted debe ser un arreglo");
  if (typeof compare !== "function") throw new TypeError("compare debe ser una función");
  let left = 0, right = sorted.length;
  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);
    if (compare(sorted[middle], target) <= 0) left = middle + 1;
    else right = middle;
  }
  return left;
}
