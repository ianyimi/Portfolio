import {GroupProps} from "@react-three/fiber";

type PlanetProps = {
  planet: "Molten" | "Stormy" | "Starry" | "Cloudy"
}

export default function Planet(props: PlanetProps) {
  
  
  return (
    <group {...props}>
    
    
    </group>
  )
  
}
