import { useState } from "react";
import "./App.css";
import Flower from "./components/Flower";

const styles = [
  { font: "ShadigoTrial", circleBackground: "red" },
  {
    font: "LemonGarlic",
  },
  { font: "Maskdown", circleBackground: "black" },
  { font: "RochestarDemo" },
  {
    font: "TurquoiseKimono",
    circleBackground:
      "linear-gradient(180deg, rgba(252, 234, 169, 1) 0%, rgba(205, 244, 245, 1) 49%, rgba(107, 217, 242, 1) 100%)",
    sectionsBackground: "rgba(205, 244, 245, 1)",
  },
];

function App() {
  const [style, setStyle] = useState<number>(0);

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
      <div className="title-div">
        <h1 style={{ marginBottom: "0.2rem" }}>Hola</h1>
        <h1 style={{ marginBottom: "1rem", marginTop: "0.8rem" }}>soy</h1>
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
            width: "300px",
            justifyContent: "space-between",
            marginBottom: "2rem",
            alignItems: "center",
          }}
        >
          <button className="arrow-button" onClick={onLeftStyle}>
            <img
              src={"../public/icons/arrow-sm-left-svgrepo-com.svg"}
              alt="mySvgImage"
              style={{ width: "30px", height: "30px" }}
            />
          </button>
          <h2>Pero también...</h2>
          <button className="arrow-button" onClick={onRightStyle}>
            <img
              src={"../public/icons/arrow-sm-right-svgrepo-com.svg"}
              alt="mySvgImage"
              style={{ width: "30px", height: "30px" }}
            />
          </button>
        </div>
      </div>

      <div
        className="main-circle"
        style={{ background: styles[style]?.circleBackground }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              borderRadius: "100%",
              width: "100px",
              height: "100px",
              backgroundColor: "white",
              alignContent: "center",
            }}
          >
            Proyectos
          </div>
          <div
            style={{
              borderRadius: "100%",
              width: "100px",
              height: "100px",
              backgroundColor: "white",
              alignContent: "center",
            }}
          >
            Cursos
          </div>
          <div
            style={{
              borderRadius: "100%",
              width: "100px",
              height: "100px",
              backgroundColor: "white",
              alignContent: "center",
            }}
          >
            Curriculum
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "white", height: "400px" }}></div>
      <div
        style={{
          backgroundColor: styles[style]?.sectionsBackground,
          height: "600px",

          display: "flex",
          justifyContent: "center",
          padding: "3rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: "100%",
              backgroundColor: "white",
              height: "400px",
              width: "400px",
            }}
          ></div>
          <div style={{ width: "60%", paddingLeft: "2rem", textAlign: "left" }}>
            <h2>Sobre mi</h2>
            <p>
              ¡Hola! Soy una programadora front-end muy interesada por el diseño
              UI y la interacción con el usuario.
            </p>
            <p>
              Me gusta proponerme retos nuevos siempre que puedo por lo que no
              te extrañes si cada vez que pasa por aquí esto ha cambiado.
              Siempre estoy dispuesta a aprender algo nuevo.
            </p>
            <p>
              El framework con el que me siento más cómoda es React pero también
              tengo conocimientos en Angular. Respecto al desarrollo móvil tengo
              conocimientos en Flutter y React Native.
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "white", height: "300px" }}></div>
      <div
        style={{
          backgroundColor: styles[style]?.sectionsBackground,
          height: "300px",
          width: "100vw",
        }}
      ></div>
    </>
  );
}

export default App;
