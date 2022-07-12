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

const Enter = styled.button<{ color: string, loaded: boolean }>`
  color: white;
  box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 29px 7px;
  width: 100px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  border: none;
  overflow: hidden;
  font-family: Bitmap;
  font-size: 1.25em;
  position: absolute;
  cursor: ${props => props.loaded ? "pointer" : "default"};
  bottom: -100%;
  background-color: rgba(255, 255, 255, 0.25);

  .border {
    position: absolute;
    display: block;
    top: 0;
    left: -175%;
    z-index: 6;
    display: block;
    height: 400%;
    width: 400%;
    transform: rotate(-45deg);
    webkit-transform: rotate(-45deg);
    overflow: hidden;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.25) 40%, ${props => props.color} 50%, ${props => props.color} 55%, rgba(0, 0, 0, 0.25) 70%, rgba(0, 0, 0, 0.25) 100%);
    background-size: 400% auto;
    animation: shine 12s linear infinite;
    webkit-animation: shine 12s linear infinite;
  }

  .main-element {
    position: absolute;
    top: 2%;
    left: 1%;
    display: block;
    height: 97%;
    width: 98%;
    align-self: center;
    background-color: rgba(255, 255, 255, 0.25);
    z-index: 7;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s linear;
    webkit-transition: all 0.25s linear;

    :hover {
      background-color: ${props => props.loaded ? props.color : "none"}
    }
  }

  @keyframes shine {
    to {
      background-position: ${props => props.loaded ? "400%" : 0} center;
    }
  }
`;

export default function Landing() {

	const [ vantaEffect, setVantaEffect ] = useState<any>( undefined );
	const vantaRef = useRef( null );
	const [ percentage, setPercentage ] = useState( 0 );
	const { playlist, progress } = useStore( state => ( {
		playlist: state.playlist,
		progress: state.progress,
	} ) );
	// const { progress, loaded } = useProgress();

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

	useEffect( () => {

		// console.log( progress );
		setPercentage( progress );

	}, [ progress ] );

	return (
		<Container ref={vantaRef}>
			<Content>
				<SubText>Portfolio and Music Player created by</SubText>
				<Title>Isaiah Anyimi</Title>
				<SubText>
					{isMobile ? "Tap" : "Click"} the <i>Bouncing Spheres</i> to learn more.
				</SubText>
				<Enter color={playlist.palette[ playlist.mainColorIndex ]} loaded={progress === 100}>
					<div className="border"/>
					<div className="main-element">{progress === 100 ? "Enter" : progress + "%"}</div>
				</Enter>
			</Content>
		</Container>
	);

}