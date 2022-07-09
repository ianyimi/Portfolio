import React, { useEffect, useRef } from "react";
import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useLimiter } from "spacesvr";
import { CollideEvent } from "@react-three/cannon/dist/setup";
import * as THREE from "three";
import { Vector3 } from "three";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";

type BallProps = {
  pos?: [x: number, y: number, z: number],
  texture: THREE.Texture,
  index: number,
}

const RADIUS = 0.025;

const Ball = React.forwardRef( ( props: BallProps, ref ) => {

	const { pos = [ 0, 0, 0 ], texture, index } = props;
	const { display, setDisplay, addShader } = useStore( state => ( {
		display: state.display,
		setDisplay: state.setDisplay,
		addShader: state.addShader,
	} ), shallow );
	const mesh = useRef( new THREE.Mesh() );
	const cPos = useRef( new Vector3() );
	const ACTIVE_DISPLAY = display === index,
		NO_ACTIVE_DISPLAY = display === null;

	const [ collider, api ] = useSphere( () => ( {
		args: RADIUS,
		mass: 1,
		position: [ pos[ 0 ], pos[ 1 ], pos[ 2 ] ],
		linearFactor: [ 0, 1, 1 ],
		linearDamping: 0,
		onCollide: bounce
	} ) );

	function bounce( e: CollideEvent ): void {

		if ( ! api ) return;
		api.applyImpulse( [ 0, pos[ 1 ], 0 ], [ 0, - 1, 0 ] );

	}

	// Update currentPos Ref
	useEffect( () => {

		if ( ! collider.current || ! api ) return;
		// api.applyForce( [ 0, 0, 10 ], [ 0, 0, 1 ] );
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

	return (
		<group>
			{/* @ts-ignore */}
			<group ref={ref} onClick={toggleDisplay}>
				<mesh ref={collider}>
					<sphereBufferGeometry args={[ RADIUS, 32, 32 ]}/>
					<meshBasicMaterial visible={false}/>
				</mesh>
				<mesh ref={mesh}>
					<sphereBufferGeometry args={[ RADIUS, 32, 32 ]}/>
					<meshBasicMaterial map={texture} onBeforeCompile={addShader}/>
				</mesh>
			</group>
		</group>
	);

} );

export default Ball;
