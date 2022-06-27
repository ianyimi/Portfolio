import styled from "@emotion/styled";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";

const Credits = styled.p`
  font-family: Bitmap;
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
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

  :before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: -webkit-radial-gradient(center, ellipse, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 80%);
    background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 80%);
    /* W3C */
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform, opacity, color;
    transition-property: transform, opacity, color;
  }

  :hover, :focus, :active {
    color: ${props => props.color};
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }

  :hover:before, :focus:before, :active:before {
    opacity: 1;
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
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
		.replaceAll( "%2C", "," )
		.replaceAll( "%E2%80%99", "'" )
		.replaceAll( "%C2%BF", "¿" )
		.replaceAll( "%C3%A9", "é" );
	const song = credits[ 1 ]
		.replaceAll( "+", " " )
		.replaceAll( "%26", "&" )
		.replaceAll( "%2C", "," )
		.replaceAll( "%E2%80%99", "'" )
		.replaceAll( "%C2%BF", "¿" )
		.replaceAll( "%C3%A9", "é" );
	return [ song, artists ];

}
