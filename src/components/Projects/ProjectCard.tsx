import React, { type JSX, type ReactElement } from "react";
import "./projects.css";
import { useTranslation } from "react-i18next";

interface Props {
  imagelink: string;
  title: string;
  year: string;
  link: string;
  description: string;
  technologies: ReactElement<any, any>;
}

const ProjectCard = (props: Props) => {
  const { imagelink, title, year, link, description, technologies } = props;
  const { t } = useTranslation();
  return (
    <li style={{ background: "white", borderRadius: "20px" }}>
      <div className="project-card">
        <img
          src={imagelink}
          className="project-card__image"
          alt="Project screenshot"
        />
        <div className="project-card__overlay">
          <div className="project-card-header">
            <svg className="project-card__arc">
              <path />
            </svg>

            <div className="project-card-header-text">
              <h3 className="project-card__title">{title}</h3>
              <span className="project-card-year">{year + " - "}</span>

              <a
                style={{ color: "black" }}
                className="project-card-status"
                href={link}
              >
                {t("Repository")}
              </a>

              <div style={{ display: "flex" }}>{technologies}</div>
            </div>
          </div>
          <p className="project-card__description">{t(description)}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
