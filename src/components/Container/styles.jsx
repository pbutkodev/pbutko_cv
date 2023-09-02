import styled from "styled-components";

export const StyledFlexContainer = styled.div`
  width: ${(props) => props.width ? props.width : "auto"};
  height: ${(props) => props.height ? props.height : "auto"};
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap ? props.gap : "0"};
  padding: ${(props) => props.padding ? props.padding : "0px"};
  margin: 0;
`;
