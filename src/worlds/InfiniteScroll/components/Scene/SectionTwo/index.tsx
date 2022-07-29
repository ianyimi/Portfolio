import { GroupProps } from "@react-three/fiber";
import Environment from "./components/Environment";

export default function SectionTwo( props: GroupProps ) {

	return (
		<group {...props}>
			<Environment/>
			{/*<mesh>*/}
			{/*	<boxBufferGeometry args={[ 0.1, 0.1, 0.1 ]}/>*/}
			{/*	<meshStandardMaterial color="red"/>*/}
			{/*</mesh>*/}
		</group>
	);

}
