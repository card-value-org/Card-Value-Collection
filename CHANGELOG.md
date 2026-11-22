# Changelog

## 2026-11-22

### Added
- `AGENTS.md` con convenciones del proyecto y reglas permanentes para agentes de IA (ASDD obligatorio, comandos solo con aprobación humana, mantenimiento de `CHANGELOG.md` y `README.md`).
- `docs/PROJECT_PLAN.md` con visión, roles, fases, infraestructura y registro de decisiones.
- Configuración base del entorno y CI: `.nvmrc` (Node `22.22.2`), `.gitattributes`, `.editorconfig`, `.vscode/extensions.json`, `.github/CODEOWNERS`, `.github/pull_request_template.md` y workflow `.github/workflows/ci.yml`.
- `README.md` con descripción, stack, requisitos, comandos y estructura del proyecto.

### Changed
- Se excluyó `ai-workflow/` (metodología ASDD) del control de versiones.

## 2026-11-08

### Added
- Interfaz de guía de precios de cartas con Vue 3, Vite, TypeScript y Tailwind CSS.
- Catálogo de cartas con imágenes, categorías, búsqueda y filtros.
- Componentes reutilizables para navegación, presentación de cartas y datos de precio.

## 2026-11-07

### Changed
- Se excluyó `asdd-ai-workflow/` del control de versiones del proyecto.

### Added
- Estructura inicial del proyecto Card-Value-Collection.
