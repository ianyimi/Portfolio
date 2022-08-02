import { Suspense } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import SectionOne from "./SectionOne";
import { useThree } from "@react-three/fiber";

export default function Scene() {

	const { viewport, camera } = useThree();

	// useEffect( () => {
	//
	// 	camera.lookAt( 0, camera.position.y, 0 );
	//
	// }, [] );

	return (
		<group>
			<Suspense fallback={null}>
				<ScrollControls pages={3} damping={2}>
					<ambientLight intensity={0.25}/>
					{/*<ambientLight intensity={0.75}/>*/}
					<SectionOne/>
					<Scroll>
						{/*<SectionOne/>*/}
						{/*<SectionTwo position={[ 0, viewport.height, 0 ]}/>*/}
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
