import { useCallback, useEffect, useRef, useState } from "react";
import { GroupProps, useThree } from "@react-three/fiber";
import { Audio, AudioAnalyser, AudioListener } from "three";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import { playlists } from "./utils/constants";

type MusicProps = {
  volume?: number;
  fftSize?: 64 | 128 | 256 | 512 | 1024 | 2048;
} & GroupProps;

export default function Sound( props: MusicProps ) {

	const {
		volume = 1.25,
		fftSize = 128,
		...restProps
	} = props;

	const clicked = useRef( false );
	const isMounted = useRef( false );

	const { clock, camera } = useThree();

	const { playlist, setPalette, setAudioSrc, setAa, paused, setPaused } = useStore( ( state: any ) => ( {
		playlist: state.playlist,
		setPalette: state.setPalette,
		setAudioSrc: state.setAudioSrc,
		setAa: state.setAa,
		paused: state.paused,
		setPaused: state.setPaused,
	} ), shallow );

	const newPalette = (): string[] => {

		const palettes = playlist.palettes;
		return palettes[ ( palettes.indexOf( playlist.palette ) + 1 ) % palettes.length ];

	};

	// @ts-ignore
	let songs = JSON.parse( JSON.stringify( playlists[ `${playlist.id}` ] ) );
	const newSongUrl = useCallback( () => {

		return songs.splice( Math.floor( Math.random() * songs.length ), 1 )[ 0 ];

	}, [ playlist.id ] );

	const threeAudioRef = useRef<Audio>();
	const [ threeAudio, setThreeAudio ] = useState<Audio>();
	const audioRef = useRef<HTMLAudioElement>();
	const [ audio, setAudio ] = useState<HTMLAudioElement>();
	const listenerRef = useRef<AudioListener>();
	const [ url, setUrl ] = useState( newSongUrl() );

	// mount
	useEffect( () => {

		if ( threeAudio ) return;

		const createSpeaker = () => {

			const listener = new AudioListener();
			camera.add( listener );

			const audioElement = document.createElement( "audio" );
			audioElement.src = url;
			audioElement.autoplay = false;
			audioElement.preload = "auto";
			audioElement.crossOrigin = "Anonymous";
			audioElement.loop = false;
			audioElement.onended = () => {

				if ( songs.length === 0 ) {

					// @ts-ignore
					songs = JSON.parse( JSON.stringify( playlists[ `${playlist.id}` ] ) );

				}

				setPalette( newPalette() );
				setUrl( newSongUrl() );
				setPaused( false );
				clicked.current = true;

			};

			audioElement.play().then( () => {

				// sync audio in case the same audio is uploaded elsewhere
				audioElement.currentTime =
          clock.getElapsedTime() % audioElement.duration;

			} );

			const audio = new Audio( listener );
			audio.setMediaElementSource( audioElement );

			// set audio analyser
			setAa( new AudioAnalyser( audio, fftSize ) );

			setAudio( audioElement );
			audioRef.current = audioElement;
			setThreeAudio( audio );
			threeAudioRef.current = audio;
			listenerRef.current = listener;

		};

		document.addEventListener( "click", createSpeaker );
		document.addEventListener( "touchstart", createSpeaker );
		return () => {

			document.removeEventListener( "click", createSpeaker );
			document.removeEventListener( "touchstart", createSpeaker );

		};

	}, [ threeAudio ] );

	// unmount
	useEffect( () => {

		return () => {

			const _listener = listenerRef.current;
			if ( _listener ) {

				camera.remove( _listener );

			}

			const _audio = audioRef.current;
			if ( _audio ) {

				_audio.pause();
				_audio.remove();

			}

			const _sound = threeAudioRef.current;
			if ( _sound ) {

				if ( _sound.isPlaying ) _sound.stop();
				if ( _sound.source && ( _sound.source as any )._connected )
					_sound.disconnect();

			}

		};

	}, [] );

	// update url param
	useEffect( () => {

		if ( ! audio || audio.src === url ) return;

		audio.setAttribute( "src", url );
		audio.play().then( () => {

			// sync audio in case the same audio is uploaded elsewhere
			audio.currentTime = clock.getElapsedTime() % audio.duration;

		} );

	}, [ audio, url ] );

	useEffect( () => {

		setUrl( newSongUrl() );

	}, [ playlist.id ] );

	useEffect( () => {

		if ( ! audio ) return;
		if ( paused ) {

			audio.pause();
			// speaker?.setVolume( 0 );
			// ! controlLock && setControlLock( true );

		} else {

			// speaker?.setVolume( 1 );
			audio.play();
			// controlLock && setControlLock( false );

		}

	}, [ paused ] );

	// update positional params
	if ( threeAudio ) {

		threeAudio.setVolume( volume );

	}

	return (
		<group {...restProps}>{threeAudio && <primitive object={threeAudio}/>}</group>
	);

}
