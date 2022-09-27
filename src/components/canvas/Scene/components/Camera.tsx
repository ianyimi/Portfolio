import {useEffect, useState} from "react";
import {GroupProps, useFrame, useThree} from "@react-three/fiber";
import * as THREE from "three";
import {Object3D, Quaternion, Vector2, Vector3} from "three";
// @ts-ignore
import {CameraRig, StoryPointsControls} from "three-story-controls";
import {useStore} from "utils/store";
import shallow from "zustand/shallow";
import {useLimiter} from "spacesvr";

const CAMERA_ANGLES = [
  {
    position: new Vector3(2.504, 1.0920, 2.2795),
    quaternion: new Quaternion(-0.08214, 0.21672, 0.01830, 0.9725)
  },
  {
    position: new Vector3(1.02, 1.408, -1.069),
    quaternion: new Quaternion(0, 0.996, 0.08, -0.001)
  },
  {
    position: new Vector3(-0.862, 1.794, 1.698),
    quaternion: new Quaternion(-0.324, -0.451, -0.18, 0.812)
  },
  // {
  // 	position: new Vector3( - 0.023, 1.374, - 0.252 ),
  // 	quaternion: new Quaternion( - 0.076, - 0.767, - 0.092, 0.631 )
  // },
  {
    position: new Vector3(5.302, 0.715, 0.724),
    quaternion: new Quaternion(0.007, 0.692, -0.008, 0.721)
  }
  // {
  // 	position: new Vector3( 5.733, 1.222, 1.387 ),
  // 	quaternion: new Quaternion( - 0.056, 0.748, 0.063, 0.657 )
  // },
  // {
  // 	position: new Vector3( 1.86, 1.076, - 2.618 ),
  // 	quaternion: new Quaternion( - 0.001, 0.999, 0.006, 0.026 )
  // },
  // {
  // 	position: new Vector3( - 1.44, 1.07, - 0.209 ),
  // 	quaternion: new Quaternion( - 0.018, - 0.759, - 0.021, 0.65 )
  // },
];

export default function Camera(props: GroupProps) {
  
  const position = new Vector3();
  const quaternion = new Quaternion();
  
  const {camera, scene} = useThree();
  const {setControls, previousSection, animating, setAnimationStatus} = useStore(state => ({
    setControls: state.setControls,
    previousSection: state.previousSection,
    animating: state.animating,
    setAnimationStatus: state.setAnimationStatus,
  }), shallow);
  
  const animate = () => setAnimationStatus(true);
  const stopAnimation = () => setAnimationStatus(false);
  
  useEffect(() => {
    
    const cameraRig = new CameraRig(camera, scene);
    const newStoryControls = new StoryPointsControls(cameraRig, CAMERA_ANGLES, {cycle: true});
    newStoryControls.onCameraStart = animate;
    newStoryControls.onCameraEnd = stopAnimation;
    newStoryControls.enable();
    newStoryControls.goToPOI(0);
    setControls(newStoryControls);
    
  }, []);
  
  
  const logPosition = false;
  const limiter = useLimiter(45);
  useFrame(({camera, clock}) => {
    
    if (!limiter.isReady(clock)) return;
    
    if (!logPosition) return;
    camera.getWorldPosition(position);
    camera.getWorldQuaternion(quaternion);
    console.log("CamPos: " + floorArray(position.toArray()));
    console.log("CamQuat: " + floorArray(quaternion.toArray()));
    
  });
  
  return (
    <group {...props}>
      {/*<OrbitControls/>*/}
      <Rig/>
    </group>
  );
  
}

// Camera Parallax copied from R3F CameraShake component
function Rig() {
  
  const [posVec] = useState(() => new THREE.Vector3());
  const [quatPosVec] = useState(() => new THREE.Vector3());
  const {scene, camera} = useThree();
  
  useEffect(() => {
    
    const mouse = new Vector2();
    const newQuaternion = new THREE.Quaternion();
    const raycaster = new THREE.Raycaster();
    const dummyObj = new Object3D();
    scene.add(dummyObj);
    
    // const initRot = useRef(camera.quaternion.clone());
    
    function handleMouseMove(event: MouseEvent) {
      
      // @ts-ignore
      event = event || window.event;
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.at(0.1, quatPosVec);
      
      dummyObj.position.set(quatPosVec)
      dummyObj.lookAt(0, 0, 0);
      dummyObj.getWorldQuaternion(newQuaternion);
      // console.log(quatPosVec)
      // console.log(mouse.x)
      camera.position.lerp(posVec.set(mouse.x / 7, mouse.y / 7, 0), 0.05);
      // camera.quaternion.slerp(newQuaternion, 0.05);
      // camera.rotation.x = -mouse.y / 10;
      // camera.rotation.y = mouse.x / 10;
      
    }
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      
      document.removeEventListener("mousemove", handleMouseMove);
      
    };
    
  }, []);
  
  return <></>;
  
}

function floorArray(array: number[]) {
  
  return array.map(num => Math.floor(num * 1000) / 1000);
  
}
