import React from "react";
import { TextFade } from "../../components/TextFade";
import { styles } from "../../utils/styles";

import "../../styles/contactme.css";
import { useTranslation } from "react-i18next";
import ContactMeElement from "./ContactMeElement";

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
        <div className="contact-me-grid">
          <ContactMeElement
            style={style}
            iconLink={"/icons/email.svg"}
            text={"alinamontma@gmail.com"}
          />
          <ContactMeElement
            style={style}
            iconLink={"/icons/github.svg"}
            webLink={"https://github.com/Alina-02"}
            text={"GitHub"}
            reverse
          />
          <ContactMeElement
            style={style}
            iconLink={"/icons/call.svg"}
            text={"+34 685 63 18 05"}
          />
          <ContactMeElement
            style={style}
            iconLink={"/icons/linkedin.svg"}
            webLink={"https://linkedin.com/in/alina-montoliu-2oo2"}
            text={"LinkedIn"}
            reverse
          />
        </div>

        {/*} <a target="_blank" href="https://icons8.com/icon/8808/linkedin">
            LinkedIn
          </a>
          icon by
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>*/}
      </TextFade>
    </div>
  );
};

export default ContactMe;
