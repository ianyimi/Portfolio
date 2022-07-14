import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function Camera() {

	return (
		<group>
			<OrbitControls/>
			<PerspectiveCamera
				makeDefault
				position={[ 0, 0.15, 1.1 ]}
				rotation={[ - Math.PI / 12, 0, 0 ]}
				fov={75}
				near={0.01}
				far={200}
			/>
			<mesh position={[ 0, 0.15, 1.1 ]}>
				<boxBufferGeometry args={[ 0.1, 0.1, 0.1 ]}/>
				<meshBasicMaterial color="red"/>
			</mesh>
		</group>
	);

}
