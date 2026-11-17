/**
 * Criba de Eratóstenes: todos los primos menores o iguales a limit.
 * O(n log log n) tiempo y O(n) memoria.
 * Límite explícito para no reservar arreglos desproporcionados.
 */
export function primeSieve(limit) {
  if (!Number.isSafeInteger(limit) || limit < 0 || limit > 1_000_000) {
    throw new RangeError("limit debe ser entero entre 0 y 1000000");
  }
  if (limit < 2) return [];
  const isPrime = new Uint8Array(limit + 1);
  isPrime.fill(1, 2);
  for (let p = 2; p * p <= limit; p++) {
    if (!isPrime[p]) continue;
    for (let multiple = p * p; multiple <= limit; multiple += p) {
      isPrime[multiple] = 0;
    }
  }
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) primes.push(i);
  }
  return primes;
}
