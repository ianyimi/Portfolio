import { ScrollControls } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { useStore } from "utils/store";
import Projects from "./components/Projects";
import { motion as Motion } from "framer-motion-3d";

export default function Work( props: { viewHelpers?: boolean } ) {

	const { viewHelpers = false } = props;
	const group = useRef( null );
	const isMounted = useRef( false );

	const { currentSection, animating } = useStore( state => ( {
		currentSection: state.currentSection,
		animating: state.animating,
	} ) );
	const active = ! animating && currentSection && currentSection.name === "Work";
	console.log( active );

	// useEffect( () => {
	//
	// }, [ group.current ] );

	// useEffect( () => {
	//
	// 	if ( active ) {
	//
	// 		console.log( "work" );
	// 		window.onscroll = () => {};
	//
	// 		document.body.classList.remove( "stopScrolling" );
	//
	// 	} else {
	//
	// 		if ( isMounted.current )
	// 			document.body.classList.add( "stopScrolling" );
	// 		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	// 		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	// 		window.onscroll = () => {
	//
	// 			window.scrollTo( scrollLeft, scrollTop );
	//
	// 		};
	//
	// 	}
	//
	// }, [ animating ] );

	const groupAnimate = useMemo( () => {

		return {
			opacity: isMounted.current ? 1 : 0
		};

	}, [ isMounted.current ] );

	return (
		active ? <Motion.group animate={groupAnimate} ref={group}>
			{/*<ScrollControls pages={4} distance={0.75} damping={1}>*/}
			<Projects viewHelpers={viewHelpers} />
			{/*</ScrollControls>*/}
		</Motion.group> : <></>
	);

}
