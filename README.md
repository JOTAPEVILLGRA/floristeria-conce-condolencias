# Floristería Conce · Catálogo de condolencias

Sitio estático de Floristería Conce para presentar arreglos florales de condolencias en Concepción, Chile.

## Desarrollo

```bash
npm install
npm run dev
```

## Validación y compilación

```bash
npm run check
npm run build
```

## SEO antes de publicar

Define la URL pública definitiva antes de generar la versión de producción. Esto habilita las URL canónicas y las imágenes Open Graph absolutas.

```bash
SITE_URL=https://www.tu-dominio.cl npm run build
```

Con `SITE_URL` definido, la compilación de producción genera `sitemap-index.xml` y lo incluye en `robots.txt`. La página interna `/conceptos/` queda excluida de la indexación y del sitemap.
