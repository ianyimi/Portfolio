import { CameraShake, OrbitControls } from "@react-three/drei";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useLimiter } from "spacesvr";

export default function Camera() {

	const controls = useRef( null );

	function Rig( props: { controls?: MutableRefObject<any> } ) {

		const { controls } = props;
		const [ vec ] = useState( () => new THREE.Vector3() );
		const { camera, mouse } = useThree();
		// const limiter = useLimiter( 45 );
		// useFrame( ( { clock } ) => {
		//
		// 	if ( ! limiter.isReady( clock ) ) return;
		// 	camera.position.lerp( vec.set( mouse.x / 75, mouse.y / 75 + 0.1, 0.35 ), 0.05 );
		// 	// camera.position.lerp( vec.set( 0, 0.1, 0.35 ), 0.05 );
		//
		// } );

		useEffect( () => {

			function handleMouseMove( event: MouseEvent ) {

				event = event || window.event;

				console.log( "pageX: ", event.pageX,
					"pageY: ", event.pageY,
					"clientX: ", event.clientX,
					"clientY:", event.clientY );

			}

			document.onmousemove = handleMouseMove;

		}, [] );

		return <CameraShake
			maxYaw={0.01}
			maxPitch={0.01}
			maxRoll={0.01}
			yawFrequency={0.5}
			pitchFrequency={0.5}
			rollFrequency={0.4}
			// @ts-ignore
			controls={controls ? controls : undefined}
		/>;

	}

	return (
		<group>
			<OrbitControls ref={controls}/>
			<Rig controls={controls}/>
			{/*<PerspectiveCamera*/}
			{/*	makeDefault*/}
			{/*	position={position}*/}
			{/*	rotation={[ Math.atan( position.x / position.z ) + 1, 0, 0 ]}*/}
			{/*	fov={75}*/}
			{/*	near={0.01}*/}
			{/*	far={20}*/}
			{/*/>*/}
		</group>
	);

}
