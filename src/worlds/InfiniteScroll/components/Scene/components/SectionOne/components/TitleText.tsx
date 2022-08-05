import { GroupProps } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default function TitleText( props: GroupProps ) {

	return (
		<group {...props}>
			{/*<mesh>*/}
			{/*	<boxBufferGeometry args={[ 0.1, 0.1, 0.1 ]}/>*/}
			{/*	<meshBasicMaterial color="red"/>*/}
			{/*</mesh>*/}
			<Html
				prepend
				className="syncscroll"
				name="scroll"
				style={{
					display: "scroll"
				}}
			>
				<h1
					className="syncscroll"
					id="scroll"
					style={{
						color: "white",
						fontFamily: "Thunderstorm",
						fontSize: "10em",
						width: "80vw"
					}}
				>
					Isaiah Anyimi
				</h1>
			</Html>
		</group>
	);

}
