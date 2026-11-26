# Changelog

## 2026-11-26

### Added
- Store Pinia de tema y moneda con persistencia en localStorage (CVC-6).
- Router con rutas placeholder para mercado, colección, checklists, radar, comparación y detalle de carta; la guía actual permanece en `/` (CVC-6).
- Sistema de traducciones Español / English / Français: diccionarios en `src/i18n/`, composable tipado `useI18n` e idioma persistido en el store (default `es`). Las vistas placeholder ya usan las traducciones (CVC-7).
- Componente `BaseEmptyState` con corona reutilizable en SVG y slot para CTA (CVC-8).
- Variantes `crimson` y `outline` en `BaseButton` y tono `positive` en `BaseBadge`, según Figma (CVC-8).
- `AppTopNav`: cinta tricolor, logo, tabs con ruta activa, botón de búsqueda (visual), selectores de moneda e idioma y toggle Light/Dark; en móvil las tabs pasan a una segunda fila con scroll (CVC-10).
- `MarketPulseTicker`: barra PULSO 24H con datos mock en `src/data/marketPulse.ts` (CVC-10).
- Tokens `ribbon-mid` y `ticker-*`, iguales en Light y Dark (CVC-10).

### Removed
- `AppSidebar` y `AppHeader`, reemplazados por `AppTopNav` y `MarketPulseTicker` (CVC-10).

### Fixed
- Sidebar y etiquetas PRO usan tokens de tema para mantener contraste legible en Dark Mode (CVC-8).

### Changed
- Logo de marca actualizado a corona de tres puntas redondeadas y wordmark CARD VALUE (CVC-8).
- Componentes base ajustados a bordes de 2px, tokens de tema y cifras tabulares; incluye `BaseChip` según los criterios del ticket. `BaseBadge` pasa de borde a fondo suave como en Figma (CVC-8).
- `BrandLogo` en una sola línea y con navegación sin recarga (`RouterLink`). La tab "Colección" pasa a "Mi colección", como en Figma (CVC-10).

## 2026-11-23

### Added
- Tipos `Competition`, `SaleSource`, `Liquidity` y `Sale`, y campos `competition`, `source`, `liquidity`, `sparkline`, `recentSales` e `isSealed` en `TradingCard` (CVC-9).
- Imagen genérica `public/cards/placeholder-card.svg` para cartas sin foto (CVC-9).

### Changed
- Catálogo mock migrado a 8 ítems de Fútbol (Messi, Yamal, Maradona, Lautaro, Zidane, Bellingham y una Hobby Box sellada) según Figma (CVC-9).
- Categorías reemplazadas por competiciones de Fútbol: Mundial / FIFA, Champions League, Serie A y LaLiga (CVC-9).

### Removed
- Cartas e imágenes de Pokémon y F1 (CVC-9).
- Tokens de color `--color-*` del Design System de Figma en `src/style.css` para `Light` y `Dark Gold Edition` (se activa con la clase `.dark` en `<html>`), mapeados en `tailwind.config.js` con `darkMode: 'class'` (CVC-5).

### Changed
- Fuentes `Plus Jakarta Sans` (`font-sans`) y `Playfair Display` (`font-display`) reemplazan a Catamaran y Poppins (CVC-5).
- Los colores previos de Tailwind (`brand`, `ink`, `line`, `negative`, `grade-*`) pasan a ser alias de los nuevos tokens hasta migrar los componentes (CVC-5).

## 2026-11-22

### Added
- `AGENTS.md` con convenciones del proyecto y reglas permanentes para agentes de IA (ASDD obligatorio, comandos solo con aprobación humana, mantenimiento de `CHANGELOG.md` y `README.md`).
- `docs/PROJECT_PLAN.md` con visión, roles, fases, infraestructura y registro de decisiones.
- Configuración base del entorno y CI: `.nvmrc` (Node `22.22.2`), `.gitattributes`, `.editorconfig`, `.vscode/extensions.json`, `.github/CODEOWNERS`, `.github/pull_request_template.md`, `.github/workflows/ci.yml` y `.github/workflows/release.yml` (versionado SemVer por hito).
- `README.md` con descripción, stack, requisitos, comandos y estructura del proyecto.

### Changed
- Se excluyó `ai-workflow/` (metodología ASDD) del control de versiones.
- Actualizados `AGENTS.md` y `docs/PROJECT_PLAN.md` con el diseño maestro de Figma (`Light` + `Dark Gold Edition`), alcance inicial solo Fútbol, i18n (`ES/EN/FR`), jerarquía de features y reglas de tickets `[CONFIG]` / `[FE]` / `[BE]` / `[DB]` / `[TEST]` (Unit Tests).

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
