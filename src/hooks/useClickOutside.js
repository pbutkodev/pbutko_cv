import { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      if (
        event.target?.id !== "menu-toggle" &&
        event.target?.id !== "menu-path1" &&
        event.target?.id !== "menu-path2"
      ) {
        callback(event);
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
