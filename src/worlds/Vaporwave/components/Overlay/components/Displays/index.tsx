import styled from "@emotion/styled";
import { useStore } from "utils/store";
import shallow from "zustand/shallow";
import { Works } from "./utils/constants";

const ClickToClose = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const Content = styled.div<{ color: string, bgColor: string, opacity: number }>`
  width: 50%;
  height: 50%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-family: Thunderstorm;
  opacity: ${props => props.opacity};
  transition: opacity 2s;
`;

const Exit = styled.p`
  position: relative;
  top: 10px;
  left: 45%;
  font-weight: bold;
  cursor: pointer;
`;

const Header = styled.h4`
  text-align: center;
  font-size: 3em;
  margin-top: 25px;
  //border: 2px dashed blue;
`;

const Description = styled.p`
  margin-top: -25px;
  text-align: center;
  font-family: Times;
  width: 70%;
  //border: 2px dashed green;
`;

const Visit = styled.button<{ color: string, bgColor: string }>`
  border-radius: 15px;
  border: none;
  position: relative;
  bottom: -25px;
  padding: 0.5em 2em 0.5em 2em;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-family: Thunderstorm;
  font-size: 1em;
  cursor: pointer;
`;

export default function Display() {

	const { display, setDisplay, playlist } = useStore( state => ( {
		display: state.display,
		setDisplay: state.setDisplay,
		playlist: state.playlist
	} ), shallow );

	const visit = () => {

		if ( display === null ) return;
		window.open( Works[ display ].url, "_blank" );

	};

	if ( display === null ) return <></>;

	return (
		<Container>
			<ClickToClose onClick={() => setDisplay( null )}/>
			<Content
				opacity={display === null ? 0 : 1}
				color={playlist.palette[ playlist.mainColorIndex ]}
				bgColor={playlist.palette[ playlist.backgroundColorIndex ]}
			>
				<Exit onClick={() => ( setDisplay( null ) )}>X</Exit>
				<Header>{Works[ display ].header}</Header>
				<Description>{Works[ display ].desc}</Description>
				{Works[ display ].url !== "" && <Visit
					onClick={visit}
					color={playlist.palette[ playlist.backgroundColorIndex ]}
					bgColor={playlist.palette[ playlist.mainColorIndex ]}
				>
          Visit
				</Visit>}
			</Content>
		</Container>
	);


}
