import {useRef} from "react";
import {useStore} from "@/utils/store";
import Projects from "./components/Projects";
import {motion as Motion} from "framer-motion-3d";

export default function Work(props: { viewHelpers?: boolean }) {

  const {viewHelpers = false} = props;
  const group = useRef(null);
  const isMounted = useRef(false);

  const {currentSection, previousSection, animating} = useStore(state => ({
    currentSection: state.currentSection,
    previousSection: state.previousSection,
    animating: state.animating,
  }));
  const active = !animating && currentSection && currentSection.name === "Work";

  const groupAnimate = {
    opacity: active && !animating ? 1 : 0
  };

  return (
    active ? <Motion.group animate={groupAnimate} ref={group}>
      <Projects viewHelpers={viewHelpers}/>
    </Motion.group> : <></>
  );

}
