import { GroupProps } from "@react-three/fiber";
import Boards from "./components/Boards";

export default function SectionTwo( props: GroupProps ) {

	return (
		<group {...props}>
			<Boards/>
		</group>
	);

}
