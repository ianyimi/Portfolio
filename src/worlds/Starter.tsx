import TransparentFloor from "../ideas/TransparentFloor";
import { Canvas } from "@react-three/fiber";
import { Debug, Physics } from "@react-three/cannon";
import Camera from "./components/Camera";
import Floor from "./components/TiltFloor";

export default function Starter() {

	return (
		// <StandardEnvironment>
		<Canvas>
			<Physics>
				<Debug scale={1} color="red">
					<ambientLight/>
					<Camera/>
					<Floor/>
					{/*<group position={[0, 0, -4]}>*/}
					{/*  <Floating>*/}
					{/*    <Spinning xSpeed={0.2} ySpeed={0.4} zSpeed={0.3}>*/}
					{/*      <mesh>*/}
					{/*        <torusKnotBufferGeometry args={[1, 0.2]} />*/}
					{/*        <meshStandardMaterial color="blue" />*/}
					{/*      </mesh>*/}
					{/*    </Spinning>*/}
					{/*  </Floating>*/}
					{/*</group>*/}
					{/*<CloudySky color="white" />*/}
					<TransparentFloor opacity={0.7}/>
				</Debug>
			</Physics>
		</Canvas>
		// </StandardEnvironment>
	);

}
