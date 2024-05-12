import React from "react";

import styles from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={`section ${styles.container}`}>
      <div className="container">
        <div className="flex items-center gap-[32px]">
          <div className={styles.titles}>
            <div className={styles.subTitle}>WHO WE ARE</div>
            <div className={styles.mainTitle}>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            </div>
          </div>
          <div className={styles.expression}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            praesentium in dolores rerum reprehenderit, harum voluptatem aliquid
            reiciendis, consequuntur eum expedita molestiae suscipit unde nulla
            rem dolor beatae accusamus! Facilis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perferendis praesentium in dolores
            rerum reprehenderit, harum voluptatem aliquid reiciendis,
            consequuntur eum expedita molestiae suscipit unde nulla rem dolor
            beatae accusamus! Facilis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
