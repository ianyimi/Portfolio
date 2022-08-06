import { GroupProps, useFrame, useThree } from "@react-three/fiber";
import { Float, Html, Text3D, useScroll } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { animated, useSpring } from "react-spring/three";
import * as easings from "d3-ease";
import { useLimiter } from "spacesvr";
import { useStore } from "utils/store";

export default function TitleText( props: GroupProps ) {

	const portal = useRef( document.getElementById( "root" ) as HTMLElement );
	const [ active, setActive ] = useState( false );
	const enter = useStore( state => state.enter );
	const { camera } = useThree();
	const data = useScroll();

	const { z } = useSpring( {
		z: enter && active ? 0 : - 1,
		config: {
			duration: active ? 1000 : 2000,
			mass: 1,
			tension: 180,
			friction: 12,
			easing: active ? easings.easeSinIn : easings.easeBackOut
		}
	} );

	const limiter = useLimiter( 25 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) ) return;

		const ready = data.range( 0, 1 / 3 );
		if ( ready < 1 && ! active ) {

			setActive( true );

		} else if ( ready >= 1 && active ) {

			setActive( false );

		}


	} );

	console.log( active );

	return (
		<group {...props}>
			{/*<mesh>*/}
			{/*	<boxBufferGeometry args={[ 0.1, 0.1, 0.1 ]}/>*/}
			{/*	<meshBasicMaterial color="red"/>*/}
			{/*</mesh>*/}
			<animated.group position-z={z}>
				<Float speed={2} floatIntensity={0.5} floatingRange={[ 0, 0.0005 ]} position={[ camera.position.x, - 0.05, 0 ]}>
					{/* @ts-ignore */}
					<Text3D size={0.025} height={0.0075} font="https://dqeczc7c9n9n1.cloudfront.net/fonts/bitmap.json">
						Isaiah Anyimi
						<meshStandardMaterial emissive="white" roughness={0.8} metalness={0.2} side={THREE.DoubleSide}/>
					</Text3D>
				</Float>
			</animated.group>
			{/*<Html transform>*/}
			{/*	<h1*/}
			{/*		style={{*/}
			{/*			color: "white",*/}
			{/*			fontFamily: "Thunderstorm",*/}
			{/*			fontSize: "10em",*/}
			{/*			width: "80vw"*/}
			{/*		}}*/}
			{/*	>*/}
			{/*		Isaiah Anyimi*/}
			{/*	</h1>*/}
			{/*</Html>*/}
		</group>
	);

}
