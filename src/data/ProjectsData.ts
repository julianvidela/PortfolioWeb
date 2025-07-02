import assets from "@/common/assets/img/_index";

export const ProjectsData = [
{
  id: 1,
  name: "Culture UI",
  description:
    "Librería de componentes reutilizables creada como proyecto personal.",
  extendedDescription:
    "Culture UI es una librería de componentes UI que estoy desarrollando como proyecto personal. La idea es tener una base de componentes reutilizables, accesibles y personalizables para usar en distintos proyectos. Está construida con React, TypeScript y Tailwind CSS, con animaciones en Framer Motion. Para mejorar la experiencia del desarrollador, también creé un CLI que permite descargar y almacenar los componentes de forma rápida y ordenada, integrándolos fácilmente a cualquier proyecto. El objetivo del proyecto es mejorar mi propio flujo de trabajo y compartir herramientas útiles con otros devs.",
  projectTec: {
    front: {
      title: "Desarrollo Frontend",
      description: `
Creación de una librería de componentes reutilizables con React y TypeScript.
Estilizado con Tailwind CSS.
Animaciones usando Framer Motion.
Estructura de componentes modular y mantenible.
Documentación clara para facilitar su adopción.
Desarrollo de un CLI personalizado para descargar componentes y facilitar su integración en otros proyectos.
      `,
    },
  },
  year: "2025",
  href: "https://cultureui.vercel.app/",
  className:
    "text-[var(--text-color-portfolio)] border-[var(--border-primary)] hover:border-[var(--border-portfolio)] p-2 rounded-full hover:bg-gradient-to-r hover:from-white/10 hover:via-black hover:to-black/25",
  img: `${assets.imgCultureUi}`,
}
,
  {
    id: 2,
    name: "Flexwork App",
    description:
      "Plataforma web que conecta empresas con profesionales que buscan trabajo remoto en Latinoamérica.",
    extendedDescription:
      "Participé en el desarrollo del frontend de esta plataforma, diseñada para facilitar contrataciones remotas y presenciales de talentos de toda latino america. Trabajé creando interfaces con React y TypeScript, utilizando Sass para los estilos y Redux para manejar estados globales complejos. También usé RxJS para gestionar datos en tiempo real en secciones dinámicas como los perfiles de usuario. A nivel backend, colaboré en la integración de Cloudinary para el manejo de imágenes y métodos de pago. El proyecto fue desarrollado en un entorno profesional en equipo, siguiendo buenas prácticas y con foco en producto.",
    projectTec: {
      front: {
        title: "Desarrollo Frontend",
        description: `
Desarrollo de interfaces con React y TypeScript (TSX), uso de Sass para estilos personalizados.
Manejo de estado global con Redux.
Datos en tiempo real implementados con RxJS.
Construcción de componentes reutilizables y personalización de librerías externas.
Consumo de APIs mediante servicios modulares reutilizables.
        `,
      },
      backend: {
        title: "Desarrollo Backend",
        description: `
Integración de Cloudinary para manejo de imágenes.
Manejo de rutas clave y conexión con servicios externos.
Implementación de métodos de pago y endpoints funcionales en Node.js con Express.
        `,
      },
    },
    year: "2024",
    href: "https://flexworklatam.pro/",
    className:
      "text-[var(--text-color-linkedIn)] border-[var(--border-primary)] hover:border-[var(--border-linkedIn)] p-2 rounded-full hover:bg-gradient-to-r hover:from-white/10 hover:via-black hover:to-black/25",
    img: `${assets.imgFlework}`,
  },
  {
    id: 3,
    name: "Flexwork Whitelist",
    description:
      "Mini landing para registro anticipado de usuarios interesados en el lanzamiento de Flexwork.",
    extendedDescription:
      "Es un microproyecto dentro de Flexwork pensado como una landing para captar usuarios interesados en la plataforma. Desarrollé un formulario de registro usando Next.js y TypeScript, con diseño realizado en Figma por el equipo de diseño. También trabajé en el backend con Node.js, creando un panel privado para RRHH con login seguro, lista de usuarios, contador de registros e integración con Resend para envío automático de correos.",
    projectTec: {
      front: {
        title: "Desarrollo Frontend",
        description: `
Formulario creado con Next.js y TypeScript.
Estilos con Sass siguiendo el diseño creado en Figma.
Diseño responsivo y alineado a la estética principal de la app.
        `,
      },
      backend: {
        title: "Desarrollo Backend",
        description: `
Backend con Node.js.
Panel administrativo con login seguro para RRHH.
Listado y detalle de usuarios registrados.
Contador total de registros.
Integración con Resend para el envío automático de emails.
        `,
      },
    },
    year: "2024",
    href: "https://flexwork-microproject.vercel.app/",
    className:
      "text-[var(--text-color-github)] border-[var(--border-primary)] hover:border-[var(--border-github)] p-2 rounded-full hover:bg-gradient-to-r hover:from-white/10 hover:via-black hover:to-black/25",
    img: `${assets.imgWhitelist}`,
  },
];
