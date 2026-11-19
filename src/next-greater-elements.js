/**
 * Para cada posición, devuelve el primer valor estrictamente mayor a su derecha,
 * o null si no existe. Usa una pila monótona; O(n) tiempo y espacio.
 */
export function nextGreaterElements(values) {
  if (!Array.isArray(values)) throw new TypeError("values debe ser un arreglo");
  if (!values.every((value) => typeof value === "number" && Number.isFinite(value))) {
    throw new TypeError("Todos los valores deben ser números finitos");
  }
  const result = Array(values.length).fill(null);
  const pending = [];
  for (let i = 0; i < values.length; i++) {
    while (pending.length > 0 && values[pending[pending.length - 1]] < values[i]) {
      result[pending.pop()] = values[i];
    }
    pending.push(i);
  }
  return result;
}
