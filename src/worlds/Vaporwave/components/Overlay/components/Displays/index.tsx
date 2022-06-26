import styled from "@emotion/styled";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import { Works } from "./utils/constants";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div<{ color: string, bgColor: string, opacity: number }>`
  width: 50%;
  height: 50%;
  border-radius: 15px;
  diaplay: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-family: Thunderstorm;
  opacity: ${props => props.opacity};
  transition: opacity 2s;
  z-index: 2;
`;

const Header = styled.h4`
  text-align: center;
  font-size: 3em;
  border: 2px dashed blue;
  margin-top: 25px;
`;

const Close = styled.p`
  position: relative;
  top: 10px;
  left: 95%;
  cursor: pointer;
`;

export default function Display() {

	const { display, setDisplay, playlist } = useStore( state => ( {
		display: state.display,
		setDisplay: state.setDisplay,
		playlist: state.playlist
	} ), shallow );

	console.log( display );
	if ( display === null ) return <></>;

	return (
		<Container onClick={() => ( setDisplay( null ) )}>
			<Content
				opacity={display === null ? 0 : 1}
				color={playlist.palette[ playlist.mainColorIndex ]}
				bgColor={playlist.palette[ playlist.backgroundColorIndex ]}
			>
				<Close onClick={() => ( setDisplay( null ) )}>X</Close>
				<Header>{Works[ display ].header}</Header>
			</Content>
		</Container>
	);

}
