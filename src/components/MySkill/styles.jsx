import styled from "styled-components";
import {motion} from "framer-motion";

export const ContainerMySkill = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  min-height: ${(props) => `${props.$minHeight ||  '70vh'}`};
  overflow: hidden;

  & .scroll-ref {
    position: absolute;
    width: 100%;
    height: 1px;
    top: 80%;
  }

  & * {
    z-index: 10;
  }

  @media (max-width: 900px) {
    min-height: auto;
    padding-bottom: 62px;
  }
  @media (min-width: 1921px) {
    min-height: 1080px;
  }

  & h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 98%;
    min-height: 98%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  & p {
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: 0.01em;
    max-width: 944px;
    margin-top: 30px;
    margin-bottom: 33px;
  }

  & h3 {
		text-align: center;
    font-weight: 700;
    font-size: 60px;
    line-height: 74px;
    text-transform: uppercase;
		width: 100%;
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
    @media (max-width: 900px) {
      font-size: 30px;
    }
  }

  & .skills {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  & .skills p {
    margin: 0 6px 0 0;
  }
	
	& .about-me span {
		margin-right: 12px;
	}
`;

export const ContentMySkill = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
	flex-direction: column;
  width: 100%;
  transition: all 0.5s;
  position: relative;
  padding: 0px 140px;
  box-sizing: border-box;

  @media (max-width: 1250px) {
    padding: 0px 100px;
    & img {
      width: 150px;
      height: 150px;
    }
  }
  @media (max-width: 1100px) {
    padding: 0px 80px;
  }
  @media (max-width: 900px) {
    box-sizing: border-box;
    padding: 48px 24px;
  }
`;