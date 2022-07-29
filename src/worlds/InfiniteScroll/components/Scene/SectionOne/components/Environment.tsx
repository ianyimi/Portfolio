import * as THREE from "three";
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import Ground from "./Ground";

export default function Environment() {

	const mesh = useRef( null );
	const uuid = useRef( uuidv4() );
	const uuid2 = useRef( uuidv4() );
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
				<meshPhongMaterial color="white" side={THREE.DoubleSide}/>
			</mesh>
			<Ground/>
		</group>
	);

}
