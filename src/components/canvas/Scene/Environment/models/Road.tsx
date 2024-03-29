/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, {ForwardedRef, MutableRefObject, useEffect, useRef} from 'react'
import {useGLTF} from '@react-three/drei'
import {GLTF} from 'three/examples/jsm/loaders/GLTFLoader'
import {useFrame, useThree} from "@react-three/fiber";
import {useLimiter} from "spacesvr";
import {useStore} from "@/utils/store";

type GLTFResult = GLTF & {
  nodes: {
    Concrete_3_Mesh315_1: THREE.Mesh
    Concrete_3_Mesh315_2: THREE.Mesh
    Concrete_3_Mesh315_3: THREE.Mesh
    Concrete_3_Mesh315_4: THREE.Mesh
    Light_49_Mesh391_1: THREE.Mesh
    Light_49_Mesh391_2: THREE.Mesh
    Light_49_Mesh391_3: THREE.Mesh
    Light_49_Mesh391_4: THREE.Mesh
    Light_49_Mesh391_5: THREE.Mesh
  }
  materials: {
    NewWall: THREE.MeshStandardMaterial
    ['Mat.018']: THREE.MeshStandardMaterial
    street_light: THREE.MeshStandardMaterial
    ['NewWall.001']: THREE.MeshStandardMaterial
  }
}

const FILE_URL = "https://dqeczc7c9n9n1.cloudfront.net/models/newroad-1665376569/newroad.glb.gz";

// eslint-disable-next-line react/display-name
export default function Model(props: { speed: number } & JSX.IntrinsicElements['group']) {
  
  const {speed} = props;
  const group = useRef<THREE.Group>();
  const streetWithBars = useRef<THREE.Group>();
  const streetWithoutBars = useRef<THREE.Group>();
  
  const {objectQueued, objectRendered} = useStore(state => ({
    objectQueued: state.objectQueued,
    objectRendered: state.objectRendered
  }))
  objectQueued("road");
  
  const {nodes, materials} = useGLTF(FILE_URL) as GLTFResult;
  
  useEffect(() => {
    
    objectRendered("road")
    
  }, [nodes]);
  
  const respawnWithBars = 240,
    respawnWithoutBars = 215,
    respawn = respawnWithBars / 2 + respawnWithoutBars / 2;
  
  const limiter = useLimiter(45);
  useFrame(({clock}) => {
    
    if (!limiter.isReady(clock) || !streetWithBars.current || !streetWithoutBars.current) return;
    
    streetWithBars.current.position.z -= speed;
    if (streetWithBars.current.position.z <= streetWithoutBars.current.position.z && streetWithoutBars.current.position.z <= 0) {
      streetWithBars.current.position.z = respawn;
    }
    
    streetWithoutBars.current.position.z -= speed;
    if (streetWithoutBars.current.position.z <= streetWithBars.current.position.z && streetWithBars.current.position.z <= 0) {
      streetWithoutBars.current.position.z = respawn;
    }
    
    
  });
  
  return (
    <group ref={group} rotation-y={Math.PI / 2} position={[0, 0, -1.5]} {...props} dispose={null}>
      <group name="Scene">
        <directionalLight
          color="white"
          intensity={1}
          name="Sun"
          position={[288.3996, 320.9216, 126.2625]}
          target={new THREE.Object3D()}
          castShadow
        />
        {/* overhead bars */}
        <group ref={streetWithBars} position-z={respawn}>
          <group position-z={337.5}>
            <group
              name="Concrete_3_Mesh315"
              position={[-16.1975, -0.0555, -254.2842]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.165}
            >
              <mesh
                name="Concrete_3_Mesh315_1"
                geometry={nodes.Concrete_3_Mesh315_1.geometry}
                material={nodes.Concrete_3_Mesh315_1.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="Concrete_3_Mesh315_2"
                geometry={nodes.Concrete_3_Mesh315_2.geometry}
                material={nodes.Concrete_3_Mesh315_2.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="Concrete_3_Mesh315_3"
                geometry={nodes.Concrete_3_Mesh315_3.geometry}
                material={nodes.Concrete_3_Mesh315_3.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="Concrete_3_Mesh315_4"
                geometry={nodes.Concrete_3_Mesh315_4.geometry}
                material={nodes.Concrete_3_Mesh315_4.material}
                castShadow
                receiveShadow
              />
            </group>
          </group>
        </group>
        {/* no bars */}
        <group ref={streetWithoutBars}>
          <group position-z={107.5}>
            <group
              name="Light_49_Mesh391"
              position={[-0.0823, -0.0555, -254.2842]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.165}
            >
              <mesh
                name="Light_49_Mesh391_1"
                geometry={nodes.Light_49_Mesh391_1.geometry}
                material={nodes.Light_49_Mesh391_1.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="Light_49_Mesh391_2"
                geometry={nodes.Light_49_Mesh391_2.geometry}
                material={nodes.Light_49_Mesh391_2.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="Light_49_Mesh391_3"
                geometry={nodes.Light_49_Mesh391_3.geometry}
                material={nodes.Light_49_Mesh391_3.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="Light_49_Mesh391_4"
                geometry={nodes.Light_49_Mesh391_4.geometry}
                material={materials['NewWall.001']}
                castShadow
                receiveShadow
              />
              <mesh
                name="Light_49_Mesh391_5"
                geometry={nodes.Light_49_Mesh391_5.geometry}
                material={nodes.Light_49_Mesh391_5.material}
                castShadow
                receiveShadow
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

;

useGLTF.preload(FILE_URL)
