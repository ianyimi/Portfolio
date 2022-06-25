import { Html } from "@react-three/drei";
import styled from "@emotion/styled";
import { useStore } from "utils/store";

const Container = styled.div`
  background-color: red;
  //position: relative;
  //left: -250px;
  //top: -200px;
  //transform: scale(0.1);
  //width: 10%;
  //height: 10%;
  //position: absolute;
  //left: 0;
  //top: 0;
`;

export default function Display( props: { i: number } ) {

	const { i } = props;
	const portal = useStore( state => state.portal );

	return (
		<group name={`Display-${i}`} position={[ 0, 0.125, 1 ]}>
			<group>
				<mesh rotation-x={- 0.26}>
					<planeBufferGeometry args={[ 0.1, 0.075 ]}/>
					{/*<meshStandardMaterial color="white" opacity={0.5} transparent/>*/}
					<Html portal={portal} transform occlude>
						<Container>
							<p>Hello</p>
						</Container>
					</Html>
				</mesh>
			</group>
		</group>
	);

}
