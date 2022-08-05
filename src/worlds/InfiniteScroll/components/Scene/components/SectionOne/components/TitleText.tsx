import { GroupProps, useFrame, useThree } from "@react-three/fiber";
import { Float, Text3D, useScroll } from "@react-three/drei";
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
		z: enter && active ? 0 : - 5,
		config: {
			duration: active ? 2000 : 500,
			mass: 1,
			tension: 180,
			friction: 12,
			easing: active ? easings.easeElastic : easings.easeBackOut
		}
	} );

	const limiter = useLimiter( 25 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) ) return;

		const ready = data.range( 1 / 3, 2 / 3 );
		console.log( ready );
		if ( ready <= 0 && ! active ) {

			setActive( true );

		} else if ( active ) {

			setActive( false );

		}


	} );

	return (
		<group {...props}>
			{/*<mesh>*/}
			{/*	<boxBufferGeometry args={[ 0.1, 0.1, 0.1 ]}/>*/}
			{/*	<meshBasicMaterial color="red"/>*/}
			{/*</mesh>*/}
			<animated.group position-z={z}>
				<Float speed={2} floatIntensity={0.5} floatingRange={[ 0, 0.0005 ]} position={[ camera.position.x, - 0.05, 0 ]}>
					<Text3D size={0.025} height={0.0075} font="https://dqeczc7c9n9n1.cloudfront.net/fonts/bitmap.json">
						Isaiah Anyimi
						<meshStandardMaterial emissive="white" roughness={0.8} metalness={0.2} side={THREE.DoubleSide}/>
					</Text3D>
				</Float>
			</animated.group>
		</group>
	);

}
