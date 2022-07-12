import { PerspectiveCamera } from "@react-three/drei";

export default function Camera() {

	return (
		<group>
			{/*<OrbitControls/>*/}
			<PerspectiveCamera
				makeDefault
				position={[ 0, 0.15, 1.1 ]}
				rotation={[ - Math.PI / 12, 0, 0 ]}
				fov={75}
				near={0.01}
				far={20}
			/>
		</group>
	);

}
