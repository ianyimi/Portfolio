import {useMatrixMat} from "./materials/matrix";
import {GroupProps} from "@react-three/fiber";
import {useEffect, useRef} from "react";
import {v4 as uuidv4} from "uuid";
import {useStore} from "@/utils/store";

export default function MatrixSky(props: GroupProps) {
  
  const uuid1 = useRef(uuidv4());
  const uuid2 = useRef(uuidv4());
  const {objectQueued, objectRendered} = useStore(state => ({
    objectQueued: state.objectQueued,
    objectRendered: state.objectRendered,
  }));
  const mat = useMatrixMat();
  const args = [4, 5, 2];
  
  useEffect(() => {
    
    objectQueued(uuid1.current);
    objectQueued(uuid2.current);
    
  }, []);
  
  return (
    <group {...props}>
      <mesh material={mat} position-x={0.75} rotation-y={Math.PI / 2}
            onAfterRender={() => objectRendered(uuid1.current)}>
        <planeBufferGeometry args={[args[0], args[1]]}/>
      </mesh>
      <mesh material={mat} position-x={-0.75} rotation-y={Math.PI / 2}
            onAfterRender={() => objectRendered(uuid2.current)}>
        <planeBufferGeometry args={[args[0], args[1]]}/>
      </mesh>
    </group>
  );
  
}
