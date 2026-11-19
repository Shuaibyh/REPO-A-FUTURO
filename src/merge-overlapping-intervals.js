/**
 * Fusiona intervalos cerrados que se solapan o tocan.
 * Valida extremos finitos, ordena copias y no modifica la entrada.
 * Tiempo O(n log n), espacio O(n).
 */
export function mergeOverlappingIntervals(intervals) {
  if (!Array.isArray(intervals) || intervals.some((item) =>
    !Array.isArray(item) || item.length !== 2 ||
    item.some((x) => typeof x !== "number" || !Number.isFinite(x)) ||
    item[0] > item[1]
  )) {
    throw new TypeError("Cada intervalo debe ser [inicio, fin] finito y ordenado");
  }
  const ordered = intervals.map(([start, end]) => [start, end])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const merged = [];
  for (const [start, end] of ordered) {
    const last = merged[merged.length - 1];
    if (last && start <= last[1]) last[1] = Math.max(last[1], end);
    else merged.push([start, end]);
  }
  return merged;
}
