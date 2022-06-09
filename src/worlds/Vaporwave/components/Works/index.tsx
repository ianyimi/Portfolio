import Ball from "./Ball";
import {useTexture} from "@react-three/drei";
import {useState} from "react";

const TEXTURES = [
  // "https://dqeczc7c9n9n1.cloudfront.net/images/oslogo.png",
  // "https://dqeczc7c9n9n1.cloudfront.net/images/oslogobg.png",
  "https://dqeczc7c9n9n1.cloudfront.net/images/oslogocollage.png",
  "https://dqeczc7c9n9n1.cloudfront.net/images/oslogocollagebg.png"
];

export default function Works() {
  const [displayKey, setDisplayKey] = useState<number | null>(null)
  const tex1 = useTexture(TEXTURES[0]);
  const tex2 = useTexture(TEXTURES[1]);

  return (
    <group>
      <Ball position={[0.075, 0.05, -1.15]} texture={tex1} displayKey={displayKey} setDisplayKey={setDisplayKey} index={0} />
      <Ball position={[-0.025, 0.1, -1.75]} texture={tex2} displayKey={displayKey} setDisplayKey={setDisplayKey} index={1} trigger />
    </group>
  )
}
