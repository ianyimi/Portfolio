import { useEffect, useMemo, useState } from "react";
import { GroupProps, useFrame, useThree } from "@react-three/fiber";
import { Audio, AudioAnalyser, AudioListener } from "three";
import { playlists } from "./utils/constants";
import { useLimiter } from "spacesvr";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";

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
	let songs = useMemo( () => JSON.parse( JSON.stringify( playlists[ `${playlist.id}` ] ) ), [ playlist.id ] );
	const newUrlIndex = () => {

		return Math.floor( Math.random() * songs.length );

	};

	const [ speaker, setSpeaker ] = useState<Audio>();
	const [ urlIndex, setUrlIndex ] = useState<number>( newUrlIndex );
	const camera = useThree( ( state ) => state.camera );
	const [ end, setEnd ] = useState( false );
	const [ controlLock, setControlLock ] = useState( false );


	const audio = useMemo( () => {

		const a = document.createElement( "audio" );

		a.autoplay = true;
		a.preload = "auto";
		a.crossOrigin = "Anonymous";
		a.loop = false;
		return a;

	}, [] );

	useEffect( () => {

		console.log( paused );
		if ( paused ) {

			audio.pause();
			! controlLock && setControlLock( true );

		} else {

			audio.play();
			controlLock && setControlLock( false );

		}

	}, [ paused ] );

	useEffect( () => {

		setUrlIndex( newUrlIndex() );
		setPaused( false );
		setEnd( false );

	}, [ playlist.id ] );

	useEffect( () => {

		if ( songs.length === 0 ) { // @ts-ignore

			songs = JSON.parse( JSON.stringify( playlists[ `${playlist.id}` ] ) );

		}

		if ( ! end ) return;
		setUrlIndex( newUrlIndex() );
		setPalette( newPalette() );
		setEnd( false );

	}, [ end ] );

	useEffect( () => {

		if ( paused || controlLock ) return;

		const url = songs.splice( urlIndex, 1 )[ 0 ];
		setAudioSrc( url );

		const setupAudio = () => {

			if ( ! audio.paused && ! speaker ) {

				audio.src = url;

				const listener = new AudioListener();
				camera.add( listener );

				const speak = new Audio( listener );
				speak.setMediaElementSource( audio );
				speak.setVolume( volume );

				setAa( new AudioAnalyser( speak, fftSize ) );

				setSpeaker( speak );

			}

		};

		const playAudio = () => {

			console.log( paused );
			if ( paused ) return;
			audio.play().then( () => setupAudio() );

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
			{speaker && <primitive object={speaker}/>}
		</group>
	);

}

