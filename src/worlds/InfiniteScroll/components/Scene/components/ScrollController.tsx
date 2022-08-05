import { useEffect, useRef } from "react";
import { useStore } from "utils/store";

export default function ScrollController() {

	const { currentSection, setSection, animating } = useStore( state => ( {
		currentSection: state.currentSection,
		setSection: state.setSection,
		animating: state.animating
	} ) );

	const scrollPos = useRef( 0 );

	function scroll( event: Event ) {

		if ( animating || ! currentSection ) return;

		if ( document.body.getBoundingClientRect().top > scrollPos.current ) {

			// if ( event.deltaY < 0 ) {

			console.log( "up" );
			setSection( currentSection - 1 );

		} else {

			console.log( "down" );
			setSection( currentSection + 1 );

		}

	}

	useEffect( () => {

		document.addEventListener( "scroll", scroll );

		return () => {

			document.removeEventListener( "scroll", scroll );

		};

	}, [] );

	return <></>;

}
