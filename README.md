# Card Value Collection

Aplicación web para coleccionistas de cartas (guía de precios, seguimiento y valor de colección). Actualmente se encuentra en etapa **frontend-only** con datos mock en memoria.

## Stack

- **Vue 3** (Composition API + `<script setup lang="ts">`)
- **Vite** + **TypeScript**
- **Tailwind CSS v3**
- **Lucide Icons** (`lucide-vue-next`)

## Requisitos

- **Node.js `22.22.2`** (definido en [`.nvmrc`](.nvmrc))
- **npm**

## Instalación y uso local

```bash
git clone https://github.com/card-value-org/Card-Value-Collection.git
cd Card-Value-Collection
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

## Scripts disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Levanta el servidor de desarrollo Vite |
| `npm run typecheck` | Ejecuta el chequeo estricto de tipos (`vue-tsc --noEmit`) |
| `npm run build` | Verifica tipos y genera el build de producción en `dist/` |
| `npm run preview` | Previsualiza el build de producción |

## Estructura del proyecto

```text
public/cards/           # Imágenes estáticas de cartas
src/
├── components/
│   ├── base/           # Componentes UI genéricos reutilizables
│   ├── cards/          # Componentes del catálogo y guía de precios
│   └── layout/         # Estructura general (header y sidebar)
├── composables/        # Lógica reactiva reutilizable
├── data/               # Datos mock temporales
├── types/              # Interfaces y tipos TypeScript compartidos
├── App.vue             # Vista principal
└── main.ts             # Punto de entrada
docs/PROJECT_PLAN.md    # Plan, fases y decisiones del proyecto
```
