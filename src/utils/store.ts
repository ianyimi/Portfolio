import { AudioAnalyser, Vector3 } from "three";
import { Playlist, playlists } from "../worlds/Vaporwave/utils/constants";
import create from "zustand";
import produce from "immer";
import { addEffect } from "@react-three/fiber";

export type StoreState = {
	os: string | undefined,
	playlist: Playlist,
	setPlaylist: ( playlist: Playlist ) => void,
	setPalette: ( palette: string[] ) => void,
	display: number | null,
	setDisplay: ( value: number | null ) => void,
	audioSrc: string,
	setAudioSrc: ( src: string ) => void,
	paused: boolean,
	setPaused: ( paused: boolean ) => void,
	aa: AudioAnalyser | undefined,
	setAa: ( aa: AnalyserNode ) => void,
	enter: boolean,
	toggleEnter: () => void,
	storyControls: any,
	setControls: ( controls: any ) => void,
	sectionDelays: number[],
	currentSection: { name: string, poi: number, delay: number } | null,
	previousSection: { name: string, poi: number, delay: number } | null,
	setCurrentSection: ( section: { name: string, poi: number, delay: number } | null, prevId?: number ) => void,
	animating: boolean,
	setAnimationStatus: ( status: boolean ) => void,
	loaded: string[],
	progress: number,
	objectRendered: ( id: string ) => void,
	loadTotal: string[],
	objectQueued: ( id: string ) => void,
	getSpeed: () => number,
	getVolume: () => number,
	hexToVec3: ( color: string ) => Vector3,
}

let os: string | undefined = undefined;

export const useStore = create<StoreState>()( ( set: any, get: any ) => {

	if ( os === undefined && navigator.appVersion.indexOf( "Win" ) !== - 1 ) {

		os = "Win";

	} else if ( os === undefined && navigator.appVersion.indexOf( "Mac" ) !== - 1 ) {

		os = "Mac";

	}

	const handlePos = [
		new Vector3( 1, 0, - 1 ),
		new Vector3( 1, 0, 1 ),
		new Vector3( - 1, 0, 1 ),
		new Vector3( - 1, 0, - 1 )
	];

	return {
		os: os,
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
		paused: false,
		setPaused: ( paused: boolean ) => set(
			() => ( { paused: paused } )
		),
		aa: undefined,
		setAa: ( aa: AnalyserNode | AudioAnalyser ) => set(
			() => ( { aa: aa } )
		),
		enter: false,
		toggleEnter: () => set( () => ( { enter: true } ) ),
		storyControls: undefined,
		setControls: ( controls: any ) => {

			set( () => ( { storyControls: controls } ) );
			// addEffect( () => {
			//
			// 	console.log( get().storyControls );
			// 	if ( get().previousSection && get().storyControls.cameraRig.isMoving() ) {
			//
			// 		if ( ! get().animating ) set( () => ( { animating: true } ) );
			//
			// 	} else if ( get().animating ) {
			//
			// 		set( () => ( { animating: false } ) );
			//
			// 	}
			//
			// } );

		},
		sectionDelays: [ 500, 0, 0 ],
		currentSection: { name: "Home", poi: 0, delay: 1000 },
		previousSection: null,
		setCurrentSection: ( section: { name: string, poi: number, delay: number } | null, prevId?: number ) => set( () => ( {
			previousSection: prevId ? prevId : get().currentSection,
			currentSection: section
		} ) ),
		animating: false,
		setAnimationStatus: ( status: boolean ) => set( () => ( { animating: status } ) ),
		loaded: [],
		progress: 0,
		objectRendered: ( id: string ) => {

			if ( get().loaded.includes( id ) || id === "" ) return;
			console.log( "loaded: " + ( get().loaded.length + 1 ) + "/" + get().loadTotal.length );
			const newLoaded = get().loaded;
			newLoaded.push( id );
			set(
				() => ( {
					loaded: newLoaded,
					progress: get().loaded.length >= get().loadTotal ? 100 : Math.floor( 100 * get().loaded.length / get().loadTotal.length ),
				} )
			);

		},
		loadTotal: [],
		objectQueued: ( id: string ) => {

			if ( get().loadTotal.includes( id ) || id === "" ) return;
			console.log( "queueing: " + ( get().loadTotal.length + 1 ) + " items" );
			console.log( "progress: " + get().progress );
			const newLoadTotal = get().loadTotal;
			newLoadTotal.push( id );
			set(
				() => ( {
					loadTotal: newLoadTotal,
					progress: get().loaded.length >= get().loadTotal ? 100 : Math.floor( 100 * get().loaded.length / get().loadTotal.length ),
				} )
			);
			console.log( "progress: " + get().progress );

		},
		getSpeed: () => {

			if ( ! get().aa ) return 1.5;
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

	const zeroPlaylist = playlists[ 2 ];
	const firstPlaylist = {
		...zeroPlaylist,
		palette: randomItem( zeroPlaylist.palettes )
	};
	return firstPlaylist;

}
