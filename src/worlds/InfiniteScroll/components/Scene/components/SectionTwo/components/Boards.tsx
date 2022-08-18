import { useStore } from "utils/store";


export default function Boards() {

	const {
		currentSection,
		previousSection,
		sectionDelays,
		setAnimationStatus
	} = useStore( state => ( {
		currentSection: state.currentSection,
		setCurrentSection: state.setCurrentSection,
		previousSection: state.previousSection,
		sectionDelays: state.sectionDelays,
		setAnimationStatus: state.setAnimationStatus,
	} ) );
	const active = currentSection === 1;

	return (
		<group>

		</group>
	);

}
