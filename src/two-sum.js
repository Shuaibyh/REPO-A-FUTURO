/**
 * Retorna índices [i,j] con i < j y values[i] + values[j] = target.
 * Prioriza la primera pareja hallada de izquierda a derecha.
 * Complejidad O(n) tiempo y O(n) espacio.
 */
export function twoSum(values, target) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  if (typeof target !== "number" || !Number.isFinite(target)) {
    throw new TypeError("target debe ser un número finito");
  }
  const seen = new Map();
  for (let j = 0; j < values.length; j++) {
    const value = values[j];
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new TypeError("Todos los valores deben ser números finitos");
    }
    const complement = target - value;
    if (seen.has(complement)) return [seen.get(complement), j];
    if (!seen.has(value)) seen.set(value, j);
  }
  return null;
}
