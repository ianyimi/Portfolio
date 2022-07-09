import * as THREE from "three";
import { AudioAnalyser, ShaderMaterial, Vector3 } from "three";
import { Playlist, playlists } from "../worlds/Vaporwave/utils/constants";
import create from "zustand";
import produce from "immer";

export type StoreState = {
  playlist: Playlist,
  setPlaylist: ( playlist: Playlist ) => void,
  setPalette: ( palette: string[] ) => void,
  display: number | null,
  setDisplay: ( value: number | null ) => void,
  audioSrc: string,
  setAudioSrc: ( src: string ) => void,
  audioData: HTMLAudioElement | undefined,
  setAudioData: ( data: HTMLAudioElement ) => void,
  paused: boolean,
  setPaused: ( paused: boolean ) => void,
  aa: AudioAnalyser | undefined,
  setAa: ( aa: AnalyserNode ) => void,
  shaders: ShaderMaterial[],
  addShader: ( s: ShaderMaterial ) => void,
  // modifyShader: ( s: ShaderMaterial ) => void,
  getSpeed: () => number,
  getVolume: () => number,
  getProgress: () => number,
  hexToVec3: ( color: string ) => Vector3
}

export const useStore = create<StoreState>()( ( set: any, get: any ) => {

	return {
		playlist: startPlaylist(),
		setPlaylist: ( playlist: Playlist ) => set(
			() => ( { playlist: playlist } )
		),
		setPalette: ( palette: string[] ) => set(
			produce( ( state: StoreState ) => {

				state.playlist.palette = palette;

			} )
		),
		display: null,
		setDisplay: ( id: number | null ) => set(
			() => ( { display: id } )
		),
		audioSrc: "",
		setAudioSrc: ( src: string ) => set(
			() => ( { audioSrc: src } )
		),
		audioData: undefined,
		setAudioData: ( data: HTMLAudioElement ) => set(
			() => ( { audioData: data } )
		),
		paused: false,
		setPaused: ( paused: boolean ) => set(
			() => ( { paused: paused } )
		),
		aa: undefined,
		setAa: ( aa: AnalyserNode | AudioAnalyser ) => set(
			() => ( { aa: aa } )
		),
		shaders: [],
		addShader: ( s: ShaderMaterial ) => {

			const nextFogColor = get().playlist.palettes[ ( get().playlist.palettes.indexOf( get().playlist.palette ) + 1 ) % get().playlist.palettes.length ][ get().playlist.backgroundColorIndex ];
			s.uniforms.nextFogColor = { value: new THREE.Color( nextFogColor ) };
			s.uniforms.fogTime = { value: 0 };
			s.uniforms.progress = { value: 0 };

			const newShaders = get().shaders;
			newShaders.push( s );
			// console.log( newShaders );
			set( () => ( { shaders: newShaders } ) );

		},
		getSpeed: () => {

			if ( ! get().aa ) return 1.5;
			// const data = new Uint8Array( get().aa.frequencyBinCount );
			// get().aa.getByteFrequencyData( data );
			const data = get().aa.getFrequencyData();
			const volume = get().getVolume();
			const variable = get().playlist.id === "beenTurnt" ? data ? data[ 0 ] / 255 : 0 : volume;

			return variable > 0.6 ?
				0.5 - 0.15 * variable : variable > 0.3 ?
					1 : 1.5;

		},
		getVolume: () => {

			if ( ! get().aa ) return 0;
			// const data = new Uint8Array( get().aa.frequencyBinCount );
			// get().aa.getByteFrequencyData( data );
			const data = get().aa.getFrequencyData();
			let sum = 0;
			for ( const num of data ) {

				sum += num;

			}

			return sum / 100000;

		},
		getProgress: () => {

			if ( ! get().audioData ) return 0;
			return Math.floor( 10000 * get().audioData.currentTime / get().audioData.duration ) / 10000;

		},
		hexToVec3: ( hex: string ) => {

			const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
			return result ? new Vector3(
				Math.floor( parseInt( result[ 1 ], 16 ) / 255 * 1000 ) / 1000,
				Math.floor( parseInt( result[ 2 ], 16 ) / 255 * 1000 ) / 1000,
				Math.floor( parseInt( result[ 3 ], 16 ) / 255 * 1000 ) / 1000
			) : new Vector3( 0., 0., 0. );

		}
	};

} );


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
