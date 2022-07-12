import * as THREE from 'three';
import { Vector3 } from 'three';
import { ReactNode, useRef } from "react";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useLimiter } from "spacesvr";
import { animated } from "react-spring/three";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import { v4 as uuidv4 } from "uuid";

type VisualizerProps = {
  barCount?: number,
  barWidth?: number,
  barHeight?: number,
  reverse?: boolean,
  radius?: number,
  index: number
} & GroupProps

export default function AudioVisualizer( props: VisualizerProps ) {

	const {
		barCount = 32,
		barWidth = 0.025,
		barHeight = 0.25,
		reverse,
		radius = 0.5,
		index,
		...restProps
	} = props;
	const group1 = useRef();
	const group2 = useRef();
	const uuid = useRef( uuidv4() );
	const cubes: ReactNode[] = [];
	const { playlist, aa, objectQueued, objectRendered } = useStore( ( state ) => ( {
		playlist: state.playlist,
		aa: state.aa,
		objectQueued: state.objectQueued,
		objectRendered: state.objectRendered,
	} ), shallow );

	// useEffect( () => {
	//
	// 	objectQueued( uuid.current );
	//
	// }, [] );

	for ( let i = 0; i < barCount; ++ i ) {

		const color = new THREE.Color( playlist.palette[ Math.floor( Math.random() * playlist.palette.length ) ] );

		cubes.push(
			<mesh
				name={`cube-${index}-${i}`}
				position={new Vector3( 0, 0, i * barWidth + i / 50 )} key={`cube-${index}-${i}`}
				onAfterRender={() => {

					// objectRendered( uuid.current );
					// objectRendered( uuidv4() );

				}}
			>
				<boxBufferGeometry args={[ barWidth, barHeight, barWidth, 1, 15 ]}/>
				<animated.meshStandardMaterial
					color={color}
					metalness={0.9}
					roughness={0.5}
				/>
			</mesh>
		);

	}

	const limiter = useLimiter( 45 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) || ! group1.current || ! group2.current || ! aa ) return;

		// objectRendered( uuid.current );
		const audioData = aa.getFrequencyData();
		const step = audioData.length / cubes.length;
		for ( let i = 0; i < cubes.length; ++ i ) {

			// @ts-ignore
			const cube = group1.current.getObjectByName( `cube-${index}-${i}` );
			cube.scale.y = Math.max( audioData[ Math.floor( i / 2 * step ) ] / 100 + 0.25, barHeight / 2 );
			cube.geometry.computeBoundingBox();
			// @ts-ignore
			const cube2 = group2.current.getObjectByName( `cube-${index}-${i}` );
			cube2.scale.y = Math.max( audioData[ Math.floor( i / 2 * step ) ] / 100 + 0.25, barHeight / 2 );
			cube2.geometry.computeBoundingBox();

		}

	} );

	if ( ! aa ) return <></>;

	return (
		<group {...restProps}>
			<group ref={group1} position={[ radius, 0, reverse ? 2 : 0 ]} rotation-y={reverse ? Math.PI : 0}>
				{cubes}
			</group>
			<group ref={group2} position={[ - radius, 0, reverse ? 2 : 0 ]} rotation-y={reverse ? Math.PI : 0}>
				{cubes}
			</group>
		</group>
	);

}
