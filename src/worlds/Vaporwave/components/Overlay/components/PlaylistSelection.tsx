import { useStore } from "utils/store";
import styled from "@emotion/styled";
import shallow from "zustand/shallow";
import { playlists } from "../../../utils/constants";

const Label = styled.p<{ color: string, active: boolean }>`
  font-family: Thunderstorm;
  font-size: 2em;
  color: ${props => props.active ? props.color : "white"};
  /* Hover.css Float Shadow */
  cursor: pointer;
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

export default function PlaylistSelection() {

	const { playlist, setPlaylist, setPalette } = useStore( ( state ) => ( {
		playlist: state.playlist,
		setPlaylist: state.setPlaylist,
		setPalette: state.setPalette,
	} ), shallow );

	function changePlaylist( id: number ) {

		if ( playlists[ id ].id === playlist.id ) return;
		setPlaylist( playlists[ id ] );
		setPalette( playlists[ id ].palettes[ Math.floor( Math.random() * playlists[ id ].palettes.length ) ] );

	}

	return (
		<div>
			<Label color="yellow" active={playlist.id === "theCookout"} onClick={() => {

				changePlaylist( 2 );

			}}>The Cookout</Label>
			<Label color="red" active={playlist.id === "beenTurnt"} onClick={() => {

				changePlaylist( 1 );

			}}>Been Turnt</Label>
			<Label color="blue" active={playlist.id === "lateNights"} onClick={() => {

				changePlaylist( 0 );

			}}>Late Nights</Label>
		</div>
	);

}
