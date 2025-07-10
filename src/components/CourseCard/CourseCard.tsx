import "./coursecard.css";
import { useTranslation } from "react-i18next";

interface Props {
  mainInfo: string;
  year: string;
  web: string;
  imgLink: string;
}

const CourseCard = (props: Props) => {
  const { mainInfo, year, web, imgLink } = props;
  const { t } = useTranslation();

  return (
    <div className="course-card">
      <img className="course-image" src={imgLink}></img>
      <div className="course-text">
        <p>
          {t(mainInfo)} - {t(year)}
        </p>
        <p
          style={{
            fontWeight: 100,
          }}
        >
          <i>{t(web)}</i>
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
