import { useParticleMaterial } from "./shaders/particles";
import { useEffect, useMemo, useRef } from "react";
import { InstancedBufferAttribute, InstancedBufferGeometry, InstancedMesh, Object3D, Group } from "three";
import { GroupProps, useFrame } from "@react-three/fiber";
import { positions } from "./utils/constants";
import shallow from "zustand/shallow";
import { useLimiter } from "spacesvr";

const COUNT = 500;
const X_RANGE = 150;
const Z_RANGE = 150;
const XZ_POW = 1.2;
const Y_RANGE = 100;
const Y_POW = 2;
const SCALE = 30;

export default function AmbientParticles( props: GroupProps ) {

	const mesh = useRef<InstancedMesh>( null );

	const particleMaterial = useParticleMaterial();

	const dummy = useMemo( () => new Object3D(), [] );
	const generate = false;

	useEffect( () => {

		if ( ! mesh.current ) return;

		const seeds = new Float32Array( COUNT );
		let newPositions = "";

		for ( let i = 0; i < COUNT; i ++ ) {

			const rx = positions[ 3 * i ];
			const ry = positions[ 3 * i + 1 ];
			const rz = positions[ 3 * i + 2 ];

			if ( generate ) {

				newPositions += `${rx}, `;
				newPositions += `${ry}, `;
				newPositions += `${rz}, `;

			}

			const x = rx * X_RANGE;
			const z = rz * Z_RANGE;
			const y = ry * Y_RANGE;
			dummy.position.fromArray( [ x, y, z ] );
			dummy.updateMatrix();
			mesh.current.setMatrixAt( i, dummy.matrix );
			seeds[ i ] = 0.5;

		}

		mesh.current.instanceMatrix.needsUpdate = true;

		generate && console.log( newPositions );

		( mesh.current.geometry as InstancedBufferGeometry ).setAttribute(
			"seed",
			new InstancedBufferAttribute( seeds, 1, false, COUNT )
		);

	}, [ COUNT, mesh ] );

	const limiter = useLimiter( 45 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) || ! particleMaterial ) return;

		particleMaterial.uniforms.time.value = clock.getElapsedTime() * 0.4;

	} );

	return (
		<group name="ambient-particles" {...props}>
			<group position-y={5}>
				{/* @ts-ignore */}
				<instancedMesh
					// @ts-ignore
					ref={mesh}
					// @ts-ignore
					args={[ null, null, COUNT ]}
					material={particleMaterial}
				>
					<sphereBufferGeometry args={[ 0.015 * SCALE, 16, 20 ]}/>
				</instancedMesh>
			</group>
		</group>
	);

}
