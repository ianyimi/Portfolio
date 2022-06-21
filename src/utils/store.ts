import { AudioAnalyser, Vector3 } from "three";
import { Playlist, playlists } from "../worlds/Vaporwave/utils/constants";
import create from "zustand";
import produce from "immer";

export type StoreState = {
	playlist: Playlist,
	setPlaylist: ( playlist: Playlist ) => void,
	setPalette: ( palette: string[] ) => void,
	aa: AudioAnalyser | undefined,
	setAa: ( aa: AudioAnalyser ) => void,
	getVolume: () => number,
	hexToVec3: ( color: string ) => Vector3
}

export const useStore = create<StoreState>()( ( set: any, get: any ) => ( {
	playlist: startPlaylist(),
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

		if ( ! get().aa ) return 0;
		const data = get().aa.getFrequencyData();
		let sum = 0;
		for ( const num of data ) {

			sum += num;

		}

		return sum / 100000;

	},
	hexToVec3: ( hex: string ) => {

		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
		return result ? new Vector3(
			Math.floor( parseInt( result[ 1 ], 16 ) / 255 * 1000 ) / 1000,
			Math.floor( parseInt( result[ 2 ], 16 ) / 255 * 1000 ) / 1000,
			Math.floor( parseInt( result[ 3 ], 16 ) / 255 * 1000 ) / 1000
		) : new Vector3( 0., 0., 0. );

	}

} ) );


function startPlaylist() {

	const randomItem = ( arr: any[] ): any => {

		return arr[ Math.floor( Math.random() * arr.length ) ];

	};

	const zeroPlaylist = playlists[ 2 ];
	const firstPlaylist = {
		...zeroPlaylist,
		palette: randomItem( zeroPlaylist.palettes )
	};
	return firstPlaylist;

}
