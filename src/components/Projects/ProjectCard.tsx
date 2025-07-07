import React from "react";
import "./projects.css";
import { useTranslation } from "react-i18next";

interface Props {
  imagelink: string;
  title: string;
  year: string;
  link: string;
  description: string;
}

const ProjectCard = (props: Props) => {
  const { imagelink, title, year, link, description } = props;
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
          <div className="project-card__header">
            <svg className="project-card__arc">
              <path />
            </svg>

            <div className="project-card__header-text">
              <h3 className="project-card__title">{title}</h3>
              <span className="project-card__status">{year}</span>
              <p style={{ margin: 0 }}>
                <a
                  style={{ color: "black" }}
                  className="project-card__status"
                  href={link}
                >
                  {t("Repository")}
                </a>
              </p>
            </div>
          </div>
          <p className="project-card__description">{t(description)}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
