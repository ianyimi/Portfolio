import { RoundedBox } from "@react-three/drei";

export default function Display( props: { i: number } ) {

	const { i } = props;
	return (
		<group name={`Display-${i}`} position={[ 0, 0.05, 0.99 ]}>
			{/*<mesh>*/}
			{/*  <boxBufferGeometry args={} />*/}
			{/*  <meshStandardMaterial color="white" opacity={0.5} transparent />*/}
			{/*</mesh>*/}
			<group scale={0.1}>
				<RoundedBox args={[ 1, 0.75, 0.05 ]} radius={0.05} smoothness={4}>
					<meshStandardMaterial color="white" opacity={0.5} transparent/>
				</RoundedBox>
			</group>
		</group>
	);

}
