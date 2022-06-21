import { useStore } from "utils/store";
import styled from "@emotion/styled";
import shallow from "zustand/shallow";
import { playlists } from "../../../utils/constants";

const Label = styled.p`
  font-family: Thunderstorm;
  font-size: 2em;
  color: white;
  cursor: pointer;
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
			<Label onClick={() => {

				changePlaylist( 2 );

			}}>The Cookout</Label>
			<Label onClick={() => {

				changePlaylist( 1 );

			}}>Been Turnt</Label>
			<Label onClick={() => {

				changePlaylist( 0 );

			}}>Late Nights</Label>
		</div>
	);

}
