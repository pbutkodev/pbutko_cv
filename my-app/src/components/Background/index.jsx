import React from "react";
import {StyledImageContainer} from "./styles";
import img from '../../img/3.jpg';

export const Background = () => {
  return (
    <StyledImageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
        <img
          src={img}
          alt="Index image"
          style={{
            width: 1920, height: 1200, opacity: .3
          }}
        />
    </StyledImageContainer>
  );
};
