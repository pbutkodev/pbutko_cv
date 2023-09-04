import styled from "styled-components";

export const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-top: 58px;
  gap: 30px;
`;
export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  gap: 24px;
  padding-right: 8px;
  & button {
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    box-sizing: border-box;
    padding: 10px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.15);
    }
  }
  & button:first-child {
    transform: rotate(180deg);
    &:hover {
      transform: rotate(180deg) scale(1.15);
    }
  }
`;
export const StyledProgressContainer = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  & hr {
    background: #5d5d5d;
    margin: 0px;
  }
`;
export const Progress = styled.div`
  display: block;
  width: ${(props) => `${props.$width}%`};
  box-sizing: border-box;
  height: 3px;
  background: #30D5C8;
  position: absolute;
  top: -1px;
  left: ${(props) => `${props.$position * props.$width}%`};
  transition: 0.3s ease-in-out;
`;
