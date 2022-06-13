import { useMemo } from "react";
import { ShaderMaterial, ShaderMaterialParameters, Uniform } from "three";
import { hexToVec3 } from "../../../../utils/constants";
import { useWorld } from "../../../WorldState";

export const vert = `
  precision highp float;
  
  uniform float time;
  uniform float data; 
  attribute vec3 color;
  
  varying vec3 vColor;
   
  void main() {
    vColor = color;
    float cNormal = normal == vec3(0., 1., 0.) ? 1 : 0
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(scale(position, ), 1.);
  }
`;

export const frag = `
  precision highp float;
  
  uniform vec3 fogColor;
  
  #define fogNear 1.
  #define fogFar 2.5
  
  varying vec3 vColor;
  

  void main() {
    gl_FragColor = vec4(vColor, 1);
    
    // account for fog
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = smoothstep( fogNear, fogFar, depth );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  }
`;

export const useCubeMaterial = (
	shaderParams?: Partial<ShaderMaterialParameters>
) => {

	const { palette } = useWorld();
	const colorIndex = 1;
	return useMemo(
		() =>
			new ShaderMaterial( {
				uniforms: {
					time: new Uniform( 0 ),
					data: new Uniform( new Uint8Array() ),
					// color: new Uniform(hexToVec3(palette[colorIndex])),
					fogColor: new Uniform( hexToVec3( palette[ colorIndex + 2 ] ) ),
				},
				vertexShader: vert,
				fragmentShader: frag,
				...shaderParams,
			} ),
		[ frag, vert ]
	);

};
