import './styles/globals.css';
import './styles/stars.css';
import {PageLayout} from "./components/PageLayout";
import {AboutMe} from "./components/AboutMe";
import {MySkill} from "./components/MySkill";

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

function App() {
	return (
		<PageLayout>
			<div className="header">
				burger-nav
			</div>
			<AboutMe />
			<MySkill items={aboutMe} title="ABOUT ME" id={0} />
			<MySkill items={mySkill} title="SKILLS" id={1} />
			<MySkill items={education} title="EDUCATION" id={1} />
			<div className="projects">
				projects
			</div>
			<div className="contract">
				tg / email
			</div>
		</PageLayout>
	);
}

export default App;
