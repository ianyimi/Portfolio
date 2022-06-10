import { useSphere } from "@react-three/cannon";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useFrame} from "@react-three/fiber";
import { useLimiter } from "spacesvr";
import { CollideEvent } from "@react-three/cannon/dist/setup";
import { Vector3 } from "three";
import * as THREE from "three";
import { useWorld } from "../WorldState";
import { palettes } from "../../utils/constants";
import { animated, useSpring } from "react-spring/three";
import Display from "./Display";

type BallProps = {
  position?: [x: number, y: number, z: number],
  texture: THREE.Texture,
  displayKey: number | null,
  setDisplayKey: Dispatch<SetStateAction<number | null>>,
  index: number,
  trigger?: boolean
}

export default function Ball(props: BallProps) {

  const { position = [0, 0, 0], texture, trigger, displayKey, setDisplayKey, index } = props
  const { palette, setPalette } = useWorld();
  const mesh = useRef(new THREE.Mesh());
  const cPos = useRef(new Vector3());
  const dPos = useRef(new Vector3());
  const pSet = useRef(false);
  const displayPosition = new Vector3(0.075, 0.1, 1);
  const ACTIVE_DISPLAY = displayKey === index,
    NO_ACTIVE_DISPLAY = displayKey === null;

  const { displaySize } = useSpring({
    displaySize: ACTIVE_DISPLAY ? 1 : 0,
    config: {
      mass: 1
    }
  })

  const [collider, api] = useSphere(() => ({
    args: 0.015,
    mass: 1,
    position: [position[0], position[1], position[2]],
    linearFactor: [0, 1, 1],
    linearDamping: 0,
    onCollide: bounce
  }))

  const paletteRef = useRef(palette)
  paletteRef.current = palette;
  function newPalette(): string[] {
    const randInt = Math.floor(Math.random()*palettes.length)
    return palettes[randInt] || palettes[randInt+1] || palettes[randInt-1];
  }

  function bounce(e: CollideEvent): void {
    if (!api) return;
    api.applyImpulse([0, position[1], 0], [0, -1, 0])
    trigger && setPalette(newPalette)
  }

  // Update displayPos Ref
  useEffect(() => {
    ACTIVE_DISPLAY && dPos.current.lerp(displayPosition, 0.9)
  }, [ACTIVE_DISPLAY])

  // Update currentPos Ref
  useEffect(() => {
    if (!collider.current || !api) return;
    api.applyForce([0, 0, 10], [0, 0, 1]);
    api.position.subscribe((p) => cPos.current.set(p[0], p[1], p[2]))
  }, [collider])

  const limiter = useLimiter(45);
  useFrame(({ clock }) => {
    if (!limiter.isReady(clock) || !collider.current || !mesh.current || !api || !cPos.current) return;
    if (ACTIVE_DISPLAY && !pSet.current) {
      // Putting Ball in place for display and turning motion off
      api.position.set(dPos.current.x, dPos.current.y, dPos.current.z);
      api.sleep()
      if (!pSet.current) pSet.current = true;
    } else if (cPos.current.z > 1.15) {
      // Respawning balls after the roll past the camera
      api.position.set(position[0], position[1], -1.25)
    } else if (pSet.current) {
      // Waking up Balls after closing display
      api.wakeUp();
      api.applyForce([0, 0, 10], [0, 0, 1]);
      pSet.current = false;
    }
    mesh.current.position.lerp(ACTIVE_DISPLAY ? dPos.current : cPos.current, 0.9)
    mesh.current.rotation.set(-clock.getElapsedTime()*3, 0, 0)
  })

  function toggleDisplay() {
    if (NO_ACTIVE_DISPLAY || ACTIVE_DISPLAY) {
      setDisplayKey(ACTIVE_DISPLAY ? null : index)
    }
  }

  return (
    <group>
      <group onClick={toggleDisplay}>
        <mesh ref={collider}>
          <sphereBufferGeometry args={[0.015, 32, 32]} />
          <meshBasicMaterial map={texture} visible={false} />
        </mesh>
        <mesh ref={mesh}>
          <sphereBufferGeometry args={[0.015, 32, 32]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </group>
      <animated.group scale={displaySize}>
        <Display i={0} />
      </animated.group>
    </group>
  )
}
