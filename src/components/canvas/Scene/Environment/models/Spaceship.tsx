/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, {useEffect, useRef} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import {GLTF} from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    Ship: THREE.Mesh
    Circle: THREE.Mesh
    Circle001: THREE.Mesh
    Torus001: THREE.Mesh
    Torus004: THREE.Mesh
    Torus007: THREE.Mesh
    Torus006: THREE.Mesh
    Torus005: THREE.Mesh
    Torus000: THREE.Mesh
    Torus003: THREE.Mesh
    Torus002: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | 'RetopoGroup2Action.002'
  | 'CircleAction.004'
  | 'Torus.004Action.013'
  | 'Key.006Action.001'
  | 'Torus.004Action.014'
  | 'Key.004Action.001'
  | 'Torus.004Action.015'
  | 'Key.005Action'
  | 'Torus.004Action.016'
  | 'CircleAction.005'
  | 'Key.004Action'
  | 'Torus.004Action.017'
  | 'Key.006Action'
  | 'Torus.004Action.018'
  | 'Torus.004Action.019'
  | 'Torus.004Action.020'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

const FILE_URL = "https://dqeczc7c9n9n1.cloudfront.net/models/spaceship-1665386064/spaceship.glb.gz";

export default function Model(props: JSX.IntrinsicElements['group']) {
  
  const group = useRef<THREE.Group>()
  const {nodes, materials, animations} = useGLTF(FILE_URL) as GLTFResult
  const {actions} = useAnimations<GLTFActions>(animations, group)
  
  useEffect(() => {
    if (!actions) return;
    console.log(actions)
    for (const action of Object.values(actions)) {
      // @ts-ignore
      action.setEffectiveTimeScale(0.75).play();
    }
  }, [actions])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" scale={0.8} position={[0.5, 0, -2]} rotation-y={Math.PI / 2}>
        <group name="Camera" position={[7.2798, 3.6788, 8.7794]} rotation={[1.4253, 0.3334, -0.5937]}/>
        <group name="Empty" position={[-0.3338, -0.9535, -2.4771]}/>
        <group name="Spot" position={[20.0697, 16.468, 35.2959]} rotation={[-0.3266, -0.0219, 0.4533]}/>
        <group name="Point" position={[8.2568, 14.095, 3.6981]}/>
        <mesh
          name="Ship"
          geometry={nodes.Ship.geometry}
          material={materials['Material.001']}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <mesh
            name="Circle"
            geometry={nodes.Circle.geometry}
            material={nodes.Circle.material}
            position={[-111.6296, -276.4855, -20.307]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 125.334]}
          />
          <mesh
            name="Circle001"
            geometry={nodes.Circle001.geometry}
            material={nodes.Circle001.material}
            position={[109.2447, -276.4855, -20.307]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 125.334]}
          />
          <mesh
            name="Torus001"
            geometry={nodes.Torus001.geometry}
            material={nodes.Torus001.material}
            position={[-111.6296, -569.8218, -20.307]}
            rotation={[-Math.PI / 2, 0, -2.5133]}
            scale={32.7723}
          />
          <mesh
            name="Torus004"
            geometry={nodes.Torus004.geometry}
            material={nodes.Torus004.material}
            position={[-111.6296, -276.4855, -20.307]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            name="Torus007"
            geometry={nodes.Torus007.geometry}
            material={nodes.Torus007.material}
            position={[109.2447, -569.8218, -20.307]}
            rotation={[-Math.PI / 2, 0, -2.5133]}
            scale={32.7723}
          />
          <group
            name="Area"
            position={[-293.703, -81.6724, 48.5447]}
            rotation={[-3.1365, 0.0121, -0.5392]}
            scale={[247.0213, 100, 100]}
          />
          <group
            name="Area001"
            position={[292.9261, -81.4563, 48.4163]}
            rotation={[-0.0083, -0.0102, -0.5427]}
            scale={[-246.3678, -99.7354, -99.7355]}
          />
          <group
            name="Point001"
            position={[118.4458, -91.7386, 107.02]}
            rotation={[-1.5708, 0.0399, -0.0008]}
            scale={[133.0013, 133.0013, 133.0013]}
          />
          <group
            name="Point002"
            position={[-118.9025, -87.237, 103.5605]}
            rotation={[-1.5707, 0.0399, -0.0014]}
            scale={[145.1496, 145.1496, 145.1495]}
          />
          <group
            name="Point003"
            position={[112.987, -381.9297, -18.7295]}
            rotation={[-1.5691, 0.0399, -0.0424]}
            scale={[100, 100, 100]}
          />
          <group
            name="Point004"
            position={[-127.2203, -377.428, -28.9168]}
            rotation={[-1.5691, 0.0399, -0.0424]}
            scale={[100, 100, 100]}
          />
          <group
            name="Point005"
            position={[120.8187, -303.1629, -28.1156]}
            rotation={[0, -0.0008, -0.025]}
            scale={133.0013}
          />
          <group
            name="Point006"
            position={[-116.5705, -302.2034, -27.857]}
            rotation={[0, -0.0014, -0.025]}
            scale={[145.1495, 145.1496, 145.1495]}
          />
          <mesh
            name="Torus006"
            geometry={nodes.Torus006.geometry}
            material={nodes.Torus006.material}
            morphTargetDictionary={nodes.Torus006.morphTargetDictionary}
            morphTargetInfluences={nodes.Torus006.morphTargetInfluences}
            position={[109.2447, -472.043, -20.307]}
            rotation={[-Math.PI / 2, 0, -2.5133]}
            scale={[107.7431, 107.7431, 107.7431]}
          />
          <mesh
            name="Torus005"
            geometry={nodes.Torus005.geometry}
            material={nodes.Torus005.material}
            morphTargetDictionary={nodes.Torus005.morphTargetDictionary}
            morphTargetInfluences={nodes.Torus005.morphTargetInfluences}
            position={[109.2447, -374.2643, -20.307]}
            rotation={[-Math.PI / 2, 0, -1.2566]}
            scale={124.9576}
          />
          <mesh
            name="Torus000"
            geometry={nodes.Torus000.geometry}
            material={nodes.Torus000.material}
            morphTargetDictionary={nodes.Torus000.morphTargetDictionary}
            morphTargetInfluences={nodes.Torus000.morphTargetInfluences}
            position={[109.2447, -667.6006, -20.307]}
            rotation={[-Math.PI / 2, 0, -1.2566]}
            scale={5.7614}
          />
          <mesh
            name="Torus003"
            geometry={nodes.Torus003.geometry}
            material={nodes.Torus003.material}
            morphTargetDictionary={nodes.Torus003.morphTargetDictionary}
            morphTargetInfluences={nodes.Torus003.morphTargetInfluences}
            position={[-111.6296, -374.2643, -20.307]}
            rotation={[-Math.PI / 2, 0, -1.2566]}
            scale={124.9576}
          />
          <mesh
            name="Torus002"
            geometry={nodes.Torus002.geometry}
            material={nodes.Torus002.material}
            morphTargetDictionary={nodes.Torus002.morphTargetDictionary}
            morphTargetInfluences={nodes.Torus002.morphTargetInfluences}
            position={[-111.6296, -472.043, -20.307]}
            rotation={[-Math.PI / 2, 0, -2.5133]}
            scale={[107.7431, 107.7431, 107.7431]}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload(FILE_URL)
