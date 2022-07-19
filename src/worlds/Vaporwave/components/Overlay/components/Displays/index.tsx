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

const Container = styled.div<{ open: boolean }>`
  visibility: ${props => props.open ? "visible" : "hidden"};
  background-color: ${props => props.open ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s linear;
  webkit-transition: background-color 0.5s linear;
  z-index: 5;
`;

const Content = styled.div<{ color: string, bgColor: string, open: boolean }>`
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
  margin-bottom: ${props => props.open ? 0 : "200%"};
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

const Header = styled.h4<{ os?: string }>`
  text-align: center;
  font-size: clamp(30px, 5vw, 70px);
  margin-top: ${props => props.os === "Win" ? "-25px" : 0};
  padding-bottom: ${props => props.os === "Win" ? "10px" : 0}
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

const Visit = styled.button<{ color: string, bgColor: string, os?: string }>`
  border-radius: 25px;
  border: 2px solid ${props => props.bgColor};
  //position: relative;
  width: 100px;
  padding: 0.275em 0 ${props => props.os === "Win" ? "0.75em" : "0.275em"} 0;
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

	const { display, setDisplay, playlist, os } = useStore( state => ( {
		display: state.display,
		setDisplay: state.setDisplay,
		playlist: state.playlist,
		os: state.os,
	} ), shallow );

	const color = playlist.backgroundColorIndex,
		bgColor = playlist.mainColorIndex;
	const currentWork = Works[ display ? display : 0 ];

	const visit = () => {

		if ( display === null ) return;
		window.open( currentWork.url, "_blank" );

	};

	return (
		<Container open={display === null ? false : true}>
			<ClickToClose onClick={() => setDisplay( null )}/>
			<Content
				open={display === null ? false : true}
				color={playlist.palette[ color ]}
				bgColor={playlist.palette[ bgColor ]}
			>
				<Exit onClick={() => ( setDisplay( null ) )}>X</Exit>
				<Header os={os}>{currentWork.header}</Header>
				<Description>{currentWork.desc}</Description>
				<Links>
					{currentWork.url !== "" && <Visit
						onClick={visit}
						color={playlist.palette[ bgColor ]}
						bgColor={playlist.palette[ color ]}
						os={os}
					>
            Visit
					</Visit>}
					{currentWork.os !== "" && <Visit
						onClick={visit}
						color={playlist.palette[ bgColor ]}
						bgColor={playlist.palette[ color ]}
						os={os}
					>
            Opensea
					</Visit>}
				</Links>
			</Content>
		</Container>
	);


}
