import { GroupProps } from "@react-three/fiber";
import { Environment, SpotLights } from "./components";

export default function SectionOne( props: GroupProps ) {

	return (
		<group {...props}>
			<Environment/>
			<SpotLights/>
		</group>
	);

}
