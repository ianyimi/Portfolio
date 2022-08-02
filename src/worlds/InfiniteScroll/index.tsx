import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Camera from "../components/Camera";
import { Suspense } from "react";
import { Overlay, Scene } from "./components";
import { Props as ContainerProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";
import { Vector3 } from "three";
import { Bloom, EffectComposer, Selection } from "@react-three/postprocessing";

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
			near: 0.01,
			far: 20,
			fov: 75,
			// position: position
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
						<Selection>
							<EffectComposer autoClear={false}>
								<Bloom kernelSize={10} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5}/>
							</EffectComposer>
							<Scene/>
						</Selection>
					</Suspense>
					{/*</Debug>*/}
				</Physics>
			</Canvas>
		</div>
	);

}
