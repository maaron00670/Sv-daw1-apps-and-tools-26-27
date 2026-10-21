# Sistemas Informáticos

## Máquinas virtuales

Software para crear y ejecutar máquinas virtuales, permitiendo instalar y utilizar otros sistemas operativos sin modificar la instalación principal del equipo.

### Oracle VM VirtualBox

Software de virtualización multiplataforma, gratuito y codigo abierto, bueno para prácticas de instalación y administración de sistemas operativos.
Es el que se usa por defecto en clases  

**Windows**
- **Ventajas:** amplia compatibilidad con sistemas operativos invitados y configuración flexible de las máquinas virtuales.
- **Desventajas:** algunas funciones avanzadas requieren instalar las Guest Additions; el rendimiento depende de los recursos disponibles.

**macOS**
- **Ventajas:** permite crear máquinas virtuales con distintos sistemas operativos invitados y ofrece una interfaz gráfica sencilla.
- **Desventajas:** la compatibilidad depende de la versión de macOS y de la arquitectura del equipo. En Apple Silicon existen limitaciones para ejecutar sistemas operativos x86.

**Linux**
- **Ventajas:** gratuito, de código abierto y compatible con numerosas distribuciones. Permite configurar redes virtuales, almacenamiento y otros parámetros.
- **Desventajas:** puede requerir configurar módulos del kernel o solucionar conflictos tras algunas actualizaciones del sistema segun el sistema linux que se eliga.

**Web oficial:** https://www.virtualbox.org/

**Notas:**
- Uno de los sistemas linux los cuales cuentan con lo que se menciona en desventajas es Debian 

---

### GNOME Boxes

Aplicación de virtualización con una interfaz sencilla, diseñada para facilitar la creación y administración de máquinas virtuales en entornos GNOME.

**Linux**
- **Ventajas:** interfaz intuitiva, configuración sencilla y posibilidad de crear máquinas virtuales sin tener que ajustar manualmente numerosos parámetros.
- **Desventajas:** ofrece menos opciones avanzadas de configuración que otras herramientas y depende de las tecnologías de virtualización disponibles en el sistema.

**Web oficial:** https://apps.gnome.org/Boxes/

**Notas:** 
- La recomiendo usar solo si va a ser una virtualizacion relativamente simple, para cosas algo mas complejas como conectar maquinas entre si mejor usar otras como virtualbox (por ejemplo)
---

### VMware

Software de virtualización de escritorio de Broadcom que permite crear y ejecutar máquinas virtuales para instalar y probar diferentes sistemas operativos.

**Windows**
- **Ventajas:** configuración avanzada de máquinas virtuales, instantáneas (snapshots) y compatibilidad con numerosos sistemas operativos invitados.
- **Desventajas:** algunas funciones pueden requerir configuración adicional y el rendimiento depende del hardware disponible.

**macOS**

- **Ventajas:** VMware Fusion permite ejecutar máquinas virtuales con una interfaz gráfica completa y ofrece integración con el sistema anfitrión.

- **Desventajas:** la compatibilidad con los sistemas operativos invitados depende de la arquitectura del equipo. En Apple Silicon, los sistemas x86 presentan limitaciones.

**Linux**

- **Ventajas:** VMware Workstation Pro permite configurar redes virtuales, instantáneas y máquinas virtuales con diferentes sistemas operativos invitados.

- **Desventajas:** puede requerir ajustes de módulos del kernel tras determinadas actualizaciones y su funcionamiento depende de la compatibilidad con la distribución utilizada.

**Licencia:** VMware Workstation Pro y Fusion Pro están disponibles gratuitamente para uso personal, educativo y comercial, según las condiciones de licencia vigentes.

**Web oficial:** https://www.vmware.com/
