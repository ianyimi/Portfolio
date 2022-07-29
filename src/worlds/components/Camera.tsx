import { PerspectiveCamera } from "@react-three/drei";

export default function Camera() {

	return (
		<group>
			{/*<OrbitControls/>*/}
			<PerspectiveCamera
				makeDefault
				position={[ 0, 0.2, 0.55 ]}
				rotation={[ - Math.PI / 12, 0, 0 ]}
				fov={75}
				near={0.01}
				far={20}
				zoom={2}
			/>
		</group>
	);

}
