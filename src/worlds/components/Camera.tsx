import { PerspectiveCamera } from "@react-three/drei";

export default function Camera() {

	return (
		<group>
			{/*<OrbitControls/>*/}
			<PerspectiveCamera
				makeDefault
				position={[ 0, 0.1, 0.35 ]}
				rotation={[ 0, 0, 0 ]}
				fov={75}
				near={0.01}
				far={20}
				// zoom={0.5}
			/>
		</group>
	);

}
