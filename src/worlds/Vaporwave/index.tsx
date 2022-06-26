import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Camera from "../components/Camera";
import Landscape from "./components/Landscape";
import Works from "./components/Works";
import Overlay from "./components/Overlay";

export default function Vaporwave() {

	return (
		<div>
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
