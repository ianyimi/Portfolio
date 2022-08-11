import { GroupProps } from "@react-three/fiber";
import NavBall from "./components/NavBall";
import TitleText from "./components/TitleText";
import { Vector3 } from "three";

export default function SectionOne( props: GroupProps ) {

	const maxDelay = 200; // ms

	return (
		<group {...props}>
			<TitleText position={[ - 0.075, 0.12, 0.21125 ]}/>
			<NavBall index={0} section="About" color="blue" offset={0} maxDelay={maxDelay}/>
			<NavBall index={1} section="Work" color="red" offset={100} maxDelay={maxDelay}/>
			<NavBall index={2} section="Contact" color="green" offset={maxDelay} maxDelay={maxDelay}/>
		</group>
	);

}
