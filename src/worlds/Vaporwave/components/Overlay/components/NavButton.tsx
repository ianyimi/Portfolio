import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const Button = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 4rem;
  height: 4rem;
  background: none;
  border: none;
  color: white;
  padding: 0.5rem;
  z-index: 3;
  //border: 2px dashed blue;
  cursor: pointer;

  & :focus {
    outline-color: currentColor;
  }

  & svg {
    width: 100%;
    height: auto;
    display: block;
    filter: drop-shadow(5px 5px hsl(0, 0%, 20%));
  }

  & .translate {
    transition: transform 0.25s ease-in-out;
    transition-delay: 0.25s;
  }

  & .rotate {
    transition: transform 0.25s ease-in-out;
    transition-delay: 0s;
  }

  & .open.translate {
    transform: translateY(0);
    transition-delay: 0s;
  }

  & .open.rotate {
    transform: rotate(0);
    transition-delay: 0.25s;
  }
`;

export default function NavButton( props: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> } ) {

	const { open, setOpen } = props;
	const isMounted = useRef( false );

	console.log( open );

	useEffect( () => {

		if ( isMounted.current ) {

			const rotations = document.querySelectorAll( ".rotate" );
			const translations = document.querySelectorAll( ".translate" );
			translations.forEach( translate => {

				translate.classList.toggle( "open" );

			} );
			rotations.forEach( rotate => {

				rotate.classList.toggle( "open" );

			} );

		} else {

			isMounted.current = true;
			return;

		}

	}, [ open ] );

	return (
		<Button onClick={() => setOpen( ! open )}>
			<svg viewBox="-50 -40 100 80" width="50" height="40">
				<defs>
					<path id="line" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round"
						d="M -40 0 h 80"/>
				</defs>
				<g>
					<g className="translate" transform="translate(0 -30)">
						<g className="rotate" transform="rotate(-45)">
							<use transform="rotate(45)" href="#line"/>
						</g>
					</g>

					<g className="rotate" transform="rotate(45)">
						<use transform="rotate(-45)" href="#line"/>
					</g>

					<g className="translate" transform="translate(0 30)">
						<g className="rotate" transform="rotate(-45)">
							<use transform="rotate(45)" href="#line"/>
						</g>
					</g>
				</g>
			</svg>
		</Button>
	);

}


