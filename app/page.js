"use client";
import React from "react";
import DancingLines from "./DancingLines";
import Image from "next/image";
import ScrollText from "./ScrollText";
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
                Specializing in Next.JS, React, and Python.
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
            <div id={"about-langs-con"}>
              <div>
                <div>
                  <p className="main-title sub-title-text" id={"about-text"}>
                    I am a student developer with six years of experience in
                    Python coding and four years in web development languages. I
                    have gained valuable skills in building APIs and designing
                    HTML/CSS interfaces. I started my coding journey at the age
                    of nine, I appreciate the wonders of technology and have a
                    dedication to continuous learning. <br />
                    <br />
                    My ability in Python lets me to develop efficient algorithms
                    and create functional applications, while my knowledge of
                    API development has allowed me to design flexible and
                    scalable interfaces. Additionally, my experience in HTML/CSS
                    has allowed me to create visually appealing and
                    user-friendly web pages.
                  </p>

                  <div className={"portrait"}>
                    <Image
                      src={"/portrait.JPG"}
                      className={"portrait-img"}
                      fill
                      alt={"portrait"}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{ width: "50vw" }}
                className={"about-langs-con no-mobile"}
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
            <div id={"skills-flex-con"}>
              <div className="main-title sub-title-text" id="skills-text">
                With over six years of experience in Python, I&apos;ve developed
                a strong ability to create efficient algorithms and reliable
                applications. For nearly five years, I&apos;ve also been working
                with HTML, CSS, and React, which allows me to build engaging
                interfaces and dynamic web experiences. My skills extend to
                back-end technologies like Flask, MongoDB, and Node.js, enabling
                me to handle complex data-driven applications and API
                development with ease. Additionally, I&apos;m proficient in Git,
                GitHub, AWS, and Linux environments. I&apos;m dedicated to
                delivering innovative solutions that exceed client expectations,
                driven by a commitment to excellence and staying current with
                the latest practices.
                <br />
                <br />
                With my extensive experience in development and proficiency in
                essential tools, I am ready to tackle challenging projects and
                deliver high-quality results. I am eager to exceed client
                expectations in my next professional opportunity. <br />
                <br />
                <br />
                <div id={"skills-title-button-wrapper"}>
                  <span className={"main-title"} id={"title-button-wrapper"}>
                    <a href={"#contact"} id="title-button">
                      Lets do this!
                    </a>
                  </span>
                </div>
              </div>
              <div id={"progress-outer-con"}>
                <ScrollText></ScrollText>
              </div>
            </div>
          </div>
        </section>
        <section id="work">
          <br />
          <br />
          <br />
          <br />
          <div className="title non-landing-title">
            <p className="main-title" id="title-work">
              Work
            </p>
          </div>
        </section>
        <section id="contact"></section>
      </main>
    </div>
  );
}
