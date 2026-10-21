/* PLANTILLA para una asignatura nueva.
   1. Copia este archivo como data/nombre-asignatura.js
   2. Añade <script src="data/nombre-asignatura.js" defer></script> en index.html (antes de app.js)
   Todo lo marcado como (opcional) se puede borrar.

   platforms: "windows" | "macos" | "linux" | "web"
   status (opcional): "pendiente" | "en-progreso" | "completo". Si no se pone, se deduce solo. */
window.SUBJECTS.push({
  id: "nombre-asignatura",          // aparece en la URL: #/nombre-asignatura
  name: "Nombre de la asignatura",
  order: 70,                        // (opcional) posición en el menú
  group: "Asignaturas",             // (opcional) agrupa en el menú
  description: "Una frase sobre qué se hace en esta asignatura.",
  sections: [
    {
      title: "Categoría (p. ej. Editores de código)",
      description: "(opcional) Para qué sirve esta categoría.",
      note: "(opcional) Nota al final de la categoría.",
      tools: [
        {
          name: "Nombre de la herramienta",
          url: "https://ejemplo.com",
          platforms: ["windows", "macos", "linux"],
          badges: ["Se usa en clase"],                // (opcional) etiquetas cortas
          description: "Qué es y para qué sirve.",
          license: "Gratuito y de código abierto.",  // (opcional)
          os: {                                       // (opcional) ventajas/desventajas por sistema
            windows: { pros: "…", cons: "…" },
            macos:   { pros: "…", cons: "…" },
            linux:   { pros: "…", cons: "…" }
          },
          notes: ["(opcional) Cualquier nota extra."]
        }
      ]
    }
  ]
});
