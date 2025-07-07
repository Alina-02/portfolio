"use client";

import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useRef } from "react";

import "./projects.css";

export default function Projects() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <div id="example">
      <motion.ul ref={ref} style={{ maskImage }}>
        <li style={{ background: "white", borderRadius: "20px" }}>
          <div className="project-card">
            <img
              src="/img/booknote2.png"
              className="project-card__image"
              alt=""
            />
            <div className="project-card__overlay">
              <div className="project-card__header">
                <svg className="project-card__arc">
                  <path />
                </svg>

                <div className="project-card__header-text">
                  <h3 className="project-card__title">BookNote 2.0</h3>
                  <span className="project-card__status">2025</span>
                  <p style={{ margin: 0 }}>
                    <a
                      style={{ color: "black" }}
                      className="project-card__status"
                    >
                      Link
                    </a>
                  </p>
                </div>
              </div>
              <p className="project-card__description">
                La app para guardar citas de libros dos años después
                incorporando los nuevos conocimientos adquiridos sobre diseño y
                desarrollo.
              </p>
            </div>
          </div>
        </li>
        <li style={{ background: "white", borderRadius: "20px" }}>
          <div className="project-card">
            <img
              src="/img/booknote1.png"
              className="project-card__image"
              alt=""
            />
            <div className="project-card__overlay">
              <div className="project-card__header">
                <svg className="project-card__arc">
                  <path />
                </svg>

                <div className="project-card__header-text">
                  <h3 className="project-card__title">BooknNote 1.0</h3>
                  <span className="project-card__status">2023</span>
                  <p style={{ margin: 0 }}>
                    <a
                      style={{ color: "black" }}
                      className="project-card__status"
                    >
                      Link
                    </a>
                  </p>
                  <p style={{ color: "black" }}> React</p>
                </div>
              </div>
              <p className="project-card__description">
                Una aplicación web para guardar las citas de tus libros
                favoritos porque un día me di cuenta de que necesitaba
                guardarlas en algún lado.
              </p>
            </div>
          </div>
        </li>

        <li style={{ background: "white", borderRadius: "20px" }}>
          <div className="project-card">
            <img
              src="/img/pokeapp.png"
              className="project-card__image"
              alt=""
            />
            <div className="project-card__overlay">
              <div className="project-card__header">
                <svg className="project-card__arc">
                  <path />
                </svg>

                <div className="project-card__header-text">
                  <h3 className="project-card__title">PokeApp</h3>
                  <span className="project-card__status">2023</span>
                  <p style={{ margin: 0 }}>
                    <a
                      style={{ color: "black" }}
                      className="project-card__status"
                    >
                      Link
                    </a>
                  </p>
                </div>
              </div>
              <p className="project-card__description">
                Un proyecto básico para aprender a utilizar MUI. ¿Quién no tiene
                una app de pokemon?
              </p>
            </div>
          </div>
        </li>

        <li style={{ background: "white", borderRadius: "20px" }}>
          <div className="project-card">
            <img src="/img/randON.png" className="project-card__image" alt="" />
            <div className="project-card__overlay">
              <div className="project-card__header">
                <svg className="project-card__arc">
                  <path />
                </svg>

                <div className="project-card__header-text">
                  <h3 className="project-card__title">RandOn</h3>
                  <span className="project-card__status">2025</span>
                  <p style={{ margin: 0 }}>
                    <a
                      style={{ color: "black" }}
                      className="project-card__status"
                    >
                      Link
                    </a>
                  </p>
                </div>
              </div>
              <p className="project-card__description">
                Una aplicación web que recomienda música en base al género que
                elijas y las canciones de tu librería de Spotify. Tenía ganas de
                escuchar música nueva.
              </p>
            </div>
          </div>
        </li>

        <li style={{ background: "white", borderRadius: "20px" }}>
          <div className="project-card">
            <img
              src="/img/funkypomodoro.png"
              className="project-card__image"
              alt=""
            />
            <div className="project-card__overlay">
              <div className="project-card__header">
                <svg className="project-card__arc">
                  <path />
                </svg>

                <div className="project-card__header-text">
                  <h3 className="project-card__title">Funky Pomodoro</h3>
                  <span className="project-card__status">2025</span>
                  <p style={{ margin: 0 }}>
                    <a
                      style={{ color: "black" }}
                      className="project-card__status"
                    >
                      Link
                    </a>
                  </p>
                </div>
              </div>
              <p className="project-card__description">
                Esto es un pequeño resumen del proyecto donde digo de que trata.
              </p>
            </div>
          </div>
        </li>
      </motion.ul>
    </div>
  );
}

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;
function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}
