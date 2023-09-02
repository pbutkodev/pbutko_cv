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
    position: sticky;
    top: 0;
    width: 100%;
    height: auto;
  }
`;
