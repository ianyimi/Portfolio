import Landing from "./components/Landing";
import Nav from "./components/Nav";

export default function Content() {

	const viewHelpers = true;

	return (
		<group>
			<Nav viewHelpers={viewHelpers} />
			<Landing viewHelpers={viewHelpers} />
		</group>
	);

}
