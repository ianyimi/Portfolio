import { useEffect, useRef, useState } from "react";
import { GroupProps, useFrame, useThree } from "@react-three/fiber";
import { Audio, AudioAnalyser, AudioListener } from "three";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import { playlists } from "./utils/constants";
import { useLimiter } from "spacesvr";

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

	// @ts-ignore
	let songs = JSON.parse( JSON.stringify( playlists[ `${playlist.id}` ] ) );

	const newSongUrl = () => {

		return songs.splice( Math.floor( Math.random() * songs.length ), 1 )[ 0 ];

	};

	const newPalette = (): string[] => {

		const palettes = playlist.palettes;
		return palettes[ ( palettes.indexOf( playlist.palette ) + 1 ) % palettes.length ];

	};

	const threeAudioRef = useRef<Audio>();
	const [ threeAudio, setThreeAudio ] = useState<Audio>();
	const audioRef = useRef<HTMLAudioElement>();
	const [ audio, setAudio ] = useState<HTMLAudioElement>();
	const listenerRef = useRef<AudioListener>();
	const [ url, setUrl ] = useState( newSongUrl() );
	const [ end, setEnd ] = useState( false );

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

    document.getElementById( "enter" )?.addEventListener( "click", createSpeaker );
    document.getElementById( "enter" )?.addEventListener( "touchstart", createSpeaker );
    return () => {

      document.getElementById( "enter" )?.removeEventListener( "click", createSpeaker );
      document.getElementById( "enter" )?.removeEventListener( "touchstart", createSpeaker );

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
		setAudioSrc( url );
		audio.play();

	}, [ audio, url ] );

	useEffect( () => {

		setUrl( newSongUrl() );
		setPaused( false );

	}, [ playlist.id ] );

	useEffect( () => {

		if ( ! audio ) return;
		if ( paused ) {

			audio.pause();

		} else {

			audio.play();

		}

	}, [ paused ] );

	useEffect( () => {

		if ( ! end ) return;
		if ( songs.length === 0 ) {

			// @ts-ignore
			songs = JSON.parse( JSON.stringify( playlists[ `${playlist.id}` ] ) );

		}

		setPalette( newPalette() );
		setUrl( newSongUrl() );
		setEnd( false );
		setPaused( false );

	}, [ end ] );

	const limiter = useLimiter( 15 );
	useFrame( ( { clock } ) => {

		if ( ! limiter.isReady( clock ) || ! audio ) return;
		if ( ! end && audio.ended ) setEnd( true );

	} );

	// update audio params
	if ( threeAudio ) {

		threeAudio.setVolume( volume );

	}

	return (
		<group {...restProps}>{threeAudio && <primitive object={threeAudio}/>}</group>
	);

}
