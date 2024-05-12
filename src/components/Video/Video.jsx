"use client";

import React, { useEffect, useRef } from "react";

import styles from "./Video.module.css";
import { useInView } from "react-intersection-observer";

const Video = () => {
  const videoref = useRef();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (videoref.current && inView === true) {
      videoref.current.play();
    }
  });

  return (
    <div>
      <video ref={ref} loop width="700" height="525" autoPlay muted>
        <source src="/video/hero-dark.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
