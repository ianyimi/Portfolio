import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload} from '@react-three/drei'
import useStore from '@/helpers/store'
import {useEffect, useRef} from 'react'
import {Props as ContainerProps} from "@react-three/fiber/dist/declarations/src/web/Canvas";
import {Vector3, Quaternion} from "three";

const LControl = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)
  
  useEffect(() => {
    if (control.current) {
      // @ts-ignore
      const domElement = dom.current
      const originalTouchAction = domElement.style['touch-action']
      domElement.style['touch-action'] = 'none'
      
      return () => {
        domElement.style['touch-action'] = originalTouchAction
      }
    }
  }, [dom, control])
  // @ts-ignore
  return <OrbitControls ref={control} domElement={dom.current}/>
}

const LCanvas = ({children}) => {
  const dom = useStore((state) => state.dom);
  
  const position = new Vector3(2.05, 1.0920, 2.2795),
    quaternion = new Quaternion(-0.08214, 0.21672, 0.01830, 0.9725);
  const defaultCanvasProps: Partial<ContainerProps> = {
    gl: {
      powerPreference: "high-performance",
      antialias: true,
      depth: true,
      // alpha: false,
      stencil: false,
    },
    camera: {
      near: 0.01,
      far: 200,
      fov: 75,
      // position: position,
      // quaternion: quaternion,
    },
    // resize: {polyfill: ResizeObserver},
    // dpr: window.devicePixelRatio,
    events: undefined,
  };
  
  return (
    <Canvas
      {...defaultCanvasProps}
      // mode='concurrent'
      style={{
        position: 'absolute',
        top: 0,
      }}
      // @ts-ignore
      onCreated={(state) => state.events.connect(dom.current)}
    >
      {/*<LControl/>*/}
      <Preload all/>
      {children}
    </Canvas>
  )
}

export default LCanvas
