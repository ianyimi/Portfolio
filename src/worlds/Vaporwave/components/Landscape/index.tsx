import { useLimiter } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
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
const BALL_SPEED_FACTOR = 0.0015;
const BALL_RESPAWN_POINT = 1.15;

export default function Index() {

	const landscape = useRef();
	const terrain1Ref = useRef();
	const terrain2Ref = useRef();
	const terrainRefs = [ terrain1Ref, terrain2Ref ];
	const ball = useRef();
	const ball1 = useRef();
	const ball2 = useRef();
	const ball3 = useRef();
	const ballRefs = [ ball, ball1, ball2, ball3 ];
	const sleep = useRef( false );

	const [ render, setRender ] = useState( false );

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

	const t1Pos = useRef( 0 );
	const t2Pos = useRef( - 4 );

	useEffect( () => {

		const onChange = () => {

			if ( ! landscape.current || ! terrain1Ref.current || ! terrain2Ref.current ) return;

			console.log( "reset landscape" );

			if ( document.hidden ) {

				sleep.current = true;
				// @ts-ignore
				landscape.current.getObjectByName( "terrain1" ).position.set( 0, 0, 0 );
				t1Pos.current = 0;
				// @ts-ignore
				landscape.current.getObjectByName( "terrain2" ).position.set( 0, 0, - 4 );
				t2Pos.current = - 4;

			} else {

				sleep.current = false;

			}

			// @ts-ignore
			// landscape.current.getObjectByName( "terrain1" ).position.set( 0, 0, 0 );
			// // @ts-ignore
			// landscape.current.getObjectByName( "terrain2" ).position.set( 0, 0, - 4 );

			// @ts-ignore
			// t1Pos.current = 0;
			// @ts-ignore
			// t2Pos.current = 4;


			// if ( document.hidden ) {
			//
			// 	setRender( true );
			//
			// } else {
			//
			// 	setRender( false );
			//
			// }
			console.log( terrain2Ref.current.position.z );
			// @ts-ignore
			// console.log( terrain2Ref.current.position.z );

		};

		document.addEventListener( "visibilitychange", onChange );

		return () => {

			document.removeEventListener( "visibilitychange", onChange );

		};

	}, [] );

	const limiter = useLimiter( 30 );
	useFrame( ( { clock }, delta ) => {

		if (
			! limiter.isReady( clock ) ||
      sleep.current ||
      ! terrain1Ref.current ||
      ! terrain2Ref.current ||
      ! ball.current ||
      ! ball1.current ||
      ! ball2.current ||
      ! ball3.current
		) return;

		const speed = getSpeed();

		// @ts-ignore
		t1Pos.current += delta / speed;
		t2Pos.current += delta / speed;

		// console.log( terrain1Ref.current.position.z );

		// @ts-ignore
		terrain1Ref.current.position.set( 0, 0, t1Pos.current );

		// @ts-ignore
		terrain2Ref.current.position.set( 0, 0, t2Pos.current );

		if ( t1Pos.current >= 3.5 ) {

			t1Pos.current = - 4.5;

		}

		if ( t2Pos.current >= 3.5 ) {

			t2Pos.current = - 4.5;

		}


		// for ( const terrain of terrainRefs ) {
		//
		// 	//
		// 	// 	// @ts-ignore
		// 	// 	terrain.current.position.z += delta / ( 5 * speed );
		// 	//
		// 	// @ts-ignore
		// 	if ( terrain.current.position.z >= 3.5 ) {
		//
		// 		// @ts-ignore
		// 		terrain.current.position.z = - 4.5;
		//
		// 	}
		// 	//
		//
		// }

		for ( let i = 0; i < ballRefs.length; i ++ ) {

			const ball = ballRefs[ i ];

			// @ts-ignore
			ball.current.position.z += ( delta / speed ) - BALL_SPEED_FACTOR;

			// @ts-ignore
			if ( ball.current.position.z + BALL_START_POSITIONS[ i ][ 2 ] >= BALL_RESPAWN_POINT ) {

				// @ts-ignore
				ball.current.position.z = BALL_START_POSITIONS[ i ][ 2 ] + BALL_RESPAWN_POINT;

			}

		}

	} );

	return (
		<group ref={landscape}>
			<Audio fftSize={2048}/>
			{/*<Fog color={new THREE.Color( playlist.palette[ playlist.backgroundColorIndex ] )} near={1} far={2}/>*/}
			<Lights/>
			{/*<Title position={[0, 0.5, -0.5]} />*/}
			<Terrain ref={terrain1Ref} name="terrain1"/>
			<Terrain z={- 4} ref={terrain2Ref} name="terrain2"/>
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


