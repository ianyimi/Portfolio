import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Loader } from "@react-three/drei";
import Camera from "../components/Camera";
import Overlay from "./components/Overlay";
import { Suspense } from "react";

export default function Vaporwave() {

	return (
		<div>
			<Overlay/>
			<Canvas>
				<Physics gravity={[ 0, - 0.1, 0 ]}>
					{/*<Debug scale={1} color="red">*/}
					<Suspense fallback={null}>
						<Camera/>
						{/*<Landscape/>*/}
						{/*<PostProcessing/>*/}
					</Suspense>
					{/*</Debug>*/}
				</Physics>
			</Canvas>
			<Loader/>
		</div>
	);

}
