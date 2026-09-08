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
          paddingTop: "2rem",
          color: "black",
          backgroundColor: "white",
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
