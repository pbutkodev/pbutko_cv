import styled from "styled-components";

export const StyledFragment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & h1 {
    font-weight: 800;
    font-size: clamp(44px, 7.2925vw, 140px);
    line-height: 98%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  & h2 {
    font-weight: 700;
    font-size: clamp(24px, 3.125vw, 60px);
    line-height: 98%;
    min-height: 98%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  @media (max-width: 1200px) {
    max-width: 76%;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    margin-bottom: 32px;
    margin-top: 12px;
    min-height: 62.4px;
  }
`;
export const StyledContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 100vh;
  height: auto;
  box-sizing: border-box;
  @media (max-width: 900px) {
		justify-content: center;
		align-items: center;
		
    & .main-screen-texts {
      padding-top: 97px;
    }
  }
  @media (min-width: 900px) {
    @media (min-width: 1921px) {
      min-height: 1080px;
    }
  }
`;
