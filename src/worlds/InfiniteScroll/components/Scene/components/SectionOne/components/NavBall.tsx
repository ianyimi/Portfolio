import { GroupProps } from "@react-three/fiber";
import { Float, useCursor } from "@react-three/drei";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring/three";
import { useStore } from "utils/store";
import * as easings from "d3-ease";

export default function NavBall( props: { section: string, color?: string, offset?: number, maxDelay?: number } & GroupProps ) {

	const { section, color = "black", offset = 0, maxDelay = 200, ...restProps } = props;
	const { enter, currentSection, previousSection, sectionDelays, setAnimationStatus } = useStore( state => ( {
		enter: state.enter,
		currentSection: state.currentSection,
		previousSection: state.previousSection,
		sectionDelays: state.sectionDelays,
		setAnimationStatus: state.setAnimationStatus,
	} ) );
	const [ active, setActive ] = useState( false );
	const [ hovered, setHovered ] = useState( false );
	useCursor( hovered );

	console.log( currentSection );

	useEffect( () => {

		console.log( "run" );
		if ( currentSection !== 0 && previousSection !== 0 ) return;

		if ( currentSection === 0 ) {

			setTimeout( () => {

				setActive( true );
				setAnimationStatus( true );
				setTimeout( () => setAnimationStatus( false ), 2000 );

			}, previousSection ? sectionDelays[ previousSection ] + offset : 0 );

		} else {

			setAnimationStatus( true );
			setTimeout( () => setAnimationStatus( false ), 500 + maxDelay - offset );

		}


	}, [ currentSection ] );

	const { s, i } = useSpring( {
		s: enter && active ? 1 : 0,
		i: enter && active ? 0.5 : 0,
		config: {
			duration: active ? 2000 : 500,
			mass: 1,
			tension: 180,
			friction: 12,
			easing: active ? easings.easeElastic : easings.easeBackOut
		}
	} );

	return (
		<group {...restProps} onPointerOver={() => setHovered( true )} onPointerOut={() => setHovered( false )}>
			<animated.group scale={s}>
				<Float floatIntensity={1} floatingRange={[ 0, 0.01 ]}>
					<mesh>
						<sphereBufferGeometry args={[ 0.02, 32, 32 ]}/>
						<meshStandardMaterial emissive="white" emissiveIntensity={1}/>
						{/* @ts-ignore */}
						<animated.pointLight color="white" intensity={i} distance={0.5}/>
					</mesh>
					{/*	<Html*/}
					{/*		scale={0.025}*/}
					{/*		style={{*/}
					{/*			opacity: 1,*/}
					{/*			fontFamily: "Bitmap",*/}
					{/*			cursor: "pointer",*/}
					{/*			color: color*/}
					{/*		}}*/}
					{/*		transform*/}
					{/*	>*/}
					{/*		<h4>{section}</h4>*/}
					{/*	</Html>*/}
				</Float>
			</animated.group>
		</group>
	);

}
