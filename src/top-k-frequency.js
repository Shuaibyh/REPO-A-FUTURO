/**
 * Devuelve los k valores más frecuentes, con desempate numérico ascendente.
 * Retorna todos los distintos si k excede su cantidad.
 * Tiempo O(n + u log u), espacio O(u).
 */
export function topKFrequency(values, k) {
  if (!Array.isArray(values) || values.some((x) => typeof x !== "number" || !Number.isFinite(x))) {
    throw new TypeError("values debe contener números finitos");
  }
  if (!Number.isSafeInteger(k) || k < 0) throw new RangeError("k debe ser un entero no negativo");
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return [...counts.keys()]
    .sort((a, b) => counts.get(b) - counts.get(a) || a - b)
    .slice(0, k);
}
