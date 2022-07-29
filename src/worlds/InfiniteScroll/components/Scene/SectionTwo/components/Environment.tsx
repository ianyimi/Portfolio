import * as THREE from "three";
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";

export default function Environment() {

	const mesh = useRef( null );
	const uuid = useRef( uuidv4() );
	const uuid2 = useRef( uuidv4() );
	const { objectQueued, objectRendered } = useStore( state => ( {
		objectQueued: state.objectQueued,
		objectRendered: state.objectRendered,
	} ), shallow );

	useEffect( () => {

		console.log( uuid.current );
		console.log( uuid2.current );
		objectQueued( uuid.current );
		objectQueued( uuid2.current );

	}, [] );

	return (
		<group position-z={- 0.5}>
			{/*<ambientLight intensity={0.5}/>*/}
			<mesh onAfterRender={() => objectRendered( uuid.current )} position-y={0.5}>
				<boxBufferGeometry args={[ 1, 1, 1 ]}/>
				<meshStandardMaterial color="red" side={THREE.DoubleSide}/>
			</mesh>
			<mesh rotation-x={- Math.PI / 2} onAfterRender={() => objectRendered( uuid2.current )}>
				<planeBufferGeometry args={[ 2, 2 ]}/>
				<meshStandardMaterial color="black" side={THREE.DoubleSide}/>
			</mesh>
		</group>
	);

}
