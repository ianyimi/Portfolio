/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, {useEffect, useRef, useState} from 'react'
import {useGLTF} from '@react-three/drei'
import {GLTF} from 'three/examples/jsm/loaders/GLTFLoader'
import {useStore} from "utils/store";

type GLTFResult = GLTF & {
  nodes: {
    Fruit_INner_Inner_0: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|1_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|10_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|11_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|12_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|13_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|14_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|15_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|16_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|17_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|18_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|19_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|2_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|20_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|21_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|22_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|23_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|24_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|25_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|26_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|27_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|28_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|29_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|3_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|30_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|31_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|32_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|33_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|34_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|35_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|36_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|37_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|4_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|5_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|6_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|7_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|8_FireFruit_0']: THREE.Mesh
    ['Fruit_Instancer|Fruit_FireLP001|Dupli|9_FireFruit_0']: THREE.Mesh
    Fruit_Tp_Fruit_Tip001_0: THREE.Mesh
  }
  materials: {
    Inner: THREE.MeshStandardMaterial
    FireFruit: THREE.MeshStandardMaterial
    ['Fruit_Tip.001']: THREE.MeshStandardMaterial
  }
}

const FILE_URL = "https://dqeczc7c9n9n1.cloudfront.net/models/meramera-1663535197/meramera.glb.gz";

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  
  const {objectQueued, objectRendered} = useStore(state => ({
    objectQueued: state.objectQueued,
    objectRendered: state.objectRendered
  }))
  objectQueued("meramera");
  
  const {nodes, materials} = useGLTF(FILE_URL) as GLTFResult
  
  useEffect(() => {
    
    objectRendered("meramera")
    
  }, [nodes]);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position-y={1}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="FireDemonFruitfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode">
              <group
                name="Fruit_INner"
                position={[0, -56.5573, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[48.7162, 48.7162, 55.3141]}>
                <mesh
                  name="Fruit_INner_Inner_0"
                  geometry={nodes.Fruit_INner_Inner_0.geometry}
                  material={materials.Inner}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|"
                position={[-50.1121, -32.3008, 0]}
                rotation={[-Math.PI / 2, 1.363, Math.PI / 2]}
                scale={32.3451}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|1"
                position={[15.4855, -32.3008, -47.6594]}
                rotation={[-0.2182, -0.3072, -0.0669]}
                scale={[32.3452, 32.3452, 32.3452]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|1_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|1_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|1_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|10"
                position={[20.3298, -12.8829, 29.2494]}
                rotation={[3.0245, -0.6042, 3.0749]}
                scale={[35.3602, 35.3602, 35.3602]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|10_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|10_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|10_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|11"
                position={[-29.2494, -12.8829, 20.3298]}
                rotation={[2.9739, 0.9568, -3.0041]}
                scale={[35.3602, 35.3602, 35.3602]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|11_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|11_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|11_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|12"
                position={[-20.3298, -12.8829, -29.2494]}
                rotation={[0.1171, 0.6042, -0.0667]}
                scale={[35.3602, 35.3602, 35.3602]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|12_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|12_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|12_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|13"
                position={[6.3071, -12.8829, -35.0578]}
                rotation={[0.0979, -0.1772, 0.0173]}
                scale={[35.3602, 35.3602, 35.3602]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|13_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|13_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|13_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|14"
                position={[35.0578, -12.8829, 6.3071]}
                rotation={[2.6421, -1.3686, 2.6507]}
                scale={[35.3603, 35.3602, 35.3602]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|14_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|14_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|14_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|15"
                position={[-6.3071, -12.8829, 35.0578]}
                rotation={[3.0437, 0.1772, -3.1243]}
                scale={35.3602}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|15_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|15_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|15_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|16"
                position={[-35.0578, -12.8829, -6.3071]}
                rotation={[0.4995, 1.3687, -0.4909]}
                scale={[35.3603, 35.3603, 35.3603]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|16_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|16_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|16_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|17"
                position={[29.2494, -12.8829, -20.3298]}
                rotation={[0.1677, -0.9568, 0.1375]}
                scale={35.3602}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|17_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|17_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|17_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|18"
                position={[35.2635, -63.1372, 37.2501]}
                rotation={[-2.1705, -0.4907, -2.5381]}
                scale={[42.4163, 42.4163, 42.4163]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|18_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|18_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|18_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|19"
                position={[-37.2501, -63.1372, 35.2635]}
                rotation={[-2.1453, 0.5211, 2.486]}
                scale={[42.4163, 42.4163, 42.4163]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|19_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|19_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|19_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|2"
                position={[40.5415, -32.3008, 29.4551]}
                rotation={[-2.7972, -0.9134, -2.8649]}
                scale={[32.3451, 32.3451, 32.3451]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|2_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|2_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|2_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|20"
                position={[-35.2635, -63.1372, -37.2501]}
                rotation={[-0.9711, 0.4907, 0.6035]}
                scale={[42.4163, 42.4163, 42.4163]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|20_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|20_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|20_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|21"
                position={[1.4047, -63.1372, -51.2749]}
                rotation={[-0.8157, -0.0188, -0.0199]}
                scale={[42.4163, 42.4163, 42.4163]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|21_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|21_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|21_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|22"
                position={[51.2749, -63.1372, 1.4047]}
                rotation={[-1.5966, -0.7549, -1.6084]}
                scale={[42.4163, 42.4163, 42.4163]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|22_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|22_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|22_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|23"
                position={[-1.4047, -63.1372, 51.2749]}
                rotation={[-2.3259, 0.0188, 3.1216]}
                scale={[42.4163, 42.4163, 42.4163]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|23_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|23_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|23_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|24"
                position={[-51.2749, -63.1372, -1.4047]}
                rotation={[-1.545, 0.7549, 1.5332]}
                scale={[42.4163, 42.4163, 42.4163]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|24_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|24_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|24_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|25"
                position={[37.2501, -63.1372, -35.2635]}
                rotation={[-0.9963, -0.5211, -0.6556]}
                scale={42.4163}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|25_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|25_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|25_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|26"
                position={[18.3967, 6.1572, 0]}
                rotation={[Math.PI / 2, -1.1303, Math.PI / 2]}
                scale={23.9246}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|26_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|26_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|26_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|27"
                position={[-9.1983, 6.1572, 15.932]}
                rotation={[2.6431, 0.4693, -2.9002]}
                scale={[23.9246, 23.9246, 23.9246]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|27_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|27_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|27_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|28"
                position={[-9.1983, 6.1572, -15.932]}
                rotation={[0.4985, 0.4693, -0.2414]}
                scale={[23.9246, 23.9246, 23.9246]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|28_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|28_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|28_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|29"
                position={[9.1983, 6.1572, -15.932]}
                rotation={[0.4985, -0.4693, 0.2414]}
                scale={[23.9246, 23.9246, 23.9246]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|29_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|29_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|29_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|3"
                position={[-40.5415, -32.3008, 29.4551]}
                rotation={[-2.7972, 0.9134, 2.8649]}
                scale={[32.3452, 32.3452, 32.3452]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|3_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|3_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|3_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|30"
                position={[9.1983, 6.1572, 15.932]}
                rotation={[2.6431, -0.4693, 2.9002]}
                scale={[23.9246, 23.9246, 23.9246]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|30_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|30_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|30_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|31"
                position={[-18.3966, 6.1572, 0]}
                rotation={[Math.PI / 2, 1.1303, -Math.PI / 2]}
                scale={[23.9246, 23.9246, 23.9246]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|31_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|31_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|31_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|32"
                position={[45.1952, -86.828, 0]}
                rotation={[-Math.PI / 2, -0.6203, -Math.PI / 2]}
                scale={[33.1296, 33.1296, 33.1296]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|32_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|32_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|32_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|33"
                position={[-22.5976, -86.828, 39.1402]}
                rotation={[-2.1248, 0.2949, 2.7024]}
                scale={[33.1296, 33.1296, 33.1296]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|33_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|33_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|33_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|34"
                position={[-22.5976, -86.828, -39.1402]}
                rotation={[-1.0168, 0.2949, 0.4392]}
                scale={[33.1296, 33.1296, 33.1296]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|34_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|34_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|34_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|35"
                position={[22.5976, -86.828, -39.1402]}
                rotation={[-1.0168, -0.2949, -0.4392]}
                scale={[33.1296, 33.1296, 33.1296]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|35_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|35_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|35_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|36"
                position={[22.5976, -86.828, 39.1402]}
                rotation={[-2.1248, -0.2949, -2.7024]}
                scale={[33.1296, 33.1296, 33.1296]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|36_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|36_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|36_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|37"
                position={[-45.1952, -86.828, 0]}
                rotation={[-Math.PI / 2, 0.6203, Math.PI / 2]}
                scale={33.1296}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|37_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|37_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|37_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|4"
                position={[-15.4855, -32.3008, -47.6594]}
                rotation={[-0.2182, 0.3072, 0.0669]}
                scale={[32.3451, 32.3451, 32.3451]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|4_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|4_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|4_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|5"
                position={[50.1121, -32.3008, 0]}
                rotation={[-Math.PI / 2, -1.363, -Math.PI / 2]}
                scale={32.3452}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|5_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|5_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|5_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|6"
                position={[-15.4855, -32.3008, 47.6594]}
                rotation={[-2.9234, 0.3072, 3.0747]}
                scale={32.3451}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|6_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|6_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|6_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|7"
                position={[-40.5415, -32.3008, -29.4551]}
                rotation={[-0.3444, 0.9134, 0.2767]}
                scale={[32.3451, 32.3452, 32.3451]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|7_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|7_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|7_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|8"
                position={[40.5415, -32.3008, -29.4551]}
                rotation={[-0.3444, -0.9134, -0.2767]}
                scale={[32.3451, 32.3451, 32.3451]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|8_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|8_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|8_FireFruit_0'].material}
                />
              </group>
              <group
                name="Fruit_Instancer|Fruit_FireLP001|Dupli|9"
                position={[15.4855, -32.3008, 47.6594]}
                rotation={[-2.9234, -0.3072, -3.0747]}
                scale={[32.3452, 32.3452, 32.3452]}>
                <mesh
                  name="Fruit_Instancer|Fruit_FireLP001|Dupli|9_FireFruit_0"
                  geometry={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|9_FireFruit_0'].geometry}
                  material={nodes['Fruit_Instancer|Fruit_FireLP001|Dupli|9_FireFruit_0'].material}
                />
              </group>
              <group name="Fruit_Tp" position={[0, 27.6619, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={40.8376}>
                <mesh
                  name="Fruit_Tp_Fruit_Tip001_0"
                  geometry={nodes.Fruit_Tp_Fruit_Tip001_0.geometry}
                  material={materials['Fruit_Tip.001']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(FILE_URL)