/**
 * Devuelve los primeros count términos F0, F1, ... de Fibonacci.
 * count <= 79 garantiza que cada término sea un entero seguro de JS.
 * Tiempo O(count), espacio O(count).
 */
export function fibonacciSeries(count) {
  if (!Number.isInteger(count) || count < 0 || count > 79) {
    throw new RangeError("count debe ser un entero entre 0 y 79");
  }
  const series = [];
  let current = 0, next = 1;
  for (let i = 0; i < count; i++) {
    series.push(current);
    [current, next] = [next, current + next];
  }
  return series;
}
