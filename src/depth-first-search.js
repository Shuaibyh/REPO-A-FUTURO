/**
 * Recorre un grafo mediante búsqueda en profundidad (DFS) iterativa.
 * adjacency es Map<vértice, arreglo de vecinos>.
 * Inserta vecinos en orden inverso para visitar primero al inicial.
 */
export function depthFirstSearch(adjacency, start) {
  if (!(adjacency instanceof Map)) throw new TypeError("Se requiere un Map");
  if (!adjacency.has(start)) return [];
  const stack = [start];
  const visited = new Set();
  const order = [];
  while (stack.length > 0) {
    const vertex = stack.pop();
    if (visited.has(vertex)) continue;
    visited.add(vertex);
    order.push(vertex);
    const neighbors = adjacency.get(vertex) ?? [];
    if (!Array.isArray(neighbors)) throw new TypeError("Los vecinos deben ser un arreglo");
    for (let i = neighbors.length - 1; i >= 0; i--) {
      if (!visited.has(neighbors[i])) stack.push(neighbors[i]);
    }
  }
  return order;
}
