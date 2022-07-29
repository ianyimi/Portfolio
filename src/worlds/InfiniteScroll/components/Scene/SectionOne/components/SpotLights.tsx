import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";

const DEBUG = true;

export default function SpotLights() {

	const light = useRef();
	const light2 = useRef();
	const light3 = useRef();
	const light4 = useRef();

	useHelper( DEBUG && light, SpotLightHelper, "red" );
	useHelper( DEBUG && light2, SpotLightHelper, "red" );
	useHelper( DEBUG && light3, SpotLightHelper, "blue" );
	useHelper( DEBUG && light4, SpotLightHelper, "blue" );

	return (
		<group>
			<spotLight
				ref={light}
				color={[ 1, 0.25, 0.7 ]}
				intensity={0.5}
				angle={0.6}
				penumbra={0.5}
				position={[ 2, 2, - 1 ]}
				castShadow
				shadow-bias={- 0.0001}
			/>
			<spotLight
				ref={light2}
				color={[ 1, 0.25, 0.7 ]}
				intensity={1}
				angle={0.6}
				penumbra={0.5}
				position={[ 2, 2, 1 ]}
				castShadow
				shadow-bias={- 0.0001}
			/>
			<spotLight
				ref={light3}
				color={[ 0.14, 0.5, 1 ]}
				intensity={0.5}
				angle={0.6}
				penumbra={0.25}
				position={[ - 2, 2, - 1 ]}
				castShadow
				shadow-bias={- 0.0001}
			/>
			<spotLight
				ref={light4}
				color={[ 0.14, 0.5, 1 ]}
				intensity={1}
				angle={0.6}
				penumbra={0.25}
				position={[ - 2, 2, 1 ]}
				castShadow
				shadow-bias={- 0.0001}
			/>
		</group>
	);

}
