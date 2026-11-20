/**
 * Número mínimo de monedas para sumar amount, con uso ilimitado.
 * Devuelve -1 si no es posible. O(amount * monedas) tiempo, O(amount) espacio.
 * Amount se limita a 10000 para evitar consumo excesivo.
 */
export function minCoinChange(coins, amount) {
  if (!Array.isArray(coins) || !coins.every(c => Number.isSafeInteger(c) && c > 0)) {
    throw new TypeError("coins debe contener enteros positivos");
  }
  if (!Number.isSafeInteger(amount) || amount < 0 || amount > 10_000) {
    throw new RangeError("amount debe ser un entero entre 0 y 10000");
  }
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let sum = 1; sum <= amount; sum++) {
    for (const coin of coins) {
      if (coin <= sum && dp[sum - coin] !== Infinity) {
        dp[sum] = Math.min(dp[sum], dp[sum - coin] + 1);
      }
    }
  }
  return Number.isFinite(dp[amount]) ? dp[amount] : -1;
}
