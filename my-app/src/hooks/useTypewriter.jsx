import { useEffect, useState } from "react";

export const useGlitchTypewriter = (text, speed) => {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  function addRandomChars(str) {
    const chars = str.split("");
    const result = [];
    for (let i = 0; i < chars.length; i++) {
      result.push(...getRandomChars(3).split(""), chars[i]);
    }
    return result;
  }

  function getRandomChars(length) {
    const chars =
      "ABCDEFGHIJKLMNO|?.!@#$&()_+PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  const arr = addRandomChars(text);
  useEffect(() => {
    if (index < text.length * 4) {
      setTimeout(() => {
        if (arr[index] === text[Math.floor(index / 4)]) {
          setCurrentText(text.substring(0, Math.floor(index / 4)));
        } else {
          const s = currentText.slice(0, -1) + arr[index];
          setCurrentText(s);
        }
        setIndex(index + 1);
      }, speed);
    }
    if (index === text.length * 4) {
      setCurrentText(text);
    }
  }, [index, currentText, text, speed]);

  return (
    <>
      {currentText}
      <strong className="hidden typewriter-position"> .</strong>
    </>
  );
};
