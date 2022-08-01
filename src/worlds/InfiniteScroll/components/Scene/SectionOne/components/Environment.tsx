import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import * as THREE from "three";
import { Ground } from "./index";

export default function Environment() {

	const uuid = useRef( uuidv4() );
	const { objectQueued, objectRendered } = useStore( state => ( {
		objectQueued: state.objectQueued,
		objectRendered: state.objectRendered,
	} ), shallow );

	useEffect( () => {

		objectQueued( uuid.current );

	}, [] );

	return (
		<group position-z={- 0.5}>
			<mesh onAfterRender={() => objectRendered( uuid.current )} position-y={0.5} castShadow receiveShadow>
				<boxBufferGeometry args={[ 1, 1, 1 ]}/>
				<meshStandardMaterial color="black" side={THREE.DoubleSide}/>
			</mesh>
			<Ground/>
		</group>
	);

}
