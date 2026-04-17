# Portfolio DAM

Portfolio web generalista para un estudiante de 2o de DAM, construido con React y Vite. El contenido presenta un perfil equilibrado entre backend, frontend, concurrencia, Python, AWS y desarrollo movil.

## Stack

- React
- Vite
- CSS puro
- ESLint

## Comandos

```bash
npm install
npm run dev
```

Para validar el proyecto:

```bash
npm run lint
npm run build
```

## YAML

La automatizacion de instalacion y verificacion queda definida en `.github/workflows/ci.yml`, donde el pipeline ejecuta `npm ci`, lint y build.

## Deploy en GitHub Pages

Este repositorio se publica con GitHub Actions en `.github/workflows/deploy-pages.yml`.

Pasos en GitHub:

1. Ve a Settings > Pages.
2. En Build and deployment, selecciona Source: GitHub Actions.
3. Haz push a `main` y espera que termine el workflow `deploy-pages`.

Notas importantes:

- La base de Vite esta configurada como `/miPortafolio/` en `vite.config.js`.
- No subas `src/` como sitio estatico. GitHub Pages debe servir siempre el contenido generado en `dist/`.
