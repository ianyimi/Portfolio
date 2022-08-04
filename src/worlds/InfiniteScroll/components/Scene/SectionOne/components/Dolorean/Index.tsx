import Car from "./models/Dolorean4";
import Car2 from "./models/Dolorean6";
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
	// const curve = new CatmullRomCurve3( handlePos, true, 'centripetal' );
	// const line = new LineLoop(
	// 	new BufferGeometry().setFromPoints( curve.getPoints( 50 ) ),
	// 	new LineBasicMaterial( { color: 0x00ff00 } )
	// );

	const limiter = useLimiter( 45 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) || ! curveRef.current ) return;
		curveRef.current.moveAlongCurve( 0.01 );

	} );

	return (
		<group ref={group}>
			{/*<CurveModifier ref={curveRef} curve={curve}>*/}
			{/*		<mesh>*/}
			{/*			<sphereBufferGeometry args={[ 0.5, 32, 32 ]}/>*/}
			{/*			<meshStandardMaterial color="green"/>*/}
			{/*		</mesh>*/}
			<Suspense fallback={null}>
				<Car/>
				<Car2/>
			</Suspense>
			{/*</CurveModifier>*/}
			{/*<primitive object={line}/>*/}
		</group>
	);

}
