import {GroupProps, useFrame} from "@react-three/fiber";
import {useMemo} from "react";
import {useMoltenMaterial} from "./shaders/molten";
import * as THREE from "three";
import {useParticleMaterial} from "@/components/canvas/Scene/Environment/components/AmbientParticles/shaders/particles";
import {useLimiter} from "spacesvr";

type PlanetProps = {
  planet: "Molten" | "Stormy" | "Starry" | "Cloudy"
} & GroupProps

export default function Planet(props: PlanetProps) {
  
  const {planet, ...restProps} = props;
  // const material = useMemo<THREE.MeshShaderMaterial>(() => {
  //   switch (planet) {
  //     case "Molten":
  //       // eslint-disable-next-line react-hooks/rules-of-hooks
  //       return useMoltenMaterial()
  //   }
  // }, [])
  const material = useParticleMaterial()
  
  const limiter = useLimiter(45);
  useFrame(({clock}) => {
    if (!limiter.isReady(clock)) return;
    material.uniforms.time += 0.01;
  })
  
  return (
    <group {...restProps}>
      <mesh mat={material}>
        <sphereBufferGeometry args={[10, 16, 16]}/>
      </mesh>
    </group>
  )
  
}
