"use client";

import "./projects.css";
import ProjectCard from "./ProjectCard";
import TechChip from "./TechChip";

export default function Projects() {
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
        imagelink={""}
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
        imagelink={""}
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
        imagelink={""}
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
        imagelink={""}
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
        imagelink={""}
        title={"BooknNote 1.0"}
        year={"2023"}
        link={"https://github.com/Alina-02/booknote-project"}
        description={"projectssection.project5.description"}
        technologies={
          <>
            <TechChip color="#0081A3" name="React" />
            <TechChip color="#f7df1e" textColor="black" name="JavaScript" />
          </>
        }
        mainColor={""}
      />
    </div>
  );
}
