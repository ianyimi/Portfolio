import { useSphere } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { useFrame} from "@react-three/fiber";
import { useLimiter } from "spacesvr";
import { CollideEvent } from "@react-three/cannon/dist/setup";
import { Vector3 } from "three";
import * as THREE from "three";
import { useWorld } from "../WorldState";
import { palettes } from "../../utils/constants";

type BallProps = {
  position?: [x: number, y: number, z: number],
  texture: THREE.Texture,
  trigger?: boolean
}

export default function Ball(props: BallProps) {

  const { position = [0, 0, 0], texture, trigger } = props
  const { setPalette } = useWorld();
  const mesh = useRef(new THREE.Mesh());

  const [collider, api] = useSphere(() => ({
    args: 0.015,
    mass: 1,
    position: [position[0], position[1], position[2]],
    linearFactor: [0, 1, 1],
    linearDamping: 0,
    onCollide: bounce
  }))

  function bounce(e: CollideEvent): void {
    if (!api) return;
    api.applyImpulse([0, position[1], 0], [0, -1, 0])
    trigger && setPalette(palettes[Math.floor(Math.random()*palettes.length)])
  }

  const cPos = useRef(new Vector3());
  useEffect(() => {
    if (!collider.current || !api) return;
    api.applyForce([0, 0, 10], [0, 0, 1]);
    api.position.subscribe((p) => cPos.current.set(p[0], p[1], p[2]))
  }, [collider])

  const limiter = useLimiter(45);
  useFrame(({ clock }) => {
    if (!limiter.isReady(clock) || !collider.current || !mesh.current || !api || !cPos.current) return;
    if (cPos.current.z > 1.15) {
      api.position.set(cPos.current.x, position[1], -1.25)
    }
    mesh.current.position.lerp(cPos.current, 0.9)
    mesh.current.rotation.set(-clock.getElapsedTime()*3, 0, 0)
  })

  return (
    <group>
      <mesh ref={collider}>
        <sphereBufferGeometry args={[0.015, 32, 32]} />
        <meshBasicMaterial map={texture} visible={false} />
      </mesh>
      <mesh ref={mesh}>
        <sphereBufferGeometry args={[0.015, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  )
}
