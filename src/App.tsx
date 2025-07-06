import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  type Transition,
} from "motion/react";

import "./App.css";
import "./circles.css";
import "./aboutme.css";
import "./floatingbutton.css";

import { TextFade } from "./components/TextFade";

import { styles } from "./utils/styles";
import { useTranslation } from "react-i18next";
import Flower from "./components/Flower/Flower";
import LanguageSwitch from "./components/LanguageSwitch/LanguageSwitch";

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

function App() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  const [style, setStyle] = useState<number>(0);

  const [downButtonHover, setDownButtonHover] = useState<boolean>(false);
  const [zoom, setZoom] = useState<booleadn>(false);
  const [circleSelected, setCircleSelected] = useState<
    "None" | "Projects" | "Courses" | "Curriculum"
  >("None");
  const [circleHovered, setCircleHovered] = useState<
    "None" | "Projects" | "Courses" | "Curriculum"
  >("None");

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
    if (latest > 475 && !zoom) {
      setZoom(true);
    } else if (latest < 475 && zoom) {
      setZoom(false);
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
            yo
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
            <h2>{t("but also")}</h2>
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
      <motion.div
        transition={zoom ? mainCircleTransitionIn : mainCircleTransitionOut}
        animate={{
          scale: zoom ? 1.5 : 1,
        }}
        className="main-circle"
        style={{ background: styles[style]?.circleBackground }}
      >
        {zoom && (
          <div className="circles-container-container">
            <motion.div initial="hidden" animate={["visible", "active"]}>
              <div className="circles-container">
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
                  <button
                    className="button"
                    onMouseEnter={() => setCircleHovered("Projects")}
                    onMouseLeave={() => setCircleHovered("None")}
                    onClick={() => setCircleSelected("Projects")}
                  >
                    <p>{t("projects")}</p>
                  </button>
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
                  <button
                    className="button"
                    onMouseEnter={() => setCircleHovered("Courses")}
                    onMouseLeave={() => setCircleHovered("None")}
                    onClick={() => setCircleSelected("Courses")}
                  >
                    <p>{t("courses")}</p>
                  </button>
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
                  <button
                    className="button"
                    onMouseEnter={() => setCircleHovered("Curriculum")}
                    onMouseLeave={() => setCircleHovered("None")}
                    onClick={() => setCircleSelected("Curriculum")}
                  >
                    <p>{t("curriculum")}</p>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
      <div style={{ backgroundColor: "white", height: "400px" }}></div>
      <div
        className="about-me-container"
        style={{
          backgroundColor: styles[style]?.sectionsBackground,
          color: styles[style]?.sectionsTextColor,
        }}
      >
        <div className="about-me-information-wrapper">
          <div
            className="about-me-photo"
            style={{
              border: `30px solid ${styles[style]?.ringAboutMe}`,
            }}
          >
            <p>{t("photo progress")}</p>
          </div>
          <div className="about-me-text">
            <h2>{t("about me")}</h2>
            <p>{t("about me first line")}</p>
            <p>{t("about me second line")}</p>
            <p>{t("about me third line")}</p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "white", height: "300px" }}></div>
      <div
        style={{
          backgroundColor: styles[style]?.sectionsBackground,
          height: "325px",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: `white`,
          paddingTop: "1vh",
        }}
      >
        <h2 style={{ fontFamily: `${styles[style]?.font}`, fontSize: "2rem" }}>
          {t("contactme")}
        </h2>
        <div
          style={{
            maxWidth: "1280px",
            height: "220px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            fontWeight: "500",
            fontSize: "1.25rem",

            marginTop: "2vh",
            marginBottom: "2vh",
          }}
        >
          <div
            style={{
              width: "25%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "0.75vw",
            }}
          >
            <img
              src={"/icons/github.svg"}
              alt="github icon"
              style={{
                width: "75px",
                height: "75px",
                filter: `${styles[style]?.iconstFilter}`,
              }}
            />
            <a>linkamigithub.com</a>
          </div>
          {/*} <a target="_blank" href="https://icons8.com/icon/8808/linkedin">
            LinkedIn
          </a>
          icon by
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>*/}
          <div
            style={{
              width: "25%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "0.75vw",
            }}
          >
            <img
              src={"/icons/linkedin.svg"}
              alt="linkedin icon"
              style={{
                width: "75px",
                height: "75px",
                filter: `${styles[style]?.iconstFilter}`,
              }}
            />
            <a>linkamilinkedin.com</a>
          </div>
          <div
            style={{
              width: "25%",

              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",

              margin: "0.75vw",
            }}
          >
            <img
              src={"/icons/call.svg"}
              alt="calls icon"
              style={{
                width: "70px",
                height: "70px",
                filter: `${styles[style]?.iconstFilter}`,
              }}
            />
            <p style={{ margin: "0" }}>+34 000 000 000</p>
          </div>
          <div
            style={{
              width: "25%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",

              margin: "0.75vw",
            }}
          >
            <img
              src={"/icons/email.svg"}
              alt="email icon"
              style={{
                width: "75px",
                height: "75px",
                filter: `${styles[style]?.iconstFilter}`,
              }}
            />
            <a>correoelectronico@gmail.com</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
