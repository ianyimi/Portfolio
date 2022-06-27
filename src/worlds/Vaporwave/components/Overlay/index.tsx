import styled from "@emotion/styled";
import { useState } from "react";
import { Displays, NavButton, Playback, PlaylistSelection, Title } from "./components";

const Container = styled.div<{ open?: boolean }>`
  position: absolute;
  z-index: 2;
  top: 0;
  left: ${( props ) => ( props.open ? "0" : "-100vw" )};
  width: 35%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: left 0.5s;
`;

const ClickContainer = styled.div<{ open: boolean }>`
  z-index: 1;
  position: absolute;
  top: 0;
  left: ${( props ) => ( props.open ? "0" : "-100vw" )};
  background-color: rgba(0, 0, 0, 0);
  width: 100vw;
  height: 100vh;
`;

export default function Overlay() {

	const [ open, setOpen ] = useState( false );

	return (
		<div>
			<NavButton open={open} setOpen={setOpen}/>
			<ClickContainer open={open} onClick={() => setOpen( false )}/>
			<Container open={open}>

				<Title/>
				<PlaylistSelection/>
				<Playback/>

			</Container>
			<Displays/>
		</div>
	);

}
