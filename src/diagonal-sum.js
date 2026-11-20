/**
 * Suma las diagonales principal y secundaria de una matriz cuadrada.
 * El centro de tamaño impar solo se cuenta una vez.
 * O(n^2) validación, O(n) suma, O(1) espacio extra.
 */
export function diagonalSum(matrix) {
  if (!Array.isArray(matrix) || !matrix.every(Array.isArray)) {
    throw new TypeError("matrix debe ser un arreglo de filas");
  }
  const n = matrix.length;
  if (!matrix.every(row => row.length === n &&
      row.every(value => typeof value === "number" && Number.isFinite(value)))) {
    throw new TypeError("La matriz debe ser cuadrada y numérica");
  }
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += matrix[i][i];
    if (i !== n - 1 - i) total += matrix[i][n - 1 - i];
  }
  return total;
}
