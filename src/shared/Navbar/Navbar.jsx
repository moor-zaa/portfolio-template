"use client";

import React from "react";

import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <h1>
            <div
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Image
                style={{ cursor: "pointer" }}
                src={"/logo-white.svg"}
                width={80}
                height={80}
                alt="logo"
              />
            </div>
          </h1>
        </div>
        <div className={styles.links}>
          <Link href={"#about"}>About</Link>
          <Link href={"#projects"}>Projects</Link>
          <Link href={"#contact"}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
