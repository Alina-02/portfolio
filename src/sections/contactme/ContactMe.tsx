import React from "react";
import { TextFade } from "../../components/TextFade";
import { styles } from "../../utils/styles";

import "../../styles/contactme.css";
import { useTranslation } from "react-i18next";

interface Props {
  style: number;
}

const ContactMe = (props: Props) => {
  const { style } = props;
  const { t } = useTranslation();
  return (
    <div
      className="contact-me-container"
      style={{
        backgroundColor: styles[style]?.sectionsBackground,
        color: styles[style]?.sectionsTextColor,
      }}
    >
      <h2 style={{ fontFamily: `${styles[style]?.font}` }}>{t("contactme")}</h2>
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
  );
};

export default ContactMe;
