/**
 * Prefijo común más largo de una lista de textos, por puntos de código Unicode.
 * Nunca corta un par suplente UTF-16 a la mitad.
 * Tiempo O(n * m), donde m es la menor longitud.
 */
export function commonPrefixUnicode(values) {
  if (!Array.isArray(values) || values.some((x) => typeof x !== "string")) {
    throw new TypeError("values debe contener cadenas");
  }
  if (values.length === 0) return "";
  const first = Array.from(values[0]);
  let length = first.length;
  for (let i = 1; i < values.length && length > 0; i++) {
    const chars = Array.from(values[i]);
    length = Math.min(length, chars.length);
    let j = 0;
    while (j < length && first[j] === chars[j]) j++;
    length = j;
  }
  return first.slice(0, length).join("");
}
