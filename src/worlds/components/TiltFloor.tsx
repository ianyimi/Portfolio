import { usePlane, useSphere } from "@react-three/cannon";
import {useFrame, useThree} from "@react-three/fiber";
import {useEffect} from "react";
import {useLimiter} from "spacesvr";
import { Plane } from "@react-three/drei";

export default function Floor() {

  const { raycaster, scene } = useThree();
  const [ collider, api ] = usePlane(() => ({
    type: "Static",
    args: [50, 50],
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0]
  }))

  const [ collider2, api2 ] = useSphere(() => ({
    mass: 0.1,
    args: 0.5,
    position: [0, 0.5, 0],
    linearFactor: [0.75, 1.5, 0.75],
    sleepSpeedLimit: 10,
    angularFactor: [1.25, 1.25, 1.25],
  }))

  const limiter = useLimiter(45);
  useFrame(({ clock, raycaster }) => {
    if (!limiter.isReady(clock) || !collider.current || !api) return;
    // const point = raycaster.intersectObject(collider.current)[0].point;
  })

  const onClick = () => {
    if (!collider.current) return;
    console.log(raycaster.intersectObject(collider.current)[0].point)
  }
  useEffect(() => {
    document.addEventListener("click", onClick);
    // return(
    //   document.removeEventListener("click", onClick)
    // )
  }, [])

  const mouseTolerance = 0.2;
  const centerX = window.innerWidth * 0.5;
  const centerY = window.innerHeight * 0.5;
  const tiltFloor = (e: any) => {
    if (!collider.current) return;
    collider.current.rotation.x = (e.clientX - centerX) / centerX * mouseTolerance;
    collider.current.rotation.z = (e.clientY - centerY) / centerY * mouseTolerance;
    console.log("tilt")
  }

  useEffect(() => {
    document.addEventListener("mousemove", tiltFloor)
    return (
      document.removeEventListener("mousemove", tiltFloor)
    )
  }, [])

  return (
    <group>
      <Plane args={[50, 50]} ref={collider} onClick={(event) => {
        // const normal = event.face.normal.clone();
        // normal.transformDirection(event.object.matrixWorld);
        // normal.normalize();
        // console.log(normal.multiplyScalar(1).toArray())
        // api.applyForce(normal.toArray(), event.point.toArray())
        // console.log(event.point)
      }}>
        <meshStandardMaterial color="yellow" transparent opacity={0.6} />
      </Plane>
      <mesh ref={collider2} onClick={(event) => {
        // @ts-ignore
        const normal = event.face.normal.clone();
        normal.transformDirection(event.object.matrixWorld);
        normal.normalize();
        api2.applyForce([0, -1, 0], event.point.toArray())
        console.log(event.point)
      }}>
        <sphereBufferGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="blue" transparent opacity={1} />
      </mesh>
    </group>
  )
}
