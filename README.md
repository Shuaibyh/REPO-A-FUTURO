# Laboratorio de algoritmos en JavaScript

Colección educativa de **28 implementaciones** de estructuras de datos y algoritmos, con pruebas automatizadas. Utiliza módulos ESM y las herramientas nativas de Node.js, sin dependencias externas.

## Catálogo

| Área | Implementación | Archivo |
| --- | --- | --- |
| Búsqueda | Lineal | `src/linear-search.js` |
| Búsqueda | Binaria con primera coincidencia | `src/binary-search.js` |
| Ordenamiento | Inserción estable | `src/insertion-sort.js` |
| Ordenamiento | Selección | `src/selection-sort.js` |
| Ordenamiento | Burbuja estable | `src/bubble-sort.js` |
| Ordenamiento | Merge sort estable | `src/merge-sort.js` |
| Ordenamiento | Quicksort de tres particiones | `src/quick-sort.js` |
| Ordenamiento | Counting sort con rango acotado | `src/counting-sort.js` |
| Matemática | MCD y MCM | `src/number-theory.js` |
| Matemática | Fibonacci con enteros seguros | `src/fibonacci.js` |
| Matemática | Criba de Eratóstenes | `src/prime-sieve.js` |
| Arreglos | Sumas prefijo e intervalos | `src/prefix-sums.js` |
| Arreglos | Two Sum (pareja de índices) | `src/two-sum.js` |
| Pilas | Delimitadores balanceados | `src/balanced-brackets.js` |
| Grafos | Recorrido BFS | `src/breadth-first-search.js` |
| Grafos | Recorrido DFS iterativo | `src/depth-first-search.js` |
| Grafos | Ruta más corta sin pesos | `src/graph-shortest-path.js` |
| Grafos | Orden topológico de Kahn | `src/topological-sort.js` |
| Conjuntos | Union-Find con compresión de caminos | `src/union-find.js` |

| Búsqueda | Límite inferior (primera posición >= objetivo) | `src/lower-bound.js` |
| Búsqueda | Límite superior (primera posición > objetivo) | `src/upper-bound.js` |
| Ordenamiento | Fusión estable de arreglos ordenados | `src/merge-sorted-arrays.js` |
| Arreglos | Rotación sin mutación | `src/rotate-array.js` |
| Arreglos | Suma máxima contigua (Kadane) | `src/max-subarray-sum.js` |
| Arreglos | Ventana fija de suma máxima | `src/fixed-window-max-sum.js` |
| Cadenas | Anagramas con normalización Unicode | `src/are-anagrams.js` |
| Cadenas | Palíndromos exactos Unicode | `src/is-palindrome.js` |
| Cadenas | Subcadena más larga sin repetidos | `src/longest-unique-substring.js` |

Cada implementación tiene una prueba correspondiente en `test/*.test.js`. Los módulos documentan sus contratos y limitaciones.

## Requisitos y pruebas

- Node.js 20 o superior (recomendado Node.js 22).
- No se necesita instalar paquetes de terceros.

```bash
npm test
```

El comando ejecuta `node --test`, usando el runner y las aserciones nativas de Node.js.

## Ejemplo rápido

```js
import { fibonacci } from "./src/fibonacci.js";
import { twoSum } from "./src/two-sum.js";
import { shortestPathUnweighted } from "./src/graph-shortest-path.js";

console.log(fibonacci(10)); // 55
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

const graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["D"]],
  ["C", []],
  ["D", []],
]);
console.log(shortestPathUnweighted(graph, "A", "D")); // ["A", "B", "D"]
```

## Calidad automatizada

El flujo [Node.js tests](.github/workflows/node-tests.yml) ejecuta las pruebas con Node.js 22 en cada push y pull request. Un resultado fallido requiere corrección antes de considerar validado el cambio.

## Criterios de mantenimiento

- Evitar commits vacíos y cambios hechos solo para inflar métricas.
- Priorizar algoritmos comprensibles con comportamiento verificable.
- Evitar mutar entradas cuando se promete una función pura.
- Probar casos normales, vacíos, duplicados y entradas inválidas.
- Conservar límites numéricos y de memoria explícitos.

**Alcance:** laboratorio educativo independiente, no un sistema universitario oficial ni código desplegado en producción. No forma parte de AULIGMA.
