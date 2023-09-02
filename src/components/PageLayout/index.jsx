import StarsBackground from "../StarsBackground/Stars";
import {StyledPageContainer} from "../../styles/styles";
import {Background} from "../Background";

export const PageLayout = ({
  children,
}) => {
  return (
    <>
      <StyledPageContainer>
        <StarsBackground />
        {children}
        <Background />
      </StyledPageContainer>
    </>
  );
};
