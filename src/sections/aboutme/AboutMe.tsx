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
      id="about-me"
      className="about-me-container"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div className="about-me-information-wrapper">
        <TextFade
          staggerChildren={0.7}
          direction="up"
          className="about-me-text-container"
        >
          <div>
            <h2
              style={{
                fontFamily: `${styles[style]?.font}`,
                fontSize: styles[style]?.h2FontSize,
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
