# SValero DAW 1 — Apps & Tools (2026–2027)

Guía de herramientas, IDEs y software para el alumnado de **1.º de Desarrollo de Aplicaciones Web (DAW)** del Centro San Valero durante el curso 2026–2027.

## Sobre el proyecto

Este repositorio recopila las aplicaciones, herramientas y entornos de desarrollo utilizados a lo largo del curso, junto con **alternativas equivalentes** para quienes prefieran utilizar otro software o trabajen con un sistema operativo diferente.

El objetivo es facilitar el acceso a las herramientas necesarias para cada asignatura, ofrecer alternativas multiplataforma y centralizar la información útil para el alumnado.

### Sistemas operativos compatibles

Se documentarán las opciones disponibles para:

- **Windows**
- **macOS**
- **Linux**

Siempre que sea posible, se priorizarán las herramientas multiplataforma y las alternativas que permitan trabajar sin depender de un sistema operativo concreto.

## Estructura del repositorio

El repositorio tiene dos partes: la **documentación** de cada asignatura (en Markdown) y la **web** que la recoge y la publica.

```
web/                             La web (sitio estático, sin dependencias)
├── index.html                   Estructura de la página
├── assets/
│   ├── app.js                   Lógica de la web (render, buscador, tema)
│   └── styles.css               Estilos (tema claro y oscuro)
└── data/                        Un archivo por asignatura
    ├── site.js                  Título, curso, aviso y configuración general
    ├── _plantilla.js            Plantilla para crear un archivo nuevo
    ├── pendientes.js            Asignaturas que todavía no tienen contenido
    ├── ia.js                    Herramientas de IA
    ├── programacion.js          Entornos de desarrollo de Programación
    └── sistemas-informaticos.js Máquinas virtuales de Sistemas Informáticos

IA/ia.md                            Documentación de la sección de IA
Programacion/programacion.md        Documentación de Programación
Sistemas-Informaticos/Sistemas.md   Documentación de Sistemas Informáticos
.github/workflows/pages.yml         Publica la carpeta web/ en GitHub Pages
```

La estructura se irá ampliando y reorganizando conforme avance el curso y se incorporen nuevas asignaturas, herramientas o alternativas.

## La web

Es un sitio **estático**: no hay compilación, ni gestor de dependencias, ni proceso de build. Cada asignatura tiene su propio archivo en `web/data/` con la lista de herramientas, y `web/assets/app.js` se encarga de dibujarlas, filtrarlas y buscarlas.

- Se puede filtrar por **Windows**, **macOS** o **Linux**.
- El buscador filtra por nombre y descripción de cada herramienta.
- El tema claro/oscuro se recuerda en el navegador.
- Todas las rutas son relativas, así que funciona igual en local, en GitHub Pages o en cualquier servidor.

## Publicar en GitHub Pages

La publicación es automática: el flujo de `.github/workflows/pages.yml` sube la carpeta `web/` a GitHub Pages en cada `push` a `main`.

**Puesta en marcha (una sola vez, en GitHub):**

1. Abre el repositorio → **Settings** → **Pages**.
2. En **Build and deployment** → **Source**, elige **GitHub Actions**.
3. Hecho. A partir de ahí, cada `push` a `main` publica la web automáticamente.

**Publicar a mano:** pestaña **Actions** → *Desplegar la web en GitHub Pages* → **Run workflow**.

La web queda disponible en <https://maaron00670.github.io/>.

> Si algún día prefieres el modo clásico de Pages, en **Source** elige **Deploy from a branch** → rama `main` → carpeta `/web`. El fichero `web/.nojekyll` está preparado para ese caso.

## Cómo añadir una asignatura o una herramienta

1. **Escribe el `.md`** en la carpeta de la asignatura (por ejemplo `Programacion/programacion.md`).
2. **Crea su archivo de datos**: copia `web/data/_plantilla.js` a `web/data/<asignatura>.js` y rellénalo con las herramientas.
3. **Añádelo al `index.html`**: `<script src="./data/<asignatura>.js" defer></script>`, antes de `app.js`.
4. **Quita la asignatura de `web/data/pendientes.js`**, si estaba allí.
5. **Haz `push`**: la web se publica sola.

## Actualizaciones

Este proyecto es un **repositorio en desarrollo** y se actualizará progresivamente durante el curso 2026–2027 para reflejar las herramientas utilizadas en clase, las posibles sustituciones y cualquier información relevante.

Las contribuciones, correcciones y sugerencias son bienvenidas para mantener la documentación útil y actualizada.

---

*Proyecto independiente creado con fines educativos para el alumnado de DAW del Centro San Valero.*
