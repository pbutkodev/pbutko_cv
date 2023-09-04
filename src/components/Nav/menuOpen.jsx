import { LazyMotion, domAnimation } from "framer-motion";
import { Navigation, NavItem, MenuContainer, BottomContainer } from "./styles";
import FlexContainer from "../Container/Container";
import { useRef } from "react";
import {useScrollToElement} from "../../hooks/useScrollToElement";
import {useClickOutside} from "../../hooks/useClickOutside";

const MenuOpen = ({ setIsMenuOpen, isMenuOpen, mainScreen }) => {
  const { element, setElement } = useScrollToElement();
  const containerRef = useRef(null);
  const clickHandler = (item) => {
    setElement(item);
    setIsMenuOpen(!isMenuOpen);
  };
  useClickOutside(containerRef, () => setIsMenuOpen(false));

  return (
    <LazyMotion features={domAnimation}>
      <MenuContainer
        key="menuContainer"
        transition={{ type: "tween", duration: 0.3 }}
        initial={{ right: "-100%" }}
        animate={{ right: "0%" }}
        exit={{ right: "-100%" }}
        ref={containerRef}
      >
        <FlexContainer justify="flex-start" align="flex-start">
          <Navigation>
            {mainScreen.navigationItems.map((item) => {
              return (
                <NavItem
                  $active={element === item}
                  onClick={() => clickHandler(item.link)}
                  key={item.link}
                >
                  {item.title}
                </NavItem>
              );
            })}
          </Navigation>
        </FlexContainer>
      </MenuContainer>
    </LazyMotion>
  );
};

export default MenuOpen;
