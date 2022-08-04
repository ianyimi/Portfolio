import { GroupProps, useFrame } from "@react-three/fiber";
import { Float, useCursor, useScroll } from "@react-three/drei";
import { useState } from "react";
import { useLimiter } from "spacesvr";
import { animated, useSpring } from "react-spring/three";
import { useStore } from "utils/store";
import * as easings from "d3-ease";

export default function NavBall( props: { section: string, color?: string, offset?: number, maxDelay?: number } & GroupProps ) {

	const { section, color = "black", offset = 0, maxDelay = 200, ...restProps } = props;
	const enter = useStore( state => state.enter );
	const data = useScroll();
	const [ active, setActive ] = useState( false );
	const [ hovered, setHovered ] = useState( false );
	useCursor( hovered );

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

	// console.log( enter && active );

	const limiter = useLimiter( 45 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) ) return;
		const sectionOne = data.range( 0, 1 / 3, 0.1 );
		if ( 0 <= sectionOne && sectionOne < 1 && ! active ) {

			setTimeout( () => setActive( true ), offset );

		} else if ( ( sectionOne < 0 || 1 <= sectionOne ) && active ) {

			setTimeout( () => setActive( false ), maxDelay - offset );

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
