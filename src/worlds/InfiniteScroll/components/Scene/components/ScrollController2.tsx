import { useEffect, useRef } from "react";
import { useStore } from "utils/store";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function ScrollController() {

	const { currentSection, setSection, animating } = useStore( state => ( {
		currentSection: state.currentSection,
		setSection: state.setSection,
		animating: state.animating
	} ) );

	const data = useScroll();

	useFrame( () => {

		const a = data.range( 0, 1 / 4, 0.01 );
		const b = data.range( 1 / 4, 1 / 4, 0.01 );
		const c = data.range( 2 / 4, 1 / 4, 0.01 );
		const d = data.range( 3 / 4, 1 / 4, 0.01 );
		const sections = [ a, b, c, d ];

		for ( const section of sections ) {

			const nextSection = sections.indexOf( section );
			if ( 0 < section && section < 1 && currentSection !== nextSection && ! animating ) {

				setSection( nextSection );
				break;

			}

		}

		return;

	} );

	return <></>;

}
