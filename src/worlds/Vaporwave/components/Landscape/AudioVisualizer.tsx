import * as THREE from 'three';
import { MeshStandardMaterial, Object3D } from 'three';
import { useEffect, useMemo, useRef } from "react";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useLimiter } from "spacesvr";
import { useWorld } from "../WorldState";

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
	const mesh = useRef();
	const { palette, aa } = useWorld();
	const colors: THREE.Color[] = [];
	const instancedMeshMat = new MeshStandardMaterial( { metalness: 0.9, roughness: 0.5 } );

	for ( const color of palette ) {

		colors.push( new THREE.Color( color ) );

	}

	const dummy = useMemo( () => new Object3D(), [] );

	useEffect( () => {

		if ( ! mesh.current ) return;

		for ( let i = 0; i < barCount * 2; i ++ ) {

			if ( i % 2 ) {

				dummy.position.fromArray( [ radius, 0, ( i / 2 * barWidth + i / 50 ) - 1.25 ] );

			} else {

				dummy.position.fromArray( [ - radius, 0, ( ( ( i - 1 ) / 2 ) * barWidth + i / 50 ) - 1.25 ] );

			}

			dummy.updateMatrix();
			// @ts-ignore
			mesh.current.setMatrixAt( i, dummy.matrix );
			// @ts-ignore
			mesh.current.setColorAt( i, colors[ Math.floor( Math.random() * colors.length ) ] );

		}

		// @ts-ignore
		mesh.current.instanceMatrix.needsUpdate = true;
		// @ts-ignore
		mesh.current.instanceColor.needsUpdate = true;

	}, [ barCount, mesh ] );

	const limiter = useLimiter( 45 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) || ! aa || ! mesh.current ) return;
		const data = aa.getFrequencyData();
		const step = data.length / barCount;

		for ( let i = 0; i < barCount; i ++ ) {

			const newHeight = Math.max( data[ i * step ] / 100 + 0.25, barHeight / 2 );
			dummy.scale.setComponent( 1, THREE.MathUtils.lerp( dummy.scale.y, newHeight, 0.9 ) );
			dummy.updateMatrix();

			// @ts-ignore
			mesh.current.setMatrixAt( i * 2, dummy.matrix );
			// @ts-ignore
			mesh.current.setMatrixAt( i * 2 + 1, dummy.matrix );

		}

		// @ts-ignore
		mesh.current.instanceMatrix.needsUpdate = true;

	} );

	return (
		<group {...restProps}>
			<group position={[ 0, 0, reverse ? 2 : 0 ]} rotation-y={reverse ? Math.PI : 0}>
				<instancedMesh
					ref={mesh}
					name="cubes-1"
					key="cubes-1"
					// @ts-ignore
					args={[ null, null, barCount * 2 ]}
					material={instancedMeshMat}
				>
					<boxBufferGeometry args={[ barWidth, barHeight, barWidth, 1, 1 ]}/>
				</instancedMesh>
			</group>
		</group>
	);

}
