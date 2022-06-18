import { useMatrixMat } from "./materials/matrix";
import { GroupProps } from "@react-three/fiber";

export default function MatrixSky( props: GroupProps ) {

	const mat = useMatrixMat();
	const args = [ 4, 5, 2 ];
	return (
		<group {...props}>
			<mesh material={mat} position-x={0.75} rotation-y={Math.PI / 2}>
				<planeBufferGeometry args={[ args[ 0 ], args[ 1 ] ]}/>
			</mesh>
			<mesh material={mat} position-x={- 0.75} rotation-y={Math.PI / 2}>
				<planeBufferGeometry args={[ args[ 0 ], args[ 1 ] ]}/>
			</mesh>
		</group>
	);

}
