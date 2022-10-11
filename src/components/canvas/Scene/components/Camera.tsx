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
    position: new Vector3(1.752, 0.492, 2.426),
    quaternion: new Quaternion(0.007, 0.107, -0.001, 0.994)
  },
  {
    position: new Vector3(6.26, -14.8, -7.917),
    quaternion: new Quaternion(0.13, 0.856, -0.264, 0.424)
  },
  {
    position: new Vector3(2.115, 11.895, -2.442),
    quaternion: new Quaternion(-0.44, -0.556, -0.447, 0.546)
  },
  {
    position: new Vector3(6.95, -1.145, -1.847),
    quaternion: new Quaternion(0.043, 0.656, -0.039, 0.752)
  }
  // {
  //   position: new Vector3(2.504, 1.0920, 2.2795),
  //   quaternion: new Quaternion(-0.08214, 0.21672, 0.01830, 0.9725)
  // },
  // {
  //   position: new Vector3(1.02, 1.408, -1.069),
  //   quaternion: new Quaternion(0, 0.996, 0.08, -0.001)
  // },
  // {
  //   position: new Vector3(-0.862, 1.794, 1.698),
  //   quaternion: new Quaternion(-0.324, -0.451, -0.18, 0.812)
  // },
  // {
  //   position: new Vector3(5.302, 0.715, 0.724),
  //   quaternion: new Quaternion(0.007, 0.692, -0.008, 0.721)
  // }
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
  
  const startAnimation = () => setAnimationStatus(true);
  const stopAnimation = () => setAnimationStatus(false);
  
  useEffect(() => {
    
    const cameraRig = new CameraRig(camera, scene);
    const newStoryControls = new StoryPointsControls(cameraRig, CAMERA_ANGLES, {cycle: true});
    newStoryControls.onCameraStart = startAnimation;
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
  
  return array.map(num => num.toFixed(3));
  
}
