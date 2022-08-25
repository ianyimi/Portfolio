import Bridge from "../models/Bridge";
import Tunnel3 from "../models/Tunnel3";
import { useRef } from "react";
import { useLimiter } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Bridges() {

	const bridgeOne = useRef<THREE.Group>();
	const bridgeTwo = useRef<THREE.Group>();
	const tunnelOne = useRef<THREE.Group>();
	const tunnelTwo = useRef<THREE.Group>();

	const bridgeRespawn = 150,
		tunnelRespawn = 60;

	const speed = 0.5;
	const limiter = useLimiter( 45 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) || ! bridgeOne.current || ! bridgeTwo.current ) return;

		for ( const bridge of [ bridgeOne.current, bridgeTwo.current ] ) {

			bridge.position.x -= speed;
			if ( bridge.position.x <= 0 - tunnelRespawn / 2.5 ) bridge.position.x = 3 * tunnelRespawn / 2;

		}

	} );

	return (

		<group>
			<Tunnel3 ref={bridgeOne} />
			<Tunnel3 position-x={tunnelRespawn} ref={bridgeTwo} />
			{/*<Bridge ref={bridgeOne} />*/}
			{/*<Bridge position-x={bridgeRespawn} ref={bridgeTwo} />*/}
		</group>

	);

}
