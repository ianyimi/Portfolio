import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Camera from "../components/Camera";
import { Suspense } from "react";
import { Overlay, Scene } from "./components";

export default function InfinteScroll() {

	return (
		<div>
			<Overlay/>
			<Canvas>
				<Physics gravity={[ 0, - 0.1, 0 ]}>
					{/*<Debug scale={1} color="red">*/}
					<Suspense fallback={null}>
						<Camera/>
						<Scene/>
					</Suspense>
					{/*</Debug>*/}
				</Physics>
			</Canvas>
		</div>
	);

}
