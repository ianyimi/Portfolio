import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import { Ground } from "./index";
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
			{/*<Select>*/}
			{/*	<mesh position={[ - 0.1, 0.2, 0.75 ]}>*/}
			{/*		<boxBufferGeometry args={[ 0.1, 0.1, 0.1 ]}/>*/}
			{/*		<meshStandardMaterial color="red"/>*/}
			{/*	</mesh>*/}
			{/*</Select>*/}
			{/*<mesh onAfterRender={() => objectRendered( uuid.current )} position-y={0.5} castShadow receiveShadow>*/}
			{/*	<boxBufferGeometry args={[ 1, 1, 1 ]}/>*/}
			{/*	<meshStandardMaterial color={0x131313} side={THREE.DoubleSide}/>*/}
			{/*</mesh>*/}
			<Ground/>
			<ambientLight intensity={0.75}/>
			{/*<Fog near={0.5} far={1} color="black"/>*/}
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
