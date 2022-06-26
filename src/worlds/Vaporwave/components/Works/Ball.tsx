import { useSphere } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLimiter } from "spacesvr";
import { CollideEvent } from "@react-three/cannon/dist/setup";
import * as THREE from "three";
import { Vector3 } from "three";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";

type BallProps = {
	position?: [x: number, y: number, z: number],
	texture: THREE.Texture,
	index: number,
}

export default function Ball( props: BallProps ) {

	const { position = [ 0, 0, 0 ], texture, index } = props;
	const { display, setDisplay } = useStore( state => ( {
		display: state.display,
		setDisplay: state.setDisplay
	} ), shallow );
	const mesh = useRef( new THREE.Mesh() );
	const cPos = useRef( new Vector3() );
	const ACTIVE_DISPLAY = display === index,
		NO_ACTIVE_DISPLAY = display === null;

	const [ collider, api ] = useSphere( () => ( {
		args: 0.015,
		mass: 1,
		position: [ position[ 0 ], position[ 1 ], position[ 2 ] ],
		linearFactor: [ 0, 1, 1 ],
		linearDamping: 0,
		onCollide: bounce
	} ) );

	function bounce( e: CollideEvent ): void {

		if ( ! api ) return;
		api.applyImpulse( [ 0, position[ 1 ], 0 ], [ 0, - 1, 0 ] );

	}

	// Update currentPos Ref
	useEffect( () => {

		if ( ! collider.current || ! api ) return;
		api.applyForce( [ 0, 0, 10 ], [ 0, 0, 1 ] );
		api.position.subscribe( ( p ) => cPos.current.set( p[ 0 ], p[ 1 ], p[ 2 ] ) );

	}, [ collider ] );

	const limiter = useLimiter( 45 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) || ! collider.current || ! mesh.current || ! api || ! cPos.current ) return;

		if ( cPos.current.z > 1.15 ) {

			// Respawning balls after the roll past the camera
			api.sleep();
			api.position.set( position[ 0 ], position[ 1 ], - 1.25 );
			api.wakeUp;
			api.applyForce( [ 0, 0, 10 ], [ 0, 0, 1 ] );

		}

		mesh.current.position.lerp( cPos.current, 0.9 );
		mesh.current.rotation.set( - clock.getElapsedTime() * 3, 0, 0 );

	} );

	function toggleDisplay() {

		if ( NO_ACTIVE_DISPLAY || ACTIVE_DISPLAY ) {

			setDisplay( ACTIVE_DISPLAY ? null : index );

		}

	}

	return (
		<group>
			<group onClick={toggleDisplay}>
				<mesh ref={collider}>
					<sphereBufferGeometry args={[ 0.015, 32, 32 ]}/>
					<meshBasicMaterial map={texture} visible={false}/>
				</mesh>
				<mesh ref={mesh}>
					<sphereBufferGeometry args={[ 0.015, 32, 32 ]}/>
					<meshBasicMaterial map={texture}/>
				</mesh>
			</group>
		</group>
	);

}
