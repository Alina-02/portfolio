import { type ReactElement } from "react";
import "./projects.css";
import { useTranslation } from "react-i18next";

interface Props {
  imagelink: string;
  title: string;
  year: string;
  link: string;
  description: string;
  technologies: ReactElement<unknown, string>;
  mainColor: string;
}

const ProjectCard = (props: Props) => {
  const { title, year, link, description, technologies } = props;
  const { t } = useTranslation();
  return (
    <div
      style={{
        minWidth: "350px",
        width: "350px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <h3 style={{ fontSize: "1.75rem", marginBottom: "0px" }}>{title}</h3>
      <p>
        <i>{year}</i> -{" "}
        <a href={link} style={{ textDecoration: "underline" }}>
          Repository
        </a>
      </p>
      <div style={{ display: "flex" }}>{technologies}</div>
      <div>
        <p style={{ textAlign: "left" }}>{t(description)}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
