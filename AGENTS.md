---
asdd_profile: fe
base_branch: main
ticketing:
  system: jira
  ticket_id_pattern: "CVC-<NUMBER>"
---

# AGENTS.md

Instrucciones base para agentes de IA que trabajan en **Card Value Collection**. Estas reglas aplican automáticamente en cada tarea dentro de este repo: el humano no necesita pedirlas ni recordarlas.

**ASDD es obligatorio, siempre y sin excepción.** Al iniciar cualquier tarea, el agente lee y sigue [`ai-workflow/ASDD.md`](ai-workflow/ASDD.md) (fases, gates humanos y loop de auto-verificación), usa el formato de ticket [`ai-workflow/templates/ticket.fe.md`](ai-workflow/templates/ticket.fe.md) y los overlays `.fe.md` de `ai-workflow/skills/`. En este repo ASDD está clonado en `ai-workflow/` (en lugar de `asdd/AP.ASDD.AI-Workflow/`); cualquier referencia a esa ruta equivale a `ai-workflow/`. Frases `Start ASDD` / `Iniciar ASDD` → seguir [`ai-workflow/prompts/bootstrap.md`](ai-workflow/prompts/bootstrap.md).

## Project Overview

**Card Value Collection** es una SPA construida con **Vue 3 + Vite + TypeScript + Tailwind CSS v3** e íconos `lucide-vue-next` orientada a coleccionistas de cartas (precios, seguimiento y valor de colección), inspirada en plataformas existentes pero con identidad y UI/UX propias. Actualmente es **frontend-only** con datos mock en memoria; el backend y la base de datos se diseñarán en fases posteriores (momento en que `asdd_profile` pasará a `mixed`). Es un proyecto de aprendizaje donde el desarrollador es Junior desde nivel 0 y trabaja 100% asistido por IA: explicar el *por qué* de cada cambio de forma clara y simple. Antes de proponer trabajo, leer [`docs/PROJECT_PLAN.md`](docs/PROJECT_PLAN.md).

### Comportamiento del agente

- **Respuestas:** claras, breves, concretas y simples. Sin redundancias, relleno ni bloques largos de texto que generen ruido visual o ambigüedad (ver regla #7 de [`ai-workflow/AGENTS.md`](ai-workflow/AGENTS.md)).
- **Ante la duda, consultar:** si algo no está claro o falta información, plantearlo y preguntar al humano. **Nunca suponer**; sí **proponer** opciones con una recomendación.

## Project Layout

- **Alias `@/`:** mapea a `src/` (definido en `vite.config.ts` y `tsconfig.json`). Usar siempre `@/`, nunca imports relativos con `../`.
- **`src/components/base/`:** componentes de UI genéricos y reutilizables sin lógica de negocio (prefijo `Base*`).
- **`src/components/layout/`:** componentes de estructura de página (`AppHeader`, `AppSidebar`).
- **`src/components/cards/`:** componentes específicos del dominio de cartas y guía de precios.
- **`src/data/`:** datos mock temporales; serán reemplazados por llamadas a la API en la fase Backend. No agregar lógica de negocio acá.
- **`src/types/index.ts`:** interfaces y tipos TypeScript compartidos.
- **`src/composables/`:** lógica reactiva reutilizable (`use*.ts`).
- **`public/cards/`:** imágenes estáticas de cartas, referenciadas desde raíz como `/cards/<archivo>.png`.
- **Sin router ni store global todavía:** `src/App.vue` compone la única vista actual.

## Domain Core

- **Grader:** empresa certificadora del estado físico de la carta (`PSA`, `BGS`, o `Raw` cuando no está gradeada).
- **Grade:** calificación numérica asignada por el grader (ej. `PSA 10`, `BGS 9.5`); no existe en cartas `Raw`.
- **Population (Pop):** cantidad total de copias certificadas con ese grado específico (`null` en cartas `Raw`).
- **Last Sold:** último precio registrado de venta pública, expresado en USD.
- **1M % Change:** variación porcentual del precio en los últimos 30 días.
- **Alcance de gradeo:** **no** se construye una aplicación de gradeo; las webs de gradeo se utilizan únicamente como fuente de información.

## Tooling

- **Jira:** proyecto `CVC` en `https://facundodlf.atlassian.net` (tablero Kanban).
- **GitHub:** organización `card-value-org` (`Card-Value-Collection`).
- **Figma Free:** diseño de pantallas y flujos UI/UX; integrado con agentes mediante el plugin oficial de Figma.
- **Documentación:** consultar fuentes oficiales (`vuejs.org`, `vitejs.dev`, `v3.tailwindcss.com`, `typescriptlang.org`) o Context7 MCP cuando esté disponible en la sesión.

## Basic Project Commands

**Runtime:** Node.js `22.22.2` (fijado en `.nvmrc` y `package.json` → `engines`).

```bash
npm install        # instala dependencias del proyecto
npm run dev        # levanta Vite dev server en http://localhost:5173
npm run typecheck  # ejecuta vue-tsc --noEmit (chequeo estricto de tipos)
npm run build      # ejecuta vue-tsc -b && vite build (compilación a dist/)
npm run preview    # previsualiza el build de producción
```

Todavía no hay scripts de linter, formateador ni suite de tests configurados. Los comandos los ejecuta el humano (ver *What NOT to Do*).

## Testing

N/A — todavía no hay test runner configurado; la verificación actual consiste en `npm run typecheck`, `npm run build` y prueba visual manual en el navegador. Se incorporará Vitest en un ticket futuro.

## Code Conventions

- **Vue 3 Composition API:** usar siempre `<script setup lang="ts">` en todos los SFCs; nunca Options API.
- **Macros tipadas:** declarar `defineProps<...>()`, `defineEmits<...>()` y `defineModel<...>()` usando tipos de TypeScript.
- **TypeScript estricto:** `strict`, `noUnusedLocals` y `noUnusedParameters` activos en `tsconfig.json`. Centralizar tipos compartidos en `src/types/index.ts`; no usar `any`.
- **Estilos con tokens Tailwind:** usar clases de Tailwind apoyadas en los tokens de `tailwind.config.js` (`brand`, `ink`, `line`, `surface`, `positive`, `negative`, `grade.psa`, `grade.bgs`). No hardcodear valores hexadecimales en componentes; si hace falta un color nuevo, registrarlo como token.
- **Responsive mobile-first:** diseñar base móvil y escalar con breakpoints `md:` / `lg:`.
- **Accesibilidad básica:** incluir `alt` descriptivo en imágenes, `aria-label` en controles sin texto visible y etiquetas HTML semánticas (`main`, `section`, `article`, `nav`).
- **Modularización:** componentes pequeños y de una sola responsabilidad. Antes de crear uno nuevo, verificar si un componente de `src/components/base/` resuelve la necesidad.
- **Comentarios mínimos:** respetar la regla #6 de [`ai-workflow/AGENTS.md`](ai-workflow/AGENTS.md) (evitar comentarios obvios; solo cuando aporten contexto no deducible del código o cabecera de hasta 3 líneas en archivos nuevos).

## Commit & PR Conventions

- **Idioma obligatorio:** mensajes de commit y títulos de PR siempre en **inglés** (el resto de la comunicación y tickets puede ir en español).
- **Formato de commit:** `<type>(<scope>): <english lowercase description> CVC-<N>` (ejemplo: `feat(cards): add category filter CVC-5`).
- **Types permitidos:** `feat | fix | docs | style | refactor | test | chore | perf | ci | build | revert`.
- **Nombre de rama:** `<feat|fix|docs|chore|refactor|style>/CVC-<N>-<slug-kebab>` saliendo siempre desde `main`.
- **Pull Requests y Merge:** título con el **mismo formato de commit** (`<type>(<scope>): <english lowercase description> CVC-<N>`). El repo usa exclusivamente **Squash and merge** (1 ticket = 1 commit limpio en `main`), con borrado automático de ramas tras el merge.
- **Checks de CI:** GitHub Actions valida `npm run typecheck`, `npm run build`, título del PR y nombre de rama en cada PR.
- **Rama `main` protegida:** el ruleset `Protect main` exige PR + 1 aprobación, conversaciones resueltas y bloquea force-push y borrado. Los Owners (`Organization admin`) cuentan con bypass para PRs de mantenimiento/setup cuando sea necesario.
- **Flujo de revisión:** el PM/TL hace `git pull` de la rama, revisa y prueba localmente, aprueba o deja comentarios y ejecuta el merge.
- **Descripción del PR:** completar la plantilla `.github/pull_request_template.md` (ticket, resumen, capturas ante cambios visuales y checklist).

### Mantenimiento de `CHANGELOG.md` y `README.md`

- **`CHANGELOG.md`:** historial de versiones del proyecto. Entradas por fecha (`## AAAA-MM-DD`) con secciones `Added` / `Changed` / `Fixed` / `Removed`, citando el ticket `CVC-<N>` cuando corresponda.
- **`README.md`:** estado actual del proyecto para humanos (qué es, stack, requisitos, instalación, cómo correrlo y estructura general), sin duplicar `AGENTS.md`.
- **Verificación obligatoria:** en cada iteración, después de cada commit, el agente verifica que ambos archivos reflejen el estado actual del repositorio. Si no coinciden, los edita y propone el commit correspondiente (`docs(...)`) en la misma rama/PR.

## What NOT to Do

- **No ejecutar comandos de consola** (`npm`, `git`, etc.) **ni acciones en herramientas externas** (Jira, GitHub) por iniciativa propia: listar los comandos exactos para que los ejecute el humano. Única excepción: el humano lo solicita o lo aprueba explícitamente. *(Ajuste del proyecto sobre la regla #1 de [`ai-workflow/AGENTS.md`](ai-workflow/AGENTS.md).)*
- **No hacer push directo a `main`**, ni usar `git push --force` o `--no-verify`.
- **No instalar dependencias nuevas** si el ticket no lo indica explícitamente.
- **No usar Options API** ni patrones legados de Vue 2.
- **No usar imports relativos con `../`**: usar siempre el alias `@/`.
- **No hardcodear colores hexadecimales** en componentes o estilos.
- **No modificar archivos dentro de `ai-workflow/`** (pertenece a un repositorio separado).
- **No silenciar errores de compilación o tipos** (`// @ts-ignore`, `as any`, etc.) para hacer pasar un check.
- **No salir del alcance del ticket:** si aparece una mejora o deuda técnica fuera de alcance, proponerla como un ticket separado.
- **No diseñar ni implementar backend, base de datos o hosting** hasta que el PM/TL cierre la fase Frontend y habilite esa etapa.
