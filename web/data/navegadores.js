window.SUBJECTS.push({
  id: "navegadores",
  name: "Navegadores",
  group: "General",
  order: 125,
  description: "Recomendaciones de navegadores y extensiones para usar en el día a día.",
  sections: [
    {
      title: "Los que más destacan",
      tools: [
        {
          name: "Firefox",
          url: "https://www.mozilla.org/es/firefox/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Gecko", "Código abierto"],
          description:
            "Navegador de Mozilla Foundation con motor Gecko independiente de Google. Viene con protección contra rastreadores activada de serie, sincronización con cuenta de Firefox y una de las mejores tiendas de extensiones. Equilibrado y completo."
        },
        {
          name: "Waterfox",
          url: "https://www.waterfox.net/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Gecko", "Privacidad", "Sin telemetría"],
          description:
            "Fork de Firefox con bloqueador de anuncios integrado, DNS over Oblivious HTTP, sin telemetría ni recogida de datos. Añade pestañas en árbol, pestañas verticales, barra de estado y temas. Disponible para Windows, macOS, Linux y Android."
        },
        {
          name: "Zen Browser",
          url: "https://zen-browser.app/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Gecko", "Productividad"],
          description:
            "Fork de Firefox centrado en productividad: espacios de trabajo, modo compacto, vista dividida y Glance. Mantiene extensiones y sincronización con cuenta de Firefox. Ideal para trabajar con muchas pestañas."
        },
        {
          name: "Helium",
          url: "https://helium.computer/",
          platforms: ["windows", "macos", "linux"],
          badges: ["ungoogled-chromium", "uBlock Origin incluido"],
          description:
            "Chromium sin Google, sin telemetría e incluye uBlock Origin de serie con soporte para extensiones Manifest V2. Código abierto (GPL-3.0). No tiene sincronización ni app móvil. Actualmente en beta."
        }
      ]
    },
    {
      title: "Privacidad por delante",
      tools: [
        {
          name: "LibreWolf",
          url: "https://librewolf.net/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Gecko", "Máxima privacidad"],
          description:
            "Fork de Firefox mantenido por la comunidad sin telemetría, sin experimentos, sin contenido patrocinado, con uBlock Origin ya instalado y parámetros de seguimiento eliminados de las direcciones. Se actualiza desde la versión estable de Firefox. Viene pelado a propósito: hay que instalar manualmente lo que se necesite."
        },
        {
          name: "Internet Archive Browser",
          url: "https://archive.org/browser",
          platforms: ["windows", "macos", "linux"],
          badges: ["Wayback Machine"],
          description:
            "Navegador basado en Chromium para consultar versiones antiguas de páginas web a través del Wayback Machine. Ideal para recuperar contenido desaparecido o documentar. No es un navegador para el día a día (sin extensiones, sin sincronización)."
        },
        {
          name: "Brave",
          url: "https://brave.com/es/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Chromium", "Bloqueador de serie"],
          description:
            "Chromium con bloqueo de anuncios y rastreadores activado de serie, Brave Search, ventana privada con Tor y asistente Leo. Fácil de usar y disponible en todas las plataformas. Algunas funciones (Leo, VPN) son de pago y el sistema de recompensas ha generado debate; desactívalo si no lo usas."
        }
      ]
    },
    {
      title: "Los de toda la vida",
      tools: [
        {
          name: "Google Chrome",
          url: "https://www.google.com/chrome/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Blink", "Referencia"],
          description:
            "El navegador de Google, referencia para compatibilidad web. Sus DevTools son el estándar en desarrollo web y la sincronización con cuenta de Google es la más cómoda. Más pesado con muchas pestañas y la navegación va a Google."
        },
        {
          name: "Microsoft Edge",
          url: "https://www.microsoft.com/edge",
          platforms: ["windows", "macos", "linux"],
          badges: ["Chromium", "Menor consumo"],
          description:
            "Chromium con mejor consumo de memoria y CPU, arranque más rápido y modo eficiencia para ahorrar batería. Pestañas verticales, vista dividida, Colecciones, anotación de PDF y Copilot integrado. En general va mejor que Chrome."
        },
        {
          name: "Vivaldi",
          url: "https://vivaldi.com/es/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Chromium", "Altamente personalizable"],
          description:
            "Chromium con un editor de interfaz completo, pestañas apilables/verticales, marcadores de velocidad, bloqueo integrado, sincronización y sin IA de serie. Ideal para organizar la navegación al máximo."
        },
        {
          name: "Arc",
          url: "https://arc.net/",
          platforms: ["windows", "macos"],
          badges: ["Chromium", "En mantenimiento"],
          description:
            "Navegador con Spaces para separar proyectos, barra lateral, Peek y Split View. Está en mantenimiento (solo recibe actualizaciones de seguridad de Chromium). Su sustituto es Dia, el navegador con IA de The Browser Company."
        }
      ]
    },
    {
      title: "Extensiones recomendadas",
      note: "En Chrome y derivados con Manifest V3, uBlock Origin ha perdido parte de su potencia. Si tu prioridad es el bloqueo de anuncios, Firefox, LibreWolf o Helium lo mantienen mejor.",
      tools: [
        {
          name: "uBlock Origin",
          url: "https://github.com/gorhill/uBlock",
          platforms: ["windows", "macos", "linux"],
          badges: ["Bloqueador", "Recomendado"],
          description:
            "Bloqueador de anuncios, rastreadores y scripts. El clásico. En Firefox mantiene todas sus funciones; en Chrome con Manifest V3 ha perdido capacidades."
        },
        {
          name: "SponsorBlock",
          url: "https://sponsor.ajay.app/",
          platforms: ["windows", "macos", "linux"],
          badges: ["YouTube"],
          description:
            "Salta automáticamente sponsors, intros, outs, créditos y otras partes no deseadas en YouTube, con base de datos colaborativa."
        },
        {
          name: "Ambient light for YouTube",
          url: "https://chromewebstore.google.com/detail/ambient-light-for-youtube/pgdnlhfmbpicnalflfocbanmcljlmmki",
          platforms: ["windows", "macos", "linux"],
          badges: ["Visual"],
          description:
            "Añade un efecto de iluminación ambiental alrededor del vídeo de YouTube, similar al de Chromecast o algunas TVs."
        },
        {
          name: "Vimium",
          url: "https://vimium.github.io/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Teclado"],
          description:
            "Navegación con atajos de teclado tipo Vim: j/k, f para abrir enlaces, gestión de pestañas, historial y búsqueda. Ideal para usar solo con teclado."
        },
        {
          name: "Dark Reader",
          url: "https://darkreader.org/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Modo oscuro"],
          description:
            "Aplica modo oscuro a casi cualquier web, con ajuste de brillo, contraste, sepia y filtros. Permite forzarlo o excluir sitios."
        },
        {
          name: "Stylus",
          url: "https://addons.mozilla.org/es/firefox/addon/styl-us/",
          platforms: ["windows", "macos", "linux"],
          badges: ["CSS personalizado"],
          description:
            "Permite aplicar estilos CSS personalizados a sitios web. Puedes usar estilos de userstyles.world o crear los tuyos propios."
        },
        {
          name: "Bypass Age Restriction",
          url: "https://addons.mozilla.org/firefox/addon/age-restriction-bypass/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Uso responsable"],
          description:
            "Intenta saltarse las restricciones de edad en vídeos que requieren inicio de sesión para comprobar la edad. Su funcionamiento depende de cambios en las APIs y no siempre funciona."
        }
      ]
    }
  ]
});
