import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { ShaderMaterial, ShaderMaterialParameters, Uniform, Vector3 } from "three";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import { useLimiter } from "spacesvr";
import { useFrame } from "@react-three/fiber";

const vert = `
    varying vec3 absPosition;
    varying vec2 vUv;
    void main() {
        vUv = uv;
        absPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
`;

const frag = `
  precision highp float;
  
  uniform vec3 color;
  uniform vec3 fogColor;
  uniform vec3 nextColor;
  uniform vec3 nextFogColor;
  uniform mediump float songProgress;
  
  #define fogNear 1.
  #define fogFar 2.5
  

  void main() {
  	vec3 curRGB = mix(color, nextColor, songProgress);
  	vec3 mixedFogColor = mix(fogColor, nextFogColor, songProgress);
    gl_FragColor = vec4(curRGB, 1);
    
    // account for fog
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = smoothstep( fogNear, fogFar, depth );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, mixedFogColor, fogFactor );
  }
`;

export const useCubeMaterial = (
	color: Vector3,
	nextColor: Vector3,
	shaderParams?: Partial<ShaderMaterialParameters>
) => {

	const { playlist, palette, hexToVec3, getProgress } = useStore( ( state ) => ( {
		playlist: state.playlist,
		palette: state.playlist.palette,
		hexToVec3: state.hexToVec3,
		getProgress: state.getProgress,
	} ), shallow );
	const standard = THREE.ShaderLib[ "standard" ];

	const mat = useMemo(
		() =>
			new ShaderMaterial( {
				uniforms: {
					time: new Uniform( 0 ),
					color: new Uniform( color ),
					fogColor: new Uniform( hexToVec3( palette[ playlist.backgroundColorIndex ] ) ),
					nextColor: new Uniform( nextColor ),
					nextFogColor: new Uniform( hexToVec3( playlist.palettes[ ( playlist.palettes.indexOf( playlist.palette ) + 1 ) % playlist.palettes.length ][ playlist.backgroundColorIndex ] ) ),
					songProgress: new Uniform( 0 ),
					...THREE.UniformsUtils.clone( standard.uniforms )
				},
				vertexShader: vert,
				fragmentShader: frag,
				lights: true,
				...shaderParams,
			} ),
		[ frag, vert, palette, playlist.id ]
	);

	useEffect( () => {

		if ( mat ) {

			mat.uniforms.metalness.value = 0.9;
			mat.uniforms.roughness.value = 0.5;

		}

	}, [ mat ] );

	const limiter = useLimiter( 30 );
	useFrame( ( { clock } ) => {

		if ( mat && limiter.isReady( clock ) ) {

			mat.uniforms.time.value = clock.getElapsedTime() / 2;
			// mat.uniforms.intensity.value = 0.5*Math.cos(clock.getElapsedTime()*(2*Math.PI/(100/60))) + 0.5

			// console.log( getProgress() );
			mat.uniforms.songProgress.value = getProgress();


		}

	} );

	return mat;

};
