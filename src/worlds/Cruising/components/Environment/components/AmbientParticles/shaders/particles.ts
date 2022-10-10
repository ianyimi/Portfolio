import { useMemo } from "react";
import { ShaderMaterial, ShaderMaterialParameters, Uniform, Vector3 } from "three";
import shallow from "zustand/shallow";

// @ts-ignore
import vert from "./particle.vert";
// @ts-ignore
import frag from "./particle.frag";

export const useParticleMaterial = (
	shaderParams?: Partial<ShaderMaterialParameters>
) => {

	return useMemo(
		() =>
			new ShaderMaterial( {
				uniforms: {
					time: new Uniform( 0 ),
					color: new Uniform( new Vector3( 1, 1, 1 ) ),
					fogColor: new Uniform( new Vector3( 0, 0, 0 ) ),
					fogNear: new Uniform( 10 ),
					fogFar: new Uniform( 20 ),
				},
				vertexShader: vert,
				fragmentShader: frag,
				...shaderParams,
			} ),
		[ frag, vert ]
	);

};
