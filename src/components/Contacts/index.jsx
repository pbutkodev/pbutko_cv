import {CtaText, CtaTextSmall, StyledFooterContainer, StyledFooterMailContainer, StyledWrapper} from "./styles";
import Container from "../Container/Container";
import tg from '../../img/tg.webp';

export const Contacts = () => {

	const handleClick = () => {
		navigator.clipboard.writeText("pbutkorostovdev@gmail.com");
	};

	return (
		<StyledFooterContainer id={"contacts"}>
			<StyledWrapper
				direction={"row"}
				justify="space-between"
				align="flex-start"
				width="100%"
			>
				<Container
					className="cta"
					direction={"column"}
					justify="center"
					align="flex-start"
				>
					<CtaText>Do you want to contact me?</CtaText>
					<CtaTextSmall>Contact me by email:</CtaTextSmall>
					<StyledFooterMailContainer>
						<a href="mailto:pbutkorostovdev@gmail.com">pbutkorostovdev@gmail.com</a>
						<svg
							onClick={handleClick}
							width="21"
							height="21"
							viewBox="0 0 21 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="1.75"
								y="6.25"
								width="12.5"
								height="12.5"
								rx="2.97943"
								stroke="#30D5C8"
								strokeWidth="1.5"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M16.203 0.585938H9.79781C8.11116 0.585938 6.68601 1.70559 6.2251 3.24219H7.8432C8.22242 2.55297 8.95557 2.08594 9.79781 2.08594H16.203C17.4342 2.08594 18.4324 3.08409 18.4324 4.31537V10.7205C18.4324 11.3495 18.1719 11.9177 17.7529 12.323V14.1136C19.0389 13.5252 19.9324 12.2272 19.9324 10.7205V4.31537C19.9324 2.25566 18.2627 0.585938 16.203 0.585938Z"
								fill="#30D5C8"
							/>
						</svg>
					</StyledFooterMailContainer>
					<StyledFooterMailContainer>
						<a href="https://telegram.me/pavel_webdev" target={"_blank"}>
							<img
								src={tg}
								alt="tg"
								style={{
									width: 50,
									height: 50,
									cursor: "pointer"
								}}
							/>
						</a>
					</StyledFooterMailContainer>
				</Container>
			</StyledWrapper>
		</StyledFooterContainer>
	)
}