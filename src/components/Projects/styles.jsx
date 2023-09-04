import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  z-index: 10;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 73px 0px;
  & h3 {
		width: 100%;
		text-align: center;
    font-weight: 700;
    font-size: 60px;
    line-height: 74px;
    text-transform: uppercase;
    @media (max-width: 900px) {
			font-size: 30px;
		}
  }
  & hr {
    width: 100%;
    height: 2px;
    background: #212121;
    border: 0;
    margin-top: 30px;
    margin-bottom: 64px;
  }
`;
