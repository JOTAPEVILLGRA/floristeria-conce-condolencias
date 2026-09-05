# Ajustes del catálogo solicitados por el cliente

## Objetivo

Corregir la organización del catálogo y evitar el salto de posición observado al abrir categorías en iPhone.

## Catálogo

- Eliminar `Caja floral`, `Canasto floral` y `Jarrón floral`, identificados por el cliente como imágenes generadas con IA.
- Reemplazar las categorías `Regalos` y `Ramos` por una sola categoría llamada `Ramos para regalar`.
- Conservar `Arreglo de regalo con base` y los productos que estaban en `Ramos` dentro de `Ramos para regalar`.
- Mover `Atril floral Bronce` y `Dúo de atriles florales Premium` a `Coronas`.
- Reemplazar `Atriles y pies de urna` por `Pies de urna`, manteniendo allí únicamente los productos cuyo nombre comienza con `Pie de urna`.
- Usar imágenes reales conservadas como portadas de las categorías resultantes.

## Comportamiento móvil

Eliminar la actualización de `ScrollTrigger` ejecutada al alternar un `<details>` del catálogo. El navegador ya gestiona la expansión de forma nativa y ese refresco, disparado durante el cambio de altura, es la causa más probable del reposicionamiento en Safari para iPhone.

Se mantendrán las actualizaciones iniciales después de cargar fuentes e imágenes, necesarias para calcular correctamente las animaciones del resto de la página.

## Verificación

- Ejecutar la comprobación de Astro y la compilación de producción.
- Confirmar que las seis categorías finales aparecen en este orden: `Canastillos`, `Conjuntos florales`, `Cubre urnas`, `Coronas`, `Pies de urna` y `Ramos para regalar`.
- Confirmar que no quedan referencias a los tres productos eliminados y que los productos conservados aparecen una sola vez.
- Revisar la apertura de categorías en un viewport móvil sin desplazamiento programático.

## Fuera de alcance

- No se borrarán archivos de imágenes del repositorio; dejarán de importarse y publicarse, evitando una eliminación destructiva innecesaria.
- No se modificará el cambio local preexistente en `package-lock.json`.
