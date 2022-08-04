import { MutableRefObject, useRef } from "react";
import { useHelper } from "@react-three/drei";
import { Object3D, SpotLightHelper } from "three";
import { useThree } from "@react-three/fiber";
import { Falsy } from "utility-types";
import { useStore } from "utils/store";

const DEBUG = false;

export default function SpotLights() {

	const light = useRef( null );
	const light2 = useRef( null );
	const light3 = useRef( null );
	const light4 = useRef( null );
	const light5 = useRef( null );

	useHelper( DEBUG && ( light as unknown as MutableRefObject<Object3D<Event> | undefined> | Falsy ), SpotLightHelper, "red" );
	useHelper( DEBUG && ( light2 as unknown as MutableRefObject<Object3D<Event> | undefined> | Falsy ), SpotLightHelper, "red" );
	useHelper( DEBUG && ( light3 as unknown as MutableRefObject<Object3D<Event> | undefined> | Falsy ), SpotLightHelper, "blue" );
	useHelper( DEBUG && ( light4 as unknown as MutableRefObject<Object3D<Event> | undefined> | Falsy ), SpotLightHelper, "blue" );
	useHelper( DEBUG && ( light5 as unknown as MutableRefObject<Object3D<Event> | undefined> | Falsy ), SpotLightHelper, "blue" );

	const { scene } = useThree();
	const dummyObj = new Object3D();
	scene.add( dummyObj );

	const { objectQueued, objectRendered } = useStore( state => ( {
		objectQueued: state.objectQueued,
		objectRendered: state.objectRendered
	} ) );

	return (
		<group>
			<group name="ColoredLights">
				<spotLight
					ref={light}
					color={[ 1, 0.25, 0.7 ]}
					intensity={0.25}
					distance={3.5}
					angle={0.25}
					penumbra={0.5}
					decay={0.1}
					position={[ 2, 2, - 1 ]}
					castShadow
					shadow-bias={- 0.0001}
					target={dummyObj}
				/>
				<spotLight
					ref={light2}
					color={[ 1, 0.25, 0.7 ]}
					intensity={0.5}
					distance={3.5}
					angle={0.25}
					penumbra={0.5}
					decay={0.1}
					position={[ 2, 2, 1 ]}
					castShadow
					shadow-bias={- 0.0001}
					target={dummyObj}
				/>
				<spotLight
					ref={light3}
					color={[ 0.14, 0.5, 1 ]}
					intensity={0.25}
					distance={3.5}
					angle={0.25}
					penumbra={0.25}
					decay={0.1}
					position={[ - 2, 2, - 1 ]}
					castShadow
					shadow-bias={- 0.0001}
					target={dummyObj}
				/>
				<spotLight
					ref={light4}
					color={[ 0.14, 0.5, 1 ]}
					intensity={0.5}
					distance={3.5}
					angle={0.25}
					penumbra={1}
					decay={0.1}
					position={[ - 2, 2, 1 ]}
					castShadow
					shadow-bias={- 0.0001}
					target={dummyObj}
				/>
			</group>
			<group name="centerLight">
				<spotLight
					ref={light5}
					color={[ 1, 1, 1 ]}
					intensity={2}
					distance={3}
					angle={0.5}
					penumbra={0.5}
					decay={0.1}
					position={[ 0, 0.75, 0.5 ]}
					castShadow
					shadow-bias={- 0.0001}
					target={dummyObj}
				/>
			</group>
		</group>
	);

}
