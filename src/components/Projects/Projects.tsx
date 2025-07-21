"use client";

import "./projects.css";
import ProjectCard from "./ProjectCard";
import TechChip from "./TechChip";

interface Props {
  style: number;
}

export default function Projects(props: Props) {
  const { style } = props;
  return (
    <div
      className="scrollbar"
      style={{
        display: "flex",
        gap: "3rem",
        maxWidth: "1280px",
        overflowX: "scroll",
        overflowY: "hidden",
      }}
    >
      <ProjectCard
        style={style}
        imagelink={"img/booknote2.png"}
        title={"BookNote 2.0"}
        year={"2025"}
        link={"https://github.com/Alina-02/booknote-2"}
        description={"projectssection.project1.description"}
        technologies={
          <>
            <TechChip color="#0081A3" name="React" />
            <TechChip color="#3178c6" name="TypeScript" />
            <TechChip color="#0073E6" name="MUI" />
          </>
        }
        mainColor={""}
      />
      <ProjectCard
        style={style}
        imagelink={"img/funkypomodoro.png"}
        title={"Funky Pomodoro"}
        year={"2025"}
        link={"https://github.com/Alina-02/funky-pomodoro"}
        description={"projectssection.project2.description"}
        technologies={
          <>
            <TechChip color="#0081A3" name="React" />
            <TechChip color="#3178c6" name="TypeScript" />
          </>
        }
        mainColor={""}
      />
      <ProjectCard
        style={style}
        imagelink={"img/randon.png"}
        title={"RandOn"}
        year={"2025"}
        link={"https://github.com/Alina-02/spfy-rec"}
        description={"projectssection.project3.description"}
        technologies={
          <>
            <TechChip color="#0081A3" name="React" />
            <TechChip color="#3178c6" name="TypeScript" />
            <TechChip color="#0073E6" name="MUI" />
          </>
        }
        mainColor={""}
      />
      <ProjectCard
        style={style}
        imagelink={"img/pokeapp.png"}
        title={"PokeApp"}
        year={"2024"}
        link={"https://github.com/Alina-02/PokeApp"}
        description={"projectssection.project4.description"}
        technologies={
          <>
            <TechChip color="#0081A3" name="React" />
            <TechChip color="#3178c6" name="TypeScript" />
            <TechChip color="#0073E6" name="MUI" />
          </>
        }
        mainColor={""}
      />
      <ProjectCard
        style={style}
        imagelink={"img/booknote1.png"}
        title={"BooknNote 1.0"}
        year={"2023"}
        link={"https://github.com/Alina-02/booknote-project"}
        description={"projectssection.project5.description"}
        technologies={
          <>
            <TechChip color="#0081A3" name="React" />
            <TechChip color="#00BCFF" name="TailwindCSS" />

            <TechChip color="#f7df1e" textColor="black" name="JavaScript" />
          </>
        }
        mainColor={""}
      />
    </div>
  );
}
