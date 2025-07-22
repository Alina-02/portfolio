import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import "./App.css";
import "./styles/floatingbutton.css";
import "./styles/bubbles.css";

import { styles } from "./utils/styles";
import { useTranslation } from "react-i18next";
import Flower from "./components/Flower/Flower";
import LanguageSwitch from "./components/LanguageSwitch/LanguageSwitch";

import AboutMe from "./sections/aboutme/AboutMe";
import ContactMe from "./sections/contactme/ContactMe";
import Curriculum from "./sections/main/Curriculum";
import Courses from "./sections/main/Courses";
import Transition from "./sections/main/MainSection";
import ProjectsSection from "./sections/main/Projects";
import ContactEmail from "./components/Email/ContactEmail";
import MainTitle from "./components/MainTitle/MainTitle";

function App() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  const [style, setStyle] = useState<number>(0);

  const [zoom, setZoom] = useState<boolean>(false);
  const [circleSelected, setCircleSelected] = useState<
    "None" | "Projects" | "Courses" | "Curriculum"
  >("None");

  const circlesRef = useRef(null);

  const onLeftStyle = () => {
    if (style === 0) {
      setStyle(styles.length - 1);
    } else {
      setStyle(style - 1);
    }
  };

  const onRightStyle = () => {
    if (style === styles.length - 1) {
      setStyle(0);
    } else {
      setStyle(style + 1);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 250 && latest < 700 && !zoom) {
      setZoom(true);
    } else if (latest < 250 && zoom) {
      setZoom(false);
      setCircleSelected("None");
    }
  });

  return (
    <div style={{ backgroundColor: "black" }}>
      {style === 4 && (
        <>
          <Flower left={30} top={-30} />
          <Flower right={30} top={170} />
          <Flower left={400} top={170} size="small" />
          <Flower right={500} top={-20} size="small" />
        </>
      )}

      <div className="floating-button-container">
        <a href="#main-container">
          <button
            style={{
              backgroundColor: "white",
              borderRadius: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60px",
              height: "60px",
            }}
          >
            <img
              src={"/portfolio/icons/arrow-sm-down-svgrepo-com.svg"}
              alt="mySvgImage"
              style={{ width: "50px", height: "50px" }}
            />
          </button>
        </a>
      </div>
      <div
        style={{
          position: "absolute",
          left: "15px",
          top: "15px",
        }}
      >
        <LanguageSwitch />
      </div>

      <MainTitle
        style={style}
        onLeftStyle={onLeftStyle}
        onRightStyle={onRightStyle}
      />
      {style === 1 && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              width: "100%",
              position: "absolute",
              top: "350px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={"/portfolio/dragon/left_eye.svg"}
                alt="mySvgImage"
                style={{ width: "400px", height: "350px" }}
              />
              <div style={{ width: "350px" }} />
              <img
                src={"/portfolio/dragon/right_eye.svg"}
                alt="mySvgImage"
                style={{ width: "400px", height: "350px" }}
              />
            </div>
            <div>
              {" "}
              <img
                src={"/portfolio/dragon/nose.svg"}
                alt="mySvgImage"
                style={{ width: "110px", height: "45px" }}
              />
            </div>
          </div>
        </>
      )}
      <div style={{ backgroundColor: "black", height: "40vh" }}></div>
      {style !== 1 && <Transition zoom={zoom} style={style} />}
      <div
        style={{
          background: styles[style]?.reverseBackground,
          height: "900px",
        }}
      ></div>
      <div className="main-container" id="main-container">
        <div ref={circlesRef} className="circles-container">
          <div className="circle-container">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
              }}
              className="circle-animation"
              style={{
                background: `${styles[style]?.ringBackground}`,
              }}
            />
            <a
              href="#projects"
              style={{
                color: "black",
                fontWeight: 500,
              }}
            >
              <button
                className="button"
                onClick={() => setCircleSelected("Projects")}
              >
                <h2
                  style={{
                    marginBottom: "0",
                    fontFamily: `${styles[style]?.font}`,
                    fontSize: styles[style]?.circlesFontSize,
                  }}
                >
                  {t("projects")}
                </h2>
              </button>
            </a>
          </div>

          <div className="circle-container">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
              }}
              className="circle-animation"
              style={{
                background: `${styles[style]?.ringBackground}`,
              }}
            />
            <a href="#courses" style={{ color: "black", fontWeight: 500 }}>
              <button
                className="button"
                onClick={() => setCircleSelected("Courses")}
              >
                <h2
                  style={{
                    marginBottom: "0",
                    fontFamily: `${styles[style]?.font}`,
                    fontSize: styles[style]?.circlesFontSize,
                  }}
                >
                  {t("courses")}
                </h2>
              </button>
            </a>
          </div>

          <div className="circle-container">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
              }}
              className="circle-animation"
              style={{
                background: `${styles[style]?.ringBackground}`,
              }}
            />
            <a href="#curriculum" style={{ color: "black", fontWeight: 500 }}>
              <button
                className="button"
                onClick={() => setCircleSelected("Curriculum")}
              >
                <h2
                  style={{
                    marginBottom: "0",
                    fontFamily: `${styles[style]?.font}`,
                    fontSize: styles[style]?.circlesFontSize,
                  }}
                >
                  {t("curriculum")}
                </h2>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div id="main-information" />
      <div>
        {circleSelected === "Curriculum" && <Curriculum style={style} />}
        {circleSelected === "Courses" && <Courses style={style} />}
        {circleSelected === "Projects" && <ProjectsSection style={style} />}
      </div>
      <AboutMe style={style} />
      <div style={{ backgroundColor: "white", padding: "2rem" }}>
        <ContactEmail style={style} />
      </div>
      <ContactMe style={style} />
    </div>
  );
}

export default App;
