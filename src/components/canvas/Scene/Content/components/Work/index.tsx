import {useRef} from "react";
import {useStore} from "@/utils/store";
import Projects from "./components/Projects";
import {motion as Motion} from "framer-motion-3d";

export default function Work(props: { viewHelpers?: boolean }) {
  
  const {viewHelpers = false} = props;
  const group = useRef(null);
  
  const {currentSection, previousSection, animating} = useStore(state => ({
    currentSection: state.currentSection,
    previousSection: state.previousSection,
    animating: state.animating,
  }));
  const active = currentSection && currentSection.name === "Work";
  
  const groupInit = {
    opacity: 0
  }
  
  const groupAnimate = {
    opacity: active && !animating ? 1 : 0
  };
  
  return (
    (active && !animating) || (previousSection && previousSection.name === "Work" && animating) ?
      <Motion.group initial={groupInit} animate={groupAnimate} ref={group}>
        <Projects viewHelpers={viewHelpers}/>
      </Motion.group> : <></>
  );
  
}
