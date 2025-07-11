import { styles } from "../../utils/styles";
import { useTranslation } from "react-i18next";
import Projects from "../../components/Projects/Projects";

interface Props {
  style: number;
}

const ProjectsSection = (props: Props) => {
  const { style } = props;
  const { t } = useTranslation();
  return (
    <>
      <div
        id="projects"
        style={{
          display: "flex",
          flexDirection: "column",
          zIndex: "1",
          alignItems: "center",
          padding: "2rem",

          color: styles[style]?.sectionsTextColor,
          backgroundColor: styles[style]?.sectionsBackground,
        }}
      >
        <h2
          style={{
            fontFamily: `${styles[style]?.font}`,
            fontSize: styles[style]?.h2FontSize,
          }}
        >
          {t("projects")}
        </h2>
        <Projects style={style} />
      </div>
      <div style={{ height: "50px", backgroundColor: "white" }}></div>
    </>
  );
};

export default ProjectsSection;
