import { CameraShake, OrbitControls } from "@react-three/drei";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Quaternion, Vector2, Vector3 } from "three";
// @ts-ignore
import { CameraRig, StoryPointsControls } from "three-story-controls";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";

const CAMERA_ANGLES = [
	{
		position: new Vector3( 1.522, 0.492, 2.426 ),
		quaternion: new Quaternion( 0.007, 0.107, - 0.001, 0.994 )
	},
	{
		position: new Vector3( - 2.015, 3.951, 1.063 ),
		quaternion: new Quaternion( - 0.384, - 0.46, - 0.23, 0.767 )
	},
	{
		position: new Vector3( - 3.115, 11.895, - 2.442 ),
		quaternion: new Quaternion( - 0.44, - 0.556, - 0.447, 0.546 )
	},
	{
		position: new Vector3( 6.26, - 14.8, - 7.917 ),
		quaternion: new Quaternion( 0.13, 0.856, - 0.264, 0.424 )
	},
	{
		position: new Vector3( 6.95, - 1.145, - 1.847 ),
		quaternion: new Quaternion( 0.043, 0.656, - 0.039, 0.752 )
	}
];

export default function Camera() {

	const position = new Vector3();
	const quaternion = new Quaternion();

	const midTransition = useRef( false );
	const { camera, scene } = useThree();
	const { setControls } = useStore( state => ( {
		setControls: state.setControls
	} ), shallow );

	const logPosition = false;
	// const cameraRig = new CameraRig( camera, scene );
	// const newStoryControls = new StoryPointsControls( cameraRig, CAMERA_ANGLES, { cycle: true } );
	//
	// newStoryControls.enable();
	// newStoryControls.goToPOI( 0 );
	// setControls( newStoryControls );

	// setInterval( () => newStoryControls.nextPOI(), 5000 );

	useFrame( ( { camera, clock } ) => {

		// if ( midTransition.current ) newStoryControls.update( clock.getElapsedTime() );

		if ( ! logPosition ) return;
		camera.getWorldPosition( position );
		camera.getWorldQuaternion( quaternion );
		console.log( "CamPos: " + floorArray( position.toArray() ) );
		console.log( "CamQuat: " + floorArray( quaternion.toArray() ) );

	} );

	return (
		<group>
			<OrbitControls/>
			{/*<Rig />*/}
		</group>
	);

}

function Rig() {

	const [ vec ] = useState( () => new THREE.Vector3() );
	const { camera } = useThree();

	useEffect( () => {

		function handleMouseMove( event: MouseEvent ) {

			event = event || window.event;
			const mouse = new Vector2( event.clientX / window.innerWidth, event.clientY / window.innerHeight );
			camera.position.lerp( vec.set( mouse.x / 7, mouse.y / 7, 0 ), 0.05 );

		}

		document.addEventListener( 'mousemove', handleMouseMove );

		return () => {

			document.removeEventListener( "mousemove", handleMouseMove );

		};

	}, [] );

	return <></>;

}

function floorArray( array: number[] ) {

	return array.map( num => Math.floor( num * 1000 ) / 1000 );

}
