import { PerspectiveCamera } from "@react-three/drei";
import { useStore } from "utils/store";

export default function Camera() {

	const { objectQueued, objectRendered } = useStore( state => ( {
		objectQueued: state.objectQueued,
		objectRendered: state.objectRendered,
	} ) );

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
				onBeforeRender={objectQueued}
				onAfterRender={objectRendered}
			/>
		</group>
	);

}
