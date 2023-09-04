import {useMotionValueEvent, useScroll} from "framer-motion";
import {useState} from "react";

export const useScrollDirection = () => {
	const [scrollDir, setScrollDir] = useState("up");
	const {scrollY} = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 50) {
			if (latest > 0) {
				setScrollDir("down");
			} else {
				setScrollDir("up");
			}
		} else {
			setScrollDir("up");
		}

		return latest;
	});

	if (typeof document === "undefined" || !document) {
		return;
	}

	return scrollDir;
};
