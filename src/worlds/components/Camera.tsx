import { CameraShake } from "@react-three/drei";
import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Camera() {

	function Rig() {

		const [ vec ] = useState( () => new THREE.Vector3() );
		const { camera, mouse } = useThree();
		useFrame( () => camera.position.lerp( vec.set( mouse.x * 2, 1, 60 ), 0.05 ) );
		return <CameraShake
			maxYaw={0.01}
			maxPitch={0.01}
			maxRoll={0.01}
			yawFrequency={0.5}
			pitchFrequency={0.5}
			rollFrequency={0.4}
		/>;

	}

	return (
		<group>
			{/*<OrbitControls/>*/}
			<Rig/>
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
