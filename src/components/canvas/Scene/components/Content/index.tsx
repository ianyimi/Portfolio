import Landing from "./components/Landing";
import Work from "./components/Work";
import Nav from "./components/Nav";
import Contact from "./components/Contact";

export default function Content() {

  const viewHelpers = true;

  return (
    <group>
      <Nav viewHelpers={viewHelpers}/>
      <Landing viewHelpers={viewHelpers}/>
      <Work viewHelpers={viewHelpers}/>
      <Contact viewHelpers={viewHelpers}/>
    </group>
  );

}
