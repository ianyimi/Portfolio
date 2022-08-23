import Overlay from "./components/Overlay";
import { Physics } from "@react-three/cannon";
import { Suspense } from "react";
import Camera from "./components/Camera";
import Environment from "./components/Environment";
import Content from "./components/Content";
import { Canvas } from "@react-three/fiber";
import { Euler, Vector3 } from "three";
import { Props as ContainerProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";

export default function Cruising() {

	const position = new Vector3( 2.372463967836559, 1.1387610629294629, 2.1044855554561877 ),
		rotation = new Euler( - 0.11835010535654007, 0.5072966601500595, 0.05770222371833232 );
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
			far: 200,
			fov: 75,
			position: position,
			rotation: rotation,
		},
		resize: { polyfill: ResizeObserver },
		dpr: window.devicePixelRatio,
		events: undefined,
	};

	return (
		<div>
			{/*<Overlay/>*/}
			<Canvas {...defaultCanvasProps}>
				<Physics gravity={[ 0, - 0.1, 0 ]}>
					{/*<Debug scale={1} color="red">*/}
					<Suspense fallback={null}>
						<Camera/>
						<Environment />
						<Content />
					</Suspense>
					{/*</Debug>*/}
				</Physics>
			</Canvas>
		</div>

	);

}
