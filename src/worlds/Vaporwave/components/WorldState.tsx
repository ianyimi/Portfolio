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
import create from "zustand";
import produce from "immer";

export type WorldState = {
	// lights: MutableRefObject<any>[],
	// setLights: any,
	// bloomObjects: MutableRefObject<any>[],
	// setBloomObjects: any,
	playlist: Playlist,
	setPlaylist: any,
	// speed: number,
	// setSpeed: any,
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
	const [ playlist, setPlaylist ] = useState( startPlaylist() );
	// const [ speed, setSpeed ] = useState<number>( 0 );
	const [ aa, setAa ] = useState<AudioAnalyser>();
	const getVolume = ( data?: Uint8Array ) => {

		if ( ! data ) return 0;
		let sum = 0;
		for ( const num of data ) {

			sum += num;

		}

		return sum / 100000;

	};

	const useStore = create<any>( ( set: any, get: any ) => ( {
		// lights: [ lightRef1, lightRef2 ],
		// setLights: ( lightRef: MutableRefObject<any> ) => set(
		// 	( prev ) => ( { lights: [ ...prev.lights, lightRef ] } )
		// ),
		playlist: playlists[ 0 ],
		setPlaylist: ( playlist: Playlist ) => set(
			() => ( { playlist: playlist } )
		),
		setPalette: ( palette: string[] ) => set(
			produce( ( state: any ) => {

				state.playlist.palette = palette;

			} )
		),
		aa: undefined,
		setAa: ( aa: AudioAnalyser ) => set(
			() => ( { aa: aa } )
		),
		getVolume: () => {

			if ( ! aa ) return 0;
			const data = get().aa.getFrequencyData();
			let sum = 0;
			for ( const num of data ) {

				sum += num;

			}

			return sum / 100000;

		}

	} ) );


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

function startPlaylist() {

	const randomItem = ( arr: any[] ): any => {

		return arr[ Math.floor( Math.random() * arr.length ) ];

	};

	const zeroPlaylist = playlists[ 1 ];
	const firstPlaylist = {
		...zeroPlaylist,
		palette: randomItem( zeroPlaylist.palettes )
	};
	return firstPlaylist;

}
