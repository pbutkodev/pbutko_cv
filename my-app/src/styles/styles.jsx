import styled from "styled-components";

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  position: relative;
  min-height: 100vh;
  background-size: 100%;
  max-width: 1920px;
  margin: 0 auto;
  contain: paint; /* instead of overflow: hidden */
  * {
    font-family: 'Roboto Condensed';
  }
`;

export const StyledViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 145px;
  box-sizing: border-box;
  z-index: 2;
  @media (max-width: 1200px) {
    padding: 0 100px;
  }

  @media (max-width: 900px) {
    padding: 0 24px;
  }
`;
