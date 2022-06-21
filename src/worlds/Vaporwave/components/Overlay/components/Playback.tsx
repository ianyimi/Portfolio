import styled from "@emotion/styled";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";

const Credits = styled.p`
  font-family: Thunderstorm;
  font-size: 1em;
  text-align: center;
  color: white;
`;
const PlaybackControl = styled.p`
  font-family: Thunderstorm;
  font-size: 2em;
  color: white;
  cursor: pointer;
  text-align: center;
`;

export default function Playback() {

	const { audioSrc, paused, setPaused } = useStore( ( state ) => ( {
		audioSrc: state.audioSrc,
		paused: state.paused,
		setPaused: state.setPaused,
	} ), shallow );

	return (
		<div>
			<Credits>{getCredits( audioSrc )[ 0 ]}</Credits>
			<Credits>{getCredits( audioSrc )[ 1 ]}</Credits>
			<PlaybackControl onClick={() => setPaused( ! paused )}>{paused ? "Play" : "Pause"}</PlaybackControl>
		</div>
	);

}

function getCredits( src: string ): string[] {

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const playlist = useStore( state => state.playlist );
	const substr = playlist.id === "beenTurnt" ? 64 : 65;
	const credits = src.substring( substr, src.length - 4 ).trim().split( "-" );
	if ( credits.length < 2 ) return [ "", "" ];
	const artists = credits[ 0 ]
		.replaceAll( "+", " " )
		.replaceAll( "%26", "&" )
		.replaceAll( "%2C", "," );
	const song = credits[ 1 ]
		.replaceAll( "+", " " )
		.replaceAll( "%26", "&" )
		.replaceAll( "%2C", "," );
	return [ song, artists ];

}
