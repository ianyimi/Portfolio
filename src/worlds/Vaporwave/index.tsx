import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Camera from "../components/Camera";
import Landscape from "./components/Landscape";
import Works from "./components/Works";
import Overlay from "./components/Overlay";
import { MutableRefObject, useEffect, useRef } from "react";
import { useStore } from "utils/store";

export default function Vaporwave() {

	const portal = useRef<HTMLDivElement>( null );
	const setPortal = useStore( state => state.setPortal );

	useEffect( () => {

		setPortal( portal as MutableRefObject<HTMLElement> );

	}, [] );

	return (
		<div ref={portal}>
			<Overlay/>
			<Canvas>
				<Physics gravity={[ 0, - 0.1, 0 ]}>
					{/*<Debug scale={1} color="red">*/}
					<Camera/>
					<Landscape/>
					<Works/>
					{/*<PostProcessing />*/}
					{/*</Debug>*/}
				</Physics>
			</Canvas>
		</div>
	);

}
