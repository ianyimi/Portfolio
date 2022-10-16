import {useMemo} from "react";
import {ShaderMaterial, ShaderMaterialParameters, Uniform} from "three";
import {useStore} from "@/utils/store";
import shallow from "zustand/shallow";

import vert from "./molten.vert";
import frag from "./molten.frag";
import {useFrame} from "@react-three/fiber";
import {useLimiter} from "spacesvr";

export const useMoltenMaterial = (
  shaderParams?: Partial<ShaderMaterialParameters>
) => {
  
  const {fog, hexToVec3} = useStore((state) => ({
    fog: state.fog,
    hexToVec3: state.hexToVec3,
  }), shallow);
  
  return useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          time: new Uniform(0),
          color: new Uniform(hexToVec3(fog.accent)),
          fogColor: new Uniform(hexToVec3(fog.color)),
          fogNear: new Uniform(fog.near),
          fogFar: new Uniform(fog.far),
        },
        vertexShader: vert,
        fragmentShader: frag,
        ...shaderParams,
      }),
    [frag, vert]
  );
  
};
