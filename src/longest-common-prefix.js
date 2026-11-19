/**
 * Retorna el prefijo compartido por todas las cadenas.
 * Compara puntos de código Unicode, sin partir pares sustitutos.
 * O(n * m), donde m es la longitud del prefijo más corto.
 */
export function longestCommonPrefix(strings) {
  if (!Array.isArray(strings)) throw new TypeError("strings debe ser un arreglo");
  if (!strings.every((value) => typeof value === "string")) {
    throw new TypeError("Todos los elementos deben ser cadenas");
  }
  if (strings.length === 0) return "";
  const characters = Array.from(strings[0]);
  let length = characters.length;
  for (const value of strings.slice(1)) {
    const current = Array.from(value);
    length = Math.min(length, current.length);
    let i = 0;
    while (i < length && characters[i] === current[i]) i++;
    length = i;
    if (length === 0) break;
  }
  return characters.slice(0, length).join("");
}
