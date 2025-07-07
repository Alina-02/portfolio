import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  type Transition,
} from "motion/react";

import "./App.css";
import "./styles/circles.css";
import "./styles/aboutme.css";
import "./styles/floatingbutton.css";
import "./styles/contactme.css";

import { TextFade } from "./components/TextFade";

import { styles } from "./utils/styles";
import { useTranslation } from "react-i18next";
import Flower from "./components/Flower/Flower";
import LanguageSwitch from "./components/LanguageSwitch/LanguageSwitch";

import i18n from "./i18n";
import CourseCard from "./components/CourseCard/CourseCard";
import Projects from "./components/Projects/Projects";

const mainCircleTransitionIn: Transition = {
  duration: 1.5,
  ease: easeOutSine,
};

const mainCircleTransitionOut: Transition = {
  duration: 1,
  ease: easeOutSine,
};

const smallCircleTransitionIn: Transition = {
  duration: 1.5,
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
  const [leftButtonHover, setLeftButtonHover] = useState<boolean>(false);
  const [rightButtonHover, setRightButtonHover] = useState<boolean>(false);

  const [zoom, setZoom] = useState<boolean>(false);
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
    if (latest > 475 && latest < 700 && !zoom) {
      setZoom(true);
    } else if (latest < 475 && zoom) {
      setZoom(false);
      setCircleSelected("None");
    } else if (latest >= 900) {
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
          scale: zoom ? 2.5 : 1,
        }}
        className="main-circle"
        style={{ background: styles[style]?.circleBackground }}
      >
        {circleSelected !== "None" && (
          <>
            <button
              className="left-righ-buttons"
              style={{
                zIndex: 2,
                left: "31vw",
                bottom: "350px",
              }}
              onMouseEnter={() => setLeftButtonHover(true)}
              onMouseLeave={() => setLeftButtonHover(false)}
              onClick={() => {
                switch (circleSelected) {
                  case "Projects": {
                    setCircleSelected("Curriculum");
                    break;
                  }
                  case "Curriculum": {
                    setCircleSelected("Courses");
                    break;
                  }
                  case "Courses": {
                    setCircleSelected("Projects");
                    break;
                  }
                }
              }}
            >
              <motion.div
                className="floating-button-animation"
                animate={{
                  scale: leftButtonHover ? 25 : 1,
                  backgroundColor: leftButtonHover ? "#1a1a1a" : "white",
                }}
              ></motion.div>
              <motion.div
                style={{ width: "25px", height: "25px" }}
                animate={{
                  filter: leftButtonHover
                    ? "invert(100%) sepia(21%) saturate(0%) hue-rotate(106deg) brightness(103%) contrast(101%)"
                    : "invert(6%) sepia(6%) saturate(4%) hue-rotate(351deg) brightness(102%) contrast(90%)",
                }}
              >
                <img
                  src={"/icons/arrow-sm-left-svgrepo-com.svg"}
                  alt="mySvgImage"
                  style={{ width: "25px", height: "25px" }}
                />
              </motion.div>
            </button>

            <button
              className="left-righ-buttons"
              style={{
                zIndex: 2,
                right: "31vw",
                bottom: "350px",
              }}
              onMouseEnter={() => setRightButtonHover(true)}
              onMouseLeave={() => setRightButtonHover(false)}
              onClick={() => {
                switch (circleSelected) {
                  case "Projects": {
                    setCircleSelected("Courses");
                    break;
                  }
                  case "Curriculum": {
                    setCircleSelected("Projects");
                    break;
                  }
                  case "Courses": {
                    setCircleSelected("Curriculum");
                    break;
                  }
                }
              }}
            >
              <motion.div
                className="floating-button-animation"
                animate={{
                  scale: rightButtonHover ? 25 : 1,
                  backgroundColor: rightButtonHover ? "#1a1a1a" : "white",
                }}
              ></motion.div>
              <motion.div
                style={{ width: "25px", height: "25px" }}
                animate={{
                  filter: rightButtonHover
                    ? "invert(100%) sepia(21%) saturate(0%) hue-rotate(106deg) brightness(103%) contrast(101%)"
                    : "invert(6%) sepia(6%) saturate(4%) hue-rotate(351deg) brightness(102%) contrast(90%)",
                }}
              >
                <img
                  src={"/icons/arrow-sm-right-svgrepo-com.svg"}
                  alt="mySvgImage"
                  style={{ width: "25px", height: "25px" }}
                />
              </motion.div>
            </button>
          </>
        )}

        {circleSelected === "Curriculum" && (
          <div
            id="curriculum"
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              zIndex: "1",
              width: "60vw",
            }}
          >
            <h2>{t("curriculum")}</h2>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  maxWidth: "375px",
                  textAlign: "left",
                  marginRight: "5vw",
                }}
              >
                <h3 style={{ marginBottom: "0.5vh" }}>
                  {t("curriculumsection.education")}
                </h3>
                <p style={{ fontSize: "0.8rem", marginTop: "0.5vh" }}>
                  <strong>{t("curriculumsection.upv")} </strong> <br />
                  {t("curriculumsection.degree")}
                  <i>{t("curriculumsection.gpa")}</i> <br />
                  <strong>{t("curriculumsection.thesis")}</strong>:{" "}
                  {t("curriculumsection.thesistitle")}
                  <br />
                  <strong>{t("curriculumsection.honors")}</strong>:{" "}
                  {t("curriculumsection.honorsinformation")}
                </p>

                <h3 style={{ marginBottom: "0.5vh" }}>
                  {t("curriculumsection.volunteer")}
                </h3>
                <p style={{ fontSize: "0.8rem", marginTop: "0.5vh" }}>
                  <strong>{t("curriculumsection.teso")}</strong>
                  <br /> <i>{t("curriculumsection.tesodate")}</i> <br />
                  {t("curriculumsection.tesodescription")}
                </p>

                <h3 style={{ marginBottom: "0.5vh" }}>
                  {t("curriculumsection.skills")}
                </h3>

                <div style={{ fontSize: "0.8rem", marginTop: "0.5vh" }}>
                  <strong>{t("curriculumsection.languages")}</strong>
                  <ul>
                    <li>{t("curriculumsection.language1")}</li>
                    <li>{t("curriculumsection.language2")}</li>
                    <li>{t("curriculumsection.language3")}</li>
                  </ul>
                  <strong>{t("curriculumsection.technical")}</strong>
                  <ul>
                    <li>{t("curriculumsection.technical1")}</li>
                    <li>{t("curriculumsection.technical2")}</li>
                    <li>{t("curriculumsection.technical3")}</li>
                  </ul>
                </div>
              </div>
              <div
                style={{ color: "white", maxWidth: "375px", textAlign: "left" }}
              >
                <h3 style={{ marginBottom: "0.5vh" }}>
                  {t("curriculumsection.experience")}
                </h3>
                <div style={{ fontSize: "0.8rem", marginTop: "0.5vh" }}>
                  <strong>{t("curriculumsection.experiencetitle1")}</strong>{" "}
                  <br />
                  <i>{t("curriculumsection.experiencedate1")}</i> <br />
                  <ul>
                    <li>{t("curriculumsection.experiencelist11")}</li>
                    <li>{t("curriculumsection.experiencelist21")}</li>
                    <li>{t("curriculumsection.experiencelist31")}</li>
                    <li>{t("curriculumsection.experiencelist41")}</li>
                  </ul>
                </div>
                <div style={{ fontSize: "0.8rem" }}>
                  <strong>{t("curriculumsection.experiencetitle2")}</strong>
                  <br /> <i>{t("curriculumsection.experiencedate2")}</i>
                  <ul>
                    <li>{t("curriculumsection.experiencelist21")}</li>
                    <li>{t("curriculumsection.experiencelist22")}</li>
                    <li>{t("curriculumsection.experiencelist32")}</li>
                  </ul>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "2vw",
                  }}
                >
                  <a
                    style={{
                      cursor: "pointer",
                      color: "black",
                      backgroundColor: "white",

                      borderRadius: "10px",
                      padding: "1vh",
                    }}
                    href={
                      i18n.language === "en"
                        ? "docs/CV_Alina_Montoliu_Eng.pdf"
                        : "docs/CV_Alina_Montoliu_Mateo.pdf"
                    }
                    download
                  >
                    {t("curriculumsection.download")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {circleSelected === "Courses" && (
          <div
            id="courses"
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              zIndex: "1",
            }}
          >
            <h2>{t("courses")}</h2>
            <div style={{ fontSize: "0.8rem" }}>
              <div
                style={{
                  display: "flex",
                  maxWidth: "500px",
                  width: "35vw",
                  maxHeight: "75px",
                  justifyContent: "space-around",
                }}
              >
                <CourseCard mainInfo="coursessection.cooking" year="" web="" />
                <CourseCard
                  mainInfo="coursessection.course1.title"
                  year="coursessection.course1.year"
                  web="coursessection.course1.web"
                />
                <CourseCard
                  mainInfo="coursessection.course2.title"
                  year="coursessection.course2.year"
                  web="coursessection.course2.web"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  maxWidth: "500px",
                  width: "35vw",
                  maxHeight: "75px",
                  justifyContent: "space-around",
                  marginTop: "2vh",
                }}
              >
                <CourseCard
                  mainInfo="coursessection.course3.title"
                  year="coursessection.course3.year"
                  web="coursessection.course3.web"
                />
                <CourseCard
                  mainInfo="coursessection.course4.title"
                  year="coursessection.course4.year"
                  web="coursessection.course4.web"
                />
                <CourseCard
                  mainInfo="coursessection.course5.title"
                  year="coursessection.course5.year"
                  web="coursessection.course5.web"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  maxWidth: "500px",
                  width: "35vw",
                  maxHeight: "75px",
                  justifyContent: "space-around",
                  marginTop: "2vh",
                }}
              >
                <CourseCard
                  mainInfo="coursessection.course6.title"
                  year="coursessection.course6.year"
                  web="coursessection.course6.web"
                />
                <CourseCard
                  mainInfo="coursessection.course7.title"
                  year="coursessection.course7.year"
                  web="coursessection.course7.web"
                />
                <CourseCard
                  mainInfo="coursessection.course8.title"
                  year="coursessection.course8.year"
                  web="coursessection.course8.web"
                />
              </div>
            </div>
          </div>
        )}

        {circleSelected === "Projects" && (
          <div
            id="projects"
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              zIndex: "1",
            }}
          >
            <h2>{t("projects")}</h2>
            <Projects />
          </div>
        )}

        {zoom && (
          <div className="circles-container-container">
            <div className="circles-container">
              {circleSelected === "None" && (
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
                      onMouseEnter={() => setCircleHovered("Projects")}
                      onMouseLeave={() => setCircleHovered("None")}
                      onClick={() => setCircleSelected("Projects")}
                    >
                      <h2
                        style={{
                          fontSize: "1rem",
                          fontFamily: `${styles[style]?.font}`,
                        }}
                      >
                        {t("projects")}
                      </h2>
                    </button>
                  </a>
                </div>
              )}

              {circleSelected === "None" && (
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
                    href="#courses"
                    style={{ color: "black", fontWeight: 500 }}
                  >
                    <button
                      className="button"
                      onMouseEnter={() => setCircleHovered("Courses")}
                      onMouseLeave={() => setCircleHovered("None")}
                      onClick={() => setCircleSelected("Courses")}
                    >
                      <h2
                        style={{
                          fontSize: "1rem",
                          fontFamily: `${styles[style]?.font}`,
                        }}
                      >
                        {t("courses")}
                      </h2>
                    </button>
                  </a>
                </div>
              )}

              {circleSelected === "None" && (
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
                    href="#curriculum"
                    style={{ color: "black", fontWeight: 500 }}
                  >
                    <button
                      className="button"
                      onMouseEnter={() => setCircleHovered("Curriculum")}
                      onMouseLeave={() => setCircleHovered("None")}
                      onClick={() => setCircleSelected("Curriculum")}
                    >
                      <h2
                        style={{
                          fontSize: "0.8rem",
                          fontFamily: `${styles[style]?.font}`,
                        }}
                      >
                        {t("curriculum")}
                      </h2>
                    </button>
                  </a>
                </div>
              )}
            </div>
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
          <TextFade
            staggerChildren={0.7}
            direction="up"
            className="about-me-text"
          >
            <div className="about-me-text">
              <h2>{t("about me")}</h2>
              <p>{t("about me first line")}</p>
              <p>{t("about me second line")}</p>
              <p>{t("about me third line")}</p>
            </div>
          </TextFade>
        </div>
      </div>
      <div style={{ backgroundColor: "white", height: "300px" }}></div>
      <div
        className="contact-me-container"
        style={{
          backgroundColor: styles[style]?.sectionsBackground,
        }}
      >
        <h2 style={{ fontFamily: `${styles[style]?.font}`, fontSize: "2rem" }}>
          {t("contactme")}
        </h2>
        <TextFade staggerChildren={0.4} direction="up">
          <div className="contact-me-information-container">
            <div className="contact-me-element">
              <img
                src={"/icons/github.svg"}
                alt="github icon"
                style={{
                  width: "75px",
                  height: "75px",
                  filter: `${styles[style]?.iconstFilter}`,
                }}
              />
              <a href="https://github.com/Alina-02" target="_blank">
                GitHub
              </a>
            </div>
            <div className="contact-me-element">
              <img
                src={"/icons/email.svg"}
                alt="email icon"
                style={{
                  width: "75px",
                  height: "75px",
                  filter: `${styles[style]?.iconstFilter}`,
                }}
              />
              <a>alinamontma@gmail.com</a>
            </div>
            {/*} <a target="_blank" href="https://icons8.com/icon/8808/linkedin">
            LinkedIn
          </a>
          icon by
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>*/}
            <div className="contact-me-element">
              <img
                src={"/icons/linkedin.svg"}
                alt="linkedin icon"
                style={{
                  width: "75px",
                  height: "75px",
                  filter: `${styles[style]?.iconstFilter}`,
                }}
              />
              <a href="https://linkedin.com/in/alina-montoliu-2oo2">LinkedIn</a>
            </div>
            <div className="contact-me-element">
              <img
                src={"/icons/call.svg"}
                alt="calls icon"
                style={{
                  width: "70px",
                  height: "70px",
                  filter: `${styles[style]?.iconstFilter}`,
                }}
              />
              <p style={{ margin: "0" }}>+34 685 63 18 05</p>
            </div>
          </div>
        </TextFade>
      </div>
    </>
  );
}

export default App;
