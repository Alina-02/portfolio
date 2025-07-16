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
  style: number;
}

const ProjectCard = (props: Props) => {
  const { imagelink, title, year, link, description, technologies } = props;
  const { t } = useTranslation();
  return (
    <div
      style={{
        minWidth: "350px",
        width: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: "20px",
        color: "black",
        padding: "2rem",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <h3
          style={{ fontSize: "1.75rem", marginBottom: "0px", marginTop: "0px" }}
        >
          {title}
        </h3>
        <p style={{ marginBottom: "5px", marginTop: "5px" }}>
          <i>{year}</i> -{" "}
          <a
            href={link}
            target="_blank"
            style={{
              textDecoration: "underline",
              color: "black",
            }}
          >
            Repository
          </a>
        </p>
        <div style={{ display: "flex" }}>{technologies}</div>
        <div>
          <p
            style={{
              textAlign: "left",
              maxHeight: "400px",
            }}
          >
            {t(description)}
          </p>
        </div>
      </div>
      <img
        src={imagelink}
        style={{
          maxWidth: "100%",
          height: "auto !important",
          borderRadius: "20px ",
        }}
      />
    </div>
  );
};

export default ProjectCard;
