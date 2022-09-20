import {useMemo} from "react";
import {ShaderMaterial, ShaderMaterialParameters, Uniform} from "three";
import {useStore} from "@/utils/store";
import shallow from "zustand/shallow";

import vert from "./particle.vert";
import frag from "./particle.frag";

export const useParticleMaterial = (
  shaderParams?: Partial<ShaderMaterialParameters>
) => {
  
  const {hexToVec3} = useStore((state) => ({
    hexToVec3: state.hexToVec3,
  }), shallow);
  
  return useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          time: new Uniform(0),
          color: new Uniform(hexToVec3("#000000")),
          fogColor: new Uniform(hexToVec3("#aaaaff")),
        },
        vertexShader: vert,
        fragmentShader: frag,
        ...shaderParams,
      }),
    [frag, vert]
  );
  
};
