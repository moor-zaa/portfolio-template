import React from "react";

import styles from "./ProjectImage.module.css";
import Image from "next/image";

const ProjectImage = ({ src, handleMouseEnter, handleMouseLeave }) => {
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.container}
    >
      <div className={styles.projectCard}>
        <Image src={src} alt="project" className={styles.img} fill />
      </div>
    </div>
  );
};

export default ProjectImage;
