/**
 * Devuelve el índice de la primera coincidencia según equals.
 * No modifica values. Tiempo O(n), espacio O(1).
 */
export function linearSearch(values, target, equals = Object.is) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  if (typeof equals !== "function") throw new TypeError("equals debe ser una función");
  for (let i = 0; i < values.length; i++) {
    if (equals(values[i], target)) return i;
  }
  return -1;
}
