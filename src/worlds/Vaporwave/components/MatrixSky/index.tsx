import { useMatrixMat } from "./materials/matrix";
import { GroupProps } from "@react-three/fiber";

export default function MatrixSky( props: { color?: string, radius?: number, fog?: string } & GroupProps ) {

	const { color = "green", radius = 300, fog = "black", ...restProps } = props;
	const mat = useMatrixMat( fog );
	const args = [ 4, 5, 2 ];
	return (
		<group {...restProps}>
			<mesh material={mat} position-x={0.75} rotation-y={Math.PI / 2}>
				<planeBufferGeometry args={[ args[ 0 ], args[ 1 ] ]}/>
			</mesh>
			<mesh material={mat} position-x={- 0.75} rotation-y={Math.PI / 2}>
				<planeBufferGeometry args={[ args[ 0 ], args[ 1 ] ]}/>
			</mesh>
		</group>
	);

}
