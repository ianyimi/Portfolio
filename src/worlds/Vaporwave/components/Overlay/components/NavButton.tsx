import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useRef } from "react";

const Button = styled.div`
  position: absolute;
  top: 1rem;
  left: 2.5rem;
  background: none;
  z-index: 3;

  .hamburger {
    margin: 30px auto;
    //margin-top: 30px;
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
  }

  .hamburger .bar {
    padding: 0;
    width: 30px;
    height: 4px;
    background-color: white;
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    webkit-transition: all 0.4s ease-in-out;
    position: absolute;
  }

  .bar1 {
    top: 0;
  }

  .bar2,
  .bar3 {
    top: 13.5px;
  }

  .bar3 {
    right: 0;
  }

  .bar4 {
    bottom: 0;
  }

  .visuallyHidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }

  .checkbox:checked + label > .hamburger2 > .bar1 {
    transform: translateX(40px);
    background-color: transparent;
  }

  .checkbox:checked + label > .hamburger2 > .bar2 {
    transform: rotate(45deg);
  }

  .checkbox:checked + label > .hamburger2 > .bar3 {
    transform: rotate(-45deg);
  }

  .checkbox:checked + label > .hamburger2 > .bar4 {
    transform: translateX(-40px);
    background-color: transparent;
  }
`;

export default function NavButton( props: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> } ) {

	const { open, setOpen } = props;
	const checkbox = useRef( null );

	return (
		<Button>
			<input ref={checkbox} type="checkbox" id="checkbox" className="checkbox visuallyHidden" checked={open}/>
			<label htmlFor="checkbox">
				<div className="hamburger hamburger2" onClick={() => setOpen( ! open )}>
					<span className="bar bar1"></span>
					<span className="bar bar2"></span>
					<span className="bar bar3"></span>
					<span className="bar bar4"></span>
				</div>
			</label>
		</Button>
	);

}


