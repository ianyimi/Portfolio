import { addEffect } from "@react-three/fiber";
import create from "zustand";

const createAudio = async ( url: string ) => {

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
	console.log( source );

	const state = {
		source,
		data,
		end: false,
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

	return state;

};

const mockData = () => ( { volume: 0, avg: 0, gain: 1, data: [], end: false } );

export const useAudioStore = create( ( set, get ) => {

	// const { playlist, setPalette, setAudioSrc, setAa, paused, setPaused } = useStore( ( state: any ) => ( {
	// 	playlist: state.playlist,
	// 	setPalette: state.setPalette,
	// 	setAudioSrc: state.setAudioSrc,
	// 	setAa: state.setAa,
	// 	paused: state.paused,
	// 	setPaused: state.setPaused,
	// } ), shallow );
	// // const playlist = { id: "beenTurnt" };
	// // @ts-ignore
	// const songs = useMemo( () => JSON.parse( JSON.stringify( playlists[ `${playlist.id}` ] ) ), [ playlist.id ] );
	// const newUrlIndex = () => {
	//
	// 	return Math.floor( Math.random() * songs.length );
	//
	// };
	//
	// const [ urlIndex, setUrlIndex ] = useState<number>( newUrlIndex );
	// const url = songs.splice( urlIndex, 1 )[ 0 ];
	// const audio = ;

	return {
		loaded: false,
		clicked: false,
		audio: mockData(),
		api: {
			async load( url: string ) {

				set( {
					loaded: true,
					audio: await createAudio( url ),
				} );

			},
			start() {

				// @ts-ignore
				const audio = get().audio;
				audio.source.start( 0 );
				set( { clicked: true } );
				// @ts-ignore
				addEffect( () => {

					audio.update();

				} );

			},
		},
	};

} );
