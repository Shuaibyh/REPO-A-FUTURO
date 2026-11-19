/**
 * Máximo común divisor no negativo de dos enteros seguros.
 * Por convención gcd(0,0) = 0. O(log(min(a,b))) iteraciones.
 */
export function gcdSafeIntegers(a, b) {
  if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b)) {
    throw new TypeError("a y b deben ser enteros seguros");
  }
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
}
