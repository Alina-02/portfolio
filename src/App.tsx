import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import "./App.css";
import "./styles/floatingbutton.css";

import { TextFade } from "./components/TextFade";

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

function App() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  const [style, setStyle] = useState<number>(0);

  const [downButtonHover, setDownButtonHover] = useState<boolean>(false);

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
    console.log(latest);
    if (latest > 250 && latest < 700 && !zoom) {
      setZoom(true);
    } else if (latest < 250 && zoom) {
      setZoom(false);
      setCircleSelected("None");
    }
  });

  return (
    <>
      {style === 4 && (
        <>
          <Flower left={30} top={-30} />
          <Flower right={30} top={170} />
          <Flower left={400} top={170} size="small" />
          <Flower right={500} top={-20} size="small" />
        </>
      )}
      <div
        style={{
          position: "absolute",
          left: "15px",
          top: "15px",
        }}
      >
        <LanguageSwitch />
      </div>
      <div className="floating-button-container">
        <button
          className="floating-button"
          onClick={() => {
            setZoom(true);
            setCircleSelected("None");

            //setTimeout(() => circlesRef?.current?.scrollIntoView(), 100);
          }}
          onMouseEnter={() => setDownButtonHover(true)}
          onMouseLeave={() => setDownButtonHover(false)}
        >
          <motion.div
            className="floating-button-animation"
            animate={{
              scale: downButtonHover ? 75 : 1,
              backgroundColor: downButtonHover ? "#1a1a1a" : "white",
            }}
          ></motion.div>
          <motion.div
            className="downButtonIcon"
            animate={{
              filter: downButtonHover
                ? "invert(100%) sepia(21%) saturate(0%) hue-rotate(106deg) brightness(103%) contrast(101%)"
                : "invert(6%) sepia(6%) saturate(4%) hue-rotate(351deg) brightness(102%) contrast(90%)",
            }}
          >
            <img
              src={"/icons/arrow-sm-down-svgrepo-com.svg"}
              alt="mySvgImage"
              style={{ width: "50px", height: "50px" }}
            />
          </motion.div>
        </button>
      </div>
      <div className="title-div">
        <TextFade
          staggerChildren={0.2}
          direction="up"
          className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
        >
          <h1 style={{ marginBottom: "0.2rem" }}>{t("Hi")}</h1>
          <h1 style={{ marginBottom: "1rem", marginTop: "0.8rem" }}>
            {t("I am")}
          </h1>

          <h1
            className="title-name"
            style={{
              fontFamily: `${styles[style].font}`,
              fontSize: "8.2rem",
              marginBottom: "3.5rem",
            }}
          >
            Alina
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "375px",
              justifyContent: "space-between",
              marginBottom: "2rem",
              alignItems: "center",
            }}
          >
            <button className="arrow-button" onClick={onLeftStyle}>
              <img
                src={"/icons/arrow-sm-left-svgrepo-com.svg"}
                alt="mySvgImage"
                style={{ width: "30px", height: "30px" }}
              />
            </button>
            <h2 style={{ fontSize: "2rem" }}>{t("but also")}</h2>
            <button className="arrow-button" onClick={onRightStyle}>
              <img
                src={"/icons/arrow-sm-right-svgrepo-com.svg"}
                alt="mySvgImage"
                style={{ width: "30px", height: "30px" }}
              />
            </button>
          </div>
        </TextFade>
      </div>
      <div style={{ backgroundColor: "white", height: "40vh" }}></div>
      <Transition zoom={zoom} style={style} />
      <div
        style={{
          background: styles[style]?.reverseBackground,
          height: "900px",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "white",
          height: "400px",
        }}
      >
        <div
          ref={circlesRef}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            height: "100%",
            alignItems: "center",
          }}
        >
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
                  }}
                >
                  {t("curriculum")}
                </h2>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div>
        {<>{console.log(circleSelected)}</>}
        {circleSelected === "Curriculum" && <Curriculum style={style} />}
        {circleSelected === "Courses" && <Courses style={style} />}
        {circleSelected === "Projects" && <ProjectsSection style={style} />}
      </div>
      <AboutMe style={style} />
      <div style={{ backgroundColor: "white", height: "300px" }}></div>
      <ContactMe style={style} />
    </>
  );
}

export default App;
