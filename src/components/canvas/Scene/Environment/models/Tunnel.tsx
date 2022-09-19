/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, {ForwardedRef, Ref, useEffect, useRef} from 'react';
import {useGLTF} from '@react-three/drei';
import {GLTF} from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Tunnel: THREE.Mesh
    Ground: THREE.Mesh
    Road: THREE.Mesh
    Ivy: THREE.Mesh
    Tunnel001: THREE.Mesh
    Tunnel002: THREE.Mesh
    Tunnel003: THREE.Mesh
    Tunnel004: THREE.Mesh
  }
  materials: {
    Tunnel: THREE.MeshStandardMaterial
    GroundSnow: THREE.MeshStandardMaterial
    WetRoad: THREE.MeshStandardMaterial
    Ivy: THREE.MeshStandardMaterial
  }
}

const FILE_URL = "https://dqeczc7c9n9n1.cloudfront.net/models/tunnel3-1661394284/tunnel3.glb.gz";

// eslint-disable-next-line react/display-name
const Model = React.forwardRef((props: JSX.IntrinsicElements['group'], ref: ForwardedRef<THREE.Group | undefined>) => {
  
  // const group = useRef<THREE.Group>( null );
  const {nodes, materials} = useGLTF(FILE_URL) as unknown as GLTFResult;
  
  useEffect(() => {
    
    materials.Ivy.transparent = true;
    
  }, [materials]);
  
  return (
    <group ref={ref as Ref<THREE.Group>} {...props} dispose={null}>
      <group name="Scene" position={[0, 0.125, -0.65]} scale={0.2}>
        {/*<group name="Sun" position={[ 0, 95.0399, 0 ]} rotation={[ - 0.5226, 0.0878, 0.1892 ]} />*/}
        <mesh
          name="Tunnel"
          geometry={nodes.Tunnel.geometry}
          material={nodes.Tunnel.material}
          position={[0, -1.0522, -0.0232]}
          scale={1.1025}
          castShadow
          receiveShadow
        />
        <mesh
          name="Ground"
          geometry={nodes.Ground.geometry}
          material={materials.GroundSnow}
          position={[3.8236, -1.0216, 3.675]}
          scale={[1.087, 0.888, 1.5873]}
          castShadow
          receiveShadow
        />
        <mesh
          name="Road"
          geometry={nodes.Road.geometry}
          material={materials.WetRoad}
          position={[-44.8662, 0, 0]}
          scale={[6.4482, 1, 1]}
          castShadow
          receiveShadow
        />
        <mesh
          name="Ivy"
          geometry={nodes.Ivy.geometry}
          material={materials.Ivy}
          position={[0, 0.0685, -0.0232]}
          scale={1.1025}
          castShadow
          receiveShadow
        />
        <mesh
          name="Tunnel001"
          geometry={nodes.Tunnel001.geometry}
          material={nodes.Tunnel001.material}
          position={[0, -1.0522, -0.0232]}
          scale={1.1025}
          castShadow
          receiveShadow
        />
        <mesh
          name="Tunnel002"
          geometry={nodes.Tunnel002.geometry}
          material={nodes.Tunnel002.material}
          position={[0, -1.0522, -0.0232]}
          scale={1.1025}
          castShadow
          receiveShadow
        />
        <mesh
          name="Tunnel003"
          geometry={nodes.Tunnel003.geometry}
          material={nodes.Tunnel003.material}
          position={[0, -1.0522, -0.0232]}
          scale={1.1025}
          castShadow
          receiveShadow
        />
        <mesh
          name="Tunnel004"
          geometry={nodes.Tunnel004.geometry}
          material={nodes.Tunnel004.material}
          position={[0, -1.0522, -0.0232]}
          scale={1.1025}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  );
  
});

useGLTF.preload(FILE_URL);
export default Model;
