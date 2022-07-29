import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Camera from "../components/Camera";
import { Suspense } from "react";
import { Overlay, Scene } from "./components";
import { Props as ContainerProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";

export default function InfinteScroll() {

	const defaultCanvasProps: Partial<ContainerProps> = {
		gl: {
			powerPreference: "high-performance",
			antialias: true,
			depth: true,
			alpha: false,
			stencil: false,
		},
		// shadows: false,
		// camera: { position: [ 0, 2, 0 ], near: 0.01, far: 150 },
		resize: { polyfill: ResizeObserver },
		dpr: 1,
		events: undefined,
	};

	return (
		<div>
			<Overlay/>
			<Canvas {...defaultCanvasProps}>
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
