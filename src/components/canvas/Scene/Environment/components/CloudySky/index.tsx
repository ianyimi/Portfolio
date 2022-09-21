import {GroupProps, useFrame} from "@react-three/fiber";
import {useCloudySkyMaterial} from "./Sky";
import * as THREE from "three";
import {useLimiter} from "spacesvr";

type CloudySkyProps = {
  color?: string;
  radius?: number;
} & GroupProps;

const getGLSLCol = (c: THREE.Color) => {
  const hex = c.getHex();
  return [
    ((hex >> 16) & 0xff) / 255,
    ((hex >> 8) & 0xff) / 255,
    (hex & 0xff) / 255,
  ];
};

export default function CloudySkyProps(props: CloudySkyProps) {
  
  const {color, radius = 100, ...restProps} = props;
  
  let COLORS = [
    0.62, 0.988, 0.992, 0.757, 0.922, 0.992, 0.867, 0.847, 0.988, 0.961, 0.765,
    0.984,
  ];
  if (color) {
    const col = new THREE.Color(color);
    const col1 = new THREE.Color(color).clone().multiplyScalar(0.8);
    const col2 = new THREE.Color(color).clone().multiplyScalar(0.75);
    const col3 = new THREE.Color(color).clone().multiplyScalar(0.5);
    COLORS = [
      ...getGLSLCol(col),
      ...getGLSLCol(col1),
      ...getGLSLCol(col2),
      ...getGLSLCol(col3),
    ];
  }
  
  const skyMat = useCloudySkyMaterial(radius, COLORS);
  
  const limiter = useLimiter(30);
  useFrame(({clock}) => {
    
    if (skyMat && limiter.isReady(clock)) {
      
      skyMat.uniforms.time.value = clock.getElapsedTime() / 2;
      
    }
    
  });
  
  return (
    <group position-y={10} {...restProps}>
      <mesh rotation-x={-Math.PI / 2} material={skyMat}>
        <planeBufferGeometry args={[300, 300]}/>
      </mesh>
      {/*<mesh position={[-130, -0.1, 0]} rotation-x={-Math.PI / 2}>*/}
      {/*  <planeBufferGeometry args={[200, 300]}/>*/}
      {/*  <meshBasicMaterial color="#f03030" side={THREE.DoubleSide}/>*/}
      {/*</mesh>*/}
      <mesh rotation-y={Math.PI / 2} position-x={-75}>
        <planeBufferGeometry args={[200, 300]}/>
        <meshBasicMaterial color="#f03030" side={THREE.DoubleSide}/>
      </mesh>
      {/*<mesh>*/}
      
      {/*</mesh>*/}
    </group>
  )
  
}
