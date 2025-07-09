import React from "react";
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
          color: "white",
          zIndex: "1",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: styles[style]?.sectionsBackground,
          width: "100%",
        }}
      >
        <h2 style={{ fontFamily: `${styles[style]?.font}` }}>
          {t("projects")}
        </h2>
        <Projects />
      </div>
      <div style={{ height: "50px", backgroundColor: "white" }}></div>
    </>
  );
};

export default ProjectsSection;
