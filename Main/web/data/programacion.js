window.SUBJECTS.push({
  id: "programacion",
  name: "Programación",
  order: 20,
  description:
    "Entornos de desarrollo y editores de código para trabajar con Java, con alternativas de código abierto y opciones multiplataforma.",
  sections: [
    {
      title: "Entornos principales",
      description:
        "Actualmente, en la asignatura de Programación se trabaja con Java. Estos son los entornos de desarrollo que pueden utilizarse para programar, junto con alternativas de código abierto y otras opciones multiplataforma.",
      tools: [
        {
          id: "intellij-idea",
          name: "IntelliJ IDEA",
          url: "https://www.jetbrains.com/idea/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Orientado a Java"],
          description:
            "Entorno de desarrollo de JetBrains orientado a Java, con herramientas de autocompletado, depuración y gestión de proyectos.",
          license:
            "La edición Community es gratuita y de código abierto; la edición completa es de pago y ofrece un periodo de prueba gratuito."
        },
        {
          id: "visual-studio",
          name: "Visual Studio",
          url: "https://visualstudio.microsoft.com/",
          platforms: ["windows", "macos", "linux"],
          description:
            "Entorno de desarrollo de Microsoft con herramientas para programar en diferentes lenguajes.",
          notes: ["No debe confundirse con Visual Studio Code, que es un editor de código independiente."]
        },
        {
          id: "google-antigravity",
          name: "Google Antigravity",
          url: "https://antigravity.google/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Programación asistida por IA"],
          description:
            "Entorno de desarrollo de Google centrado en la programación asistida por inteligencia artificial, con funciones para ayudar a escribir, modificar y revisar código."
        }
      ]
    },
    {
      title: "Alternativas y opciones de código abierto",
      description:
        "Alternativas gratuitas, de código abierto o multiplataforma a los entornos de desarrollo principales, para quien prefiera o necesite una opción sin coste.",
      note:
        "No es obligatorio utilizar un entorno de desarrollo concreto. Se puede trabajar con cualquier IDE o editor de código que permita realizar las tareas de la asignatura, siempre que se conozca su funcionamiento y se sepa configurar y utilizar correctamente. La elección del entorno depende de las preferencias personales, el sistema operativo y las necesidades de cada proyecto.",
      tools: [
        {
          id: "intellij-idea-community",
          name: "IntelliJ IDEA Community Edition",
          url: "https://www.jetbrains.com/idea/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Gratis", "De código abierto"],
          description:
            "Edición gratuita y de código abierto de IntelliJ IDEA, adecuada para trabajar con Java y desarrollar proyectos de programación.",
          license: "Gratuito y de código abierto."
        },
        {
          id: "vscodium",
          name: "VSCodium",
          url: "https://vscodium.com/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Gratis", "De código abierto"],
          description:
            "Distribución comunitaria de Visual Studio Code que utiliza código abierto y elimina algunas personalizaciones y componentes específicos de Microsoft. Es gratuita, extensible mediante extensiones y está disponible para Windows, macOS y Linux.",
          license: "Gratuito y de código abierto (licencia MIT), sin telemetría.",
          notes: ["Desventaja: puede requerir instalar extensiones adicionales y configurar el entorno para trabajar cómodamente con Java."]
        }
      ]
    }
  ]
});
