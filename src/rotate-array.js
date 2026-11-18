/**
 * Rota un arreglo pasos posiciones a la derecha, sin mutar la entrada.
 * Pasos negativos rotan a la izquierda; O(n) tiempo y espacio.
 */
export function rotateArray(values, steps) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  if (!Number.isSafeInteger(steps)) throw new RangeError("steps debe ser un entero seguro");
  const length = values.length;
  if (length === 0) return [];
  const shift = ((steps % length) + length) % length;
  return [...values.slice(length - shift), ...values.slice(0, length - shift)];
}
