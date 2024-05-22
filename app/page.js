"use client";
import React from "react";
import DancingLines from "./DancingLines";
import Image from "next/image";
// import TagCloudComp from "./TagCloudComp";
function wrapLetters(text, id = null) {
  return text.split("").map((char, index) => {
    if (char === " ") {
      return (
        <span
          key={index}
          style={{ width: "calc(0.25vh + 0.5vh)", display: "inline-block" }}
        ></span>
      );
    }
    return (
      <span key={index}>
        <span
          id={id}
          className={"letter"}
          onMouseEnter={(e) => e.target["classList"].add("animation-class")}
          onMouseLeave={(e) => e.target["classList"].remove("animation-class")}
        >
          {char}
        </span>
      </span>
    );
  });
}

export default function Home() {
  return (
    <div>
      <nav>
        <a href={"#home"} id={"logo"}>
          <Image src="/favicon.png" alt="logo" fill priority />
        </a>
        <a href={"#about"}>About</a>
        <a href={"#skills"}>Skills</a>
        <a href={"#work"}>Work</a>
        <a href={"#contact"}>Contact</a>
      </nav>
      <main id={"home"}>
        <div>
          <DancingLines></DancingLines>
          <div className="title">
            <div className="title-flex1">
              <p className={"main-title"}>{wrapLetters("Hello,", "hello")}</p>
              <p className={"main-title"}>
                {wrapLetters("I'm ")}
                <span className={"marque-overlay"}>
                  {wrapLetters("Jake Shankman", "title-marque")}
                </span>
              </p>
              <p className={"main-title"}>
                {wrapLetters("A Web Developer", "smaller-title")}
              </p>
              <p id={"title-desc"} className={"main-title"}>
                Specializing in Next.js and React
              </p>
              <p className={"main-title"} id={"title-button-wrapper"}>
                <a href={"#contact"} id="title-button">
                  Contact Me!
                </a>
              </p>
            </div>
          </div>
        </div>
        <section id="about">
          <br />
          <br />
          <br />
          <div className="title non-landing-title">
            <p id={"title-about"} className={"main-title"}>
              About Me
            </p>
            <div id={"about-con"}>
              <div>
                <p className="main-title sub-title-text">
                  As a highly motivated student developer with four years of
                  experience in Python coding and web development languages, I
                  have gained valuable skills in building APIs and designing
                  HTML/CSS interfaces. Starting my coding journey at the age of
                  nine, I have demonstrated a strong passion for technology and
                  a dedication to continuous learning. <br />
                  <br />
                  My proficiency in Python has enabled me to develop efficient
                  algorithms and create functional applications, while my
                  knowledge of API development has allowed me to design flexible
                  and scalable interfaces. Additionally, my expertise in
                  HTML/CSS has allowed me to create visually appealing and
                  user-friendly web pages. <br />
                  <br />
                  <span className="no-mobile">
                    Motivated by a strong desire to broaden my horizons and stay
                    ahead of the technological curve, I am currently focused on
                    expanding my skill set to include other programming
                    languages. Through dedication, perseverance, and a
                    willingness to step outside my comfort zone, I am confident
                    that I can master new tools and technologies and excel in
                    any programming endeavor that comes my way.
                  </span>
                </p>
                <div className={"about-langs-con no-desktop"}>
                  <div className="about-langs" id="div-1">
                    <h1 className="langs-title" id={"one"}>
                      Python <br />
                      <span>Experience: 6 Years</span>
                    </h1>
                  </div>
                  <div className="about-langs" id="div-3">
                    <h1 className={"langs-title"} id={"three"}>
                      Javascript <br />
                      <span>Experience: 4 Years</span>
                    </h1>
                  </div>
                  <div className="about-langs" id="div-2">
                    <h1 className="langs-title" id={"two"}>
                      React <br />
                      <span>Experience: 3 Years</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div
                style={{ width: "50vw" }}
                className={"about-langs-con no-mobile no-desktop"}
              >
                <div className="about-langs" id="div-1">
                  <h1 className="langs-title" id={"one"}>
                    Python <br />
                    <span>Experience: 6 Years</span>
                  </h1>
                </div>
                <div className="about-langs" id="div-3">
                  <h1 className={"langs-title"} id={"three"}>
                    Javascript <br />
                    <span>Experience: 4 Years</span>
                  </h1>
                </div>
                <div className="about-langs" id="div-2">
                  <h1 className="langs-title" id={"two"}>
                    React <br />
                    <span>Experience: 3 Years</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills">
          <br />
          <br />
          <br />
          <div className="title non-landing-title">
            <p className="main-title" id="title-skills">
              Skills
            </p>
          </div>
          {/*<TagCloudComp/>*/}
        </section>
        <section id="work"></section>
        <section id="contact"></section>
      </main>
    </div>
  );
}
