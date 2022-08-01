import React, { Ref, useEffect, useRef } from "react";
import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useLimiter } from "spacesvr";
import * as THREE from "three";
import { BufferGeometry, Material, Mesh, Vector3 } from "three";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import { v4 as uuidv4 } from "uuid";

type BallProps = {
	pos?: [x: number, y: number, z: number],
	texture: THREE.Texture,
	index: number,
}

const RADIUS = 0.025;

const Ball = React.forwardRef( ( props: BallProps, ref ) => {

	const { pos = [ 0, 0, 0 ], texture, index } = props;
	const { display, setDisplay, objectQueued, objectRendered } = useStore( state => ( {
		display: state.display,
		setDisplay: state.setDisplay,
		objectQueued: state.objectQueued,
		objectRendered: state.objectRendered,
	} ), shallow );
	const mesh = useRef( new THREE.Mesh() );
	const cPos = useRef( new Vector3() );
	const uuid = useRef( uuidv4() );
	const ACTIVE_DISPLAY = display === index,
		NO_ACTIVE_DISPLAY = display === null;

	const [ collider, api ] = useSphere( () => ( {
		args: [ RADIUS ],
		mass: 1,
		position: [ pos[ 0 ], pos[ 1 ], pos[ 2 ] ],
		linearFactor: [ 0, 1, 1 ],
		linearDamping: 0,
		onCollide: bounce
	} ) );

	function bounce( e: any ): void {

		if ( ! api ) return;
		api.applyImpulse( [ 0, pos[ 1 ], 0 ], [ 0, - 1, 0 ] );

	}

	useEffect( () => {

		objectQueued( uuid.current );

	}, [] );

	// Update currentPos Ref
	useEffect( () => {

		if ( ! collider.current || ! api ) return;
		api.position.subscribe( ( p ) => cPos.current.set( p[ 0 ], p[ 1 ], p[ 2 ] ) );

	}, [ collider ] );

	const limiter = useLimiter( 45 );
	useFrame( ( { clock }, delta ) => {

		if ( ! limiter.isReady( clock ) || ! collider.current || ! mesh.current || ! api || ! cPos.current ) return;

		mesh.current.position.lerp( cPos.current, 0.9 );
		mesh.current.rotation.set( - clock.getElapsedTime() * 3, 0, 0 );

	} );

	function toggleDisplay() {

		if ( NO_ACTIVE_DISPLAY || ACTIVE_DISPLAY ) {

			setDisplay( ACTIVE_DISPLAY ? null : index );

		}

	}

	function togglePointer() {

		if ( document.body.style.cursor === "pointer" ) {

			document.body.style.cursor = "default";

		} else {

			document.body.style.cursor = "pointer";

		}

	}

	return (
		<group>
			<group
				// @ts-ignore
				ref={ref}
				onClick={toggleDisplay}
				onPointerOver={togglePointer}
				onPointerOut={togglePointer}
			>
				{/*@ts-ignore*/}
				<mesh ref={collider as Ref<Mesh<BufferGeometry, Material | Material[]>> | undefined}>
					<sphereBufferGeometry args={[ RADIUS, 32, 32 ]}/>
					<meshBasicMaterial map={texture} visible={false}/>
				</mesh>
				<mesh ref={mesh} onAfterRender={() => objectRendered( uuid.current )}>
					<sphereBufferGeometry args={[ RADIUS, 32, 32 ]}/>
					<meshBasicMaterial map={texture}/>
				</mesh>
			</group>
		</group>
	);

} );

export default Ball;
