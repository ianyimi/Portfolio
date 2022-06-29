import { useTexture } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring/three";
import MatrixSky from "./MatrixSky";
import * as THREE from "three";
import AmbientParticles from "./AmbientParticles";
import AudioVisualizer from "./AudioVisualizer";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import { GroupProps, useThree } from "@react-three/fiber";

const useForwardedRef = ( ref: React.ForwardedRef<unknown> ) => {

	const innerRef = useRef<unknown>( null );

	useEffect( () => {

		if ( ! ref ) return;
		if ( typeof ref === "function" ) {

			ref( innerRef.current );

		} else {

			innerRef.current = ref.current;

		}

	}, [ ref ] );

	return innerRef;

};

const Terrain = React.forwardRef( ( props: { z?: number } & GroupProps, ref ) => {

	const { z = 0, ...restProps } = props;
	const { playlist } = useStore( ( state ) => ( {
		playlist: state.playlist,
	} ), shallow );
	const { gl } = useThree();
	const safeRef = useForwardedRef( ref );
	// console.log( safeRef.current );

	const [ heightTexture, metalnessTexture ] = useTexture( [
		"displacement-7.png",
		"metalness-2.png",
	] );

	const { lineColor, baseColor, secondaryColor } = useSpring( {
		lineColor: new THREE.Color( playlist.palette[ playlist.outlineColorIndex || playlist.mainColorIndex ] ),
		baseColor: new THREE.Color( playlist.palette[ playlist.backgroundColorIndex ] ),
		secondaryColor: new THREE.Color( playlist.palette[ playlist.secondaryColorIndex ] ),
		args: {
			mass: 1
		}
	} );
	// useEffect( () => {
	//
	// 	const onChange = () => {
	//
	// 		// @ts-ignore
	// 		// if ( ! ref || ! ref.current ) return;
	//
	// 		console.log( "reset landscape" );
	//
	// 		// @ts-ignore
	// 		// t1Pos.current = 0;
	// 		// @ts-ignore
	// 		// t2Pos.current = 4;
	//
	// 		// if ( document.hidden ) {
	//
	// 		gl.getObjectByName();
	// 		// safeRef.current.position.set( 0, 0, z );
	// 		console.log( safeRef.current );
	//
	// 		// } else {
	// 		//
	// 		// 	setRender( false );
	// 		//
	// 		// }
	//
	// 	};
	//
	// 	document.addEventListener( "visibilitychange", onChange );
	//
	// 	return () => {
	//
	// 		document.removeEventListener( "visibilitychange", onChange );
	//
	// 	};
	//
	// }, [] );

	return (
	// @ts-ignore
		<group ref={ref} position={[ 0, 0, z ]} {...restProps}>
			<group>
				<MatrixSky/>
				<AmbientParticles/>
				<AudioVisualizer
					position={[ 0, 0, 0 ]}
					radius={0.5}
					barCount={45}
					index={1}
				/>
				<AudioVisualizer
					position={[ 0, 0, - 2 ]}
					radius={0.5}
					barCount={45}
					index={1}
					reverse
				/>
				<group rotation={[ - Math.PI * 0.5, 0, 0 ]}>
					<mesh>
						<animated.meshStandardMaterial
							color={lineColor}
							emissive={lineColor}
							displacementMap={heightTexture}
							displacementScale={0.4}
							metalnessMap={metalnessTexture}
							metalness={0.9}
							roughness={0.5}
							wireframe
						/>
						<planeBufferGeometry attach="geometry" args={[ 1, 4, 24, 24 ]}/>
					</mesh>
					<mesh>
						<animated.meshStandardMaterial
							color="black"
							displacementMap={heightTexture}
							displacementScale={0.3975}
							metalnessMap={metalnessTexture}
							metalness={0.9}
							roughness={0.5}
						/>
						<planeBufferGeometry attach="geometry" args={[ 1, 4, 24, 24 ]}/>
					</mesh>
					<mesh position-y={- 0.1}>
						<animated.meshStandardMaterial
							color="black"
							metalnessMap={metalnessTexture}
							metalness={0.9}
							roughness={0.5}
						/>
						<planeBufferGeometry attach="geometry" args={[ 1, 4, 24, 24 ]}/>
					</mesh>
				</group>
			</group>
		</group>
	);

} );

export default Terrain;
