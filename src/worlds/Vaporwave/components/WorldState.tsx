import {
  createContext,
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useContext, useEffect,
  useRef,
  useState
} from "react";
import { Vector3 } from "three";
import { palettes } from "../utils/constants";

export type WorldState = {
  lights: MutableRefObject<any>[],
  setLights: Dispatch<SetStateAction<MutableRefObject<any>[]>>,
  bloomObjects: MutableRefObject<any>[],
  setBloomObjects: Dispatch<SetStateAction<MutableRefObject<any>[]>>,
  palette: string[],
  setPalette: Dispatch<SetStateAction<string[]>>,
  themeIntensity: number,
  setThemeIntensity: Dispatch<SetStateAction<number>>
}

export const WorldContext = createContext({} as WorldState);
export const useWorld = (): WorldState => useContext(WorldContext);

type WorldStateProps = {
  children: ReactNode | ReactNode[]
}

export default function WorldState(props: WorldStateProps) {
  const { children } = props;

  const lightRef1 = useRef();
  const lightRef2 = useRef();
  const [lights, setLights] = useState<MutableRefObject<any>[]>([lightRef1, lightRef2]);
  const [bloomObjects, setBloomObjects] = useState<MutableRefObject<any>[]>([]);
  const [palette, setPalette] = useState(palettes[0])
  const [themeIntensity, setThemeIntensity] = useState<number>(0)


  return (
    <WorldContext.Provider value={{lights, setLights, bloomObjects, setBloomObjects, palette, setPalette, themeIntensity, setThemeIntensity}}>
      {children}
    </WorldContext.Provider>
  )
}
