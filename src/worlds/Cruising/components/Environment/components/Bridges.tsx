import Bridge from "../models/Bridge";
import { useRef } from "react";
import { useLimiter } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Bridges() {

	const bridgeOne = useRef<THREE.Group>();
	const bridgeTwo = useRef<THREE.Group>();

	const limiter = useLimiter( 45 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) || ! bridgeOne.current || ! bridgeTwo.current ) return;

		for ( const bridge of [ bridgeOne.current, bridgeTwo.current ] ) {

			bridge.position.x -= 0.5;
			if ( bridge.position.x <= - 150 ) bridge.position.x = 150;

		}

	} );

	return (

		<group>
			<Bridge ref={bridgeOne} />
			<Bridge position-x={150} ref={bridgeTwo} />
		</group>

	);

}
