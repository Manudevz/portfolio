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
	carrent,
	pokedexss,
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
		id: "works",
		title: "Experiencias",
	},
	{
		id: "projects",
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
];

const projects = [
	{
		name: "Landing Ventas laborum.",
		description:
			"Landing page que proporciona información detallada sobre los diversos paquetes disponibles para la publicación de empleos en la bolsa de trabajo de Laborum Perú.",
		tags: [
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
			{
				name: "CSS",
				color: "red-text-gradient",
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
		name: "PelisYA.",
		description: "xxxxxxxxxxxxxxxxxx",
		tags: [
			{
				name: "nextjs",
				color: "orange-text-gradient",
			},
		],
		image: inProgress,
		source_code_link: "",
		developed: false,
	},
	{
		name: "PikaNet",
		description:
			"Es una aplicación web basada en la poke API que permite a los usuarios explorar una extensa colección de Pokémones, buscar y descubrir detalles de tus favoritos con facilidad.",
		tags: [
			{
				name: "ReactTS",
				color: "orange-text-gradient",
			},
			{
				name: "Nodejs",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind",
				color: "red-text-gradient",
			},
		],
		image: pokedexss,
		source_code_link: "https://pokedex-app-eep3.onrender.com/",
		developed: true,
	},
];

export { services, technologies, experiences, projects, img };
