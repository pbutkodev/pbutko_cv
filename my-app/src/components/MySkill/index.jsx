import {ContainerMySkill, ContentMySkill} from "./styles";
import {useInView} from "framer-motion";
import {useRef} from "react";

const variants = {
	up: {top: "0px", opacity: 1, transform: "scale(1)"},
	down: {top: "50px", opacity: 0, transform: "scale(1.1)"},
};

export const MySkill = ({items, title, id}) => {
	const mySkillRef = useRef(null);
	const isInView = useInView(mySkillRef, {once: true});

	return (
		<ContainerMySkill>
			<ContentMySkill
				transition={{type: "tween", stiffness: 100, duration: 0.5}}
				animate={isInView ? "up" : "down"}
				variants={variants}
			>
				<h3>{title}</h3>
				<hr />
				{
					items.map((el) => {
						return (
							<>
								{el.name && <h2>{el.name}</h2>}
								<div className={id === 1 ? 'skills' : id === 0 ? 'about-me' : ''}>
									{el.elements.map((elem, i, array) =>
										<p>
											{id === 0 && <span>{'-'}</span>}
											{elem}
											{id === 1 && 'skills' && i + 1 < array.length && ','}
										</p>
									)}
								</div>
							</>
						)
					})
				}
			</ContentMySkill>
			<div className="scroll-ref" ref={mySkillRef}/>
		</ContainerMySkill>
	)
}