import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledImageContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: -1;

  & img {
    width: 100%;
    height: auto;
  }

  & .background-2 {
    margin-top: -700px;
  }

  & .background-4 {
    margin-top: -700px;
  }

  & .empty {
    flex: 1 1;
  }
`;
