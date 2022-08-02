import { GroupProps } from "@react-three/fiber";
import { Dolorean, Environment, SpotLights } from "./components";

export default function SectionOne( props: GroupProps ) {

	return (
		<group {...props}>
			<Environment/>
			<Dolorean/>
			<SpotLights/>
		</group>
	);

}
