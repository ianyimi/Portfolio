import {GroupProps, useFrame} from "@react-three/fiber";
import {useEffect, useMemo, useState} from "react";
import {useMoltenMaterial} from "./shaders/molten";
import {useStormyMaterial} from "./shaders/stormy";
import * as THREE from "three";
import {useLimiter} from "spacesvr";

type PlanetProps = {
  planet: "Molten" | "Stormy" | "Starry" | "Cloudy"
} & GroupProps

const COLORS = [
  new THREE.Vector3(1, 0.91, 0.98),
  new THREE.Vector3(0.8, 0.88, 0.7),
  new THREE.Vector3(0.6, 0.35, 0.4),
  new THREE.Vector3(0.7, 0.6, 0.85)
];

export default function Planet(props: PlanetProps) {
  
  const {planet, ...restProps} = props;
  const [material, setMat] = useState();
  
  const moltenMat = useMoltenMaterial();
  const stormyMat = useStormyMaterial({colors: COLORS});
  
  useEffect(() => {
    
    switch (planet) {
      case "Molten":
        setMat(moltenMat);
        break;
      case "Stormy":
        setMat(stormyMat);
        break;
    }
    
  }, [])
  // const moltenMat = useMoltenMaterial();
  // const stormyMat = useStormyMaterial({colors: COLORS});
  // const planets = useMemo(() => ({
  //   Molten: moltenMat,
  //   Stormy: stormyMat
  // }), [moltenMat, stormyMat]);
  
  const limiter = useLimiter(45);
  useFrame(({clock}) => {
    if (!limiter.isReady(clock) || !material) return;
    // @ts-ignore
    material.uniforms.time += 0.01;
    // planets[planet].uniforms.time += 0.01;
  })
  
  console.log(material)
  // useEffect(() => {
  //   console.log(planets[0])
  //   console.log(moltenMat)
  // }, [planets, moltenMat, stormyMat])
  
  return (
    <group {...restProps}>
      <mesh mat={material}>
        <sphereBufferGeometry args={[10, 16, 16]}/>
      </mesh>
    </group>
  )
  
}
