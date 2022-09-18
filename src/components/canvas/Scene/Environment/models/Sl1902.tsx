/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, {useEffect, useRef} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import {GLTF} from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    Mesh009: THREE.Mesh
    Mesh009_1: THREE.Mesh
    Mesh001: THREE.Mesh
    Mesh001_1: THREE.Mesh
    Mesh021: THREE.Mesh
    Mesh021_1: THREE.Mesh
    Mesh002: THREE.Mesh
    Mesh002_1: THREE.Mesh
    Mesh015: THREE.Mesh
    Mesh015_1: THREE.Mesh
    Mesh003: THREE.Mesh
    Mesh003_1: THREE.Mesh
    Mesh020: THREE.Mesh
    Mesh020_1: THREE.Mesh
    Mesh004: THREE.Mesh
    Mesh004_1: THREE.Mesh
    Mesh034: THREE.Mesh
    Mesh034_1: THREE.Mesh
    Mesh034_2: THREE.Mesh
    Mesh034_3: THREE.Mesh
    Mesh034_4: THREE.Mesh
    Mesh034_5: THREE.Mesh
    Mesh034_6: THREE.Mesh
    Mesh034_7: THREE.Mesh
    Mesh034_8: THREE.Mesh
    Mesh034_9: THREE.Mesh
    Mesh034_10: THREE.Mesh
    Mesh034_11: THREE.Mesh
    Mesh034_12: THREE.Mesh
    Mesh034_13: THREE.Mesh
  }
  materials: {
    Tire: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    RedBody: THREE.MeshStandardMaterial
    BlackBody: THREE.MeshStandardMaterial
    Becker: THREE.MeshStandardMaterial
    BackLights: THREE.MeshStandardMaterial
    ['Brown Leather']: THREE.MeshStandardMaterial
    DarkMetal: THREE.MeshStandardMaterial
    FrontLights: THREE.MeshStandardMaterial
    BenzLogo: THREE.MeshStandardMaterial
    Keychain: THREE.MeshStandardMaterial
    ['License Plate']: THREE.MeshStandardMaterial
    Floor: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshPhysicalMaterial
    ['Material.004']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Action.013' | 'Action.015' | 'Action.017' | 'Action.019'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

const FILE_URL = "https://dqeczc7c9n9n1.cloudfront.net/models/sl190-1663460511/sl190.glb.gz";

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const {nodes, materials, animations} = useGLTF(FILE_URL) as GLTFResult
  const {actions} = useAnimations<GLTFActions>(animations, group)
  
  useEffect(() => {
    
    if (!actions) return;
    for (const action of Object.values(actions)) {
      
      if (!action) continue;
      action.setEffectiveTimeScale(2).play();
      
    }
    
  }, [actions]);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" rotation-y={Math.PI / 2}>
        <group name="FR_WHEEL" position={[-1.4123, 0.2493, 1.315]} rotation={[0, 0.0076, 0]} scale={0.01}>
          <mesh name="Mesh009" geometry={nodes.Mesh009.geometry} material={nodes.Mesh009.material}/>
          <mesh name="Mesh009_1" geometry={nodes.Mesh009_1.geometry} material={nodes.Mesh009_1.material}/>
        </group>
        <group name="FR_WHEELPLATE" position={[-1.4123, 0.2493, 1.315]} rotation={[2, -0.0032, -0.0069]} scale={0.01}>
          <mesh name="Mesh001" geometry={nodes.Mesh001.geometry} material={nodes.Mesh001.material}/>
          <mesh name="Mesh001_1" geometry={nodes.Mesh001_1.geometry} material={nodes.Mesh001_1.material}/>
        </group>
        <group name="FL_WHEEL" position={[0.2819, 0.2493, 1.315]} rotation={[0, -0.0076, 3.1414]} scale={0.01}>
          <mesh name="Mesh021" geometry={nodes.Mesh021.geometry} material={nodes.Mesh021.material}/>
          <mesh name="Mesh021_1" geometry={nodes.Mesh021_1.geometry} material={nodes.Mesh021_1.material}/>
        </group>
        <group name="FL_WHEELPLATE" position={[0.2819, 0.2493, 1.315]} rotation={[2, 0.003, -3.1346]} scale={0.01}>
          <mesh name="Mesh002" geometry={nodes.Mesh002.geometry} material={nodes.Mesh002.material}/>
          <mesh name="Mesh002_1" geometry={nodes.Mesh002_1.geometry} material={nodes.Mesh002_1.material}/>
        </group>
        <group name="BR_WHEEL" position={[-1.4123, 0.2493, -1.0457]} rotation={[0, 0.0076, 0]} scale={0.01}>
          <mesh name="Mesh015" geometry={nodes.Mesh015.geometry} material={nodes.Mesh015.material}/>
          <mesh name="Mesh015_1" geometry={nodes.Mesh015_1.geometry} material={nodes.Mesh015_1.material}/>
        </group>
        <group name="BR_WHEELPLATE" position={[-1.4123, 0.2493, -1.0457]} rotation={[2, -0.0032, -0.0069]} scale={0.01}>
          <mesh name="Mesh003" geometry={nodes.Mesh003.geometry} material={nodes.Mesh003.material}/>
          <mesh name="Mesh003_1" geometry={nodes.Mesh003_1.geometry} material={nodes.Mesh003_1.material}/>
        </group>
        <group name="BL_WHEEL" position={[0.2819, 0.2493, -1.0457]} rotation={[0, -0.0076, 3.1414]} scale={0.01}>
          <mesh name="Mesh020" geometry={nodes.Mesh020.geometry} material={nodes.Mesh020.material}/>
          <mesh name="Mesh020_1" geometry={nodes.Mesh020_1.geometry} material={nodes.Mesh020_1.material}/>
        </group>
        <group name="BL_WHEELPLATE" position={[0.2819, 0.2493, -1.0457]} rotation={[2, 0.003, -3.1346]} scale={0.01}>
          <mesh name="Mesh004" geometry={nodes.Mesh004.geometry} material={nodes.Mesh004.material}/>
          <mesh name="Mesh004_1" geometry={nodes.Mesh004_1.geometry} material={nodes.Mesh004_1.material}/>
        </group>
        <group name="Body" position={[-0.5954, 0.7179, 0.0186]} scale={0.01}>
          <mesh name="Mesh034" geometry={nodes.Mesh034.geometry} material={materials.RedBody}/>
          <mesh name="Mesh034_1" geometry={nodes.Mesh034_1.geometry} material={nodes.Mesh034_1.material}/>
          <mesh name="Mesh034_2" geometry={nodes.Mesh034_2.geometry} material={nodes.Mesh034_2.material}/>
          <mesh name="Mesh034_3" geometry={nodes.Mesh034_3.geometry} material={materials.Becker}/>
          <mesh name="Mesh034_4" geometry={nodes.Mesh034_4.geometry} material={materials.BackLights}/>
          <mesh name="Mesh034_5" geometry={nodes.Mesh034_5.geometry} material={materials['Brown Leather']}/>
          <mesh name="Mesh034_6" geometry={nodes.Mesh034_6.geometry} material={materials.DarkMetal}/>
          <mesh name="Mesh034_7" geometry={nodes.Mesh034_7.geometry} material={materials.FrontLights}/>
          <mesh name="Mesh034_8" geometry={nodes.Mesh034_8.geometry} material={materials.BenzLogo}/>
          <mesh name="Mesh034_9" geometry={nodes.Mesh034_9.geometry} material={materials.Keychain}/>
          <mesh name="Mesh034_10" geometry={nodes.Mesh034_10.geometry} material={materials['License Plate']}/>
          <mesh name="Mesh034_11" geometry={nodes.Mesh034_11.geometry} material={materials.Floor}/>
          <mesh name="Mesh034_12" geometry={nodes.Mesh034_12.geometry} material={materials['Material.001']}/>
          <mesh name="Mesh034_13" geometry={nodes.Mesh034_13.geometry} material={materials['Material.004']}/>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(FILE_URL)
