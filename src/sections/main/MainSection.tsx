import { motion } from "motion/react";
import type { Transition } from "motion/react";
import { styles } from "../../utils/styles";

import "../../styles/circles.css";
import "../../styles/floatingbutton.css";

const mainCircleTransitionIn: Transition = {
  duration: 1.5,
  ease: easeOutSine,
};

const mainCircleTransitionOut: Transition = {
  duration: 1,
  ease: easeOutSine,
};

function easeOutSine(x: number): number {
  return Math.sin((x * Math.PI) / 2);
}

interface Props {
  zoom: boolean;

  style: number;
}

const Transition = (props: Props) => {
  const { zoom, style } = props;

  return (
    <motion.div
      transition={zoom ? mainCircleTransitionIn : mainCircleTransitionOut}
      animate={{
        scale: zoom ? 2 : 1,
      }}
      className="main-circle"
      style={{
        background: styles[style]?.circleBackground,
        boxShadow:
          style === 0
            ? `
      0 0 10px 5px rgba(255, 165, 0, 0.5),   /* Orange */
      0 0 20px 10px rgba(255, 223, 0, 0.5),  /* Yellow */
      0 0 30px 0px rgba(255, 223, 0, 0.3)   /* Softer Yellow */
    `
            : "none",
      }}
    ></motion.div>
  );
};

export default Transition;
