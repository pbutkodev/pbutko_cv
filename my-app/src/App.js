import './styles/globals.css';
import './styles/stars.css';
import {PageLayout} from "./components/PageLayout";

function App() {
	return (
		<PageLayout>
				<div className="header">
					header
				</div>
				<div className="about_me">
					about
				</div>
				<div className="my_skill">

				</div>
				<div className="projects">
					projects
				</div>
				<div className="contract">
					contract
				</div>
		</PageLayout>
	);
}

export default App;
