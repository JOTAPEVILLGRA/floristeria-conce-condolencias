# Floristería Conce · Catálogo de condolencias

Sitio estático de Floristería Conce para presentar arreglos florales de condolencias en Concepción, Chile.

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Validación y compilación

```bash
pnpm check
pnpm build
```

## SEO antes de publicar

Define la URL pública definitiva antes de generar la versión de producción. Esto habilita las URL canónicas y las imágenes Open Graph absolutas.

```bash
SITE_URL=https://www.tu-dominio.cl pnpm build
```

Con `SITE_URL` definido, la compilación de producción genera `sitemap-index.xml` y lo incluye en `robots.txt`. La página interna `/conceptos/` queda excluida de la indexación y del sitemap.
