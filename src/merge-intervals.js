/**
 * Une intervalos cerrados que se superponen o comparten un extremo.
 * No modifica los intervalos originales.
 * O(n log n) tiempo por ordenación; O(n) espacio.
 */
export function mergeIntervals(intervals) {
  if (!Array.isArray(intervals)) throw new TypeError("intervals debe ser un arreglo");
  const sorted = intervals.map((range) => {
    if (!Array.isArray(range) || range.length !== 2 ||
        !range.every((value) => typeof value === "number" && Number.isFinite(value)) ||
        range[0] > range[1]) {
      throw new TypeError("Cada intervalo debe contener [inicio, fin] finitos y ordenados");
    }
    return [...range];
  }).sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const merged = [];
  for (const [start, end] of sorted) {
    const last = merged[merged.length - 1];
    if (!last || start > last[1]) merged.push([start, end]);
    else last[1] = Math.max(last[1], end);
  }
  return merged;
}
