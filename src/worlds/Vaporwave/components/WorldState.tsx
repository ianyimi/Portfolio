import {
	createContext,
	Dispatch,
	MutableRefObject,
	ReactNode,
	SetStateAction,
	useContext,
	useRef,
	useState
} from "react";
import { AudioAnalyser } from "three";
import { Playlist, playlists } from "../utils/constants";

export type WorldState = {
  lights: MutableRefObject<any>[],
  setLights: Dispatch<SetStateAction<MutableRefObject<any>[]>>,
  bloomObjects: MutableRefObject<any>[],
  setBloomObjects: Dispatch<SetStateAction<MutableRefObject<any>[]>>,
  playlist: Playlist,
  setPlaylist: Dispatch<SetStateAction<Playlist>>,
  speed: number,
  setSpeed: Dispatch<SetStateAction<number>>,
  aa?: AudioAnalyser,
  setAa?: Dispatch<SetStateAction<AudioAnalyser | undefined>>,
  getVolume: ( data?: ( Uint8Array | undefined ) ) => any
}

export const WorldContext = createContext( {} as WorldState );
export const useWorld = (): WorldState => useContext( WorldContext );

type WorldStateProps = {
  children: ReactNode | ReactNode[]
}

export default function WorldState( props: WorldStateProps ) {

	const { children } = props;

	const lightRef1 = useRef();
	const lightRef2 = useRef();
	const [ lights, setLights ] = useState<MutableRefObject<any>[]>( [ lightRef1, lightRef2 ] );
	const [ bloomObjects, setBloomObjects ] = useState<MutableRefObject<any>[]>( [] );
	const [ playlist, setPlaylist ] = useState( { ...playlists[ 0 ], palette: playlists[ 0 ].palettes[ 0 ] } );
	const [ speed, setSpeed ] = useState<number>( 0 );
	const [ aa, setAa ] = useState<AudioAnalyser>();
	const getVolume = ( data?: Uint8Array ) => {

		if ( ! data ) return 0;
		let sum = 0;
		for ( const num of data ) {

			sum += num;

		}

		return sum / 10000;

	};


	return (
		<WorldContext.Provider value={{
			lights,
			setLights,
			bloomObjects,
			setBloomObjects,
			playlist,
			setPlaylist,
			speed,
			setSpeed,
			aa,
			setAa,
			getVolume
		}}>
			{children}
		</WorldContext.Provider>
	);

}
