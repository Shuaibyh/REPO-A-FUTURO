/**
 * Disjoint Set Union / Union-Find con compresión de caminos y unión por rango.
 * Consultas amortizadas casi constantes: O(alpha(n)).
 */
export class UnionFind {
  constructor(size) {
    if (!Number.isSafeInteger(size) || size < 0 || size > 100_000) {
      throw new RangeError("size debe ser entero entre 0 y 100000");
    }
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(0);
    this.components = size;
  }

  find(item) {
    if (!Number.isSafeInteger(item) || item < 0 || item >= this.parent.length) {
      throw new RangeError("Índice fuera de rango");
    }
    if (this.parent[item] !== item) this.parent[item] = this.find(this.parent[item]);
    return this.parent[item];
  }

  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);
    if (rootA === rootB) return false;
    if (this.rank[rootA] < this.rank[rootB]) [rootA, rootB] = [rootB, rootA];
    this.parent[rootB] = rootA;
    if (this.rank[rootA] === this.rank[rootB]) this.rank[rootA]++;
    this.components--;
    return true;
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }

  get componentCount() {
    return this.components;
  }
}
