import { useEffect, useState } from "react";

export const useScrollToElement = () => {
  const [element, setElement] = useState('section1');
  
  useEffect(() => {
    if (typeof document !== `undefined`) {
    const target = document.getElementById(element);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
  }, [element]);
  return {element, setElement}
};