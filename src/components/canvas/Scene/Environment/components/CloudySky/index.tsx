import {GroupProps, useFrame} from "@react-three/fiber";
import {useCloudySkyMaterial} from "./Sky";
import * as THREE from "three";
import {useLimiter} from "spacesvr";
import {useStore} from "utils/store";

export default function CloudySky(props: GroupProps) {
  
  const skyMat = useCloudySkyMaterial();
  const fog = useStore(state => state.fog);
  
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
      {/*<mesh position={[-130, -0.1, 0]} rotation-x={-Math.PI / 2}>*/}
      {/*  <planeBufferGeometry args={[200, 300]}/>*/}
      {/*  <meshBasicMaterial color="#f03030" side={THREE.DoubleSide}/>*/}
      {/*</mesh>*/}
      <mesh rotation-y={Math.PI / 2} position-x={-75}>
        <planeBufferGeometry args={[200, 300]}/>
        <meshBasicMaterial color={fog.color} side={THREE.DoubleSide}/>
      </mesh>
      {/*<mesh>*/}
      
      {/*</mesh>*/}
    </group>
  )
  
}
