import { Fog, useLimiter } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Terrain from "./Terrain";
import { useWorld } from "../WorldState";
import { usePlane } from "@react-three/cannon";
import Audio from "../Audio";
import * as THREE from "three";
import Lights from "./Lights";


export default function Index() {

	const terrain1Ref = useRef();
	const terrain2Ref = useRef();

	const { playlist, aa, setAa, getVolume } = useWorld();

	const [ collider, api ] = usePlane( () => ( {
		args: [ 2, 5 ],
		rotation: [ - Math.PI * 0.5, 0, 0 ],
		type: "Static"
	} ) );

	const limiter = useLimiter( 30 );
	useFrame( ( { clock }, delta ) => {

		if ( ! limiter.isReady || ! terrain1Ref.current || ! terrain2Ref.current ) return;
		const data = aa?.getFrequencyData();
		const volume = getVolume( data );
		let speed = volume > 0.6 ?
			0.5 : volume > 0.3 ?
				1 : 1.5;
		speed -= 0.25 * ( data ? data[ 0 ] / 255 : 0 );

		// @ts-ignore
		terrain1Ref.current.position.z += delta / ( 5 * ( speed ) );
		// @ts-ignore
		terrain2Ref.current.position.z += delta / ( 5 * ( speed ) );

		// @ts-ignore
		if ( terrain1Ref.current.position.z >= 3.5 ) {

			// @ts-ignore
			terrain1Ref.current.position.z = - 4.5;

		}

		// @ts-ignore
		if ( terrain2Ref.current.position.z >= 3.5 ) {

			// @ts-ignore
			terrain2Ref.current.position.z = - 4.5;

		}

	} );

	return (
		<group>
			<Audio setAudioAnalyser={setAa}/>
			<Fog color={new THREE.Color( playlist.palette[ playlist.backgroundColorIndex ] )} near={1} far={2}/>
			<Lights/>
			{/*<Title position={[0, 0.5, -0.5]} />*/}
			<Terrain ref={terrain1Ref}/>
			<Terrain z={- 4} ref={terrain2Ref}/>
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


