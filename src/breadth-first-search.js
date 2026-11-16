/**
 * Recorre un grafo mediante búsqueda en anchura (BFS).
 * adjacency es Map<vértice, arreglo de vecinos>; orden determinista.
 * Complejidad: O(V + E) en la componente alcanzable.
 */
export function breadthFirstSearch(adjacency, start) {
  if (!(adjacency instanceof Map)) throw new TypeError("Se requiere un Map");
  if (!adjacency.has(start)) return [];
  const queue = [start];
  const visited = new Set([start]);
  for (let i = 0; i < queue.length; i++) {
    const vertex = queue[i];
    const neighbors = adjacency.get(vertex) ?? [];
    if (!Array.isArray(neighbors)) throw new TypeError("Los vecinos deben ser un arreglo");
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return queue;
}
