/**
 * Orden topológico de un grafo dirigido acíclico usando Kahn.
 * adjacency es Map<vértice, vecinos salientes>.
 * Los vecinos no declarados como claves se incluyen como sumideros.
 * Tiempo O(V+E) y espacio O(V+E).
 */
export function topologicalSort(adjacency) {
  if (!(adjacency instanceof Map)) throw new TypeError("Se requiere un Map");
  const indegree = new Map();
  for (const vertex of adjacency.keys()) indegree.set(vertex, 0);
  for (const neighbors of adjacency.values()) {
    if (!Array.isArray(neighbors)) throw new TypeError("Vecinos deben ser un arreglo");
    for (const neighbor of neighbors) {
      indegree.set(neighbor, (indegree.get(neighbor) ?? 0) + 1);
    }
  }
  const queue = [];
  for (const [vertex, degree] of indegree) {
    if (degree === 0) queue.push(vertex);
  }
  const order = [];
  for (let i = 0; i < queue.length; i++) {
    const vertex = queue[i];
    order.push(vertex);
    for (const neighbor of adjacency.get(vertex) ?? []) {
      const degree = indegree.get(neighbor) - 1;
      indegree.set(neighbor, degree);
      if (degree === 0) queue.push(neighbor);
    }
  }
  if (order.length !== indegree.size) {
    throw new RangeError("El grafo contiene un ciclo dirigido");
  }
  return order;
}
