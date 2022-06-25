export default function Display( props: { i: number } ) {

	const { i } = props;

	return (
		<group name={`Display-${i}`} position={[ 0, 0.125, 1 ]}>
			<group>
				<mesh rotation-x={- 0.26}>
					<planeBufferGeometry args={[ 0.1, 0.075 ]}/>
					<meshStandardMaterial color="white" opacity={0.5} transparent/>
				</mesh>
			</group>
		</group>
	);

}
