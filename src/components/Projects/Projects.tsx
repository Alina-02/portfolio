"use client";

import "./projects.css";
import ProjectCard from "./ProjectCard";
import TechChip from "./TechChip";
import { useEffect, useRef } from "react";

interface Props {
  style: number;
}

export default function Projects(props: Props) {
  const { style } = props;

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      const canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth;
      const canScrollLeft = el.scrollLeft > 0;

      if (
        (isScrollingDown && canScrollRight) ||
        (isScrollingUp && canScrollLeft)
      ) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="scrollbar"
      style={{
        display: "flex",
        gap: "3rem",
        maxWidth: "1980px",
        overflowX: "auto",
        overflowY: "hidden",
        marginLeft: "2rem",
        marginRight: "2rem",
        scrollBehavior: "smooth",
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
