import { motion, type Transition } from "motion/react";
import { useState } from "react";
import "./LanguageSwitch.css";
import i18n from "../../i18n";

const LanguageSwitch = () => {
  const [isOn, setIsOn] = useState(i18n.language === "en");

  return (
    <div className="container">
      <div
        className="switch"
        data-is-on={isOn}
        onClick={() => {
          setIsOn(!isOn);
          if (isOn) {
            i18n.changeLanguage("es");
          } else {
            i18n.changeLanguage("en");
          }
        }}
      >
        <motion.div
          className="ball"
          style={{
            background: isOn
              ? `
                linear-gradient(transparent 38%, #C8102E 50%, transparent 62%),
                linear-gradient(to right, transparent 43%, #C8102E 50%, transparent 57%),
                linear-gradient(transparent 33%, #FFF 50%, transparent 67%),
                linear-gradient(to right, transparent 40%, #FFF 50%, transparent 60%),
                linear-gradient(25deg, transparent 45%, #C8102E 50%, transparent 55%),
                linear-gradient(-25deg, transparent 45%, #C8102E 50%, transparent 55%),
                linear-gradient(25deg, transparent 43%, #FFF 50%, transparent 57%),
                linear-gradient(-25deg, transparent 43%, #FFF 50%, transparent 57%)`
              : "linear-gradient(0deg,rgba(170, 21, 27, 1) 0%, rgba(241, 191, 0, 1) 50%, rgba(170, 21, 27, 1) 100%)",
            backgroundColor: isOn ? "#012169" : "white",
          }}
          layout
          transition={transition}
        />
      </div>
    </div>
  );
};

const transition: Transition = {
  duration: 1,
  ease: easeOutCirc,
};

// https://easings.net/#easeInOutCirc

function easeOutCirc(x: number): number {
  return Math.sqrt(1 - Math.pow(x - 1, 2));
}

export default LanguageSwitch;
