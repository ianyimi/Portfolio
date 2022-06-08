import { useSphere } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { useFrame} from "@react-three/fiber";
import { useLimiter } from "spacesvr";
import { CollideEvent } from "@react-three/cannon/dist/setup";
import { Vector3 } from "three";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useWorld } from "../WorldState";
import { palettes } from "../../utils/constants";

const TEXTURES = [
  // "https://dqeczc7c9n9n1.cloudfront.net/images/oslogo.png",
  // "https://dqeczc7c9n9n1.cloudfront.net/images/oslogobg.png",
  "https://dqeczc7c9n9n1.cloudfront.net/images/oslogocollage.png",
  "https://dqeczc7c9n9n1.cloudfront.net/images/oslogocollagebg.png"
];
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

type BallProps = {
  position?: [x: number, y: number, z: number]
}

export default function Ball(props: BallProps) {

  const { position = [0, 0, 0] } = props
  const { setPalette } = useWorld();
  const mesh = useRef(new THREE.Mesh());
  const tex = useTexture(TEXTURES[Math.floor(Math.random()*2)]);

  const [collider, api] = useSphere(() => ({
    args: 0.015,
    mass: 1,
    position: [position[0], position[1]+0.05, position[2]],
    linearFactor: [0, 1, 1],
    linearDamping: 0,
    onCollide: bounce
    // angularFactor: [1.25, 1.25, 1.25],
  }))

  function bounce(e: CollideEvent): void {
    if (!api) return;
    api.applyImpulse([0, position[1]/2+0.1, 0], [0, -1, 0])
    setPalette(palettes[Math.floor(Math.random()*palettes.length)])
  }

  const cPos = useRef(new Vector3());
  useEffect(() => {
    if (!collider.current || !api) return;
    api.applyForce([0, 0, 7], [0, 0, 1]);
    api.position.subscribe((p) => cPos.current.set(p[0], p[1], p[2]))
  }, [collider])

  const limiter = useLimiter(45);
  useFrame(({ clock }) => {
    if (!limiter.isReady(clock) || !collider.current || !mesh.current || !api || !cPos.current) return;
    collider.current.rotation.set(0, clock.getElapsedTime()*5, 0)
    // console.log(cPos.current)
    if (cPos.current.z > 1.15) {
      api.position.set(cPos.current.x, position[1]+0.05, -1.25)
    }
    mesh.current.position.lerp(cPos.current, 0.9)
    mesh.current.rotation.set(-clock.getElapsedTime()*2, 0, 0)
  })

  return (
    <group>
      <mesh ref={collider}>
        <sphereBufferGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial visible={false} />
      </mesh>
      <mesh ref={mesh}>
        <sphereBufferGeometry args={[0.015, 32, 32]} />
        <meshStandardMaterial map={tex} />
      </mesh>
    </group>
  )
}
