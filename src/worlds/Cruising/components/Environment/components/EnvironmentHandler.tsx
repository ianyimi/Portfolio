import React, { useRef } from "react";
import * as THREE from "three";
import AmbientParticles from "./AmbientParticles";
import { useFrame } from "@react-three/fiber";
import { useLimiter } from "spacesvr";

const FG_SPEED = 0.2,
	MG_SPEED = 0.1,
	BG_SPEED = 0.05;

const FOREGROUND = {
	speed: 0.2,
	respawn: 30
};
const MIDGROUND = {
	speed: 0.1,
	respawn: 30
};
const BACKGROUND = {
	speed: 0.05,
	respawn: 30
};

export default function EnvironmentHandler() {

	const fg = useRef<THREE.Group>( null ),
		fg2 = useRef<THREE.Group>( null ),
		mg = useRef<THREE.Group>( null ),
		mg2 = useRef<THREE.Group>( null ),
		bg = useRef<THREE.Group>( null ),
		bg2 = useRef<THREE.Group>( null );

	const limiter = useLimiter( 45 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) ||
			! fg.current ||
			! fg2.current
		) return;

		for ( const group of [ fg.current, fg2.current ] ) {

			group.position.x -= FOREGROUND.speed / 2;
			if ( group.position.x < - FOREGROUND.respawn ) {

				group.position.x = FOREGROUND.respawn;

			}

		}

	} );

	return (

		<group>
			<group name="foreground">
				<group ref={fg}>
					<AmbientParticles/>
				</group>
				<group position-x={15} ref={fg2}>
					<AmbientParticles/>
				</group>
			</group>
			<group name="midground">

			</group>
			<group name="background">

			</group>

			{/*<FogClouds position={[0, 1, 0]}/>*/}
			{/*<Road speed={speed}/>*/}
		</group>

	);

}

