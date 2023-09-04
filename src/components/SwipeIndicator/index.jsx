import styled from "styled-components";

const Circle = styled.div`
  @keyframes swipe {
    0%,
    14% {
      opacity: 0;
      transform: translateY(0);
    }
    23%,
    36% {
      opacity: 1;
      transform: translateY(0);
    }
    64%,
    73% {
      opacity: 1;
      transform: translateY(36px);
    }
    86% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateY(36px);
    }
  }
  width: 12px;
  height: 12px;
  background-color: #c2c3bf;
  border-radius: 50%;
  margin-left: calc(50% - 6px);
  animation: swipe 2.2s ease-out infinite;
`;

const ContainerSwipe = styled.div`
  width: 28px;
  height: 65px;
  border-radius: 27px;
  box-sizing: border-box;
  border: 1px solid #c2c3bf;
  padding: 8px 0;
  position: absolute;
  align-self: center;
  bottom: 4.54vh;
  justify-content: center;
  flex-direction: row;
`;

const Swipe = () => (
  <ContainerSwipe>
    <Circle />
  </ContainerSwipe>
);
export default Swipe;
