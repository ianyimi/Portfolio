import styled from "@emotion/styled";
import Title from "./Title";
import { useState } from "react";
import { NavButton, PlaylistSelection } from "./components";

const Container = styled.div<{ open?: boolean }>`
  position: absolute;
  z-index: 1;
  top: 0;
  left: ${( props ) => ( props.open ? "0" : "-35%" )};
  width: 35%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: left 0.5s;
`;

export default function Overlay() {

	const [ open, setOpen ] = useState( false );

	return (
		<div>
			<NavButton open={open} setOpen={setOpen}/>
			<Container open={open}>
				<Title/>
				<PlaylistSelection/>
			</Container>
		</div>
	);

}
