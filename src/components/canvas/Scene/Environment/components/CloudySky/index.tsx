import {GroupProps, useFrame} from "@react-three/fiber";
import {useCloudySkyMaterial} from "./Sky";
import * as THREE from "three";
import {useLimiter} from "spacesvr";

export default function CloudySky(props: GroupProps) {
  
  const skyMat = useCloudySkyMaterial();
  
  const limiter = useLimiter(30);
  useFrame(({clock}) => {
    
    if (skyMat && limiter.isReady(clock)) {
      
      skyMat.uniforms.time.value = clock.getElapsedTime() / 2;
      
    }
    
  });
  
  return (
    <group position-y={10} {...props}>
      <mesh rotation-x={-Math.PI / 2} material={skyMat}>
        <planeBufferGeometry args={[300, 300]}/>
      </mesh>
      {/*<mesh>*/}
      
      {/*</mesh>*/}
    </group>
  )
  
}
