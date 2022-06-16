import { useEffect, useMemo, useState } from "react";
import { GroupProps, useFrame, useThree } from "@react-three/fiber";
import { Audio, AudioAnalyser, AudioListener } from "three";
import { lateNights } from "./utils/constants";
import { useLimiter } from "spacesvr";
import { useWorld } from "../WorldState";

type SoundProps = {
  volume?: number;
  setAudioAnalyser?: ( aa: AudioAnalyser ) => void;
  fftSize?: 64 | 128 | 256 | 512 | 1024;
} & GroupProps;

export default function Sound( props: SoundProps ) {

	const {
		volume = 1,
		setAudioAnalyser,
		fftSize = 128,
		...rest
	} = props;
	const { playlist, setPlaylist } = useWorld();
	const newPalette = (): string[] => {

		const palettes = playlist.palettes;
		const randInt = Math.floor( Math.random() * palettes.length );
		if ( randInt === palettes.indexOf( playlist.palette ) ) {

			console.log( "same palette" );
			return palettes[ randInt + 1 ] || palettes[ randInt - 1 ];

		}

		return palettes[ randInt ];

	};

	let songs = JSON.parse( JSON.stringify( lateNights ) );
	const newUrlIndex = () => {

		return Math.floor( Math.random() * songs.length );

	};

	const [ speaker, setSpeaker ] = useState<Audio>();
	const [ urlIndex, setUrlIndex ] = useState<number>( newUrlIndex );
	const camera = useThree( ( state ) => state.camera );
	const [ end, setEnd ] = useState( false );


	const audio = useMemo( () => {

		const a = document.createElement( "audio" );

		a.autoplay = true;
		a.preload = "auto";
		a.crossOrigin = "Anonymous";
		a.loop = false;
		return a;

	}, [] );

	useEffect( () => {

		if ( songs.length === 0 ) songs = JSON.parse( JSON.stringify( lateNights ) );
		if ( ! end ) return;
		setUrlIndex( newUrlIndex() );
		setPlaylist( { ...playlist, palette: newPalette() } );
		setEnd( false );

	}, [ end ] );

	useEffect( () => {

		const url = songs.splice( urlIndex, 1 )[ 0 ];
		console.log( url );

		const setupAudio = () => {

			if ( ! audio.paused && ! speaker ) {

				audio.src = url;

				const listener = new AudioListener();
				camera.add( listener );

				const speak = new Audio( listener );
				speak.setMediaElementSource( audio );
				speak.setVolume( volume );

				if ( setAudioAnalyser ) {

					setAudioAnalyser( new AudioAnalyser( speak, fftSize ) );

				}

				setSpeaker( speak );

			}

		};

		const playAudio = () => audio.play().then( () => setupAudio() );

		if ( audio ) {

			audio.setAttribute( "src", url );
			audio.play().then( () => setupAudio() );
			document.addEventListener( "click", playAudio );
			return () => {

				document.removeEventListener( "click", playAudio );
				// audio.remove();

			};

		}

	}, [ speaker, audio, urlIndex ] );

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

