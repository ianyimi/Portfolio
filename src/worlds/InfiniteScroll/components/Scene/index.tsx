import { Suspense } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import Environment from "./components/Environment";

export default function Scene() {


	return (
		<group>
			<Suspense fallback={null}>
				<ScrollControls pages={3} damping={2}>
					<Environment/>
					<Scroll>

					</Scroll>
					<Scroll html>
						<div style={{ height: "100vh" }}>1</div>
						<div style={{ top: "100vh", height: "100vh" }}>2</div>
						<div style={{ top: "200vh", height: "100vh" }}>3</div>
					</Scroll>
				</ScrollControls>
			</Suspense>
		</group>
	);

}
