import styled from "styled-components";

export const CasesBlockContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 32px;
  box-sizing: border-box;
  height: 100%;
`;

export const Cards = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-gap: 8.5px;
  box-sizing: border-box;
  grid-template-columns: ${(props) =>
    props.$selected + 1 === 1
      ? "1fr 0.5fr 0.5fr"
      : props.$selected + 1 === 2
      ? "0.5fr 1fr 0.5fr"
      : props.$selected + 1 === 3
      ? "0.5fr 0.5fr 1fr"
      : "1fr 1fr 1fr"};
  transition: all 0.3s ease-in-out;
`;
