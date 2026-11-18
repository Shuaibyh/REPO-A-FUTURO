/**
 * Comprueba si el texto se lee igual en ambos sentidos.
 * Comparación exacta por puntos de código; no elimina espacios ni cambia caso.
 * O(n) tiempo y O(n) espacio.
 */
export function isPalindrome(text) {
  if (typeof text !== "string") throw new TypeError("text debe ser una cadena");
  const chars = Array.from(text.normalize("NFC"));
  for (let left = 0, right = chars.length - 1; left < right; left++, right--) {
    if (chars[left] !== chars[right]) return false;
  }
  return true;
}
