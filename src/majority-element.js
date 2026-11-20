/**
 * Devuelve el elemento que aparece más de n/2 veces, o null si no existe.
 * Algoritmo de Boyer-Moore con verificación: O(n) tiempo, O(1) espacio.
 * Solo se admiten números finitos.
 */
export function majorityElement(values) {
  if (!Array.isArray(values) || !values.every(v => typeof v === "number" && Number.isFinite(v))) {
    throw new TypeError("values debe ser un arreglo de números finitos");
  }
  let candidate;
  let votes = 0;
  for (const value of values) {
    if (votes === 0) {
      candidate = value;
      votes = 1;
    } else if (value === candidate) {
      votes++;
    } else {
      votes--;
    }
  }
  if (values.length === 0) return null;
  let occurrences = 0;
  for (const value of values) if (value === candidate) occurrences++;
  return occurrences > values.length / 2 ? candidate : null;
}
