import {GroupProps} from "@react-three/fiber";
import * as THREE from "three";
import {CatmullRomLine} from "@react-three/drei";
import AnimatedCurve from "@/components/canvas/Scene/Environment/components/Galaxy/components/AnimatedCurve";


const angleOffset = Math.PI;
const radiusVelocity = 0.02;
const lowVariance = () => (2 * Math.random() - 1) * radiusVelocity / 10;
const midVariance = () => (2 * Math.random() - 1) * radiusVelocity / 5;
const highVariance = () => (2 * Math.random() - 1) * radiusVelocity / 3;

export default function Galaxy(props: GroupProps) {
  
  
  const currentPoint = new THREE.Vector3(0, 0, 0);
  const colors = ["white", "green", "blue", "red"]
  const lines = new Array(2).fill(<></>).map((_, lineIndex) => {
    
    const center = new THREE.Vector3(0, 0, 0);
    const points = new Array(75).fill([0, 0]).map((_, pointIndex) => {
      const angle = pointIndex * Math.PI / 20,
        radius = pointIndex / 2 * radiusVelocity;
      currentPoint.set(
        Math.sin(angle) * radius,
        0,
        Math.cos(angle) * radius
      );
      return center.add(currentPoint).clone();
    });
    center.set(0, 0, 0)
    
    const curve = new THREE.CatmullRomCurve3(points).getPoints(10000);
    
    return <AnimatedCurve
      key={lineIndex}
      color={colors[lineIndex]}
      width={2}
      speed={0.01}
      curve={curve}
      rotation-y={lineIndex * angleOffset}
      // dashed
    />
    
  });
  
  
  return (
    <group {...props}>
      {lines}
    </group>
  )
  
}
