/**
 * Recorre una matriz rectangular en espiral en sentido horario.
 * O(filas * columnas) tiempo, O(filas * columnas) salida.
 * No modifica la matriz ni sus filas.
 */
export function spiralOrder(matrix) {
  if (!Array.isArray(matrix) || !matrix.every(Array.isArray)) {
    throw new TypeError("matrix debe ser un arreglo de filas");
  }
  if (matrix.length === 0) return [];
  const width = matrix[0].length;
  if (!matrix.every(row => row.length === width)) {
    throw new RangeError("La matriz debe ser rectangular");
  }
  const result = [];
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = width - 1;
  while (top <= bottom && left <= right) {
    for (let c = left; c <= right; c++) result.push(matrix[top][c]);
    top++;
    for (let r = top; r <= bottom; r++) result.push(matrix[r][right]);
    right--;
    if (top <= bottom) {
      for (let c = right; c >= left; c--) result.push(matrix[bottom][c]);
      bottom--;
    }
    if (left <= right) {
      for (let r = bottom; r >= top; r--) result.push(matrix[r][left]);
      left++;
    }
  }
  return result;
}
