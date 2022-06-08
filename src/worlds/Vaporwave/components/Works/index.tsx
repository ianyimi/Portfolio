import Ball from "./Ball";
import {useTexture} from "@react-three/drei";

const TEXTURES = [
  // "https://dqeczc7c9n9n1.cloudfront.net/images/oslogo.png",
  // "https://dqeczc7c9n9n1.cloudfront.net/images/oslogobg.png",
  "https://dqeczc7c9n9n1.cloudfront.net/images/oslogocollage.png",
  "https://dqeczc7c9n9n1.cloudfront.net/images/oslogocollagebg.png"
];

export default function Works() {
  const tex1 = useTexture(TEXTURES[Math.floor(Math.random()*TEXTURES.length)]);
  const tex2 = useTexture(TEXTURES[Math.floor(Math.random()*TEXTURES.length)]);
  return (
    <group>
      <Ball position={[0.05, 0.05, -1.15]} texture={tex1} />
      <Ball position={[-0.025, 0.1, -1.75]} texture={tex2} trigger />
    </group>
  )
}
