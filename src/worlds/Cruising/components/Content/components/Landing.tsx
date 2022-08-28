import { Html } from "@react-three/drei";
import styles from "./Landing.module.css";
import { useStore } from "utils/store";
import { Vector3 } from "three";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const htmlPositions = [
	new Vector3( 1.5, 1.5, 0 ),
	new Vector3( 2.75, 0.35, - 0.25 )
];

export default function Landing( props: {viewHelpers?: boolean} ) {

	const { viewHelpers = false } = props;
	const firstName = useRef( null );
	const lastName = useRef( null );
	const { currentSection, animating } = useStore( state => ( {
		currentSection: state.currentSection,
		animating: state.animating,
	} ) );
	const active = currentSection && currentSection.name === "Home";

	// useFrame( () => console.log( ! storyControls.cameraRig.inTransit ) );

	const basicTransition = {
		duration: active ? 1 : 0.5,
		ease: [ 0, 0.71, 0.2, 1.01 ]
	};

	const titleVariant1 = {
		active: {
			opacity: active && ! animating ? 1 : 0,
			x: active && ! animating ? 0 : "-50px",
			// y: active ? 0 : "-50px",
			// visibility: active ? "hidden" : "hidden"
		},
		inactive: {
			opacity: 0,
			x: "-50px"
			// y: "-50px"
		}
	};

	const titleVariant2 = {
		active: {
			opacity: active && ! animating ? 1 : 0,
			x: active && ! animating ? 0 : "50px",
			// y: active ? 0 : "50px",
			// visibility: active ? "visible" : "hidden"
		},
		inactive: {
			opacity: 0,
			x: "50px",
			// y: "50px"
		}
	};

	return (
		<group >
			<mesh position={htmlPositions[ 0 ]}>
				<boxBufferGeometry args={[ 0.1, 0.1, 0.1 ]} />
				<meshBasicMaterial color="blue" visible={viewHelpers}/>
			</mesh>
			<Html position={htmlPositions[ 0 ]} center>
				<AnimatePresence>
					{/*<motion.h1 className={styles.titleName}>Isaiah</motion.h1>*/}
					<motion.h1
						ref={firstName}
						className={styles.titleName}
						initial="inactive"
						animate="active"
						exit="inactive"
						variants={titleVariant1}
						transition={{
							...basicTransition,
							delay: active ? 0 : 0.15,
						}}
					>
						ISAIAH
					</motion.h1>
					{/*<motion.h1 className={styles.titleName}>Anyimi</motion.h1>*/}
					<motion.h1
						ref={lastName}
						className={styles.titleName}
						initial="inactive"
						animate="active"
						variants={titleVariant2}
						transition={{
							...basicTransition,
							delay: active ? 0.25 : 0,
						}}
					>
						ANYIMI
					</motion.h1>
				</AnimatePresence>
			</Html>
		</group>
	);

}
