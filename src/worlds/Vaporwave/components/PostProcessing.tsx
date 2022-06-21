import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GammaCorrectionShader, RGBShiftShader } from "three-stdlib";

export default function PostProcessing() {

	const composerRef = useRef();
	const rgbShiftRef = useRef();
	const { gl, scene, camera, size } = useThree();

	useEffect( () => {

		// @ts-ignore
		composerRef?.current.setSize( size.width, size.height );

	}, [ size ] );

	useFrame( () => {

		if ( rgbShiftRef.current ) {

			// @ts-ignore
			rgbShiftRef.current.uniforms[ "amount" ].value = 0.0012;

		}

		// @ts-ignore
		composerRef.current.render();

	}, 1 );

	return (
		<effectComposer ref={composerRef} args={[ gl ]}>
			<renderPass attachArray="passes" scene={scene} camera={camera}/>
			<shaderPass
				ref={rgbShiftRef}
				attachArray="passes"
				args={[ RGBShiftShader ]}
			/>
			<shaderPass attachArray="passes" args={[ GammaCorrectionShader ]}/>
			{/*<unrealBloomPass*/}
			{/*  attachArray="passes"*/}
			{/*  args={[size.width / size.height, 0.2, 0.8, 0]}*/}
			{/*/>*/}
		</effectComposer>
	);

}


