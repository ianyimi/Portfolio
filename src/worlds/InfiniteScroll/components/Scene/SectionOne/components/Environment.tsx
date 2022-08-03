import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import * as THREE from "three";
import { Ground } from "./index";
import { Select } from "@react-three/postprocessing";

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
			<Select>
				<mesh position={[ - 0.1, 0.2, 0.1 ]}>
					<boxBufferGeometry args={[ 0.1, 0.1 ]}/>
					<meshStandardMaterial color="red"/>
				</mesh>
			</Select>
			<mesh onAfterRender={() => objectRendered( uuid.current )} position-y={0.5} castShadow receiveShadow>
				<boxBufferGeometry args={[ 1, 1, 1 ]}/>
				<meshStandardMaterial color="black" side={THREE.DoubleSide}/>
			</mesh>
			<Ground/>
		</group>
	);

}
