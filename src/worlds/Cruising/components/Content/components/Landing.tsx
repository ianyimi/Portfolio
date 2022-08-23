import { Html } from "@react-three/drei";
import styles from "./Landing.module.css";
import { gsap } from "gsap";
import { useStore } from "utils/store";
import { Vector3 } from "three";
import { motion } from "framer-motion";

const htmlPositions = [
	new Vector3( 1.5, 1.35, 0 ),
	new Vector3( 2.75, 0.35, - 0.25 )
];

export default function Landing() {

	const viewHelpers = false;
	const { currentSection } = useStore( state => ( {
		currentSection: state.currentSection
	} ) );
	const active = currentSection === 0;

	gsap.to( ".titleName", {
		opacity: active ? 1 : 0,
		y: active ? 0 : "-50px",
		duration: 1000,
		delay: 1000,
		stagger: active ? 0.1 : - 0.1,
	} );

	const titleVariants = {
		active: { opacity: active ? 1 : 0, y: active ? 0 : "-50px" },
		inactive: { opacity: 0, y: "-50px" }
	};

	return (

		<group >
			<mesh position={htmlPositions[ 0 ]}>
				<boxBufferGeometry args={[ 0.1, 0.1, 0.1 ]} />
				<meshBasicMaterial color="blue" visible={viewHelpers}/>
			</mesh>
			<Html position={htmlPositions[ 0 ]} center>
				<motion.h1 className={styles.titleName}>Isaiah</motion.h1>
				{/*<motion.h1*/}
				{/*	className={styles.titleName}*/}
				{/*	initial="inactive"*/}
				{/*	animate="animate"*/}
				{/*	variants={titleVariants}*/}
				{/*	transition={{*/}
				{/*		duration: 1,*/}
				{/*		ease: [ 0, 0.71, 0.2, 1.01 ]*/}
				{/*	}}*/}
				{/*>*/}
				{/*	Isaiah*/}
				{/*</motion.h1>*/}
				<motion.h1 className={styles.titleName}>Anyimi</motion.h1>
				{/*<motion.h1*/}
				{/*	className={styles.titleName}*/}
				{/*	initial="inactive"*/}
				{/*	animate="animate"*/}
				{/*	variants={titleVariants}*/}
				{/*	transition={{*/}
				{/*		duration: 1,*/}
				{/*		ease: [ 0, 0.71, 0.2, 1.01 ]*/}
				{/*	}}*/}
				{/*>*/}
				{/*	Anyimi*/}
				{/*</motion.h1>*/}
			</Html>
			<mesh position={htmlPositions[ 1 ]}>
				<boxBufferGeometry args={[ 0.1, 0.1, 0.1 ]} />
				<meshBasicMaterial color="blue" visible={viewHelpers}/>
			</mesh>
			<Html position={htmlPositions[ 1 ]} center>
				<motion.h4 className={styles.navElement}>About</motion.h4>
				<motion.h4 className={styles.navElement}>Work</motion.h4>
				<motion.h4 className={styles.navElement}>Contact</motion.h4>
			</Html>
		</group>

	);

}
