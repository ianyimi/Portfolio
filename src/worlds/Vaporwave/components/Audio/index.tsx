import { useEffect, useMemo, useRef, useState } from "react";
import { GroupProps, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Audio, AudioAnalyser } from "three";
import { playlists } from "./utils/constants";
import { useLimiter } from "spacesvr";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import { useAudioStore } from "./utils/store";

type SoundProps = {
  volume?: number;
  fftSize?: 64 | 128 | 256 | 512 | 1024 | 2048;
} & GroupProps;

export default function Sound( props: SoundProps ) {

	const {
		volume = 1,
		fftSize = 128,
		...rest
	} = props;
	const clicked = useRef( false );
	const isMounted = useRef( false );
	const { playlist, setPalette, setAudioSrc, setAa, paused, setPaused } = useStore( ( state: any ) => ( {
		playlist: state.playlist,
		setPalette: state.setPalette,
		setAudioSrc: state.setAudioSrc,
		setAa: state.setAa,
		paused: state.paused,
		setPaused: state.setPaused,
	} ), shallow );
	const camera = useThree( state => state.camera );
	const newPalette = (): string[] => {

		const palettes = playlist.palettes;
		return palettes[ ( palettes.indexOf( playlist.palette ) + 1 ) % palettes.length ];

	};

	// @ts-ignore
	let songs = useMemo( () => JSON.parse( JSON.stringify( playlists[ `${playlist.id}` ] ) ), [ playlist.id ] );
	const newUrlIndex = () => {

		return Math.floor( Math.random() * songs.length );

	};

	const [ speaker, setSpeaker ] = useState<Audio>();
	const [ urlIndex, setUrlIndex ] = useState<number>( newUrlIndex );
	const [ end, setEnd ] = useState( false );
	const [ controlLock, setControlLock ] = useState( false );

	// @ts-ignore
	const api = useAudioStore( state => state.api );

	const audio = useMemo( () => {

		const a = document.createElement( "audio" );

		a.autoplay = true;
		a.preload = "auto";
		a.crossOrigin = "Anonymous";
		a.loop = false;
		return a;

	}, [] );

	useEffect( () => {

		if ( paused ) {

			audio.pause();
			// speaker?.setVolume( 0 );
			! controlLock && setControlLock( true );

		} else {

			// speaker?.setVolume( 1 );
			audio.play();
			controlLock && setControlLock( false );

		}

	}, [ paused ] );

	useEffect( () => {

		if ( ! isMounted.current ) {

			isMounted.current = true;
			return;

		}

		setEnd( true );
		setControlLock( false );

	}, [ playlist.id ] );

	useEffect( () => {

		if ( ! end ) return;
		if ( songs.length === 0 ) {

			// @ts-ignore
			songs = JSON.parse( JSON.stringify( playlists[ `${playlist.id}` ] ) );

		}

		setUrlIndex( newUrlIndex() );
		setPalette( newPalette() );
		setEnd( false );
		setPaused( false );
		clicked.current = true;

	}, [ end ] );

	useEffect( () => {

		if ( paused || controlLock ) return;

		const url = songs.splice( urlIndex, 1 )[ 0 ];
		setAudioSrc( url );

		// createAudio( url, camera, setAa );
		api.load( url );

		const setupAudio = async () => {

			if ( ! audio.paused && ! speaker ) {

				// audio.src = url;

				const res = await fetch( url );
				const buffer = await res.arrayBuffer();
				// @ts-ignore
				const context = new ( window.AudioContext || window.webkitAudioContext )();
				const analyser = new AnalyserNode( context, { fftSize: 2048 } );
				const data = new Uint8Array( analyser.frequencyBinCount );
				const source = context.createBufferSource();
				source.buffer = await new Promise( ( res ) => context.decodeAudioData( buffer, res ) );
				source.loop = false;

				const listener = new THREE.AudioListener();
				camera.add( listener );

				const speak = new Audio( listener );
				speak.setNodeSource( source );
				speak.setVolume( volume );

				const aa = new AudioAnalyser( speak, fftSize );
				aa.analyser = analyser;

				setAa( aa );

				setSpeaker( speak );

			}

		};

		const playAudio = () => {

			if ( paused || clicked.current ) return;
			audio.play().then( () => setupAudio() );
			clicked.current = true;

		};

		if ( audio ) {

			audio.setAttribute( "src", url );
			audio.play().then( () => setupAudio() );
			document.addEventListener( "click", playAudio );
			return () => {

				document.removeEventListener( "click", playAudio );

			};

		}

	}, [ speaker, audio, urlIndex, paused ] );

	useEffect( () => {

		if ( ! speaker ) return;
		speaker.setVolume( volume );

	}, [ volume ] );

	const limiter = useLimiter( 15 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) || ! audio ) return;
		if ( ! end && audio.ended ) setEnd( true );

	} );


	return (
		<group name="spacesvr-audio" {...rest}>
			{/*{speaker && <primitive object={speaker}/>}*/}
		</group>
	);

}

const createAudio = async ( url: string, setAa: ( aa: AudioAnalyser | AnalyserNode ) => void ) => {

	const res = await fetch( url );
	const buffer = await res.arrayBuffer();
	// @ts-ignore
	const context = new ( window.AudioContext || window.webkitAudioContext )();
	const analyser = new AnalyserNode( context, { fftSize: 2048 } );
	const data = new Uint8Array( analyser.frequencyBinCount );
	const source = context.createBufferSource();
	source.buffer = await new Promise( ( res ) => context.decodeAudioData( buffer, res ) );
	source.loop = false;
	const gainNode = context.createGain();
	gainNode.gain.value = 1;
	gainNode.connect( context.destination );
	source.connect( analyser );
	analyser.connect( gainNode );

	setAa( await source && analyser );

	const state = {
		source,
		data,
		gain: 1,
		volume: 0,
		avg: 0,
		update: () => {

			let value = 0;
			analyser.getByteFrequencyData( data );
			for ( let i = 0; i < data.length; i ++ ) value += data[ i ];
			state.volume = value;
			state.avg = value / data.length;

		},
		setGain( level: number ) {

			gainNode.gain.setValueAtTime( ( state.gain = level ), context.currentTime );

		},
	};

	// return state;

};

// const mockData = () => ( { signal: false, avg: 0, gain: 1, data: [] } );

// const useStore = create( ( set, get ) => {
//
// 	const { playlist, setPalette, setAudioSrc, setAa, paused, setPaused } = useStore( ( state: any ) => ( {
// 		playlist: state.playlist,
// 		setPalette: state.setPalette,
// 		setAudioSrc: state.setAudioSrc,
// 		setAa: state.setAa,
// 		paused: state.paused,
// 		setPaused: state.setPaused,
// 	} ), shallow );
// 	const camera = useThree( ( state ) => state.camera );
// 	const songs = useMemo( () => JSON.parse( JSON.stringify( playlists[ `${playlist.id}` ] ) ), [ playlist.id ] );
// 	const newUrlIndex = () => {
//
// 		return Math.floor( Math.random() * songs.length );
//
// 	};
//
// 	const [ speaker, setSpeaker ] = useState<Audio>();
// 	const [ urlIndex, setUrlIndex ] = useState<number>( newUrlIndex );
// 	const url = songs.splice( urlIndex, 1 )[ 0 ];
// 	const audio = createAudio( url, camera, setAa );
//
// 	return {
// 		loaded: false,
// 		clicked: false,
// 		audio: mockData(),
// 		api: {
// 			async loaded() {
//
// 				set( {
// 					loaded: true,
// 					audio: await audio,
// 				} );
//
// 			},
// 			start() {
//
// 				// @ts-ignore
// 				const audio = get().audio;
// 				audio.source.start( 0 );
// 				set( { clicked: true } );
// 				addEffect( () => {
//
// 					audio.update();
//
// 				} );
//
// 			},
// 		},
// 	};
//
// } );
//
// export default useStore;

