/**
 * Construye sumas prefijas: prefix[i] contiene la suma de los primeros i valores.
 * Tiempo O(n), espacio O(n).
 */
export function buildPrefixSums(values) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  const prefix = [0];
  for (const value of values) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new TypeError("Los valores deben ser números finitos");
    }
    const sum = prefix[prefix.length - 1] + value;
    if (!Number.isFinite(sum)) throw new RangeError("La suma excede el rango finito");
    prefix.push(sum);
  }
  return prefix;
}

/**
 * Suma inclusiva del intervalo [start, end] en O(1).
 */
export function sumRange(prefix, start, end) {
  if (!Array.isArray(prefix) || prefix.length < 2 || prefix.some((x) => typeof x !== "number" || !Number.isFinite(x))) {
    throw new TypeError("prefix debe contener sumas prefijas finitas");
  }
  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < start || end >= prefix.length - 1) {
    throw new RangeError("Intervalo fuera de los límites");
  }
  return prefix[end + 1] - prefix[start];
}
