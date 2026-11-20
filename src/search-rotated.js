/**
 * Busca target en un arreglo ordenado ascendentemente y luego rotado.
 * Precondición: elementos distintos, números finitos, una sola rotación.
 * Retorna el índice o -1. O(log n) tiempo, O(1) espacio.
 */
export function searchRotated(values, target) {
  if (!Array.isArray(values) ||
      !values.every(v => typeof v === "number" && Number.isFinite(v)) ||
      typeof target !== "number" || !Number.isFinite(target)) {
    throw new TypeError("Se requieren números finitos");
  }
  let left = 0, right = values.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (values[mid] === target) return mid;
    if (values[left] <= values[mid]) {
      if (values[left] <= target && target < values[mid]) right = mid - 1;
      else left = mid + 1;
    } else if (values[mid] < target && target <= values[right]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
