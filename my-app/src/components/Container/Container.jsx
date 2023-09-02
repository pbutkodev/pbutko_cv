import React from "react";
import { StyledFlexContainer } from "./styles";

const Container = ({
  children,
  width,
  gap,
  direction = "row",
  align = "center",
  justify = "flex-start",
  padding,
  height,
  className,
  ref,
}) => {
  return (
    <StyledFlexContainer
      ref={ref}
      className={className ? className : ""}
      gap={gap}
      width={width}
      direction={direction}
      align={align}
      justify={justify}
      padding={padding}
      height={height}
    >
      {children}
    </StyledFlexContainer>
  );
};

export default Container;
