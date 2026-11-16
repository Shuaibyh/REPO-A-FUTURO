# Laboratorio de algoritmos en JavaScript

Ejercicios prácticos de **estructuras de datos y algoritmos**, desarrollados como un laboratorio independiente de aprendizaje. Incluye implementaciones pequeñas, sin dependencias externas, y pruebas de comportamiento.

## Contenido

- Búsqueda binaria en arreglos ordenados.
- Ordenamiento por inserción.
- Merge sort.
- Quicksort.
- Máximo común divisor y mínimo común múltiplo.
- Verificación de paréntesis, llaves y corchetes balanceados.
- Recorrido en anchura (BFS).
- Recorrido en profundidad (DFS).

## Requisitos y ejecución

Se necesita Node.js 20 o superior.

```bash
npm test
```

Los módulos usan ESM, los tests usan `node:test` y `node:assert/strict`, y no hay dependencias de terceros.

## Convenciones

- Las funciones no modifican los arreglos de entrada, salvo que se documente lo contrario.
- Se prueban casos normales, vacíos, duplicados y datos inválidos.
- Los recorridos de grafos mantienen el orden de vecinos suministrado.
- Cada algoritmo es didáctico: las implementaciones priorizan claridad y pruebas sobre microoptimizaciones.

Este repositorio es material de práctica, **no** código desplegado en producción ni una parte de AULIGMA.
