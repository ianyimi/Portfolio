import { Fog, useLimiter } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import React, { Ref, useEffect, useRef } from "react";
import Terrain from "./Terrain";
import { usePlane } from "@react-three/cannon";
import Audio from "../Audio";
import * as THREE from "three";
import { BufferGeometry, Material, Mesh } from "three";
import Lights from "./Lights";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import Balls from "./Balls";
import { v4 as uuidv4 } from "uuid";

const DELTA = 0.0333;

export default function Index() {

	const terrain1Ref = useRef();
	const terrain2Ref = useRef();
	const terrainRefs = [ terrain1Ref, terrain2Ref ];
	const uuid = useRef( uuidv4() );

	const { playlist, getSpeed, objectQueued, objectRendered } = useStore( ( state: any ) => ( {
		playlist: state.playlist,
		getSpeed: state.getSpeed,
		objectQueued: state.objectQueued,
		objectRendered: state.objectRendered,
	} ), shallow );

	const [ collider ] = usePlane( () => ( {
		args: [ 2, 5 ],
		rotation: [ - Math.PI * 0.5, 0, 0 ],
		type: "Static"
	} ) );

	useEffect( () => {

		objectQueued( uuid.current );

	}, [] );

	const limiter = useLimiter( 30 );
	useFrame( ( { clock } ) => {

		if (
			! limiter.isReady( clock ) ||
			! terrain1Ref.current ||
			! terrain2Ref.current
		) return;

		const speed = getSpeed();

		for ( const terrain of terrainRefs ) {

			// @ts-ignore
			terrain.current.position.z += DELTA / ( 5 * speed );

			// @ts-ignore
			if ( terrain.current.position.z >= 3.5 ) {

				// @ts-ignore
				terrain.current.position.z = - 4.5;

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
			<Balls/>
			<mesh name="skybox" onAfterRender={() => objectRendered( uuid.current )}>
				<boxBufferGeometry args={[ 10, 10, 10 ]}/>
				<meshStandardMaterial
					color={new THREE.Color( playlist.palette[ playlist.mainColorIndex ] )}
					side={THREE.DoubleSide}
				/>
			</mesh>
			<mesh name="ground" ref={collider as Ref<Mesh<BufferGeometry, Material | Material[]>> | undefined}>
				<planeBufferGeometry attach="geometry" args={[ 2, 5, 24, 24 ]}/>
				<meshBasicMaterial visible={false}/>
			</mesh>
		</group>
	);

}


