import './styles/globals.css';
import './styles/stars.css';
import {PageLayout} from "./components/PageLayout";
import {AboutMe} from "./components/AboutMe";
import {MySkill} from "./components/MySkill";
import {Projects} from "./components/Projects";
import photo from './img/im.jpg';
import {Nav} from "./components/Nav";
import {Contacts} from "./components/Contacts";

const mySkill = [
	{
		name: 'Clientside',
		elements: [
			'React.js (ReactContext API/ ReactJS/Mobx/Effector/Redux/ Thunk)',
			'Next.js',
			'HTML/CSS',
			'SCSS/LESS/SASS',
			'JavaScript',
			'TypeScript',
			'Material UI, Antd, Ant Design',
			'Webpack, Craco.'
		],
	},
	{
		name: 'Databases',
		elements: ['MongoDB, MySQL, PostgreSQL, etc.'],
	},
	{
		name: 'QA',
		elements: ['Jest, Enzyme, React-testing-library.'],
	},
	{
		name: 'Others',
		elements: [
			'Subversion Control - Github, Gitlab',
			'GraphpQL'
		],
	}
]

const aboutMe = [
	{
		name: '',
		elements: [
			'Frontend Developer with over 4 years of experience.',
			'Strong expertise in JavaScript technologies: React.js, Redux, TypeScript, GraphQL etc.',
			'Hands-on experience in application design',
			'Experience working in an Agile/Scrum/Kanban development environment',
			'Delivery of complex software solutions for Fin-tech and e-Commerce industries.'
		]
	}
]

const education = [
	{
		name: '',
		elements: [
			'BS Computer Science (Southern Federal University 2016-2021)'
		],
	}
]

const projects = [
	{
		id: 1,
		title: "NFT Market",
		description:
			"Website for the sale of NFT cards, namely images, music, 3D models, videos.",
		img: photo,
		tags: ["React", "Web3", "Redux", "AWS", "Crypto", "TypeScript"],
	},
	{
		id: 2,
		title: "Bank",
		description:
			"Implementation of payment for various services, integration of payment systems.",
		img: photo,
		tags: ["React", "Effector", "Material-UI", "TypeScript"],
	},
	{
		id: 3,
		title: "Sushi Market",
		description:
			"Cart implementation, payment, admin panel, product cards.",
		img: photo,
		tags: ["React", "Redux", "TypeScript"],
	},
	{
		id: 4,
		title: "Car Service",
		description:
			"Provision of various services for the car, making an appointment, admin panel for the operator.",
		img: photo,
		tags: ["React", "Redux", "TypeScript", "WebSocket"],
	},
	{
		id: 5,
		title: "Cryptocurrency platform",
		description:
			"A platform for buying, selling and exchanging cryptocurrency on favorable terms, there is also basic information on your account.",
		img: photo,
		tags: ["React", "MobX", "TypeScript"],
	},
]

function App() {
	return (
		<PageLayout>
			<Nav/>
			<AboutMe/>
			<MySkill id={"about_me"} items={aboutMe} title="ABOUT ME" variant={0}/>
			<MySkill id={"skills"} items={mySkill} title="SKILLS" variant={1}/>
			<MySkill id={"education"} items={education} title="EDUCATION" variant={1}/>
			<Projects items={projects} title="PROJECTS"/>
			<Contacts />
		</PageLayout>
	);
}

export default App;
