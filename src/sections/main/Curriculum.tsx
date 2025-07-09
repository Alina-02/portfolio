import React from "react";
import { styles } from "../../utils/styles";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

import "../../styles/curriculum.css";

interface Props {
  style: number;
}

const Curriculum = (props: Props) => {
  const { style } = props;
  const { t } = useTranslation();

  return (
    <>
      <div
        id="curriculum"
        style={{
          backgroundColor: styles[style]?.sectionsBackground,
          display: "flex",
          flexDirection: "column",
          color: "white",
          zIndex: "1",
          padding: "2rem",
        }}
      >
        <h2
          style={{ fontFamily: `${styles[style]?.font}`, fontSize: "2.5rem" }}
        >
          {t("curriculum")}
        </h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              maxWidth: "550px",
              textAlign: "left",
              marginRight: "1vw",
            }}
          >
            <h3
              style={{
                marginBottom: "0.5vh",
                fontSize: "1.5rem",
                marginTop: "0",
              }}
            >
              {t("curriculumsection.education")}
            </h3>
            <p style={{ fontSize: "1rem", marginTop: "0.5vh" }}>
              <strong>{t("curriculumsection.upv")} </strong> <br />
              {t("curriculumsection.degree")}
              <i>{t("curriculumsection.gpa")}</i> <br />
              <strong>{t("curriculumsection.thesis")}</strong>:{" "}
              {t("curriculumsection.thesistitle")}
              <br />
              <strong>{t("curriculumsection.honors")}</strong>:{" "}
              {t("curriculumsection.honorsinformation")}
            </p>

            <h3 style={{ marginBottom: "0.5vh", fontSize: "1.5rem" }}>
              {t("curriculumsection.volunteer")}
            </h3>
            <p style={{ fontSize: "1rem", marginTop: "0.5vh" }}>
              <strong>{t("curriculumsection.teso")}</strong>
              <br /> <i>{t("curriculumsection.tesodate")}</i> <br />
              {t("curriculumsection.tesodescription")}
            </p>

            <h3 style={{ marginBottom: "0.5vh", fontSize: "1.5rem" }}>
              {t("curriculumsection.skills")}
            </h3>

            <div style={{ fontSize: "1rem", marginTop: "0.5vh" }}>
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
            style={{
              color: "white",
              maxWidth: "550px",
              textAlign: "right",
            }}
          >
            <h3
              style={{
                marginBottom: "0.5vh",
                fontSize: "1.5rem",
                marginTop: "0",
              }}
            >
              {t("curriculumsection.experience")}
            </h3>
            <div style={{ fontSize: "1rem", marginTop: "0.5vh" }}>
              <strong>{t("curriculumsection.experiencetitle1")}</strong>
              <br />
              <i>{t("curriculumsection.experiencedate1")}</i> <br />
              <ul style={{ textAlign: "left" }}>
                <li>{t("curriculumsection.experiencelist11")}</li>
                <li>{t("curriculumsection.experiencelist21")}</li>
                <li>{t("curriculumsection.experiencelist31")}</li>
                <li>{t("curriculumsection.experiencelist41")}</li>
              </ul>
            </div>
            <div style={{ fontSize: "1rem" }}>
              <strong>{t("curriculumsection.experiencetitle2")}</strong>
              <br /> <i>{t("curriculumsection.experiencedate2")}</i>
              <ul style={{ textAlign: "left" }}>
                <li>{t("curriculumsection.experiencelist21")}</li>
                <li>{t("curriculumsection.experiencelist22")}</li>
                <li>{t("curriculumsection.experiencelist32")}</li>
              </ul>
            </div>
            <div className="download-button-container">
              <a
                className="download-button"
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
      <div style={{ height: "50px", backgroundColor: "white" }}></div>
    </>
  );
};

export default Curriculum;
