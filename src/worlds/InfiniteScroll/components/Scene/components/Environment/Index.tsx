import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import { CustomFog, Ground, SpotLights } from "./components";
import { Cloud } from "@react-three/drei";

export default function Environment() {

	const uuid = useRef( uuidv4() );
	const { objectQueued, objectRendered } = useStore( state => ( {
		objectQueued: state.objectQueued,
		objectRendered: state.objectRendered,
	} ), shallow );

	useEffect( () => {

		// objectQueued( uuid.current );

	}, [] );

	return (
		<group position-z={- 0.5}>
			{/*<ambientLight intensity={0.75}/>*/}
			<Ground/>
			<CustomFog/>
			<SpotLights/>
			<Cloud
				position={[ 0, 0.25, 1.02 ]}
				scale={0.1}
				speed={0.2}
				opacity={0.05}
				width={2}
				depth={0.5}
			/>
		</group>
	);

}
