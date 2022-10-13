import Landing from "./components/Landing";
import Work from "./components/Work";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import About from "./components/About";
import {GroupProps} from "@react-three/fiber";

export default function Content(props: GroupProps) {
  
  const viewHelpers = false;
  
  return (
    <group {...props}>
      <Nav viewHelpers={viewHelpers}/>
      <Landing viewHelpers={viewHelpers}/>
      <About viewHelpers={viewHelpers}/>
      <Work viewHelpers={viewHelpers}/>
      <Contact viewHelpers={viewHelpers}/>
    </group>
  );
  
}
