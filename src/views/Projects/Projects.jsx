"use client";

import React, { useState } from "react";

import styles from "./Projects.module.css";
import ProjectImage from "@/components/ProjectImage/ProjectImage";

const Projects = () => {
  const [mouseHover, setMouseHover] = useState(false);

  const handleMouseEnter = () => {
    setMouseHover(true);
  };

  const handleMouseLeave = () => {
    setMouseHover(false);
  };

  return (
    <div id="projects" className={`container ${styles.container}  section`}>
      <h2 className={styles.title}>Featured Projects</h2>
      <div className={styles.projects}>
        <div className={styles.projectImages}>
          <ProjectImage
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            src={"/images/p1.png"}
          />
          <ProjectImage
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            src={"/images/p2.png"}
          />
          <ProjectImage
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            src={"/images/p3.png"}
          />
          <ProjectImage
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            src={"/images/p4.png"}
          />
        </div>
        <div className={styles.projectExpressions}>
          <h3 className={styles.projectHeader}>Project Information</h3>
          <p
            className={styles.expression}
            style={{ opacity: mouseHover ? 1 : 0 }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            quo eaque delectus dolore culpa. Distinctio eum saepe sit odio,
            eligendi id corrupti repudiandae perferendis, quos, dolores labore.
            Dicta, eveniet corporis? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Similique quo eaque delectus dolore culpa.
            Distinctio eum saepe sit odio, eligendi id corrupti repudiandae
            perferendis, quos, dolores labore. Dicta, eveniet corporis? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
