import { Box } from "@react-three/drei";
import SL190 from "./models/Sl190";
import { Suspense } from "react";

export default function Environment() {

	return (
		<group>
			<ambientLight intensity={0.5} />
			<Suspense fallback={null}>
				<SL190 />
			</Suspense>
			<Box args={[ 1, 1, 1 ]} >
				<meshBasicMaterial color="red" />
			</Box>
		</group>
	);

}
