import Car from "./models/Dolorean4";
import { Suspense, useMemo, useRef } from "react";
import { CurveModifier } from "@react-three/drei";
import { BufferGeometry, CatmullRomCurve3, LineBasicMaterial, LineLoop, Vector3 } from "three";

export default function Dolorean() {

	const isMounted = useRef( false );
	const curveRef = useRef( null );
	const group = useRef( null );
	const handlePos = useMemo(
		() =>
			[
				{ x: 1, y: 0, z: - 1 },
				{ x: 1, y: 0, z: 1 },
				{ x: - 1, y: 0, z: 1 },
				{ x: - 1, y: 0, z: - 1 },
			].map( ( hand ) => new Vector3( ...Object.values( hand ) ) ),
		[]
	);
	const curve = useMemo( () => new CatmullRomCurve3( handlePos, true, 'centripetal' ), [ handlePos ] );
	const line = useMemo( () => {

		new LineLoop(
			new BufferGeometry().setFromPoints( curve.getPoints( 50 ) ),
			new LineBasicMaterial( { color: 0x00ff00 } )
		);

	}, [ curve ] );

	return (
		<group ref={group}>
			<CurveModifier ref={curveRef}>
				<group>
					<Suspense fallback={null}>
						<Car/>
					</Suspense>
				</group>
			</CurveModifier>
			{/*<primitive object={line}/>*/}
		</group>
	);

}
