import { Suspense } from "react";
import { ScrollControls } from "@react-three/drei";

import { Environment, SectionOne, SectionThree, ScrollController } from "./components";

export default function Scene() {

	return (
		<group>
			<Suspense fallback={null}>
				{/*<ScrollControls pages={4} damping={2}>*/}
				<ambientLight intensity={0.25}/>
				<Environment/>
				<ScrollController/>
				{/*<ambientLight intensity={0.75}/>*/}
				<SectionOne/>
				<SectionThree/>
				{/*<SectionTwo position={[ 0, viewport.height, 0 ]}/>*/}
				{/*<Scroll html>*/}
				{/*	<div style={{*/}
				{/*		zIndex: 10,*/}
				{/*	}}>*/}
				{/*		<div style={{ height: "100vh" }}>1</div>*/}
				{/*		<div style={{ top: "100vh", height: "100vh" }}>2</div>*/}
				{/*		<div style={{ top: "200vh", height: "100vh" }}>3</div>*/}
				{/*	</div>*/}
				{/*</Scroll>*/}
				{/*</ScrollControls>*/}
			</Suspense>
		</group>
	);

}
