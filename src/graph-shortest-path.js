/**
 * Ruta con menor número de aristas en un grafo sin pesos mediante BFS.
 * adjacency es Map<vértice, arreglo de vecinos>; si no hay ruta retorna null.
 * Tiempo O(V + E) en la componente alcanzable.
 */
export function shortestPathUnweighted(adjacency, start, goal) {
  if (!(adjacency instanceof Map)) throw new TypeError("Se requiere un Map");
  if (!adjacency.has(start) || !adjacency.has(goal)) return null;
  const parents = new Map([[start, null]]);
  const queue = [start];
  for (let i = 0; i < queue.length; i++) {
    const vertex = queue[i];
    if (Object.is(vertex, goal)) {
      const path = [];
      let current = vertex;
      while (current !== null) {
        path.push(current);
        current = parents.get(current);
      }
      return path.reverse();
    }
    const neighbors = adjacency.get(vertex) ?? [];
    if (!Array.isArray(neighbors)) throw new TypeError("Vecinos deben ser un arreglo");
    for (const neighbor of neighbors) {
      if (!parents.has(neighbor)) {
        parents.set(neighbor, vertex);
        queue.push(neighbor);
      }
    }
  }
  return null;
}
