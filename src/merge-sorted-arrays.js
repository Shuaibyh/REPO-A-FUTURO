/**
 * Fusiona dos arreglos previamente ordenados, conservando estabilidad.
 * O(n + m) tiempo y O(n + m) memoria; no altera las entradas.
 */
export function mergeSortedArrays(left, right, compare = (a, b) => a - b) {
  if (!Array.isArray(left) || !Array.isArray(right)) {
    throw new TypeError("left y right deben ser arreglos");
  }
  if (typeof compare !== "function") throw new TypeError("compare debe ser una función");
  const merged = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (compare(left[i], right[j]) <= 0) merged.push(left[i++]);
    else merged.push(right[j++]);
  }
  while (i < left.length) merged.push(left[i++]);
  while (j < right.length) merged.push(right[j++]);
  return merged;
}
