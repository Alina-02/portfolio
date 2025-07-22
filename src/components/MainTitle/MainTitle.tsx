import { TextFade } from "../TextFade";
import { styles } from "../../utils/styles";
import { useTranslation } from "react-i18next";

interface Props {
  style: number;
  onLeftStyle: () => void;
  onRightStyle: () => void;
}

const MainTitle = (props: Props) => {
  const { style, onLeftStyle, onRightStyle } = props;

  const { t } = useTranslation();

  return (
    <div className="title-div" style={{ color: styles[style]?.titleTextColor }}>
      <TextFade
        staggerChildren={0.2}
        direction="up"
        className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
      >
        <h1 style={{ marginBottom: "0.2rem" }}>{t("Hi")}</h1>
        <h1 style={{ marginBottom: "1rem", marginTop: "0.8rem" }}>
          {t("I am")}
        </h1>

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
            width: "375px",
            justifyContent: "space-between",
            marginBottom: "2rem",
            alignItems: "center",
          }}
        >
          <button className="arrow-button" onClick={onLeftStyle}>
            <img
              src={"/portfolio/icons/arrow-sm-left-svgrepo-com.svg"}
              alt="mySvgImage"
              style={{ width: "30px", height: "30px" }}
            />
          </button>
          <h2 style={{ fontSize: "2rem" }}>{t("but also")}</h2>
          <button className="arrow-button" onClick={onRightStyle}>
            <img
              src={"/portfolio/icons/arrow-sm-right-svgrepo-com.svg"}
              alt="mySvgImage"
              style={{ width: "30px", height: "30px" }}
            />
          </button>
        </div>
      </TextFade>
    </div>
  );
};

export default MainTitle;
