import {useState} from "react";
import {useScrollDirection} from "../../hooks/useScrollDirection";
import {StyledHeader} from "./styles";
import {MenuToggle} from "./button";
import {AnimatePresence} from "framer-motion";
import MenuOpen from "./menuOpen";

const texts = {
	navigationItems: [
		{title: "INTRO", link: "intro"},
		{title: "ABOUT ME", link: "about_me"},
		{title: "SKILLS", link: "skills"},
		{title: "EDUCATION", link: "education"},
		{title: "PROJECTS", link: "projects"},
		{title: "CONTACTS", link: "contacts"},
	],
}

export const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const scrollDirection = useScrollDirection();

	return (
		<>
			<StyledHeader
				className={`${scrollDirection ?? "up"} ${isMenuOpen ? "up" : ""}`}
			>
				<div></div>
				<MenuToggle
					isMenuOpen={isMenuOpen}
					cb={() => setIsMenuOpen((state) => !state)}
				/>
			</StyledHeader>
			<AnimatePresence>
				{isMenuOpen && (
					<MenuOpen
						mainScreen={texts}
						setIsMenuOpen={setIsMenuOpen}
						isMenuOpen={isMenuOpen}
					/>
				)}
			</AnimatePresence>
		</>
	);
}
