window.SUBJECTS.push({
  id: "sistemas-informaticos",
  name: "Sistemas Informáticos",
  order: 10,
  description: "Software para prácticas de instalación y administración de sistemas operativos.",
  sections: [
    {
      title: "Máquinas virtuales",
      description:
        "Software para crear y ejecutar máquinas virtuales, permitiendo instalar y utilizar otros sistemas operativos sin modificar la instalación principal del equipo.",
      tools: [
        {
          id: "virtualbox",
          name: "Oracle VM VirtualBox",
          url: "https://www.virtualbox.org/",
          platforms: ["windows", "macos", "linux"],
          badges: ["Se usa en clase"],
          description:
            "Software de virtualización multiplataforma, gratuito y de código abierto, bueno para prácticas de instalación y administración de sistemas operativos. Es el que se usa por defecto en clase.",
          license: "Gratuito y de código abierto.",
          os: {
            windows: {
              pros: "Amplia compatibilidad con sistemas operativos invitados y configuración flexible de las máquinas virtuales.",
              cons: "Algunas funciones avanzadas requieren instalar las Guest Additions; el rendimiento depende de los recursos disponibles."
            },
            macos: {
              pros: "Permite crear máquinas virtuales con distintos sistemas operativos invitados y ofrece una interfaz gráfica sencilla.",
              cons: "La compatibilidad depende de la versión de macOS y de la arquitectura del equipo. En Apple Silicon existen limitaciones para ejecutar sistemas operativos x86."
            },
            linux: {
              pros: "Gratuito, de código abierto y compatible con numerosas distribuciones. Permite configurar redes virtuales, almacenamiento y otros parámetros.",
              cons: "Puede requerir configurar módulos del kernel o solucionar conflictos tras algunas actualizaciones del sistema, según la distribución que se elija."
            }
          },
          notes: ["Debian es una de las distribuciones de Linux en las que pueden aparecer los problemas mencionados en las desventajas."]
        },
        {
          id: "gnome-boxes",
          name: "GNOME Boxes",
          url: "https://apps.gnome.org/Boxes/",
          platforms: ["linux"],
          description:
            "Aplicación de virtualización con una interfaz sencilla, diseñada para facilitar la creación y administración de máquinas virtuales en entornos GNOME.",
          os: {
            linux: {
              pros: "Interfaz intuitiva, configuración sencilla y posibilidad de crear máquinas virtuales sin tener que ajustar manualmente numerosos parámetros.",
              cons: "Ofrece menos opciones avanzadas de configuración que otras herramientas y depende de las tecnologías de virtualización disponibles en el sistema."
            }
          },
          notes: [
            "Recomendada solo para virtualizaciones relativamente simples. Para cosas más complejas, como conectar máquinas entre sí, es mejor usar otras como VirtualBox."
          ]
        },
        {
          id: "vmware",
          name: "VMware",
          url: "https://www.vmware.com/",
          platforms: ["windows", "macos", "linux"],
          description:
            "Software de virtualización de escritorio de Broadcom que permite crear y ejecutar máquinas virtuales para instalar y probar diferentes sistemas operativos.",
          license:
            "VMware Workstation Pro y Fusion Pro están disponibles gratuitamente para uso personal, educativo y comercial, según las condiciones de licencia vigentes.",
          os: {
            windows: {
              pros: "Configuración avanzada de máquinas virtuales, instantáneas (snapshots) y compatibilidad con numerosos sistemas operativos invitados.",
              cons: "Algunas funciones pueden requerir configuración adicional y el rendimiento depende del hardware disponible."
            },
            macos: {
              pros: "VMware Fusion permite ejecutar máquinas virtuales con una interfaz gráfica completa y ofrece integración con el sistema anfitrión.",
              cons: "La compatibilidad con los sistemas operativos invitados depende de la arquitectura del equipo. En Apple Silicon, los sistemas x86 presentan limitaciones."
            },
            linux: {
              pros: "VMware Workstation Pro permite configurar redes virtuales, instantáneas y máquinas virtuales con diferentes sistemas operativos invitados.",
              cons: "Puede requerir ajustes de módulos del kernel tras determinadas actualizaciones y su funcionamiento depende de la compatibilidad con la distribución utilizada."
            }
          }
        }
      ]
    }
  ]
});
