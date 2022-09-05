import Landing from "./components/Landing";
import Work from "./components/Work";
import Nav from "./components/Nav";

export default function Content() {

  const viewHelpers = true;

  return (
    <group>
      <Nav viewHelpers={viewHelpers}/>
      <Landing viewHelpers={viewHelpers}/>
      <Work viewHelpers={viewHelpers}/>
    </group>
  );

}
