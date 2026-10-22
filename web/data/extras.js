window.SUBJECTS.push({
  id: "extras",
  name: "Extras",
  group: "General",
  order: 110,
  description: "Guías, trucos y recursos extra de ayuda general.",
  sections: [
    {
      title: "Guías",
      tools: [
        {
          name: "GitHub Student Developer Pack",
          url: "https://education.github.com/pack",
          platforms: ["web"],
          badges: ["Gratis para estudiantes"],
          description: "GitHub ofrece el GitHub Student Developer Pack, un conjunto de herramientas, servicios y beneficios gratuitos para estudiantes. Para poder solicitarlo, es necesario cumplir con los requisitos de elegibilidad y seguir el proceso de verificación.",
          notes: [
            "Recomendación: Usa tu cuenta personal de GitHub. Añade tu correo institucional como correo secundario en Configuración → Emails.",
            "1. Accede a https://education.github.com/pack e inicia sesión con tu cuenta personal.",
            "2. Pulsa 'Get your pack', selecciona 'Student', indica tu centro educativo y el correo que usarás.",
            "3. Verifica tu condición de estudiante subiendo un documento válido (tarjeta de estudiante, matrícula, certificado de matrícula...).",
            "4. Espera la revisión. Suele tardar minutos u horas; mantén acceso al correo por si piden aclaraciones.",
            "5. Cuando sea aprobado recibirás un correo y podrás acceder a los beneficios desde education.github.com/pack.",
            "Consejos: Usa una foto/escaneo legible. El Pack es válido mientras seas estudiante y puede requerir renovación. Consulta la lista completa actualizada en la página oficial."
          ]
        }
      ]
    },
    {
      title: "Páginas para estudiar y repasar",
      description:
        "Recursos online para reforzar lo que se da en clase, practicar programación y repasar antes de los exámenes. Varios planes Pro se pueden conseguir gratis con el GitHub Student Developer Pack.",
      note:
        "Los planes y duraciones de las ofertas pueden cambiar. Consulta siempre la lista actualizada en https://education.github.com/pack antes de solicitarlas.",
      tools: [
        {
          name: "Codédex",
          url: "https://www.codedex.io/",
          platforms: ["web"],
          badges: ["6 meses gratis con Student Pack"],
          description:
            "Plataforma de aprendizaje con cursos de Python, HTML, CSS, JavaScript, React, Git y GitHub, línea de comandos y más, con un enfoque práctico y gamificado. Con el GitHub Student Pack incluye 6 meses gratis de Codédex Club, la membresía premium."
        },
        {
          name: "Codecademy",
          url: "https://www.codecademy.com/",
          platforms: ["web"],
          badges: ["Cursos gratis"],
          description:
            "Una de las plataformas más conocidas para aprender a programar desde cero, con cursos interactivos de desarrollo web, Python, JavaScript, SQL y mucho más. No está incluida en el GitHub Student Pack: tiene cursos gratuitos y el plan Pro se paga aparte."
        },
        {
          name: "freeCodeCamp",
          url: "https://www.freecodecamp.org/",
          platforms: ["web"],
          badges: ["Gratis", "De código abierto"],
          description:
            "Plataforma totalmente gratuita con certificaciones de desarrollo web, JavaScript, Python y ciencia de datos. Ideal para practicar con proyectos reales. No tiene plan Pro ni hace falta el pack."
        },
        {
          name: "The Odin Project",
          url: "https://www.theodinproject.com/",
          platforms: ["web"],
          badges: ["Gratis", "De código abierto"],
          description:
            "Currículo completo y gratuito de desarrollo web de código abierto, con un enfoque práctico basado en proyectos y en aprender a buscar soluciones. No tiene plan Pro."
        },
        {
          name: "Exercism",
          url: "https://exercism.org/",
          platforms: ["web"],
          badges: ["Gratis"],
          description:
            "Ejercicios de programación con corrección y mentoría en decenas de lenguajes. Muy útil para repasar lógica y practicar poco a poco. No tiene plan Pro; se mantiene con donaciones."
        },
        {
          name: "FrontendMasters",
          url: "https://frontendmasters.com/",
          platforms: ["web"],
          badges: ["6 meses gratis con Student Pack"],
          description:
            "Cursos y talleres avanzados de JavaScript, Node.js y desarrollo frontend, impartidos por profesionales. Con el GitHub Student Pack incluye 6 meses de acceso gratis a todos los cursos y talleres."
        },
        {
          name: "Scrimba",
          url: "https://scrimba.com/",
          platforms: ["web"],
          badges: ["1 mes Pro gratis con Student Pack"],
          description:
            "Plataforma interactiva de aprendizaje frontend en la que puedes editar el código mientras ves las lecciones. Con el GitHub Student Pack incluye 1 mes gratis de acceso Pro con más de 40 cursos, proyectos y retos."
        },
        {
          name: "Educative",
          url: "https://www.educative.io/",
          platforms: ["web"],
          badges: ["6 meses gratis con Student Pack"],
          description:
            "Cursos prácticos con entornos de código en el navegador, laboratorios y tutoriales guiados de desarrollo web, Python, Java y machine learning. Con el GitHub Student Pack incluye 6 meses de acceso gratis a más de 70 cursos y un 30 % de descuento en cualquier suscripción."
        },
        {
          name: "DataCamp",
          url: "https://www.datacamp.com/",
          platforms: ["web"],
          badges: ["3 meses gratis con Student Pack"],
          description:
            "Cursos interactivos de datos, Python, SQL, R y machine learning. Con el GitHub Student Pack incluye 3 meses de acceso gratis al suscribirte con tu cuenta de estudiante de GitHub."
        },
        {
          name: "Boot.dev",
          url: "https://www.boot.dev/",
          platforms: ["web"],
          badges: ["3 meses gratis con Student Pack"],
          description:
            "Plataforma con enfoque de juego para aprender desarrollo backend, DevOps, Python, Go y TypeScript. Con el GitHub Student Pack incluye 3 meses de acceso gratis a la membresía interactiva completa."
        },
        {
          name: "W3Schools",
          url: "https://www.w3schools.com/",
          platforms: ["web"],
          badges: ["Contenido gratis"],
          description:
            "Referencia clásica y muy directa para consultar HTML, CSS, JavaScript, SQL y otros lenguajes, con ejemplos que puedes probar al momento. No está incluida en el pack; el contenido principal es gratuito y los certificados se pagan aparte."
        },
        {
          name: "LeetCode",
          url: "https://leetcode.com/",
          platforms: ["web"],
          badges: ["Gratis"],
          description:
            "Retos de algoritmos y estructuras de datos, muy útiles para repasar lógica y preparar pruebas técnicas. No está incluido en el pack; el plan Premium se paga aparte."
        },
        {
          name: "MDN Web Docs",
          url: "https://developer.mozilla.org/es/",
          platforms: ["web"],
          badges: ["Gratis"],
          description:
            "La referencia oficial de HTML, CSS y JavaScript. Es la fuente más fiable para consultar cómo funciona una etiqueta, una propiedad o una API del navegador. Es gratuita."
        },
        {
          name: "DevDocs",
          url: "https://devdocs.io/",
          platforms: ["web"],
          badges: ["Gratis", "De código abierto"],
          description:
            "Reúne la documentación de muchísimas tecnologías en una sola web, con búsqueda rápida y sin anuncios. Perfecta para consultar mientras programas. Es gratuita y de código abierto."
        },
        {
          name: "dev.to",
          url: "https://dev.to/",
          platforms: ["web"],
          badges: ["Gratis", "Comunidad"],
          description:
            "Comunidad de desarrolladores con artículos, tutoriales y experiencias sobre programación y estudio. Útil para aprender de casos reales y ver cómo trabaja otra gente. Es gratuita."
        },
        {
          name: "Anki",
          url: "https://apps.ankiweb.net/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Gratis en escritorio y Android"],
          description:
            "Aplicación de tarjetas de memoria con repetición espaciada, ideal para memorizar sintaxis, comandos, conceptos y vocabulario. La versión de escritorio y la de Android son gratuitas; la de iOS se paga aparte."
        },
        {
          name: "Quizlet",
          url: "https://quizlet.com/",
          platforms: ["web"],
          badges: ["Plan gratis"],
          description:
            "Tarjetas y cuestionarios para repasar conceptos de forma rápida, solo o en grupo. Tiene versión gratuita y un plan Plus de pago que no está incluido en el pack."
        },
        {
          name: "Notion",
          url: "https://www.notion.so/",
          platforms: ["web", "windows", "macos"],
          badges: ["Education gratis con Student Pack"],
          description:
            "Espacio para organizar apuntes, listas de tareas, calendarios de estudio y resúmenes de asignaturas. Con el GitHub Student Pack incluye el plan Education gratis con funciones extra de colaboración e IA."
        },
        {
          name: "Obsidian",
          url: "https://obsidian.md/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Gratis para uso personal", "40 % dto. estudiantes"],
          description:
            "Alternativa a Notion centrada en apuntes en Markdown guardados en tu propio ordenador, con enlaces entre notas, plugins y una vista de grafo para conectar ideas. La aplicación es gratuita para uso personal y no está incluida en el pack; sus servicios opcionales Sync y Publish tienen un 40 % de descuento para estudiantes con el correo del centro."
        }
      ]
    }
  ]
});