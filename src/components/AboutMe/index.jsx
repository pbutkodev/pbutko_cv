import {StyledContainer, StyledFragment} from "./styles";
import {LazyMotion, domAnimation} from "framer-motion";
import {useEffect, useState} from "react";
import Container from "../Container/Container";
import {StyledViewContainer} from "../../styles/styles";
import {useGlitchTypewriter} from "../../hooks/useTypewriter";
import im from '../../img/im.jpg';
import {useIsMobile} from "../../hooks/useWidthDevice";
import Swipe from "../SwipeIndicator";

const GlitchH1 = ({text}) => {
	const h1 = useGlitchTypewriter(text, 15);
	return <h1>{h1}</h1>;
};
const GlitchH2 = ({text, style}) => {
	const h2 = useGlitchTypewriter(text, 20);
	return <h2 style={style}>{h2}</h2>;
};

export const AboutMe = () => {
	const [showText, setShowText] = useState(false);
	const isMobile = useIsMobile();

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowText(true);
		}, 500);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<LazyMotion features={domAnimation}>
			<StyledContainer id={"about_me"}>
				{showText && (
					<StyledViewContainer>
						<Container
							padding="252px 0px 0px 0px"
							direction="row"
							align="center"
							justify="space-between"
							className="main-screen-texts"
						>
							{isMobile && (
								<>
									<StyledFragment>
										<GlitchH1 text={'PAVEL BUTKO'}/>
										<GlitchH2 text={'WEB DEVELOPER'}/>
									</StyledFragment>
								</>
							)}
							{
								!isMobile && (
									<>
										<StyledFragment>
											<GlitchH1 text={'PAVEL BUTKO'}/>
											<GlitchH2 text={'WEB DEVELOPER'}/>
										</StyledFragment>
										<StyledFragment>
											<img
												src={im}
												alt="im"
												style={{
													height: 400,
													borderRadius: 12
												}}
											/>
										</StyledFragment>
									</>
								)
							}
						</Container>
						{!isMobile && <Swipe/>}
					</StyledViewContainer>
				)}
			</StyledContainer>
		</LazyMotion>
	)
}