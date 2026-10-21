window.SUBJECTS.push({
  id: "ia",
  name: "Herramientas IA",
  group: "General",
  order: 100,
  description: "IAs y herramientas basadas en IA, y para qué sirve cada una.",
  sections: [
    {
      title: "Chatbots",
      tools: [
        {
          name: "Perplexity",
          url: "https://www.perplexity.ai/",
          platforms: ["web"],
          description:
            "Su punto fuerte es la búsqueda de datos. Si necesitas buscar información sobre algo, no te quedes con la respuesta corta de Gemini al buscar en Google: Perplexity te lo explica claro y con las fuentes."
        },
        {
          name: "ChatGPT",
          url: "https://chatgpt.com/",
          platforms: ["web"],
          description:
            "El clásico que todos conocen. Al ser de uso muy general tiene varios puntos fuertes: programar, escribir y organizar, investigación inicial y automatización."
        },
        {
          name: "Claude",
          url: "https://claude.ai/",
          platforms: ["web"],
          badges: ["Plan gratis muy limitado"],
          description: "Bueno en todo en general. El único inconveniente es que su plan gratuito es muy limitado."
        },
        {
          name: "Copilot",
          url: "https://copilot.microsoft.com/",
          platforms: ["web"],
          badges: ["Ecosistema Microsoft"],
          description:
            "Como ChatGPT, pero algo inferior. Su punto fuerte es que está conectado con todo el ecosistema de Microsoft, así que si tu flujo de trabajo gira en torno a Microsoft 365, Copilot será tu mejor aliado."
        },
        {
          name: "Gemini",
          url: "https://gemini.google.com/",
          platforms: ["web"],
          badges: ["Ecosistema Google"],
          description:
            "Similar a ChatGPT, pero igual que Copilot se conecta con un ecosistema: en este caso, el de Google."
        },
        {
          name: "Duck.ai",
          url: "https://duck.ai/",
          platforms: ["web"],
          badges: ["Gratis", "Sin iniciar sesión"],
          description:
            "No es tan potente como las anteriores, pero es gratuita, privada y accesible. No requiere iniciar sesión; si necesitas algo rápido que no requiera mucho esfuerzo, te puede ayudar."
        },
        {
          name: "Qwen",
          url: "https://chat.qwen.ai/",
          platforms: ["web"],
          badges: ["De código abierto"],
          description:
            "Modelo de lenguaje desarrollado por Alibaba. Su punto fuerte es su excelente capacidad de razonamiento, el manejo de contextos muy largos y su naturaleza de código abierto. Es una alternativa potente y versátil, destacando en comprensión de documentos, análisis y redacción, con un rendimiento que compite directamente con los modelos más top del mercado."
        }
      ]
    },
    {
      title: "Para programar",
      note: "En general la funcionalidad es la misma, solo que de distinta empresa.",
      tools: [
        {
          name: "Codex",
          url: "https://chatgpt.com/codex",
          platforms: ["web"],
          description:
            "Agente de OpenAI para tareas de programación. Puede investigar bugs, implementar funcionalidades, ejecutar comandos y tests, y proponer pull requests en un entorno aislado. Funciona desde ChatGPT, el editor y la terminal."
        },
        {
          name: "GitHub Copilot",
          url: "https://github.com/features/copilot",
          platforms: ["web", "windows", "macos", "linux"],
          badges: ["Gratis con el plan de estudiantes"],
          description:
            "Que no te engañe el «copilot» de su nombre: es un agente que puedes pagar o conseguir completamente gratis con el plan de estudiantes de GitHub (muy recomendable). Se puede usar en la propia web, en tu IDE favorito o en tu terminal; si no te gustan las terminales, también hay versión con interfaz gráfica."
        },
        {
          name: "Claude Code",
          url: "https://www.anthropic.com/claude-code",
          platforms: ["web", "windows", "macos", "linux"],
          description:
            "Agente de Anthropic que funciona en terminal, IDE, app de escritorio o navegador. Lee el repositorio, edita archivos, ejecuta comandos y tests, y puede ayudar con bugs, dependencias, conflictos de Git, documentación y pull requests. Es especialmente útil para proyectos grandes o tareas que afectan a varios archivos."
        },
        {
          name: "OpenCode",
          url: "https://opencode.ai/",
          platforms: ["web", "windows", "macos", "linux"],
          badges: ["De código abierto", "Eliges el modelo"],
          description:
            "Agente de programación de código abierto que funciona en terminal, aplicación de escritorio o navegador. Su punto fuerte es que es independiente del modelo: tú eliges con cuál trabajar (Claude, GPT, Gemini, Qwen...) usando tu propia clave, o incluso uno local con Ollama o LM Studio, así que no te ata a ninguna empresa ni te obliga a una suscripción propia. Lee el repositorio, edita archivos, ejecuta comandos y tests, y se configura con un archivo opencode.json, plugins, agentes personalizados, skills y servidores MCP. En resumen, es un Claude Code open source y multi-modelo."
        },
        {
          name: "Lovable",
          url: "https://lovable.dev/",
          platforms: ["web"],
          description:
            "Herramienta para crear aplicaciones web completas a partir de una descripción. Sirve sobre todo para prototipos y demos rápidas; no es la mejor opción para aprender fundamentos ni para mantener un proyecto complejo."
        },
        {
          name: "Qwen Coder",
          url: "https://github.com/QwenLM/Qwen2.5-Coder",
          platforms: ["web"],
          badges: ["De código abierto"],
          description:
            "Modelo de la familia Qwen altamente optimizado para tareas de programación. Destaca por generar, entender y depurar código en múltiples lenguajes con gran precisión. Se puede integrar en tu IDE favorito o usar a través de su API, y es una de las mejores opciones de código abierto para la asistencia en el desarrollo, con un rendimiento que rivaliza con las soluciones de pago."
        }
      ]
    }
  ]
});
