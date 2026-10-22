window.SUBJECTS.push({
  id: "cosas-gratis",
  name: "Cosas gratis",
  group: "General",
  order: 120,
  description: "Aplicaciones y proyectos gratuitos o de código abierto que pueden resultar útiles durante el curso.",
  sections: [
    {
      title: "Páginas dedicadas",
      tools: [
        {
          name: "FMHY",
          url: "https://fmhy.net/",
          platforms: ["web"],
          badges: ["Recopilatorio"],
          description:
            "FMHY es una página que recopila una cantidad exagerada de contenido gratis: libros, juegos, informática, sistemas operativos, ciberseguridad, alternativas, herramientas y mucho más."
        }
      ]
    },
    {
      title: "Aplicaciones de escritorio",
      tools: [
        {
          name: "Pear Desktop",
          url: "https://github.com/pear-devs/pear-desktop",
          platforms: ["windows", "macos", "linux"],
          badges: ["De código abierto", "Sin anuncios"],
          description:
            "Cliente de escritorio no oficial para YouTube Music. Mantiene la interfaz de YouTube Music, pero añade integración con el escritorio, plugins, temas, descarga de canciones y bloqueo de anuncios. No está afiliado a Google ni a YouTube."
        },
        {
          name: "Spicetify",
          url: "https://spicetify.app/",
          platforms: ["windows", "macos", "linux"],
          badges: ["De código abierto", "Personalizable"],
          description:
            "Herramienta para personalizar el cliente oficial de Spotify con temas, extensiones y aplicaciones personalizadas (letras sincronizadas, estadísticas, controles extra...). Modifica el cliente de Spotify, así que úsala bajo tu responsabilidad y revisa que siga siendo compatible tras cada actualización."
        },
        {
          name: "ArtCraft",
          url: "https://getartcraft.com/",
          platforms: ["windows", "macos", "linux", "web"],
          badges: ["De código abierto", "Alternativa a Adobe"],
          description:
            "Suite gratuita y de código abierto que busca sustituir al paquete de Adobe: PhotoCraft (Photoshop), VectorCraft (Illustrator), FilmCraft (Premiere Pro), LightCraft (Lightroom), EffectCraft (After Effects), DesignCraft (InDesign) y PdfCraft (Acrobat), entre otras. Escrita en Rust, funciona en local. Es un proyecto muy reciente y varias aplicaciones siguen en alpha o en desarrollo, así que conviene probarlo antes de usarlo para trabajos importantes."
        }
      ]
    },
    {
      title: "Repos de GitHub interesantes",
      tools: [
        {
          name: "OmniRoute",
          url: "https://github.com/diegosouzapw/OmniRoute",
          platforms: ["web"],
          badges: ["MIT", "Gateway de IA"],
          description:
            "Gateway de IA de código abierto que reúne cientos de proveedores y modelos detrás de un único endpoint compatible con OpenAI. Incluye enrutado inteligente, fallback automático cuando un proveedor falla o se queda sin cuota, compresión de contexto y un panel local. Funciona con Claude Code, Codex, Cursor, OpenCode, Cline y otros clientes."
        },
        {
          name: "Concat",
          url: "https://github.com/jub0t/Concat",
          platforms: ["windows", "macos", "linux"],
          badges: ["AGPL-3.0", "Sin marca de agua"],
          description:
            "Editor de vídeo gratuito, open source y local, planteado como alternativa a CapCut. Cubre lo básico: subtítulos automáticos, texto a voz, eliminación de fondo, animaciones con keyframes, efectos, multitrack y exportación hasta 4K, sin marca de agua, cuenta ni suscripción. Disponible para Windows, macOS, Linux y Android. Sigue en desarrollo y algunas versiones son alpha."
        }
      ]
    }
  ]
});
