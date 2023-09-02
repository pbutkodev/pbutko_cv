import React from "react";
import {StyledImageContainer} from "./styles";

export const Background = () => {
  return (
    <StyledImageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
        <img
          className="background-2"
          src="../../img/background_02.png"
          alt="Index image"
          style={{
            width: 1920, height: 1200
          }}
        />
    </StyledImageContainer>
  );
};
