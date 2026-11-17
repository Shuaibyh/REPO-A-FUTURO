/**
 * Número de Fibonacci F(n), F(0)=0 y F(1)=1.
 * O(n) tiempo, O(1) espacio. Rechaza resultados fuera del rango
 * de enteros seguros de JavaScript para no perder precisión.
 */
export function fibonacci(n) {
  if (!Number.isSafeInteger(n) || n < 0) {
    throw new RangeError("n debe ser un entero no negativo seguro");
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    if (!Number.isSafeInteger(next)) {
      throw new RangeError("Resultado fuera del rango de enteros seguros");
    }
    a = b;
    b = next;
  }
  return n === 0 ? 0 : b;
}
