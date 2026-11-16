/**
 * Máximo común divisor por Euclides; mcd(0,0) = 0 por convención.
 * Usa únicamente enteros seguros de JavaScript.
 */
function assertInteger(value) {
  if (!Number.isSafeInteger(value)) throw new RangeError("Se requiere un entero seguro");
}

export function gcd(a, b) {
  assertInteger(a);
  assertInteger(b);
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

/** Mínimo común múltiplo no negativo; mcm(0,n) = 0. */
export function lcm(a, b) {
  assertInteger(a);
  assertInteger(b);
  if (a === 0 || b === 0) return 0;
  const result = Math.abs((a / gcd(a, b)) * b);
  if (!Number.isSafeInteger(result)) throw new RangeError("El MCM excede el entero seguro");
  return result;
}
