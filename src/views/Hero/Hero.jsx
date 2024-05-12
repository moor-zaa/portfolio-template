import React from "react";

import styles from "./Hero.module.css";
import Video from "../../components/Video/Video";
import Scroll from "@/components/Scroll/Scroll";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex flex-col items-center"
      style={{ height: "100vh" }}
    >
      <Video />

      <div className={styles.container}>
        <div className={styles.hero}>
          <span className="flex items-center justify-center">
            <span className={styles.subtitle}>
              We are Gorazdo —
              <br />
              unique digital agency
            </span>
          </span>
          <h1 className={styles.title}>
            <span>We shape</span>
            <br />
            <span>the future</span>
            <br />
            <span>of web</span>
          </h1>
        </div>
      </div>
      <Scroll />
    </div>
  );
};

export default Hero;
