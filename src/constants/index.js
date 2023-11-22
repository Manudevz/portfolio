import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  menu,
  git,
  figma,
  krowdy,
  futuraEmpresa,
  carrent,
  portfolio,
  inProgress,
  threejs,
  techMobile,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "work",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contactos",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const img = techMobile;

const technologies = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Krowdy",
    icon: krowdy,
    iconBg: "#383E56",
    date: "Agosto 2021 - Noviembre 2023",
    points: [
      "Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaborar con equipos multidisciplinarios que incluyen diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
      "Implementar diseño receptivo y garantizar la compatibilidad entre navegadores.",
      "Participar en revisiones de código y brindar retroalimentación constructiva a otros desarrolladores.",
      "Desarollo y trackeo mediante SQL de campañas email marketing.",
    ],
  },
  {
    title: "En busqueda",
    company_name: "",
    icon: futuraEmpresa,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Placeholder de futura experiencia laboral.",
      "Contactame para trabajar juntos.",
    ],
  },
];

const projects = [
  {
    name: "Ventas / web laborum.",
    description:
      "Es un proyecto simple, de rapida generación para actualizar la vista anterior, en el cuál se administran las ventas de la web, subido a un bucket de AWS S3.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://empresas.laborum.pe/?utm_source=laborum&utm_medium=menu&utm_campaign=publica+en+laborum",
    developed: true,
  },
  {
    name: "Portfolio web.",
    description:
      "Portfolio personal, boilerplate generado con vite, usando la librería de three.js, para agregarle animaciónes 3D, deployado en vercel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "purple",
      },
    ],
    image: portfolio,
    source_code_link: "#contact",
    developed: true,
  },
  {
    name: "pushes dashboard.",
    description:
      "Sitio para manejar los pushes, realizados entre miembros de una comunidad/alianza, en un juego  mmorpg, muy popular llamado travian.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
    ],
    image: inProgress,
    source_code_link: "",
    developed: false,
  },
];

export { services, technologies, experiences, projects, img };
