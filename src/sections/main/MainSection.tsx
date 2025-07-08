import { motion, type Transition } from "motion/react";
import React from "react";
import { styles } from "../../utils/styles";
import { useTranslation } from "react-i18next";

import i18n from "../../i18n";
import CourseCard from "../../components/CourseCard/CourseCard";
import Projects from "../../components/Projects/Projects";

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
  circleSelected: "None" | "Curriculum" | "Projects" | "Courses";
  setCircleSelected: React.Dispatch<
    React.SetStateAction<"None" | "Curriculum" | "Projects" | "Courses">
  >;
  style: number;
  leftButtonHover: boolean;
  setLeftButtonHover: React.Dispatch<React.SetStateAction<boolean>>;
  rightButtonHover: boolean;
  setRightButtonHover: React.Dispatch<React.SetStateAction<boolean>>;
  circlesRef: React.RefObject<null>;
}

const MainSection = (props: Props) => {
  const {
    zoom,
    circleSelected,
    setCircleSelected,
    style,
    leftButtonHover,
    setLeftButtonHover,
    rightButtonHover,
    setRightButtonHover,
    circlesRef,
  } = props;

  const { t } = useTranslation();

  return (
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
            width: "30vw",
          }}
        >
          <h2 style={{ fontFamily: `${styles[style]?.font}` }}>
            {t("curriculum")}
          </h2>
          <div style={{ display: "flex" }}>
            <div
              style={{
                maxWidth: "275px",
                textAlign: "left",
                marginRight: "1vw",
              }}
            >
              <h3 style={{ marginBottom: "0.5vh", fontSize: "0.6rem" }}>
                {t("curriculumsection.education")}
              </h3>
              <p style={{ fontSize: "0.4rem", marginTop: "0.5vh" }}>
                <strong>{t("curriculumsection.upv")} </strong> <br />
                {t("curriculumsection.degree")}
                <i>{t("curriculumsection.gpa")}</i> <br />
                <strong>{t("curriculumsection.thesis")}</strong>:{" "}
                {t("curriculumsection.thesistitle")}
                <br />
                <strong>{t("curriculumsection.honors")}</strong>:{" "}
                {t("curriculumsection.honorsinformation")}
              </p>

              <h3 style={{ marginBottom: "0.5vh", fontSize: "0.6rem" }}>
                {t("curriculumsection.volunteer")}
              </h3>
              <p style={{ fontSize: "0.4rem", marginTop: "0.5vh" }}>
                <strong>{t("curriculumsection.teso")}</strong>
                <br /> <i>{t("curriculumsection.tesodate")}</i> <br />
                {t("curriculumsection.tesodescription")}
              </p>

              <h3 style={{ marginBottom: "0.5vh", fontSize: "0.6rem" }}>
                {t("curriculumsection.skills")}
              </h3>

              <div style={{ fontSize: "0.4rem", marginTop: "0.5vh" }}>
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
              style={{ color: "white", maxWidth: "275px", textAlign: "left" }}
            >
              <h3 style={{ marginBottom: "0.5vh", fontSize: "0.6rem" }}>
                {t("curriculumsection.experience")}
              </h3>
              <div style={{ fontSize: "0.4rem", marginTop: "0.5vh" }}>
                <strong>{t("curriculumsection.experiencetitle1")}</strong>
                <br />
                <i>{t("curriculumsection.experiencedate1")}</i> <br />
                <ul>
                  <li>{t("curriculumsection.experiencelist11")}</li>
                  <li>{t("curriculumsection.experiencelist21")}</li>
                  <li>{t("curriculumsection.experiencelist31")}</li>
                  <li>{t("curriculumsection.experiencelist41")}</li>
                </ul>
              </div>
              <div style={{ fontSize: "0.4rem" }}>
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
                    fontSize: "0.6rem",
                    borderRadius: "10px",
                    padding: "0.5vh",
                    paddingLeft: "0.7vh",
                    paddingRight: "0.7vh",
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
          <h2 style={{ fontFamily: `${styles[style]?.font}` }}>
            {t("courses")}
          </h2>
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
          <h2 style={{ fontFamily: `${styles[style]?.font}` }}>
            {t("projects")}
          </h2>
          <Projects />
        </div>
      )}

      {zoom && (
        <div className="circles-container-container">
          <div className="circles-container" ref={circlesRef}>
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
                <a href="#courses" style={{ color: "black", fontWeight: 500 }}>
                  <button
                    className="button"
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
  );
};

export default MainSection;
