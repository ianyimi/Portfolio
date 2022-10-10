import { GroupProps } from "@react-three/fiber";
import { Float, Html, useCursor } from "@react-three/drei";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring/three";
import { useStore } from "utils/store";
import * as easings from "d3-ease";

const POSITIONS = {
	active: [
		[ - 0.05, 0.025, 0.225 ],
		[ 0.025, 0.1225, 0.2 ],
		[ 0.075, 0.025, 0.225 ]
	],
	inactive: [
		[ 0, 0.115, 0.25 ],
		// [ - 0.05, 0.0075, 0.25 ],
		[ 0.025, 0.115, 0.25 ],
		// [ 0, 0.0075, 0.25 ],
		[ 0.05, 0.115, 0.25 ]
		// [ 0.05, 0.0075, 0.25 ]
	]
};

type NavBallProps = {
	section: "Home" | "Work" | "About" | "Contact",
	index: number
	offset?: number,
	color?: string,
	maxDelay?: number,
} & GroupProps

export default function NavBall( props: NavBallProps ) {

	const { section, index, color = "black", offset = 0, maxDelay = 200, ...restProps } = props;
	const {
		enter,
		currentSection,
		setCurrentSection,
		previousSection,
		sectionDelays,
		setAnimationStatus
	} = useStore( state => ( {
		enter: state.enter,
		currentSection: state.currentSection,
		setCurrentSection: state.setCurrentSection,
		previousSection: state.previousSection,
		sectionDelays: state.sectionDelays,
		setAnimationStatus: state.setAnimationStatus,
	} ) );
	// 0 - landing page, 1 - section active, 2 - section inactive
	const [ currentPage, setPage ] = useState( 0 );
	const [ hovered, setHovered ] = useState( false );
	useCursor( hovered );

	useEffect( () => {

		if ( currentSection !== 0 && previousSection !== 0 ) return;

		if ( currentSection === 0 ) {

			setTimeout( () => {

				setPage( 1 );
				setAnimationStatus( true );
				setTimeout( () => setAnimationStatus( false ), 2000 );

			}, previousSection ? sectionDelays[ previousSection ] + offset : 0 );

		} else {

			setPage( 2 );
			setAnimationStatus( true );
			setTimeout( () => setAnimationStatus( false ), currentSection === 2 ? 0 : 500 + maxDelay - offset );

		}


	}, [ currentSection ] );

	const { s, i, p } = useSpring( {
		s: enter && currentPage === 1 ? 1 : enter && currentPage === 2 ? 0.4 : 0,
		i: enter && currentPage === 1 ? 0.5 : enter && currentPage === 2 ? 0.1 : 0,
		p: enter && currentPage === 2 ? POSITIONS.inactive[ index ] : POSITIONS.active[ index ],
		config: {
			duration: currentPage === 1 ? 2000 : 500,
			mass: 1,
			tension: 180,
			friction: 12,
			easing: currentPage === 1 ? easings.easeElastic : easings.easeBackOut,
		}
	} );

	const sections = [
		{ name: "About", id: 0 },
		{ name: "Work", id: 1 },
		{ name: "Contact", id: 2 },
	];
	const changeSection = () => {

		for ( const sect of sections ) {

			if ( sect.name === section ) {

				setCurrentSection( sect.id );

			}

		}

	};

	return (
		<group {...restProps} >
			<animated.group
				scale={s}
				position={p as unknown as [number, number, number]}
				onClick={changeSection}
				onPointerOver={() => setHovered( true )}
				onPointerOut={() => setHovered( false )}
			>
				<Float floatIntensity={1} floatingRange={[ 0, 0.01 ]}>
					<mesh>
						<sphereBufferGeometry args={[ 0.02, 32, 32 ]}/>
						<meshStandardMaterial color="white" emissiveIntensity={1}/>
						{/* @ts-ignore */}
						<animated.pointLight color="white" intensity={i} distance={0.5}/>
					</mesh>
					<Html
						zIndexRange={[ 5, 0 ]}
						scale={0.035}
						style={{
							opacity: 1,
							fontFamily: "Nafta",
							cursor: "pointer",
							color: color
						}}
						transform
						onPointerOver={() => setHovered( true )}
					>
						<h4 onClick={changeSection}>{section}</h4>
					</Html>
				</Float>
			</animated.group>
		</group>
	);

}