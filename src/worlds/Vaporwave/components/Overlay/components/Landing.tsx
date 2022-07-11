import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import styled from "@emotion/styled";
// @ts-ignore
import FOG from "vanta/dist/vanta.fog.min";
import { useStore } from "utils/store";
import { isMobile } from "react-device-detect";

const Container = styled.div`
  background-color: black;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Thunderstorm;
`;

const Content = styled.div`
  width: 70%;
  position: relative;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  align-items: center;
  text-align: center;
  //border: 2px dashed red;
`;

const Title = styled.h1`
  font-size: 5em;
  //border: 2px dashed blue;
  margin: 5px 0 45px 0;
  //margin: -1px 0 0 0;
`;

const SubText = styled.div`
  width: 90%;
  font-family: Bitmap;
  font-size: 1em;
`;

export default function Landing() {

	const [ vantaEffect, setVantaEffect ] = useState<any>( undefined );
	const vantaRef = useRef( null );
	const playlist = useStore( state => state.playlist );

	useEffect( () => {

		if ( ! vantaEffect ) {

			setVantaEffect( FOG( {
				el: vantaRef.current,
				baseColor: playlist.palette[ playlist.backgroundColorIndex ],
				highlightColor: playlist.palette[ playlist.mainColorIndex ],
				midtoneColor: playlist.palette[ playlist.secondaryColorIndex ],
				lowtoneColor: playlist.palette[ Math.floor( Math.random() * playlist.palette.length ) ],
				blurFactor: 0.7,
				zoom: 1.5,
				// speed: 2,
				THREE
			} ) );

		}

		return () => {

			if ( vantaEffect ) vantaEffect?.destroy();

		};

	}, [ vantaEffect ] );

	return (
		<Container ref={vantaRef}>
			<Content>
				<SubText>Portfolio and Music Player created by</SubText>
				<Title>Isaiah Anyimi</Title>
				<SubText>
					{isMobile ? "Tap" : "Click"} the <i>Bouncing Spheres</i> to learn more.
				</SubText>
			</Content>
		</Container>
	);

}
