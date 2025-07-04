import { useState } from "react";
import "./App.css";

const styles = [
  { font: "ShadigoTrial" },
  { font: "LemonGarlic" },
  { font: "Maskdown" },
  { font: "RochestarDemo" },
  { font: "TurquoiseKimono" },
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
      <div className="title-div">
        <h1 style={{ marginBottom: "0.2rem" }}>Hola</h1>
        <h1 style={{ marginBottom: "1.5rem", marginTop: "0.8rem" }}>Soy</h1>
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
            marginBottom: "6rem",
            alignItems: "center",
          }}
        >
          <button
            style={{ borderRadius: "100%", width: "50px", height: "50px" }}
            onClick={onLeftStyle}
          >
            -
          </button>
          <h2>Pero también...</h2>
          <button
            style={{ borderRadius: "100%", width: "50px", height: "50px" }}
            onClick={onRightStyle}
          >
            -
          </button>
        </div>
      </div>

      <div className="main-circle">
        <div>
          <div
            style={{
              borderRadius: "100%",
              width: "100px",
              height: "100px",
              backgroundColor: "white",
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
            }}
          >
            Curriculum
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
