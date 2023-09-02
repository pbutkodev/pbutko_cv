import { useEffect } from "react";
import { useState } from "react";

export const useDeviceWidth = () => {
	const [width, setWidth] = useState(0);
	useEffect(() => {
		const updateWidth = () => setWidth(window?.innerWidth);
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);
	return width;
};

export const useIsMobile = () => {
	const width = useDeviceWidth();
	return width === 0 ? false : width < 900;
};