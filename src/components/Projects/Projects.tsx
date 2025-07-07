"use client";

import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useRef } from "react";

import "./projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <div id="example">
      <motion.ul ref={ref} style={{ maskImage }}>
        <ProjectCard
          imagelink={"/img/booknote2.png"}
          title={"BookNote 2.0"}
          year={"2025"}
          link={""}
          description={"projectssection.project1.description"}
        />
        <ProjectCard
          imagelink={"/img/funkypomodoro.png"}
          title={"Funky Pomodoro"}
          year={"2025"}
          link={""}
          description={"projectssection.project2.description"}
        />
        <ProjectCard
          imagelink={"/img/randON.png"}
          title={"RandOn"}
          year={"2025"}
          link={""}
          description={"projectssection.project3.description"}
        />
        <ProjectCard
          imagelink={"/img/pokeapp.png"}
          title={"PokeApp"}
          year={"2023"}
          link={""}
          description={"projectssection.project4.description"}
        />
        <ProjectCard
          imagelink={"/img/booknote1.png"}
          title={"BooknNote 1.0"}
          year={"2023"}
          link={""}
          description={"projectssection.project5.description"}
        />
      </motion.ul>
    </div>
  );
}

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;
function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}
