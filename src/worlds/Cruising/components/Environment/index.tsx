import { Box, Sky } from "@react-three/drei";
import { HDRI } from "spacesvr";
import SL1908 from "./models/SL1908";
import Bridges from "./components/Bridges";
import Lights from "./components/Lights";
import { Suspense } from "react";

const s3 = "";

export default function Environment() {

	return (
		<group>
			<ambientLight intensity={0.5} />
			<Suspense fallback={null}>
				<SL1908 />
				<Bridges />
				{/*<Lights />*/}
				<spotLight position={[ 3, 3, 0 ]} intensity={1} castShadow />
				{/*<HDRI src="https://dqeczc7c9n9n1.cloudfront.net/images/hdri.hdr" disableBackground/>*/}
				<Sky sunPosition={[ 0, 1, 0 ]} />
			</Suspense>
			{/*<Box args={[ 1, 1, 1 ]} >*/}
			{/*	<meshBasicMaterial color="red" />*/}
			{/*</Box>*/}
		</group>
	);

}
