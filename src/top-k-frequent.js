/**
 * Devuelve hasta k palabras distintas ordenadas por frecuencia descendente.
 * En empates conserva el orden de primera aparición.
 * O(n + u log u) tiempo, O(u) espacio (u palabras únicas).
 */
export function topKFrequent(words, k) {
  if (!Array.isArray(words) || !words.every((word) => typeof word === "string")) {
    throw new TypeError("words debe ser un arreglo de cadenas");
  }
  if (!Number.isSafeInteger(k) || k < 0) {
    throw new RangeError("k debe ser un entero seguro no negativo");
  }
  const frequencies = new Map();
  words.forEach((word, index) => {
    const entry = frequencies.get(word);
    if (entry) entry.count++;
    else frequencies.set(word, { word, count: 1, firstIndex: index });
  });
  return [...frequencies.values()]
    .sort((a, b) => b.count - a.count || a.firstIndex - b.firstIndex)
    .slice(0, k)
    .map((entry) => entry.word);
}
