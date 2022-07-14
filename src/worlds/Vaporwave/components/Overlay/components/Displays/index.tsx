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
  z-index: 5;
`;

const Content = styled.div<{ color: string, bgColor: string, opacity: number }>`
  width: 70%;
  height: 50%;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-family: Thunderstorm;
  opacity: ${props => props.opacity};
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  @media ( max-width: 500px ) {
    width: 90%;
  }
`;

const Exit = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
  //border: 2px dashed blue;
`;

const Header = styled.h4`
  text-align: center;
  font-size: clamp(30px, 5vw, 70px);
  margin-top: 0;
  //border: 2px dashed blue;
`;

const Description = styled.p`
  margin-top: -25px;
  text-align: center;
  width: 70%;
  font-family: Times;
  font-size: clamp(16px, 2vw, 20px);
  @media (min-width: 550px) {
    margin-top: -45px;
  }
  @media (min-width: 1200px) {
    margin-top: -75px;
  }
  //border: 2px dashed green;
`;

const Links = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Visit = styled.button<{ color: string, bgColor: string }>`
  border-radius: 25px;
  border: 2px solid ${props => props.bgColor};
  //position: relative;
  width: 100px;
  padding: 0.275em 0 0.275em 0;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-family: Thunderstorm;
  font-size: 20px;
  cursor: pointer;
  margin: 5px 0;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;

  :hover {
    background-color: ${props => props.color};
    color: ${props => props.bgColor};
  }
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

	const color = playlist.backgroundColorIndex,
		bgColor = playlist.mainColorIndex;

	return (
		<Container>
			<ClickToClose onClick={() => setDisplay( null )}/>
			<Content
				opacity={display === null ? 0 : 1}
				color={playlist.palette[ color ]}
				bgColor={playlist.palette[ bgColor ]}
			>
				<Exit onClick={() => ( setDisplay( null ) )}>X</Exit>
				<Header>{Works[ display ].header}</Header>
				<Description>{Works[ display ].desc}</Description>
				<Links>
					{Works[ display ].url !== "" && <Visit
						onClick={visit}
						color={playlist.palette[ bgColor ]}
						bgColor={playlist.palette[ color ]}
					>
            Visit
					</Visit>}
					{Works[ display ].os !== "" && <Visit
						onClick={visit}
						color={playlist.palette[ bgColor ]}
						bgColor={playlist.palette[ color ]}
					>
            Opensea
					</Visit>}
				</Links>
			</Content>
		</Container>
	);


}
