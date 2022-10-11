/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, {useRef} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import {GLTF} from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    Cube002: THREE.Mesh
    Cube001: THREE.Mesh
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
    Cube_3: THREE.Mesh
    Cube_4: THREE.Mesh
    Cylinder001_1: THREE.Mesh
    Cylinder001_2: THREE.Mesh
    Cylinder_1: THREE.Mesh
    Cylinder_2: THREE.Mesh
    Plane: THREE.Mesh
    Plane001: THREE.Mesh
    Cube004: THREE.Mesh
    Cube003: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    ['EDGE BUMP']: THREE.MeshStandardMaterial
    ['TOP BUMP']: THREE.MeshStandardMaterial
    ['BLADE BUMP']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    ['Material.011']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'CameraAction'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

const FILE_URL = "https://dqeczc7c9n9n1.cloudfront.net/models/stardestroyer-1665451703/stardestroyer.glb.gz";

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const {nodes, materials, animations} = useGLTF(FILE_URL) as GLTFResult
  const {actions} = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={10} position={[0, 0, 0]} name="Scene">
        <group name="Camera" position={[14.2758, 12.686, 13.167]} rotation={[1.1589, 0.4118, -0.7416]}/>
        <group name="Lamp" position={[4.0762, 2.9834, 7.5797]} rotation={[0.986, -0.4957, -0.5723]}/>
        <mesh
          name="Cube002"
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[0, 0, 0.0031]}
        />
        <mesh
          name="Cube001"
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[0, 0, 0.0031]}
        />
        <group name="Cube">
          <mesh name="Cube_1" geometry={nodes.Cube_1.geometry} material={nodes.Cube_1.material}/>
          <mesh name="Cube_2" geometry={nodes.Cube_2.geometry} material={materials['EDGE BUMP']}/>
          <mesh name="Cube_3" geometry={nodes.Cube_3.geometry} material={nodes.Cube_3.material}/>
          <mesh name="Cube_4" geometry={nodes.Cube_4.geometry} material={materials['BLADE BUMP']}/>
        </group>
        <group name="Cylinder001" position={[-2.5978, 0.0012, 0.0065]} rotation={[0, 0, -Math.PI / 2]} scale={0.1256}>
          <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']}/>
          <mesh name="Cylinder001_2" geometry={nodes.Cylinder001_2.geometry} material={materials['Material.007']}/>
        </group>
        <group name="Cylinder" position={[0, 0, 0.0102]} rotation={[0, 0, -Math.PI / 2]} scale={0.1256}>
          <mesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={materials['Material.008']}/>
          <mesh name="Cylinder_2" geometry={nodes.Cylinder_2.geometry} material={materials['Material.009']}/>
        </group>
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials['Material.010']}
          position={[1.0561, 0, 0]}
        />
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={materials['Material.011']}
          position={[0, -0.0294, 0.0081]}
          scale={0.0442}
        />
        <mesh
          name="Cube004"
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[0, 0, 0.0103]}
        />
        <mesh
          name="Cube003"
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[0, 0, 0.0103]}
        />
      </group>
    </group>
  )
}

useGLTF.preload(FILE_URL)
