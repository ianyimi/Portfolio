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
		position: new Vector3( 2.504, 1.0920, 2.2795 ),
		quaternion: new Quaternion( - 0.08214, 0.21672, 0.01830, 0.9725 )
	},
	{
		position: new Vector3( 5.733, 1.222, 1.387 ),
		quaternion: new Quaternion( - 0.056, 0.748, 0.063, 0.657 )
	},
	{
		position: new Vector3( 1.86, 1.076, - 2.618 ),
		quaternion: new Quaternion( - 0.001, 0.999, 0.006, 0.026 )
	},
	{
		position: new Vector3( - 1.44, 1.07, - 0.209 ),
		quaternion: new Quaternion( - 0.018, - 0.759, - 0.021, 0.65 )
	},
	{
		position: new Vector3( - 0.862, 1.794, 1.698 ),
		quaternion: new Quaternion( - 0.324, - 0.451, - 0.18, 0.812 )
	}
];

export default function Camera() {

	const position = new Vector3();
	const quaternion = new Quaternion();

	const controls = useRef( null );
	const [ vec ] = useState( () => new THREE.Vector3() );
	function handleMouseMove( event: MouseEvent ) {

		event = event || window.event;
		const mouse = new Vector2( event.clientX / window.innerWidth, event.clientY / window.innerHeight );
		camera.position.lerp( vec.set( mouse.x / 7, mouse.y / 7, 0 ), 0.05 );

	}

	const midTransition = useRef( false );
	const { camera, scene } = useThree();
	const { setControls } = useStore( state => ( {
		setControls: state.setControls
	} ), shallow );

	const logPosition = false;
	const cameraRig = new CameraRig( camera, scene );
	const newStoryControls = new StoryPointsControls( cameraRig, CAMERA_ANGLES, { cycle: true } );

	newStoryControls.enable();
	newStoryControls.goToPOI( 0 );
	newStoryControls.onCameraStart = () => {

		midTransition.current = true;
		document.removeEventListener( "mousemove", handleMouseMove );

	};

	newStoryControls.onCameraEnd = () => {

		midTransition.current = false;
		document.addEventListener( "mousemove", handleMouseMove );

	};

	console.log( newStoryControls );
	setControls( newStoryControls );

	setInterval( () => {

		newStoryControls.nextPOI();

	}, 5000 );

	useFrame( ( { camera, clock } ) => {

		if ( midTransition.current ) newStoryControls.update( clock.getElapsedTime() );

		if ( ! logPosition ) return;
		camera.getWorldPosition( position );
		camera.getWorldQuaternion( quaternion );
		console.log( "CamPos: " + floorArray( position.toArray() ) );
		console.log( "CamQuat: " + floorArray( quaternion.toArray() ) );

	} );

	return (
		<group>
			{/*<OrbitControls ref={controls}/>*/}
			<Rig controls={controls}/>
		</group>
	);

}

const vec = new Vector3();
function handleMouseMove( camera: THREE.Camera, event: MouseEvent ) {

	event = event || window.event;
	const mouse = new Vector2( event.clientX / window.innerWidth, event.clientY / window.innerHeight );
	camera.position.lerp( vec.set( mouse.x / 7, mouse.y / 7, 0 ), 0.05 );

}

function Rig( props: { controls?: MutableRefObject<any> } ) {

	const { controls } = props;
	const [ vec ] = useState( () => new THREE.Vector3() );
	const { camera } = useThree();
	// const storyControls = useStore( state => state.storyControls );

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

	// return <CameraShake
	// 	maxYaw={0.01}
	// 	maxPitch={0.01}
	// 	maxRoll={0.01}
	// 	yawFrequency={0.5}
	// 	pitchFrequency={0.5}
	// 	rollFrequency={0.4}
	// 	// @ts-ignore
	// 	controls={controls ? controls : undefined}
	// />;

}

function floorArray( array: number[] ) {

	return array.map( num => Math.floor( num * 1000 ) / 1000 );

}
