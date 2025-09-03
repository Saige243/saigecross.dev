import bookbud from '../assets/bookbud.png';
import mcd from '../assets/maisiecrossdesigns.png';
import scd from '../assets/scd.png';
import travelapp from '../assets/travelapp.png';

export const projectData = [
	{
		title: 'BookBud',
		description:
			'BookBud is a fully-functional CRUD book app that allows users to search for books and leave reviews.',
		image: bookbud,
		link: 'https://www.google.com',
		stack: ['Typescript', 'React', 'Express', 'MongoDB', 'TailwindCSS']
	},
	{
		title: 'Voya Travel',
		description:
			'A travel-planning app that allows detailed trip data saving, packing lists, itineraries, and much more.',
		image: travelapp,
		link: 'https://www.google.com',
		stack: ['Typescript', 'NextJS', 'Prisma', 'tRPC']
	},
	{
		title: 'Maisie Cross Designs',
		description:
			'A static portfolio site built for Product/Graphic/UX/UI designer, Maisie Cross to showcase her work.',
		image: mcd,
		link: 'https://www.google.com',
		stack: ['Typescript', 'NextJS', 'TailwindCSS']
	},
	{
		title: 'SaigeCross.dev',
		description: `The very site you're on right now! (How meta!) Built with Svelte and TailwindCSS, and hosted on Vercel.`,
		image: scd,
		link: 'https://www.google.com',
		stack: ['Typescript', 'Svelte', 'TailwindCSS']
	}
];

export const projectPageData = [
	{
		title: 'BookBud',
		description:
			"BookBud is a dynamic book review platform designed to enrich your reading journey. As a fully-functional CRUD app, it empowers users to discover books and share insights through reviews. Developed to fill the void in quality book review applications, BookBud integrates enhanced design and functionality features missing from existing platforms. With a keen eye on user experience and a passion for books, I've crafted BookBud to offer a seamless interface for exploring titles and expressing your thoughts on your latest reads.",
		image: bookbud,
		link: 'https://github.com/Saige243/BookBud',
		ghLink: 'https://github.com/Saige243/BookBud',
		stack: ['Typescript', 'React', 'Express', 'MongoDB', 'TailwindCSS']
	},
	{
		title: 'Voya Travel',
		description:
			"Voya Travel is your straightforward solution for organizing trips with ease. Built with the T3 stack (Next.js, TailwindCSS, Prisma, tRPC), this app offers a simple yet powerful platform to manage all your travel essentials. Recognizing the need for a comprehensive travel planner, I created Voya Travel to address the challenges of organizing trips. It's not just about storing data; it's about enhancing your travel preparation with a user-friendly tool that grows with your needs. Im continuously working on improving Voya, adding new functionalities and refining the user experience. Make sure to check back for updates and new features. Your next trip planning experience could be even smoother!",
		image: travelapp,
		link: 'https://github.com/Saige243/voya',
		stack: ['Typescript', 'NextJS', 'TailwindCSS', 'Prisma']
	},
	{
		title: 'Maisie Cross Designs',
		description:
			"Maisie Cross Designs is the personal portfolio of UI/UX designer Maisie Cross. Built with NextJS and TailwindCSS, and is hosted on Vercel, it's purpose was to showcase the designer's work and provide a way for potential clients to contact her.",
		image: mcd,
		ghLink: 'https://maisiecross.com',
		link: 'https://github.com/Saige243/MaisieCrossDesigns',
		stack: ['Typescript', 'NextJS', 'Node', 'TailwindCSS']
	},
	{
		title: 'SaigeCross.dev',
		description:
			"The very site you're currently on. Wild, isn't it? Built with Svelte and TailwindCSS, and hosted on Vercel, it's an attempt to showcase my work and skills as a developer. Hope you're enjoying it.",
		image: scd,
		link: 'https://saigecross.dev',
		ghLink: 'https://github.com/Saige243/saigecross.dev',
		stack: ['Typescript', 'NextJS', 'Node', 'TailwindCSS']
	}
];

export const jobHistoryData = [
	{
		company: 'Of Ash And Fire',
		role: 'Software Engineer',
		time: '8/2022 - Current',
		description: [
			'Extensively involved in building robust front-end components for a wide variety of applications using React and Next.js, integrated with Rails and JavaScript backends, ensuring seamless functionality and user interaction.',
			'Contrbuted the development of a dynamic application using React Native, showcasing proficiency in cross-platform mobile app development and delivering enhanced user experiences.',
			'Acted as a mentor to junior developers and interns, fostering a collaborative environment, enhancing team capabilities, and ensuring successful knowledge transfer and skill development.',
			'Engaged actively in code review processes, ensuring code quality, adherence to best practices, and continuous improvement of the development workflow.'
		],
		stack: [
			'Typescript',
			' React',
			' React Native',
			' Node',
			' Express',
			' MongoDB',
			' Rails',
			' PostgreSQL'
		]
	},
	{
		company: 'Fanwave.io',
		role: 'Junior Software Engineer',
		time: '4/2022 - 8/2022',
		description: [
			'Helped with front-end development of a music venue aggregator using React and TypeScript, showcasing skills in modern JavaScript frameworks and strong type-checking for robust application performance.',
			'Integrated Express as the backend solution, enabling efficient data handling and API management for a seamless and responsive user experience.',
			'Implemented stylish and responsive user interfaces using Tailwind CSS and Material-UI (MUI) components, ensuring an aesthetically appealing and user-friendly platform for music venue aggregation.',
			'Orchestrated full-stack development efforts, bridging front-end React/TypeScript functionalities with Express backend systems, demonstrating a comprehensive understanding of end-to-end web application development.'
		],
		stack: ['Typescript', ' React', ' Node', ' Express', ' MongoDB']
	},
	{
		company: 'PLENTY Mercantile',
		role: 'Chief Operating Officer',
		time: '7/2018 - 4/2022',
		description: [
			"As Chief Operating Officer, orchestrated the company's operational schedule, ensuring optimal allocation of resources and efficient time management to meet business objectives.",
			'Fostered a positive work environment and maintained high team morale through effective leadership, open communication, and employee engagement strategies.',
			'Ensured seamless operation of the event venue and shopfront, managing both areas to function in tandem and optimizing operational efficiency for enhanced customer experience.',
			'Led the implementation of data-driven sales strategies, focusing on maximizing revenue while maintaining operational efficiency and cost-effectiveness.',
			'Kept the team abreast of the latest sales trends and trained them in advanced upselling techniques, contributing to sustained business growth and market competitiveness.'
		],
		stack: ['Typescript', ' React', ' Node', ' Express', ' MongoDB']
	}
];
