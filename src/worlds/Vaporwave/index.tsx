import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Camera from "../components/Camera";
import Landscape from "./components/Landscape";
import WorldState from "./components/WorldState";
import Works from "./components/Works";
import Overlay from "./components/Overlay";

export default function Vaporwave() {

	return (
		<body>
			<Overlay/>
			<Canvas>
				<Physics gravity={[ 0, - 0.1, 0 ]}>
					{/*<Debug scale={1} color="red">*/}
					<WorldState>
						<Camera/>
						<Landscape/>
						<Works/>
						{/*<PostProcessing />*/}
					</WorldState>
					{/*</Debug>*/}
				</Physics>
			</Canvas>
		</body>
	);

}
