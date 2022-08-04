/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { MeshReflectorMaterial, useAnimations, useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLimiter } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import { useStore } from "utils/store";

type GLTFResult = GLTF & {
	nodes: {
		CPDeLorean_EngineFrontL: THREE.Mesh
		CPDeLorean_EngineFrontL001: THREE.Mesh
		CPDeLorean_EngineFrontL002: THREE.Mesh
		Mesh008: THREE.Mesh
		Mesh008_1: THREE.Mesh
		Mesh008_2: THREE.Mesh
		CPDeLorean_EngineFrontR: THREE.Mesh
		CPDeLorean_EngineFrontR001: THREE.Mesh
		CPDeLorean_EngineFrontR002: THREE.Mesh
		Mesh009: THREE.Mesh
		Mesh009_1: THREE.Mesh
		Mesh009_2: THREE.Mesh
		CPDeLorean_EngineRearL: THREE.Mesh
		CPDeLorean_EngineRearL001: THREE.Mesh
		CPDeLorean_EngineRearL002: THREE.Mesh
		CPDeLorean_EngineRearL_pipes: THREE.Mesh
		CPDeLorean_EngineRearR: THREE.Mesh
		CPDeLorean_EngineRearR001: THREE.Mesh
		CPDeLorean_EngineRearR002: THREE.Mesh
		CPDeLorean_EngineRearR_pipes: THREE.Mesh
		CPDeLorean_MainBody001: THREE.Mesh
		CPDeLorean_MainBody002: THREE.Mesh
		CPDeLorean_MainBody003: THREE.Mesh
		CPDeLorean_MainBody004: THREE.Mesh
		CPDeLorean_MainBody005: THREE.Mesh
		CPDeLorean_MainBody006: THREE.Mesh
		CPDeLorean_MainBody007: THREE.Mesh
		CPDeLorean_MainBody008: THREE.Mesh
		CPDeLorean_MainBody009: THREE.Mesh
		CPDeLorean_MainBody011: THREE.Mesh
		Mesh003: THREE.Mesh
		Mesh003_1: THREE.Mesh
		Mesh003_2: THREE.Mesh
		CPDeLorean_WingDx: THREE.Mesh
		CPDeLorean_WingSx: THREE.Mesh
	}
	materials: {
		DeLorean_EnginePart2: THREE.MeshStandardMaterial
		DeLorean_EnginePart1: THREE.MeshStandardMaterial
		DeLorean_EnginePart3: THREE.MeshStandardMaterial
		DeLorean_Motore: THREE.MeshStandardMaterial
		DeLorean_DarkCables: THREE.MeshStandardMaterial
		DeLorean_BlueLight: THREE.MeshStandardMaterial
		DeLorean_MainBody: THREE.MeshStandardMaterial
		Standard_8: THREE.MeshStandardMaterial
		DeLorean_WhiteLight: THREE.MeshStandardMaterial
		DeLorean_Interni: THREE.MeshStandardMaterial
		DeLorean_FinituraNero: THREE.MeshStandardMaterial
		DeLorean_OrangeLight: THREE.MeshStandardMaterial
		DeLorean_RedLight: THREE.MeshStandardMaterial
		DeLorean_BrightCables: THREE.MeshStandardMaterial
	}
}

const FILE_URL = "https://dqeczc7c9n9n1.cloudfront.net/models/dolorean7-1659555702/dolorean7.glb.gz";

type ActionName = 'Action.003'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function Model( props: JSX.IntrinsicElements['group'] ) {

	const group = useRef<THREE.Group>( null );
	const carGroup = useRef<THREE.Group>( null );
	const floatGroup = useRef<THREE.Group>( null );
	const { nodes, materials, animations } = useGLTF( FILE_URL ) as unknown as GLTFResult;
	const { actions } = useAnimations<any>( animations, carGroup );
	const { enter } = useStore( state => ( {
		enter: state.enter
	} ) );

	const exit = () => {

		if ( ! actions?.Action ) return;

		console.log( "click" );
		const action = actions.Action;
		action.paused = false;
		action.play().warp( - 0.25, 1.5, 2 );
		setTimeout( () => {

			action.halt( 3 );

		}, 1500 );

	};

	console.log( enter );

	useEffect( () => {

		if ( ! actions?.Action ) return;
		// console.log( "made it" );

		const action = actions.Action;
		action.clampWhenFinished = true;
		// action.setLoop( THREE.LoopOnce, Infinity );
		if ( enter ) {

			setTimeout( () => {

				action.halt( 3.85 );

			}, 1000 );
			action.setEffectiveTimeScale( 0.5 ).play();
			// action.halt(1)

		}
		// action.halt( 2 );

	}, [ enter ] );


	const speed = 1;
	const rotationIntensity = 1;
	const floatIntensity = 1;
	const floatingRange = [ 0, 0.015 ];
	const offset = useRef( Math.random() * 10000 );
	const limiter = useLimiter( 45 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) || ! floatGroup.current || ! group.current ) return;
		const t = offset.current + clock.getElapsedTime();
		floatGroup.current.rotation.x = ( Math.cos( ( t / 4 ) * speed ) / 8 ) * rotationIntensity;
		floatGroup.current.rotation.y = ( Math.sin( ( t / 4 ) * speed ) / 8 ) * rotationIntensity;
		floatGroup.current.rotation.z = ( Math.sin( ( t / 4 ) * speed ) / 20 ) * rotationIntensity;
		let yPosition = ( Math.sin( ( t / 4 ) * speed ) / 10 );
		yPosition = THREE.MathUtils.mapLinear( yPosition, - 0.1, 0.1, floatingRange?.[0] ?? - 0.1, floatingRange?.[1] ?? 0.1 ) - 0.075;
		floatGroup.current.position.y = yPosition * floatIntensity;

	} );

	return (
		<group ref={group} onClick={exit} scale={0.075} position={[ - 0.1, 0.075, 0.1 ]} rotation-x={Math.PI / 12} {...props}
		       dispose={null}>
			<group name="Scene">
				<group name="Empty" ref={carGroup} position={[ - 0.1315, - 0.0077, - 0.0039 ]} rotation={[ - 1.9093, 1.4861, 1.647 ]}>

					<group ref={floatGroup}>
						<group name="CPDeLorean_MainBody" position={[ - 0.025, - 0.4634, 0.4333 ]} scale={0.006}/>
						<mesh
							name="CPDeLorean_EngineFrontL"
							geometry={nodes.CPDeLorean_EngineFrontL.geometry}
							material={nodes.CPDeLorean_EngineFrontL.material}
							position={[ 0.549, - 0.2639, 1.3591 ]}
							rotation={[ Math.PI / 2, - 0.4363, - Math.PI / 2 ]}
							scale={[ 0.03, 0.03, 0.03 ]}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_EngineFrontL001"
							geometry={nodes.CPDeLorean_EngineFrontL001.geometry}
							material={nodes.CPDeLorean_EngineFrontL001.material}
							position={[ 0.549, - 0.2639, 1.3591 ]}
							rotation={[ Math.PI / 2, - 0.4363, - Math.PI / 2 ]}
							scale={[ 0.03, 0.03, 0.03 ]}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_EngineFrontL002"
							geometry={nodes.CPDeLorean_EngineFrontL002.geometry}
							material={nodes.CPDeLorean_EngineFrontL002.material}
							position={[ 0.549, - 0.2639, 1.3591 ]}
							rotation={[ Math.PI / 2, - 0.4363, - Math.PI / 2 ]}
							scale={[ 0.03, 0.03, 0.03 ]}
							castShadow
							receiveShadow
						/>
						<group
							name="CPDeLorean_EngineFrontL_pipes"
							position={[ 0.351, 0.103, 1.3606 ]}
							rotation={[ - 1.4835, 0, Math.PI / 2 ]}
							scale={[ - 0.024, - 0.024, - 0.024 ]}>
							<mesh name="Mesh008" geometry={nodes.Mesh008.geometry} material={nodes.Mesh008.material}/>
							<mesh name="Mesh008_1" geometry={nodes.Mesh008_1.geometry} material={nodes.Mesh008_1.material}/>
							<mesh name="Mesh008_2" geometry={nodes.Mesh008_2.geometry} material={nodes.Mesh008_2.material}/>
						</group>
						<mesh
							name="CPDeLorean_EngineFrontR"
							geometry={nodes.CPDeLorean_EngineFrontR.geometry}
							material={nodes.CPDeLorean_EngineFrontR.material}
							position={[ - 0.5991, - 0.2639, 1.3591 ]}
							rotation={[ - Math.PI / 2, - 0.4363, Math.PI / 2 ]}
							scale={[ 0.03, 0.03, 0.03 ]}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_EngineFrontR001"
							geometry={nodes.CPDeLorean_EngineFrontR001.geometry}
							material={nodes.CPDeLorean_EngineFrontR001.material}
							position={[ - 0.5991, - 0.2639, 1.3591 ]}
							rotation={[ - Math.PI / 2, - 0.4363, Math.PI / 2 ]}
							scale={[ 0.03, 0.03, 0.03 ]}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_EngineFrontR002"
							geometry={nodes.CPDeLorean_EngineFrontR002.geometry}
							material={nodes.CPDeLorean_EngineFrontR002.material}
							position={[ - 0.5991, - 0.2639, 1.3591 ]}
							rotation={[ - Math.PI / 2, - 0.4363, Math.PI / 2 ]}
							scale={[ 0.03, 0.03, 0.03 ]}
							castShadow
							receiveShadow
						/>
						<group
							name="CPDeLorean_EngineFrontR_pipes"
							position={[ - 0.4035, 0.103, 1.3606 ]}
							rotation={[ 1.6581, 0, Math.PI / 2 ]}
							scale={[ 0.024, 0.024, 0.024 ]}>
							<mesh name="Mesh009" geometry={nodes.Mesh009.geometry} material={nodes.Mesh009.material}/>
							<mesh name="Mesh009_1" geometry={nodes.Mesh009_1.geometry} material={nodes.Mesh009_1.material}/>
							<mesh name="Mesh009_2" geometry={nodes.Mesh009_2.geometry} material={nodes.Mesh009_2.material}/>
						</group>
						<mesh
							name="CPDeLorean_EngineRearL"
							geometry={nodes.CPDeLorean_EngineRearL.geometry}
							material={nodes.CPDeLorean_EngineRearL.material}
							position={[ 0.549, - 0.2639, - 0.4273 ]}
							rotation={[ Math.PI / 2, - 0.4363, - Math.PI / 2 ]}
							scale={[ 0.03, 0.03, 0.03 ]}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_EngineRearL001"
							geometry={nodes.CPDeLorean_EngineRearL001.geometry}
							material={nodes.CPDeLorean_EngineRearL001.material}
							position={[ 0.549, - 0.2639, - 0.4273 ]}
							rotation={[ Math.PI / 2, - 0.4363, - Math.PI / 2 ]}
							scale={[ 0.03, 0.03, 0.03 ]}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_EngineRearL002"
							geometry={nodes.CPDeLorean_EngineRearL002.geometry}
							material={nodes.CPDeLorean_EngineRearL002.material}
							position={[ 0.549, - 0.2639, - 0.4273 ]}
							rotation={[ Math.PI / 2, - 0.4363, - Math.PI / 2 ]}
							scale={[ 0.03, 0.03, 0.03 ]}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_EngineRearL_pipes"
							geometry={nodes.CPDeLorean_EngineRearL_pipes.geometry}
							material={nodes.CPDeLorean_EngineRearL_pipes.material}
							position={[ 0.64, - 0.0669, - 0.5926 ]}
							rotation={[ 0.8727, 0.8727, - Math.PI / 2 ]}
							scale={[ 0.006, 0.006, 0.006 ]}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_EngineRearR"
							geometry={nodes.CPDeLorean_EngineRearR.geometry}
							material={nodes.CPDeLorean_EngineRearR.material}
							position={[ - 0.5991, - 0.2639, - 0.4273 ]}
							rotation={[ - Math.PI / 2, - 0.4363, Math.PI / 2 ]}
							scale={[ 0.03, 0.03, 0.03 ]}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_EngineRearR001"
							geometry={nodes.CPDeLorean_EngineRearR001.geometry}
							material={nodes.CPDeLorean_EngineRearR001.material}
							position={[ - 0.5991, - 0.2639, - 0.4273 ]}
							rotation={[ - Math.PI / 2, - 0.4363, Math.PI / 2 ]}
							scale={[ 0.03, 0.03, 0.03 ]}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_EngineRearR002"
							geometry={nodes.CPDeLorean_EngineRearR002.geometry}
							material={nodes.CPDeLorean_EngineRearR002.material}
							position={[ - 0.5991, - 0.2639, - 0.4273 ]}
							rotation={[ - Math.PI / 2, - 0.4363, Math.PI / 2 ]}
							scale={[ 0.03, 0.03, 0.03 ]}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_EngineRearR_pipes"
							geometry={nodes.CPDeLorean_EngineRearR_pipes.geometry}
							material={nodes.CPDeLorean_EngineRearR_pipes.material}
							position={[ - 0.6525, - 0.0669, - 0.5926 ]}
							rotation={[ - 2.2689, 0.8727, - Math.PI / 2 ]}
							scale={[ - 0.006, - 0.006, - 0.006 ]}
						/>
						<mesh
							name="CPDeLorean_MainBody001"
							geometry={nodes.CPDeLorean_MainBody001.geometry}
							material={materials.DeLorean_BlueLight}
							position={[ - 0.025, - 0.4634, 0.4333 ]}
							scale={0.006}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_MainBody002"
							geometry={nodes.CPDeLorean_MainBody002.geometry}
							material={nodes.CPDeLorean_MainBody002.material}
							position={[ - 0.025, - 0.4634, 0.4333 ]}
							scale={0.006}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_MainBody003"
							geometry={nodes.CPDeLorean_MainBody003.geometry}
							material={nodes.CPDeLorean_MainBody003.material}
							position={[ - 0.025, - 0.4634, 0.4333 ]}
							scale={0.006}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_MainBody004_Windows"
							geometry={nodes.CPDeLorean_MainBody004.geometry}
							position={[ - 0.025, - 0.4634, 0.4333 ]}
							scale={0.006}
							castShadow
							receiveShadow
						>
							<MeshReflectorMaterial
								color="black"
								mirror={0.5}
								blur={[ 400, 100 ]}
								resolution={1024}
								mixBlur={1}
								opacity={2}
								depthScale={1.1}
								minDepthThreshold={0.4}
								maxDepthThreshold={1.25}
								roughness={0.25}
								metalness={0.25}
								side={THREE.DoubleSide}
							/>
						</mesh>
						<mesh
							name="CPDeLorean_MainBody005_Headlights"
							geometry={nodes.CPDeLorean_MainBody005.geometry}
							material={materials.DeLorean_WhiteLight}
							position={[ - 0.025, - 0.4634, 0.4333 ]}
							scale={0.006}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_MainBody006"
							geometry={nodes.CPDeLorean_MainBody006.geometry}
							material={materials.DeLorean_Interni}
							position={[ - 0.025, - 0.4634, 0.4333 ]}
							scale={0.006}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_MainBody007_Bodyframe"
							geometry={nodes.CPDeLorean_MainBody007.geometry}
							material={materials.DeLorean_FinituraNero}
							position={[ - 0.025, - 0.4634, 0.4333 ]}
							scale={0.006}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_MainBody008"
							geometry={nodes.CPDeLorean_MainBody008.geometry}
							material={materials.DeLorean_OrangeLight}
							position={[ - 0.025, - 0.4634, 0.4333 ]}
							scale={0.006}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_MainBody009"
							geometry={nodes.CPDeLorean_MainBody009.geometry}
							material={materials.DeLorean_RedLight}
							position={[ - 0.025, - 0.4634, 0.4333 ]}
							scale={0.006}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_MainBody011_Taillights"
							geometry={nodes.CPDeLorean_MainBody011.geometry}
							material={nodes.CPDeLorean_MainBody011.material}
							position={[ - 0.025, - 0.4634, 0.4333 ]}
							scale={0.006}
							castShadow
							receiveShadow
						/>
						<group
							name="CPDeLorean_RoofTopDevice"
							position={[ - 0.025, 0.3873, - 0.1525 ]}
							rotation={[ - 1.6581, 0, 0 ]}
							scale={[ - 0.012, - 0.012, - 0.015 ]}>
							<mesh name="Mesh003" geometry={nodes.Mesh003.geometry} material={nodes.Mesh003.material}/>
							<mesh name="Mesh003_1" geometry={nodes.Mesh003_1.geometry} material={materials.DeLorean_BrightCables}/>
							<mesh name="Mesh003_2" geometry={nodes.Mesh003_2.geometry} material={nodes.Mesh003_2.material}/>
						</group>
						<mesh
							name="CPDeLorean_WingDx"
							geometry={nodes.CPDeLorean_WingDx.geometry}
							material={nodes.CPDeLorean_WingDx.material}
							position={[ - 0.025, - 0.4634, 0.4333 ]}
							rotation={[ Math.PI, 0, 0 ]}
							scale={- 0.006}
							castShadow
							receiveShadow
						/>
						<mesh
							name="CPDeLorean_WingSx"
							geometry={nodes.CPDeLorean_WingSx.geometry}
							material={nodes.CPDeLorean_WingSx.material}
							position={[ - 0.025, - 0.4634, 0.4333 ]}
							scale={0.006}
							castShadow
							receiveShadow
						/>
					</group>
				</group>
			</group>
		</group>
	);

}

useGLTF.preload( FILE_URL );
