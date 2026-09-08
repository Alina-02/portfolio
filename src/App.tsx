import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";
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
import Dragon from "./components/Dragon/Dragon";

function App() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  const [style, setStyle] = useState<number>(1);

  const [zoom, setZoom] = useState<boolean>(false);
  const [circleSelected, setCircleSelected] = useState<
    "None" | "Projects" | "Courses" | "Curriculum" | "Email"
  >("Projects");

  const circlesRef = useRef(null);

  const buttonVariants: Variants = {
    hover: {
      x: 20,
      backgroundColor: "#1a1a1a",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const menuItems = [
    { label: "PROJECTS", value: "Projects" },
    { label: "CURRICULUM", value: "Curriculum" },
    { label: "COURSES", value: "Courses" },
    { label: "CONTACT ME", value: "Email" },
  ];

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
      setCircleSelected("Projects");
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
        <a href="#about-me">
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

      <Dragon />

      <AboutMe style={style} />
      <div
        id="main-container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "fit-content",
            gap: "10px", // Espaciado entre botones
          }}
        >
          {menuItems.map((item) => (
            <motion.button
              key={item.value}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                background: "black",
                color: "white",
                width: "250px",
                fontSize: "2rem",
                fontFamily: styles[style]?.font,
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: "10px 20px",
              }}
              onClick={() => setCircleSelected(item.value)}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        <div style={{ width: "100%", background: "white" }}>
          {circleSelected === "Curriculum" && <Curriculum style={style} />}
          {circleSelected === "Courses" && <Courses style={style} />}
          {circleSelected === "Projects" && <ProjectsSection style={style} />}
          {circleSelected === "Email" && <ContactEmail style={style} />}
        </div>
      </div>
      <div id="main-information" />

      <ContactMe style={style} />
    </div>
  );
}

export default App;
