import { CameraShake, OrbitControls } from "@react-three/drei";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Vector2 } from "three";

export default function Camera() {

	const controls = useRef( null );

	function Rig( props: { controls?: MutableRefObject<any> } ) {

		const { controls } = props;
		const [ vec ] = useState( () => new THREE.Vector3() );
		const { camera } = useThree();

		useEffect( () => {

			function handleMouseMove( event: MouseEvent ) {

				event = event || window.event;
				const mouse = new Vector2( event.clientX / window.innerWidth, event.clientY / window.innerHeight );
				camera.position.lerp( vec.set( mouse.x / 75 + camera.position.x, mouse.y / 75 + camera.position.y, camera.position.z ), 0.05 );

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
		</group>
	);

}
