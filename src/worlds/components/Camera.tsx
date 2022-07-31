import { Vector3 } from "three";
import { OrbitControls } from "@react-three/drei";

export default function Camera() {

	const position = new Vector3( 0, 0.1, 0.35 );

	return (
		<group>
			<OrbitControls/>
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
