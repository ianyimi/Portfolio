import { CameraShake, OrbitControls } from "@react-three/drei";
import { MutableRefObject, useEffect, useRef } from "react";

export default function Camera() {

	const controls = useRef( null );

	function Rig( props: { controls?: MutableRefObject<any> } ) {

		const { controls } = props;

		useEffect( () => {

			function handleMouseMove( event: MouseEvent ) {

				event = event || window.event;

				console.log( "pageX: ", event.pageX,
					"pageY: ", event.pageY,
					"clientX: ", event.clientX,
					"clientY:", event.clientY );

			}

			document.onmousemove = handleMouseMove;

		}, [] );

		return <CameraShake
			maxYaw={0.01}
			maxPitch={0.01}
			maxRoll={0.01}
			yawFrequency={0.5}
			pitchFrequency={0.5}
			rollFrequency={0.4}
			// @ts-ignore
			controls={controls ? controls : undefined}
		/>;

	}

	return (
		<group>
			<OrbitControls ref={controls}/>
			<Rig controls={controls}/>
		</group>
	);

}
