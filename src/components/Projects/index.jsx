import ProjectsBlock from "./ProjectsBlock/index";
import NavBlock from "./NavBlock/navBlock";
import {useFilteredCards} from "../../hooks/useCasesStore";
import {ProjectsContainer} from "./styles";
import {StyledViewContainer} from "../../styles/styles";

export const Projects = ({items, title}) => {
	const {visibleCases, shownCasesIndexStore, setShownCasesIndexStore} =
		useFilteredCards(items);

	return (
		<StyledViewContainer id={"projects"}>
			<ProjectsContainer>
				<h3>{title}</h3>
				<hr/>
				<ProjectsBlock
					visibleCases={visibleCases}
					shownCasesIndexStore={shownCasesIndexStore}
				/>
				<NavBlock
					visibleCases={visibleCases}
					shownCasesIndexStore={shownCasesIndexStore}
					setShownCasesIndexStore={setShownCasesIndexStore}
				/>
			</ProjectsContainer>
		</StyledViewContainer>
	)
}