/**
 * Encuentra dos índices diferentes cuya suma es target.
 * Prioriza el menor segundo índice; para ese índice, el primer índice visto.
 * Tiempo O(n), espacio O(n). No modifica la entrada.
 */
export function twoSumIndices(values, target) {
  if (!Array.isArray(values) || values.some((x) => typeof x !== "number" || !Number.isFinite(x))) {
    throw new TypeError("values debe contener números finitos");
  }
  if (typeof target !== "number" || !Number.isFinite(target)) {
    throw new TypeError("target debe ser un número finito");
  }
  const firstIndex = new Map();
  for (let i = 0; i < values.length; i++) {
    const complement = target - values[i];
    if (firstIndex.has(complement)) return [firstIndex.get(complement), i];
    if (!firstIndex.has(values[i])) firstIndex.set(values[i], i);
  }
  return null;
}
