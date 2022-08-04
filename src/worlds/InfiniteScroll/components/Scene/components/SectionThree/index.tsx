import { GroupProps } from "@react-three/fiber";
// @ts-ignore
import Dolorean from "./components/Dolorean";

export default function SectionOne( props: GroupProps ) {

	return (
		<group {...props}>
			<Dolorean/>
		</group>
	);

}
