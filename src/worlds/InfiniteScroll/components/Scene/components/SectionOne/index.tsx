import { GroupProps } from "@react-three/fiber";
import NavBall from "./components/NavBall";
import TitleText from "./components/TitleText";
import { Vector3 } from "three";

export default function SectionOne( props: GroupProps ) {

	const positions = [
		new Vector3( - 0.05, 0.025, 0.225 ),
		new Vector3( 0.025, 0.1225, 0.2 ),
		new Vector3( 0.075, 0.025, 0.225 )
	];

	const maxDelay = 200; // ms

	return (
		<group {...props}>
			<TitleText position={[ - 0.075, 0.12, 0.21125 ]}/>
			<NavBall position={positions[ 0 ]} section="About" color="blue" offset={0} maxDelay={maxDelay}/>
			<NavBall position={positions[ 1 ]} section="Work" color="red" offset={100} maxDelay={maxDelay}/>
			<NavBall position={positions[ 2 ]} section="Contact" color="green" offset={maxDelay} maxDelay={maxDelay}/>
		</group>
	);

}
