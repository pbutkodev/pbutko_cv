import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path fill="none" strokeWidth="2.57" stroke="white" {...props} />
);

export const MenuToggle = ({ isMenuOpen, cb }) => (
  <motion.svg
    id="menu-toggle"
    onClick={(e) => {
      e.stopPropagation();
      cb((state) => !state);
    }}
    initial={false}
    animate={isMenuOpen ? "open" : "closed"}
    width="23"
    height="23"
    viewBox="0 0 56 56"
  >
    <Path
      id="menu-path1"
      variants={{
        closed: { d: "M5 22L51 22" },
        open: { d: "M12 45L44.5269 12.4731" },
      }}
    />
    <Path
      id="menu-path2"
      variants={{
        closed: { d: "M5 34L51 34" },
        open: { d: "M12 12L44.5269 44.5269" },
      }}
    />
  </motion.svg>
);
