import { useTexture } from "@react-three/drei";
import React from "react";
import { animated, useSpring } from "react-spring/three";
import { useWorld } from "../WorldState";
import MatrixSky from "./MatrixSky";
import * as THREE from "three";
import AmbientParticles from "./AmbientParticles";
import AudioVisualizer from "./AudioVisualizer";

const Terrain = React.forwardRef( ( props: { z?: number }, ref ) => {

	const { z = 0 } = props;
	const { playlist } = useWorld();

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

	return (
	// @ts-ignore
		<group ref={ref} position={[ 0, 0, z ]}>
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
	);

} );

export default Terrain;
