import bookbud from '../assets/bookbud.png';
import mcd from '../assets/maisiecrossdesigns.png';
import scd from '../assets/scd.png';

export const projectData = [
	{
		title: 'BookBud',
		description:
			'BookBud is a fully-functional CRUD book app that allows users to search for books and leave reviews.',
		image: bookbud,
		link: 'https://www.google.com',
		stack: ['Typescript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS']
	},
	{
		title: 'Webbit',
		description:
			'A Reddit clone built with Rails, SQLite, Tailwind, and Stimulus. Users can create posts, comment, and upvote.',
		image: 'https://picsum.photos/200/100',
		link: 'https://www.google.com',
		stack: ['Rails', 'PostgreSQL', 'TailwindCSS']
	},
	{
		title: 'Maisie Cross Designs',
		description:
			'A static portfolio site built for Product/Graphic/UX/UI designer, Maisie Cross to showcase her work.',
		image: mcd,
		link: 'https://www.google.com',
		stack: ['Typescript', 'NextJS', 'Node', 'TailwindCSS']
	},
	{
		title: 'SaigeCross.dev',
		description: `The very site you're on right now! (How meta!) Built with Svelte and TailwindCSS, and hosted on Vercel.`,
		image: scd,
		link: 'https://www.google.com',
		stack: ['Typescript', 'Svelte', 'Node', 'TailwindCSS']
	}
];

export const projectPageData = [
	{
		title: 'BookBud',
		description:
			"BookBud is a fully-functional CRUD book review app that allows users to search for books and leave reviews. Built as a response to the lack of a good book review app that allows users to search for books and leave reviews, BB seeks to implement a number of design and functionality improvements I saw as lacking in other popular book applications. I'm constantly adding new features so be sure to check back.",
		image: 'https://picsum.photos/200/300',
		link: 'https://github.com/Saige243/BookBud',
		ghLink: '',
		stack: ['Typescript', 'React', 'Express', 'MongoDB', 'TailwindCSS']
	},
	{
		title: 'Webbit',
		description:
			'Webbit is a fully-functional Reddit clone built entirely in Rails. Utilizing SQLite and Tailwind. Users can post links, videos, upvote, downvote, and much more. The site came from a HelloRails tuturial that I Dr. Frankensteined into my own creation after growing more comfortable with the framework. Check back for updates as I continue to add new features and improve the app.',
		image: 'https://picsum.photos/200/300',
		link: 'https://github.com/Saige243/MaisieCrossDesigns',
		ghLink: '',
		stack: ['Rals', 'TailiwindCSS', 'Postgres']
	},
	{
		title: 'Maisie Cross Designs',
		description:
			"Maisie Cross Designs is the personal portfolio of UI/UX designer Maisie Cross. Built with NextJS and TailwindCSS, and is hosted on Vercel, it's purpose was to showcase the designer's work and provide a way for potential clients to contact her.",
		image: 'https://picsum.photos/200/300',
		link: 'https://maisiecross.com',
		ghLink: 'https://github.com/Saige243/MaisieCrossDesigns',

		stack: ['Typescript', 'NextJS', 'Node', 'TailwindCSS']
	},
	{
		title: 'SaigeCross.dev',
		description:
			"The very site you're currently on. Wild, isn't it? Built with Svelte and TailwindCSS, and hosted on Vercel, it's an attempt to showcase my work and skills as a developer. Hope you're enjoying it.",
		image: 'https://picsum.photos/200/300',
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
			'Spearheaded the development of a dynamic application using React Native, showcasing proficiency in cross-platform mobile app development and delivering enhanced user experiences.',
			'Extensively involved in building robust front-end components for a wide variety of applications using React and Next.js, integrated with Rails backends, ensuring seamless functionality and user interaction.',
			"Contributed significantly to the development of Expo applications, demonstrating skills in utilizing Expo's framework for efficient project execution and deployment.",
			'Acted as a mentor to junior developers and interns, fostering a collaborative environment, enhancing team capabilities, and ensuring successful knowledge transfer and skill development.',
			'Engaged actively in code review processes, ensuring code quality, adherence to best practices, and continuous improvement of the development workflow.'
		],
		stack: ['Typescript', ' React', ' React Native', ' Node', ' Express', ' MongoDB', ' Rails']
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
		time: '7/2019 - 4/2022',
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
