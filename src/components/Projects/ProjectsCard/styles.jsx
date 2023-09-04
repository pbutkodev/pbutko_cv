import { motion } from "framer-motion";
import styled from "styled-components";

export const CasesCardContainer = styled(motion.div)`
  overflow: hidden;
  height: 100%;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  background: #1c1c1c;
  display: flex;
  flex-direction: column;
  & > img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    transition: all 0.3s ease-in-out;
    filter: ${(props) => (props.$selected ? "grayscale(1)" : "grayscale(0)")};
    opacity: ${(props) => (props.$selected ? "0.5" : "1")};
  }
`;
export const InfoContainer = styled.div`
  box-sizing: border-box;
  z-index: 20;
  margin: 75px 40px 40px;
  height: auto;

  & .container {
    box-sizing: border-box;
  }

  & p {
    font-size: clamp(16px, 1.7vw, 32px);
    line-height: 120%;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
    color: #ffffff;
    transform: rotate(-0.23deg);
    max-width: 450px;
  }

  @media (max-width: 1280px) {
    margin: 40px;
  }
`;

export const TagsContainer = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  grid-row: 1;
  gap: 8px;
  transition: 0.3s ease-in-out;
  flex-wrap: wrap;
  width: 100%;
  & div {
    border: 1px solid #5a5a5a;
    border-radius: 4px;
    font-weight: 600;
    font-size: clamp(14px, 1.07vw, 20px);
    line-height: 120%;
    letter-spacing: -0.03em;
    color: rgba(255, 255, 255, 0.7);
    padding: 4px 12px;
    width: fit-content;
    box-sizing: border-box;
  }
`;
export const InfoFullSizeContainer = styled(motion.div)`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 20;
  width: 100%;
  height: 100%;
  padding: 40px;
  top: 0;
  left: 0;
  border: ${(props) =>
    props.$active ? "2px solid #303030;" : "2px solid #1C1C1C"};
  background: ${(props) =>
    props.$active
      ? "linear-gradient(0deg, #0E0F0F, #0E0F0F), linear-gradient(0deg, #1C1C1C, #1C1C1C), #272727"
      : "#1C1C1C"};
  & .icon-container {
    background: ${(props) => (props.$active ? "#242424" : "#313131")};
    min-height: 76px;
    min-width: 76px;
  }
  & p {
    font-size: clamp(16px, 1.7vw, 32px);
    line-height: 120%;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
    color: #ffffff;
  }
  & .relative {
    position: relative;
  }
`;
export const StyledParagraph = styled(motion.span)`
  margin-top: 20px;
  font-weight: 400;
  font-size: clamp(14px, 1.25vw, 24px);
  line-height: 140%;
  color: #8b8c8c;
  position: relative;
`;
export const StyledTitle = styled(motion.span)`
  position: relative;
  font-size: clamp(16px, 1.7vw, 32px);
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #ffffff;
`;

export const GoToProject = styled(motion.div)`
  border: 2px solid #303030;
  box-sizing: border-box;
  width: 193px;
  height: 76px;
  transition: border 0.3s ease-in-out;
  display: flex;
  align-items: center;
  padding: 0px 24px;
  position: relative;
  &:hover {
    border: 2px solid #30D5C8;
    & p {
      color: #30D5C8;
    }
    & path {
      fill: #30D5C8;
    }
  }
  & p {
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
    color: #ffffff;
    margin-right: 19px;
    transition: 0.3s ease-in-out;
  }
  & path {
    fill: #ffffff;
    transition: 0.3s ease-in-out;
  }
`;

export const StyledNumber = styled.span`
  position: relative;
  font-size: clamp(22px, 1.5vw, 28px);
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #ffffff;
`;
export const StyledNumberTitle = styled.span`
  position: relative;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #ffffff;
`;
export const NumbersContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1px;
  align-items: center;
  justify-content: center;
`;

export const MotionContainer = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  gap: 30px;
`;

export const AppearenceContainer = styled(motion.div)`
  position: relative;
  @media (min-width: 1921px) {
    height: 822px;
  }
  @media (max-width: 1920px) {
    height: 822px;
  }
  @media (max-width: 1650px) {
    height: 730px;
  }
  @media (max-width: 1500px) {
    height: 683px;
  }
  @media (max-width: 1440px) {
    height: 673px;
  }
  @media (max-width: 1380px) {
    height: 657px;
  }
  @media (max-width: 1280px) {
    height: 575px;
  }
  @media (max-width: 1100px) {
    height: 545px;
  }
  @media (max-width: 1024px) {
    height: 515px;
  }
`;
