import { useMatrixMat } from "./materials/matrix";
import { GroupProps } from "@react-three/fiber";
import * as THREE from "three";
import { useWorld } from "../WorldState";

export default function MatrixSky(props: { color?: string, radius?: number, fog?: string } & GroupProps) {
  const { color = "green", radius = 300, fog = "black", ...restProps } = props;
  const { palette } = useWorld();
  // const fogColor = effects?.color.toLowerCase()
  const mat = useMatrixMat(fog);
  const args = [2, 5, 2]
  return (
    <group {...restProps}>
      <mesh material={mat} position-x={0.75} rotation-y={Math.PI/2}>
        <planeBufferGeometry args={[args[0], args[1]]} />
      </mesh>
      <mesh material={mat} position-x={-0.75} rotation-y={Math.PI/2}>
        <planeBufferGeometry args={[args[0], args[1]]} />
      </mesh>
      <mesh>
        <boxBufferGeometry args={[args[0]+100, args[1]+100, args[2]+100]} />
        <meshBasicMaterial color={fog} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}
