import { Fog, useLimiter } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Terrain from "./Terrain";
import { usePlane } from "@react-three/cannon";
import Audio from "../Audio";
import * as THREE from "three";
import Lights from "./Lights";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import Ball from "./Ball";
import { useTexture } from "@react-three/drei";

const TEXTURES = [
	"https://dqeczc7c9n9n1.cloudfront.net/images/marble1.jpg",
	"https://dqeczc7c9n9n1.cloudfront.net/images/marble2.jpg",
	"https://dqeczc7c9n9n1.cloudfront.net/images/marble3.jpg",
	"https://dqeczc7c9n9n1.cloudfront.net/images/marble4.jpg",
];

const BALL_START_POSITIONS: [x: number, y: number, z: number][] = [
	[ 0.075, 0.05, - 1.15 ],
	[ - 0.025, 0.1, - 1.75 ],
	[ - 0.05, 0.075, - 2.5 ],
	[ - 0.1, 0.125, - 3.25 ]
];

export default function Index() {

	const terrain1Ref = useRef();
	const terrain2Ref = useRef();
	const terrainRefs = [ terrain1Ref, terrain2Ref ];
	const ball = useRef();
	const ball1 = useRef();
	const ball2 = useRef();
	const ball3 = useRef();
	const ballRefs = [ ball, ball1, ball2, ball3 ];

	const tex = useTexture( TEXTURES[ 0 ] );
	const tex2 = useTexture( TEXTURES[ 1 ] );
	const tex3 = useTexture( TEXTURES[ 2 ] );
	const tex4 = useTexture( TEXTURES[ 3 ] );

	const { playlist, getSpeed } = useStore( ( state: any ) => ( {
		playlist: state.playlist,
		getSpeed: state.getSpeed
	} ), shallow );

	const [ collider, api ] = usePlane( () => ( {
		args: [ 2, 5 ],
		rotation: [ - Math.PI * 0.5, 0, 0 ],
		type: "Static"
	} ) );

	const ballSpeedFactor = 0.0015;
	const ballRespawnPoint = 1.15;

	const limiter = useLimiter( 30 );
	useFrame( ( { clock }, delta ) => {

		if (
			! limiter.isReady ||
			! terrain1Ref.current ||
			! terrain2Ref.current ||
			! ball.current ||
			! ball1.current ||
			! ball2.current ||
			! ball3.current
		) return;

		const speed = getSpeed();

		for ( const terrain of terrainRefs ) {

			// @ts-ignore
			terrain.current.position.z += delta / ( 5 * speed );

			// @ts-ignore
			if ( terrain.current.position.z >= 3.5 ) {

				// @ts-ignore
				terrain.current.position.z = - 4.5;

			}

		}

		for ( let i = 0; i < ballRefs.length; i ++ ) {

			const ball = ballRefs[ i ];

			// @ts-ignore
			ball.current.position.z += delta / ( 5 * speed ) - ballSpeedFactor;

			// @ts-ignore
			if ( ball.current.position.z + BALL_START_POSITIONS[ i ][ 2 ] >= ballRespawnPoint ) {

				// @ts-ignore
				ball.current.position.z = BALL_START_POSITIONS[ i ][ 2 ] + ballRespawnPoint;

			}

		}

	} );

	return (
		<group>
			<Audio fftSize={2048}/>
			<Fog color={new THREE.Color( playlist.palette[ playlist.backgroundColorIndex ] )} near={1} far={2}/>
			<Lights/>
			{/*<Title position={[0, 0.5, -0.5]} />*/}
			<Terrain ref={terrain1Ref}/>
			<Terrain z={- 4} ref={terrain2Ref}/>
			<Ball
				ref={ball}
				pos={BALL_START_POSITIONS[ 0 ]}
				texture={tex}
				index={0}
			/>
			<Ball
				ref={ball1}
				pos={BALL_START_POSITIONS[ 1 ]}
				texture={tex2}
				index={1}
			/>
			<Ball
				ref={ball2}
				pos={BALL_START_POSITIONS[ 2 ]}
				texture={tex3}
				index={2}
			/>
			<Ball
				ref={ball3}
				pos={BALL_START_POSITIONS[ 3 ]}
				texture={tex4}
				index={3}
			/>
			<mesh name="skybox">
				<boxBufferGeometry args={[ 10, 10, 10 ]}/>
				<meshStandardMaterial
					color={new THREE.Color( playlist.palette[ playlist.mainColorIndex ] )}
					side={THREE.DoubleSide}
				/>
			</mesh>
			<mesh name="ground" ref={collider}>
				<planeBufferGeometry attach="geometry" args={[ 2, 5, 24, 24 ]}/>
				<meshBasicMaterial visible={false}/>
			</mesh>
		</group>
	);

}


