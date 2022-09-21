import {useStore} from "@/utils/store";
import shallow from "zustand/shallow";
import {useMemo} from "react";
import {ShaderMaterial, ShaderMaterialParameters, Uniform} from "three";
import * as THREE from "three";

import vert from "./shaders/sky.vert";
import frag from "./shaders/sky.frag";

export const useCloudySkyMaterial = (
  radius: number,
  colors: number[],
  shaderParams?: Partial<ShaderMaterialParameters>
) => {
  
  const {skyColor, fog, hexToVec3} = useStore((state) => ({
    skyColor: state.skyColor,
    fog: state.fog,
    hexToVec3: state.hexToVec3,
  }), shallow);
  
  return useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          time: new Uniform(0),
          radius: new Uniform(radius),
          colors: new Uniform(colors),
          num_colors: new Uniform(colors.length),
          
          resolution: new Uniform(new THREE.Vector2(window.innerWidth, window.innerHeight)),
          color: new Uniform(hexToVec3(skyColor)),
          fogColor: new Uniform(hexToVec3(fog.color)),
          // fogColor: new Uniform(new THREE.Vector3(0.941, 0.188, 0.188)),
          fogNear: new Uniform(fog.near),
          fogFar: new Uniform(fog.far),
        },
        vertexShader: vert,
        fragmentShader: frag,
        side: THREE.DoubleSide,
        // fog: true,
        ...shaderParams,
      }),
    [frag, vert]
  );
  
}
