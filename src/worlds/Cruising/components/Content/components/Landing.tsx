import { Html } from "@react-three/drei";
import styles from "./Landing.module.css";
import { gsap } from "gsap";
import { useStore } from "utils/store";
import { Vector3 } from "three";
import { motion } from "framer-motion";

const htmlPositions = [
	new Vector3( 1.5, 1.5, 0 ),
	new Vector3( 2.75, 0.35, - 0.25 )
];

export default function Landing() {

	const viewHelpers = false;
	const { currentSection, setCurrentSection, enter, storyControls } = useStore( state => ( {
		currentSection: state.currentSection,
		setCurrentSection: state.setCurrentSection,
		enter: state.enter,
		storyControls: state.storyControls
	} ) );
	const active = currentSection === 0;

	// gsap.to( ".titleName", {
	// 	opacity: active ? 1 : 0,
	// 	y: active ? 0 : "-50px",
	// 	duration: 1000,
	// 	delay: 1000,
	// 	stagger: active ? 0.1 : - 0.1,
	// } );

	const basicTransition = {
		duration: 1,
		ease: [ 0, 0.71, 0.2, 1.01 ]
	};

	const titleVariant1 = {
		active: {
			opacity: active ? 1 : 0,
			x: enter ? active ? 0 : "-50px" : 0,
			y: active ? 0 : "-50px"
		},
		inactive: {
			opacity: 0,
			// x: enter ? active ? "-50px" :
			y: "-50px"
		}
	};

	const titleVariant2 = {
		active: {
			opacity: active ? 1 : 0,
			x: enter ? active ? 0 : "50px" : 0,
			y: active ? 0 : "50px"
		},
		inactive: { opacity: 0, y: "50px" }
	};

	const navHover = {
		scale: 1.2,
		color: "red"
	};

	const navElements = [];
	const navSections = [ "About", "Work", "Contact" ];
	for ( let i = 0; i < navSections.length; i ++ ) {

		const first = i === 0;
		const section = navSections[ i ];
		navElements.push(
			<motion.h1
				className={first ? styles.navElement : styles.navElement + " " + styles[ `nav${i + 1}` ]}
				whileHover={navHover}
				transition={basicTransition}
				onClick={() => {

					storyControls.goToPOI( i );
					if ( currentSection !== i ) {

						setCurrentSection( i );

					}

				}}
			>
				{section}
			</motion.h1>

		);

	}

	return (

		<group >
			<mesh position={htmlPositions[ 0 ]}>
				<boxBufferGeometry args={[ 0.1, 0.1, 0.1 ]} />
				<meshBasicMaterial color="blue" visible={viewHelpers}/>
			</mesh>
			<Html position={htmlPositions[ 0 ]} center>
				{/*<motion.h1 className={styles.titleName}>Isaiah</motion.h1>*/}
				<motion.h1
					className={styles.titleName}
					initial="inactive"
					animate="active"
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
			</Html>
			<Html position={htmlPositions[ 1 ]} center>
				{navElements}
			</Html>
			<mesh position={htmlPositions[ 1 ]}>
				<boxBufferGeometry args={[ 0.1, 0.1, 0.1 ]} />
				<meshBasicMaterial color="blue" visible={viewHelpers}/>
			</mesh>
		</group>

	);

}