import { GroupProps, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useRef, useState } from "react";
import { animated, useSpring } from "react-spring/three";
import * as easings from "d3-ease";
import { useLimiter } from "spacesvr";
import { useStore } from "utils/store";
import { gsap } from "gsap";

export default function TitleText( props: GroupProps ) {

	// const [ active, setActive ] = useState( false );
	const { enter, currentSection } = useStore( state => ( {
		enter: state.enter,
		currentSection: state.currentSection,
	} ) );
	const active = enter && currentSection === 0;

	console.log( currentSection );

	gsap.to( ".name", {
		marginBottom: active ? 0 : "25px",
		opacity: active ? 1 : 0,
		duration: 2,
		stagger: 0.15,
		delay: active ? 1 : 0,
	} );

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
			{/*<mesh>*/}
			{/*	<boxBufferGeometry args={[ 0.1, 0.1, 0.1 ]}/>*/}
			{/*	<meshBasicMaterial color="red"/>*/}
			{/*</mesh>*/}
			<Html transform scale={0.025} position={[ 0.075, - 0.04, 0 ]}>
				{/*<h1*/}
				{/*	id="titleText"*/}
				{/*	style={{*/}
				{/*		color: "white",*/}
				{/*		fontFamily: "Bosch",*/}
				{/*		marginBottom: "25px",*/}
				{/*		opacity: 0*/}
				{/*	}}*/}
				{/*>*/}
				<h1 className="name" style={h1Style}>Isaiah </h1>
				<h1 className="name" style={h1Style}>Anyimi</h1>
				{/*</h1>*/}
			</Html>
			{/*<animated.group position-z={z}>*/}
			{/*	<Float speed={2} floatIntensity={0.5} floatingRange={[ 0, 0.0005 ]} position={[ camera.position.x, - 0.05, 0 ]}>*/}
			{/*		<Text3D size={0.025} height={0.0075} font="https://dqeczc7c9n9n1.cloudfront.net/fonts/bitmap.json">*/}
			{/*			Isaiah Anyimi*/}
			{/*			<meshStandardMaterial emissive="white" roughness={0.8} metalness={0.2} side={THREE.DoubleSide}/>*/}
			{/*		</Text3D>*/}
			{/*	</Float>*/}
			{/*</animated.group>*/}
		</group>
	);

}
