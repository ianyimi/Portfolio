import {useStore} from "@/utils/store";
import {motion as Motion} from "framer-motion-3d";
import Link from "./Link";
import {SOCIALS} from "./contants";

export default function Contact(props: { viewHelpers?: boolean }) {
  
  const {viewHelpers = false} = props;
  const {currentSection, previousSection, animating} = useStore(state => ({
    currentSection: state.currentSection,
    previousSection: state.previousSection,
    animating: state.animating,
  }));
  const active = currentSection && currentSection.name === "Contact";
  const socialButtons = [];
  
  for (let i = 0; i < SOCIALS.length; i++) {
    const social = SOCIALS[i];
    socialButtons.push(
      <Link index={i} social={social} viewHelpers={viewHelpers} key={i}/>
    )
  }
  
  const contactGroupAnimate = {
    x: 1.5,
    y: -1.75,
    z: -2.75,
  }
  
  return (
    <Motion.group animate={contactGroupAnimate}>
      {socialButtons}
    </Motion.group>
  )
}
