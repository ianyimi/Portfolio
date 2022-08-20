import { GroupProps } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { animated } from "react-spring/three";
import { useStore } from "utils/store";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function TitleText( props: GroupProps ) {

	const { enter, currentSection } = useStore( state => ( {
		enter: state.enter,
		currentSection: state.currentSection,
	} ) );
	const active = enter && currentSection === 0;

	console.log( currentSection );

	useEffect( () => {

		gsap.to( ".name", {
			marginBottom: active ? 0 : "25px",
			opacity: active ? 1 : 0,
			duration: active ? 2 : 0.5,
			stagger: active ? 0.15 : 0,
			delay: active ? 1 : 0,
		} );

	}, [ active ] );

	const h1Style = {
		display: "inline",
		color: "white",
		fontFamily: "Bosch",
		marginBottom: "25px",
		opacity: 0
	};

	// @ts-ignore
	return (
		// @ts-ignore
		<group {...props}>
			<animated.group>
				<Html transform scale={0.025} position={[ 0.075, - 0.04, 0 ]}>
					<h1 className="name" style={h1Style}>Isaiah </h1>
					<h1 className="name" style={h1Style}>Anyimi</h1>
					{/*</h1>*/}
				</Html>
			</animated.group>
		</group>
	);

}
