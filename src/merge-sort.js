/**
 * Merge sort estable; devuelve un arreglo nuevo.
 * Complejidad: O(n log n) tiempo y O(n) espacio auxiliar.
 */
export function mergeSort(values, compare = (a, b) => a - b) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  if (typeof compare !== "function") throw new TypeError("compare debe ser una función");
  if (values.length <= 1) return [...values];
  const middle = Math.floor(values.length / 2);
  const left = mergeSort(values.slice(0, middle), compare);
  const right = mergeSort(values.slice(middle), compare);
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (compare(left[i], right[j]) <= 0) merged.push(left[i++]);
    else merged.push(right[j++]);
  }
  while (i < left.length) merged.push(left[i++]);
  while (j < right.length) merged.push(right[j++]);
  return merged;
}
