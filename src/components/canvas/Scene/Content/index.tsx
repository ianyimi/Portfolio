import Landing from "./components/Landing";
import Work from "./components/Work";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import About from "./components/About";

export default function Content() {
  
  const viewHelpers = false;
  
  return (
    <group>
      <Nav viewHelpers={viewHelpers}/>
      <Landing viewHelpers={viewHelpers}/>
      <About viewHelpers={viewHelpers}/>
      <Work viewHelpers={viewHelpers}/>
      <Contact viewHelpers={viewHelpers}/>
    </group>
  );
  
}
