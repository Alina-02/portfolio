import { motion, type Transition } from "motion/react";
import React from "react";
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
      style={{ background: styles[style]?.circleBackground }}
    ></motion.div>
  );
};

export default Transition;
