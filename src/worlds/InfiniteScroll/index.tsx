import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Camera from "../components/Camera";
import { Suspense } from "react";
import { Overlay, Scene } from "./components";
import { Props as ContainerProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";
import { Euler, Vector3 } from "three";

export default function InfinteScroll() {

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
			position: position,
			rotation: new Euler( Math.atan( position.x / position.z ) + 1, 0, 0 ),
			near: 0.01,
			far: 20,
			fov: 75
		},
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
