import { Physics } from "@react-three/cannon";
import { Suspense } from "react";
import Camera from "./components/Camera";
import Environment from "./components/Environment";
import { Selection } from "@react-three/postprocessing";
import { PostProcessing, Scene } from "../../../InfiniteScroll/components";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import { Props as ContainerProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";

export default function Cruising() {

	const position = new Vector3( 0, 0.1, 0.35 );
	const defaultCanvasProps: Partial<ContainerProps> = {
		gl: {
			powerPreference: "high-performance",
			antialias: true,
			depth: true,
			alpha: false,
			stencil: false,
		},
		camera: {
			near: 0.01,
			far: 20,
			fov: 75,
			// position: position
		},
		resize: { polyfill: ResizeObserver },
		dpr: window.devicePixelRatio,
		events: undefined,
	};

	return (
		<Canvas {...defaultCanvasProps}>
			<Physics gravity={[ 0, - 0.1, 0 ]}>
				{/*<Debug scale={1} color="red">*/}
				<Suspense fallback={null}>
					<Camera/>
					<Environment />
				</Suspense>
				{/*</Debug>*/}
			</Physics>
		</Canvas>
	);

}
