import CourseCard from "../../components/CourseCard/CourseCard";
import { styles } from "../../utils/styles";
import { useTranslation } from "react-i18next";

interface Props {
  style: number;
}

const Courses = (props: Props) => {
  const { style } = props;

  const { t } = useTranslation();

  return (
    <>
      <div
        id="courses"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          zIndex: "1",
          padding: "2rem",
          backgroundColor: styles[style]?.sectionsBackground,
        }}
      >
        <h2
          style={{ fontFamily: `${styles[style]?.font}`, fontSize: "2.5rem" }}
        >
          {t("courses")}
        </h2>
        <div
          style={{
            fontSize: "0.8rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="course-card-container">
            <CourseCard
              mainInfo="coursessection.course1.title"
              year="coursessection.course1.year"
              web="coursessection.course1.web"
              imgLink="/img/fm.png"
            />
            <CourseCard
              mainInfo="coursessection.course2.title"
              year="coursessection.course2.year"
              web="coursessection.course2.web"
              imgLink="/img/fm.png"
            />
          </div>
          <div className="course-card-container">
            <CourseCard
              mainInfo="coursessection.course3.title"
              year="coursessection.course3.year"
              web="coursessection.course3.web"
              imgLink="/img/fm.png"
            />
            <CourseCard
              mainInfo="coursessection.course4.title"
              year="coursessection.course4.year"
              web="coursessection.course4.web"
              imgLink="/img/fm.png"
            />
          </div>
          <div className="course-card-container">
            <CourseCard
              mainInfo="coursessection.course5.title"
              year="coursessection.course5.year"
              web="coursessection.course5.web"
              imgLink="/img/fm.png"
            />
            <CourseCard
              mainInfo="coursessection.course6.title"
              year="coursessection.course6.year"
              web="coursessection.course6.web"
              imgLink="/img/fm.png"
            />
          </div>
          <div className="course-card-container">
            <CourseCard
              mainInfo="coursessection.course7.title"
              year="coursessection.course7.year"
              web="coursessection.course7.web"
              imgLink="/img/coursera.png"
            />
            <CourseCard
              mainInfo="coursessection.course8.title"
              year="coursessection.course8.year"
              web="coursessection.course8.web"
              imgLink="/img/cf.png"
            />
          </div>
        </div>
      </div>
      <div style={{ height: "50px", backgroundColor: "white" }}></div>
    </>
  );
};

export default Courses;
