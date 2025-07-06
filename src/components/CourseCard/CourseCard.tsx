import React from "react";
import "./coursecard.css";

interface Props {
  mainInfo: string;
  year: string;
  web: string;
}

const CourseCard = (props: Props) => {
  const { mainInfo, year, web } = props;
  return (
    <div className="card">
      <div className="card_title title-white">
        <p>{mainInfo}</p>
        <p style={{ fontWeight: 100 }}>
          <i>{web}</i>
        </p>
        <p style={{ fontWeight: 100 }}>{year}</p>
      </div>
    </div>
  );
};

export default CourseCard;
