import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Scene() {

	const mesh = useRef( null );
	const uuid = useRef( uuidv4() );
	const { objectQueued, objectRendered } = useStore( state => ( {
		objectQueued: state.objectQueued,
		objectRendered: state.objectRendered,
	} ), shallow );

	useEffect( () => {

		objectQueued( uuid.current );

	}, [] );

	return (
		<group>
			<mesh onAfterRender={() => objectRendered( uuid.current )}>
				<boxBufferGeometry args={[ 1, 1, 1 ]}/>
				<meshBasicMaterial color="green"/>
			</mesh>
		</group>
	);

}
