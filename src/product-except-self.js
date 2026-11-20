/**
 * Producto de todos los elementos salvo el de cada posición.
 * Usa prefijos y sufijos, sin división. O(n) tiempo; O(1) espacio
 * auxiliar excluyendo la salida. Los resultados siguen la aritmética
 * de números de JavaScript y pueden desbordarse.
 */
export function productExceptSelf(values) {
  if (!Array.isArray(values) || !values.every(v => typeof v === "number" && Number.isFinite(v))) {
    throw new TypeError("values debe ser un arreglo de números finitos");
  }
  const output = Array(values.length).fill(1);
  let prefix = 1;
  for (let i = 0; i < values.length; i++) {
    output[i] = prefix;
    prefix *= values[i];
  }
  let suffix = 1;
  for (let i = values.length - 1; i >= 0; i--) {
    output[i] *= suffix;
    suffix *= values[i];
  }
  return output;
}
