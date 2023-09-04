import styled from "styled-components";
import {m} from "framer-motion";
import Container from "../Container/Container";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 142px;
  height: 80px;
  width: 100%;
  z-index: 200;
  position: fixed;
  box-sizing: border-box;
  top: 0px;
  background: rgba(14, 15, 15, 0.7);
  border-bottom: 1px solid #5d5d5d;

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  @media (max-width: 1200px) {
    padding: 0px 100px;
  }

  & a {
    width: auto;
    display: flex;
    align-items: center;
  }

  & img {
    cursor: pointer;
  }

  &.down {
    top: -80px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }

  &.up {
    top: 0px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }

  & svg {
    width: 56px;
    height: 56px;
  }

  & .header-logo {
    width: auto;
  }

  @media screen and (max-width: 900px) {
    padding: 0 24px;
    justify-content: space-between;
    height: 60px;

    & svg {
      width: 32px;
      height: 32px;
    }

    & img {
      width: 156px;
      height: 32px;
    }
  }
`;
export const MenuContainer = styled(m.div)`
  position: fixed;
  top: 80px;
  right: 0px;
  width: auto;
  background: rgba(14, 15, 15, 0.7);
  overflow: hidden;
  height: calc(100vh - 80px);
  z-index: 999;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-left: 1px solid #5d5d5d;

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  & .bottom-row {
    & nav {
      border: none;
    }
  }

  @media screen and (max-width: 900px) {
    width: 100vw;
    height: calc(100vh - 60px);
    top: 60px;
    & > div {
      width: 100%;
    }
  }
`;
export const Navigation = styled.nav`
  z-index: 999;
  display: flex;
  padding: 4.7vh 48px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100vw;
  max-width: 380px;
  height: 100%;

  & span,
  & p,
  & a {
    font-weight: 300;
    font-size: 2.38vh;
    line-height: 130%;
    color: #8b8c8c;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  & p,
  & a {
    color: #ffffff;
    text-transform: capitalize;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      color: #30D5C8 !important;
      text-decoration: underline;
    }
  }

  & a {
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    min-width: 50%;
    padding: 24px 32px;
  }
`;
export const NavItem = styled.p`
  color: ${({$active}) => `${$active ? "#30D5C8" : "#ffffff"}`} !important;
  text-decoration: ${({$active}) => `${$active ? "underline" : "none"}`};
  font-weight: 400;
  text-transform: capitalize;
  transition: 0.3s;
`;
export const BottomContainer = styled(Container)`
  & nav {
    border: none;
  }
`;
