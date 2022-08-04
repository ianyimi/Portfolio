import Car from "./models/Dolorean6";
import { Suspense, useRef } from "react";
import { Vector3 } from "three";
import { CurveModifierRef } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLimiter } from "spacesvr";

export default function Dolorean() {

	const isMounted = useRef( false );
	const curveRef = useRef<CurveModifierRef>( null );
	const group = useRef( null );
	const handlePos = [
		new Vector3( 1, 0, - 1 ),
		new Vector3( 1, 0, 1 ),
		new Vector3( - 1, 0, 1 ),
		new Vector3( - 1, 0, - 1 )
	];

	const limiter = useLimiter( 45 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) || ! curveRef.current ) return;
		curveRef.current.moveAlongCurve( 0.01 );

	} );

	return (
		<group ref={group}>
			<Suspense fallback={null}>
				<Car/>
			</Suspense>
		</group>
	);

}
