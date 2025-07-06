import React from "react";
import "./coursecard.css";
import { useTranslation } from "react-i18next";

interface Props {
  mainInfo: string;
  year: string;
  web: string;
}

const CourseCard = (props: Props) => {
  const { mainInfo, year, web } = props;
  const { t } = useTranslation();

  return (
    <div className="card">
      <div className="card_title title-white">
        <p>{t(mainInfo)}</p>
        <p style={{ fontWeight: 100 }}>
          <i>{t(web)}</i>
        </p>
        <p style={{ fontWeight: 100 }}>{t(year)}</p>
      </div>
    </div>
  );
};

export default CourseCard;
