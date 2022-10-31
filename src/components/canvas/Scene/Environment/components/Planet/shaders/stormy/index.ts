import {useMemo} from "react";
import {ShaderMaterial, ShaderMaterialParameters, Uniform, Vector3} from "three";
import {useStore} from "@/utils/store";
import shallow from "zustand/shallow";

import vert from "./stormy.vert";
import frag from "./stormy.frag";

type StormyProps = {
  colors?: Vector3[],
  shaderParams?: Partial<ShaderMaterialParameters>
}

const COLORS = [
  new Vector3(1, 0.91, 0.98),
  new Vector3(0.8, 0.88, 0.7),
  new Vector3(0.6, 0.35, 0.4),
  new Vector3(0.7, 0.6, 0.85)
];

export const useStormyMaterial = (props: StormyProps) => {
  const {colors = COLORS, shaderParams} = props;
  const {fog, hexToVec3} = useStore((state) => ({
    fog: state.fog,
    hexToVec3: state.hexToVec3,
  }), shallow);
  
  return useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          time: new Uniform(0),
          c1: new Uniform(colors[0]),
          c2: new Uniform(colors[1]),
          c3: new Uniform(colors[2]),
          c4: new Uniform(colors[3]),
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
