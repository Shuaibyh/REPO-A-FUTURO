/**
 * Determina si un grafo no dirigido es bipartito.
 * Representación: graph[v] contiene los índices de vecinos de v.
 * Precondición: vecindad simétrica; se validan los índices.
 * O(V+E) tiempo y O(V) espacio.
 */
export function isBipartite(graph) {
  if (!Array.isArray(graph) || !graph.every(Array.isArray)) {
    throw new TypeError("graph debe ser un arreglo de adyacencia");
  }
  const n = graph.length;
  for (const neighbors of graph) {
    for (const index of neighbors) {
      if (!Number.isInteger(index) || index < 0 || index >= n) {
        throw new RangeError("Índice de vecino fuera del grafo");
      }
    }
  }
  const colors = Array(n).fill(-1);
  for (let start = 0; start < n; start++) {
    if (colors[start] !== -1) continue;
    colors[start] = 0;
    const queue = [start];
    let front = 0;
    while (front < queue.length) {
      const vertex = queue[front++];
      for (const neighbor of graph[vertex]) {
        if (colors[neighbor] === -1) {
          colors[neighbor] = 1 - colors[vertex];
          queue.push(neighbor);
        } else if (colors[neighbor] === colors[vertex]) {
          return false;
        }
      }
    }
  }
  return true;
}
