# Plan del Proyecto — Card Value Collection

Documento vivo de memoria y decisiones del proyecto. Debe consultarse antes de planificar fases, analizar referencias o redactar tickets.

---

## 1. Visión del producto

Construir la mejor aplicación web para coleccionistas de cartas, tomando las mejores funcionalidades, herramientas, gráficos y resultados de aplicaciones web que ya existen en el mercado.

- **Diferencial:** UI/UX propia, estilos, paleta de colores, diseño y múltiples formatos de visualización y salida (outputs) de la información.
- **Regla sobre gradeo:** las páginas de empresas de gradeo se utilizan **únicamente como fuente de información**; **NO** vamos a construir una aplicación de gradeo.
- **Base de partida:** maqueta frontend estática inspirada en *Card Ladder* (Vue 3 + Vite + TypeScript + Tailwind CSS v3).
- **Análisis de referencias:** pendiente — el PM/TL entregará una lista de prompts y páginas web existentes para investigar sus funcionalidades y definir el alcance del producto.

---

## 2. Equipo y roles

| Rol | Persona | GitHub | Responsabilidad |
| :--- | :--- | :--- | :--- |
| **PM / Tech Lead** | Facundo | `FacundoDLF` | Define el plan y prioridades, redacta tickets, hace `git pull` de cada rama para revisar y probar localmente, deja feedback y aprueba/mergea PRs. |
| **Dev Jr** | Franco | `FrancoCisneros1` | Arranca desde nivel 0; aprende desarrollando tickets reales de a poco, 100% asistido por IA. |

**Ritmo de trabajo:** avanzar de a poco, con pasos firmes y sin apuros, semana a semana.

---

## 3. Fases del proyecto y gates

| Fase | Alcance | Criterio para avanzar (Gate) | Estado |
| :--- | :--- | :--- | :--- |
| **Fase 0 — Setup inicial** | 1 a 3 tickets exclusivos para instalar herramientas/dependencias básicas y lograr correr la app en `localhost` tal como está hoy. | Franco levanta y corre la app en su máquina sin errores. | **Actual (tickets por definir)** |
| **Fase 1 — Frontend + UI/UX** | Tickets necesarios siguiendo orden de layout, modularización por componentes y maquetado escalable, aplicando buenas prácticas y ASDD. | El PM/TL está 100% conforme con el frontend y la UI/UX. | Pendiente |
| **Fase 2 — Backend** | Diseño e implementación de la API necesaria para darle vida a la aplicación. | Definido al cerrar la Fase 1. | Pendiente |
| **Fase 3 — Infraestructura y DB** | Base de datos (Supabase o similar), hosting, dominios, etc. (en conjunto o después del backend). | Definido al cerrar la Fase 1 / junto con Fase 2. | Pendiente |

---

## 4. Infraestructura actual

- **Gestión de tickets (Jira Free):** `https://facundodlf.atlassian.net`
  - Proyecto: `Card Value Collection - Dashboard` · Key: **`CVC`** · Tipo: Team-managed, Kanban.
  - Columnas del tablero: **`To Do` → `In Progress` → `In Review` → `Done`**.
  - **Backlog:** activado para separar ideas/tickets futuros de la cola activa en `To Do`.
  - **Asignado predeterminado:** `Sin asignar`. *(Nota menor: el nombre interno del tablero `KAN board` no es editable en la UI team-managed).*
- **Repositorio y control de código (GitHub):**
  - Organización gratuita: **`card-value-org`** (Owners: `FacundoDLF` y `FrancoCisneros1`).
  - Repositorio público: `https://github.com/card-value-org/Card-Value-Collection`.
  - Protección de rama: ruleset **`Protect main`** activo (PR obligatorio + 1 aprobación, conversaciones resueltas, bypass para `Organization admin`, bloquea force-push y borrado de `main`).
  - Merge y CI: solo **Squash and merge** con borrado automático de ramas; GitHub Actions valida `typecheck`, `build`, título del PR y nombre de rama.
- **Diseño y Runtime:**
  - **Figma Free** integrado mediante el plugin oficial de Figma.
  - **Node.js `22.22.2`** fijado en `.nvmrc` y `package.json`.
- **Metodología (ASDD):**
  - Repositorio `https://github.com/FacudeLafuente/ai-workflow.git` clonado en la carpeta local `ai-workflow/` (excluida del git del proyecto en `.gitignore`). Tanto Facundo como Franco mantienen la misma estructura local.

---

## 5. Flujo de trabajo por ticket

1. El PM/TL redacta el ticket siguiendo el formato ASDD FE y lo ubica en `Backlog` / `To Do`.
2. Franco toma el ticket prioritario de `To Do`, se lo asigna y lo mueve a `In Progress` (**máximo 1 ticket en progreso a la vez**).
3. Crea una rama desde `main`, implementa asistido por IA y realiza commits siguiendo las convenciones de [`AGENTS.md`](../AGENTS.md).
4. Sube su rama a GitHub, abre el Pull Request hacia `main` y pasa el ticket a `In Review`.
5. Facundo hace `git pull` de la rama de Franco, prueba en local, revisa el código y aprueba o deja comentarios en el PR.
6. Si hay ajustes pedidos, el ticket vuelve a `In Progress`; cuando queda aprobado y mergeado en `main`, pasa a `Done`.

---

## 6. Reglas para la IA que asiste al PM/TL

- **Confirmación obligatoria:** no ejecutar ninguna acción (crear tickets, modificar Jira o GitHub, editar/crear código o archivos) sin confirmación previa explícita del PM/TL.
- **Planificar antes de ticketear:** primero se define y acuerda el plan; prohibido crear tickets "por las dudas".
- **Adecuación pedagógica:** cada ticket debe tener sentido real para el nivel de Franco y dejarle un aprendizaje concreto.
- **Formato de tickets:** todos los tickets siguen la plantilla inmutable ASDD FE (`## ToDo`, `## AC`, `## Links to Figma`, `## Notes & Obvs`) definida en `ai-workflow/templates/ticket.fe.md`.
- **Mantenimiento de la memoria (SSOT):** toda decisión de producto o proceso se registra en la sección *Registro de decisiones* de este archivo; toda convención técnica se agrega en `AGENTS.md` (ampliándolo sin descartar lo existente y sin duplicar reglas).

---

## 7. Registro de decisiones

- **2026-11-19:** Se elige **Jira Free** como herramienta de gestión (proyecto `CVC`, Kanban, columnas `To Do / In Progress / In Review / Done`, Backlog habilitado, responsable por defecto `Sin asignar`).
- **2026-11-19:** Se crea la organización gratuita **GitHub `card-value-org`** con ambos miembros como Owners, se transfiere el repositorio y se activa el ruleset **`Protect main`**.
- **2026-11-22:** Se fija el orden estricto de etapas: **Setup inicial (Fase 0) → Frontend y UI/UX (Fase 1) → Backend (Fase 2) → DB / Hosting / Dominios (Fase 3)**.
- **2026-11-22:** Se adopta la memoria persistente en el repositorio mediante **`AGENTS.md`** (ampliable progresivamente sin descartar contenido existente) y **`docs/PROJECT_PLAN.md`**.
- **2026-11-22:** Se define que el PM/TL hará `git pull` de la rama de cada ticket finalizado para revisar y probar antes de aprobar o dejar comentarios en el PR.
- **2026-11-22:** Reglas permanentes del agente en `AGENTS.md`: ASDD automático y obligatorio, respuestas claras y breves, ante dudas consultar (proponer, nunca suponer), comandos solo si un humano los solicita o aprueba, y verificación de `CHANGELOG.md` + `README.md` después de cada commit.
- **2026-11-22:** Se fijan convenciones de entorno y GitHub: Node.js `22.22.2` (`.nvmrc`), **Squash and merge** exclusivo, commits y títulos de PR en **inglés** con formato `<type>(<scope>): <description> CVC-<N>`, CI con GitHub Actions, **Figma Free** en el stack, y ambos miembros como Owners con bypass en `Protect main`.

---

## 8. Pendientes próximos

- [ ] Conectar la organización `card-value-org` en Jira → *GitHub for Atlassian* (la app ya está instalada en Jira; falta ejecutar *Connect a GitHub organization*).
- [ ] Recibir y analizar la lista de prompts y páginas web de referencia para definir funcionalidades, gráficos, herramientas y outputs de nuestra app.
- [ ] Definir los 1 a 3 tickets de la **Fase 0 (Setup inicial)**.
- [ ] Confirmar qué asistente de IA usa Franco en su máquina para evaluar si necesita un archivo puntero corto (por ejemplo `CLAUDE.md` o `.cursor/rules/`) que redirija a `AGENTS.md`.
