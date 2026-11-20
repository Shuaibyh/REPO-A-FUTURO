/**
 * Codificación por rachas de puntos de código Unicode.
 * Usa pares [carácter, cantidad] para preservar cifras y separadores.
 * O(n) tiempo. La decodificación limita la salida a 1 millón de caracteres.
 */
export function encodeRuns(text) {
  if (typeof text !== "string") throw new TypeError("text debe ser una cadena");
  const result = [];
  for (const character of text) {
    const last = result[result.length - 1];
    if (last && last[0] === character) last[1]++;
    else result.push([character, 1]);
  }
  return result;
}

export function decodeRuns(runs) {
  if (!Array.isArray(runs)) throw new TypeError("runs debe ser un arreglo");
  let size = 0;
  const pieces = [];
  for (const run of runs) {
    if (!Array.isArray(run) || run.length !== 2 ||
        typeof run[0] !== "string" || Array.from(run[0]).length !== 1 ||
        !Number.isSafeInteger(run[1]) || run[1] < 1) {
      throw new TypeError("Cada racha debe ser [carácter, entero positivo]");
    }
    size += run[1];
    if (size > 1_000_000) throw new RangeError("Salida demasiado grande");
    pieces.push(run[0].repeat(run[1]));
  }
  return pieces.join("");
}
