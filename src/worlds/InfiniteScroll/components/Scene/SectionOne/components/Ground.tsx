import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";
import { LinearEncoding, RepeatWrapping, TextureLoader, Vector2 } from "three";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "utils/store";

export default function Ground() {

	const uuid = useRef( uuidv4() );

	const s3 = "https://dqeczc7c9n9n1.cloudfront.net/textures/";
	const [ roughness, normal ] = useLoader( TextureLoader, [
		s3 + "terrain-roughness.jpg",
		s3 + "terrain-normal.jpg",
	] );

	const { objectQueued, objectRendered } = useStore( state => ( {
		objectQueued: state.objectQueued,
		objectRendered: state.objectRendered
	} ) );

	useEffect( () => {

		objectQueued( uuid.current );

	}, [] );

	useEffect( () => {

		[ normal, roughness ].forEach( ( t ) => {

			t.wrapS = RepeatWrapping;
			t.wrapT = RepeatWrapping;
			t.repeat.set( 5, 5 );
			t.offset.set( 0, 0 );

		} );

		normal.encoding = LinearEncoding;

	}, [ normal, roughness ] );

	// useFrame( ( { clock }, delta ) => {
	//
	// 	const t = - clock.getElapsedTime() * 0.128;
	// 	roughness.offset.set( 0, t % 1 );
	// 	normal.offset.set( 0, t % 1 );
	//
	// } );

	return (
		<mesh
			position-z={1}
			rotation-x={- Math.PI / 2}
			onAfterRender={() => objectRendered( uuid.current )}
			castShadow
			receiveShadow
		>
			<planeGeometry args={[ 1.5, 1.5 ]}/>
			<MeshReflectorMaterial
				envMapIntensity={0}
				normalMap={normal}
				normalScale={new Vector2( 0.15, 0.15 )}
				roughnessMap={roughness}
				dithering={true}
				color={[ 0.015, 0.015, 0.015 ]}
				roughness={0.7}
				blur={[ 1000, 400 ]} // Blur ground reflections (width, heigt), 0 skips blur
				mixBlur={30} // How much blur mixes with surface roughness (default = 1)
				mixStrength={80} // Strength of the reflections
				mixContrast={1} // Contrast of the reflections
				resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
				mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
				depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
				minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
				maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
				depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
				debug={0}
				side={THREE.DoubleSide}
				// reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
			/>
		</mesh>
	);

}
