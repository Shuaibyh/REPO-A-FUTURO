/**
 * Transpone una matriz rectangular. No modifica sus filas.
 * Para una matriz vacía o con cero columnas retorna [].
 * O(filas * columnas) tiempo y espacio.
 */
export function transposeMatrix(matrix) {
  if (!Array.isArray(matrix)) throw new TypeError("matrix debe ser un arreglo");
  if (matrix.length === 0) return [];
  if (!matrix.every(Array.isArray)) {
    throw new TypeError("Cada fila debe ser un arreglo");
  }
  const columns = matrix[0].length;
  if (!matrix.every((row) => row.length === columns)) {
    throw new RangeError("La matriz debe ser rectangular");
  }
  return Array.from({ length: columns }, (_, column) =>
    matrix.map((row) => row[column]));
}
