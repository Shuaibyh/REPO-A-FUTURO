/**
 * Construye sumas prefijo: prefix[0] = 0,
 * prefix[i+1] = suma de los primeros i+1 valores.
 * Tiempo y espacio de construcción O(n).
 */
export function prefixSums(values) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  const prefix = [0];
  for (const value of values) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new TypeError("Se requieren números finitos");
    }
    const next = prefix[prefix.length - 1] + value;
    if (!Number.isFinite(next)) throw new RangeError("Desbordamiento de la suma");
    prefix.push(next);
  }
  return prefix;
}

/** Suma del intervalo semiabierto [start,end) en O(1). */
export function rangeSum(prefix, start, end) {
  if (!Array.isArray(prefix) || prefix.length === 0) {
    throw new TypeError("prefix debe ser un arreglo de sumas prefijo");
  }
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) ||
      start < 0 || end < start || end >= prefix.length) {
    throw new RangeError("Intervalo fuera de rango");
  }
  return prefix[end] - prefix[start];
}
