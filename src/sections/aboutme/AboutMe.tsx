import React from "react";
import { styles } from "../../utils/styles";
import { TextFade } from "../../components/TextFade";
import { useTranslation } from "react-i18next";

import "../../styles/aboutme.css";

interface Props {
  style: number;
}

const AboutMe = (props: Props) => {
  const { style } = props;
  const { t } = useTranslation();
  return (
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
          <p className="about-me-text">{t("photo progress")}</p>
        </div>
        <TextFade
          staggerChildren={0.7}
          direction="up"
          className="about-me-text-container"
        >
          <div>
            <h2
              style={{
                fontFamily: `${styles[style]?.font}`,
              }}
            >
              {t("about me")}
            </h2>
            <p className="about-me-text">{t("about me first line")}</p>
            <p className="about-me-text">{t("about me second line")}</p>
            <p className="about-me-text">{t("about me third line")}</p>
          </div>
        </TextFade>
      </div>
    </div>
  );
};

export default AboutMe;
