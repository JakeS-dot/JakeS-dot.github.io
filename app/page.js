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
          <Image src="/favicon.png" alt="home" fill priority />
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
            <div className="title-flex1" tabIndex={0}>
              <h1>
                <p className={"main-title"}>{wrapLetters("Hello,", "hello")}</p>
                <p className={"main-title"}>
                  {wrapLetters("I'm ")}
                  <b>
                    <span className={"marque-overlay"}>
                      {wrapLetters("Jake Shankman", "title-marque")}
                    </span>
                  </b>
                </p>
                <p className={"main-title"}>
                  {wrapLetters("A Web Developer", "smaller-title")}
                </p>
              </h1>
              <p id={"title-desc"} className={"main-title"}>
                <b>Specializing in Next.JS, React, and Python.</b>
              </p>
              <p className={"main-title"} id={"title-button-wrapper"}>
                <a
                  tabIndex={-1}
                  href={"#contact"}
                  className="title-button"
                  id={"main-title-button"}
                >
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
            <h2 id={"title-about"} className={"main-title"} tabIndex={0}>
              About Me
            </h2>
            <div id={"about-langs-con"}>
              <div>
                <div>
                  <p
                    className="main-title sub-title-text"
                    id={"about-text"}
                    tabIndex={0}
                  >
                    I am a student developer with six years of experience in
                    Python coding and four years in web development languages. I
                    have gained many skills in building APIs and designing
                    HTML/CSS interfaces. I started coding at the age of nine, I
                    love technology and have a dedication to learning more
                    about. <br />
                    <br />
                    Python lets me to develop efficient algorithms and create
                    functional applications, while my knowledge of API
                    development has allowed me to design flexible and scalable
                    interfaces. Additionally, my experience in HTML/CSS has
                    allowed me to create visually appealing and user-friendly
                    web pages.
                  </p>

                  <div className={"portrait"}>
                    <Image
                      src={"/portrait.JPG"}
                      className={"portrait-img"}
                      fill
                      alt={"Jake Shankman"}
                      title={"Picture of Jake Shankman"}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{ width: "50vw" }}
                className={"about-langs-con no-mobile"}
              >
                <div className="about-langs" id="div-1">
                  <p className="langs-title" id={"one"}>
                    Python <br />
                    <span>Experience: 6 Years</span>
                  </p>
                </div>
                <div className="about-langs" id="div-3">
                  <p className={"langs-title"} id={"three"}>
                    Javascript <br />
                    <span>Experience: 4 Years</span>
                  </p>
                </div>
                <div className="about-langs" id="div-2">
                  <p className="langs-title" id={"two"}>
                    React <br />
                    <span>Experience: 3 Years</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills">
          <br />
          <br />
          <div className="title non-landing-title">
            <h2 className="main-title" id="title-skills" tabIndex={0}>
              Skills
            </h2>
            <div id={"skills-flex-con"}>
              <div
                className="main-title sub-title-text"
                id="skills-text"
                tabIndex={0}
              >
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
                    <a href={"#contact"} className="title-button">
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
          <br />
          <div className="title non-landing-title">
            <h2 className="main-title" id="title-work" tabIndex={0}>
              Work
            </h2>
            <div id="work-flex-con">
              <div
                className="main-title sub-title-text"
                id={"work-text"}
                tabIndex={0}
              >
                Throughout my professional journey, I&apos;ve worked on several
                projects that showcase my skills in Python, React, and Next.js.
                One notable project is my Discord bot, which I built using the
                Discord.py API wrapper. This project highlights my ability to
                integrate third-party APIs. I also created a mobile-only weather
                app with React, demonstrating my ability to design responsive
                and user-friendly interfaces. These projects show my capability
                to use modern technologies to solve real-world problems and
                improve user experiences.
                <br />
                <br />I also hold a Hackerrank certification in Python
                problem-solving, which proves my proficiency in Python and
                algorithmic thinking. My involvement in open-source projects on
                GitHub reflects my dedication to collaborative learning and
                contributing to the tech community. Looking ahead, I&apos;m
                excited about new opportunities to grow my skills and continue
                making valuable contributions to web development.
              </div>
              <div className="grid-con">
                <div id="grid-1">
                  <p className="grid-title">Python & API</p>
                  <p className="grid-title grid-link">
                    <a href="https://github.com/JakeS-dot/kyokodiscordbot">
                      Kyoko Sakura
                    </a>
                  </p>
                  <p className="grid-desc">
                    A Discord bot made with the Discord.py API wrapper around 3
                    years ago.
                  </p>
                </div>
                <div id="grid-2">
                  <p className="grid-title">Full Stack</p>
                  <p className="grid-title grid-link">
                    <a href="https://github.com/JakeS-dot/reactweatherapp">
                      Weather App
                    </a>
                  </p>
                  <p className="grid-desc">
                    A weather app made in React, for mobile only.
                  </p>
                </div>
                <div id="grid-3">
                  <p className="grid-title">Unknown</p>
                  <p className="grid-title grid-link" id={"grid-3-link"}>
                    Coming Soon
                  </p>
                  <p className="grid-desc">
                    Front-end, Back-end, anything. It may be your project!
                  </p>
                </div>
                <div id="grid-4">
                  <p className="grid-title">Hackerrank</p>
                  <p className="grid-title grid-link">
                    <a href="https://www.hackerrank.com/certificates/9750bb84864d">
                      Certificate
                    </a>
                  </p>
                  <p className="grid-desc">
                    Hackerrank.net certification for python problem solving.
                  </p>
                </div>
                <div id="grid-5">
                  <p className="grid-title">GitHub Page</p>
                  <p className="grid-title grid-link">
                    <a href="https://github.com/JakeS-dot/">Github</a>
                  </p>
                  <p className="grid-desc">
                    Link to my GitHub, with linked projects and more!
                  </p>
                </div>
                <div id="grid-6">
                  <p className="grid-title">Front End</p>
                  <p className="grid-title grid-link">
                    <a href="https://github.com/JakeS-dot/JakeS-dot.github.io">
                      Source Code
                    </a>
                  </p>
                  <p className="grid-desc">
                    Source Code for my Portfolio Website!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="title non-landing-title">
            <h2 className="main-title" id="title-contact" tabIndex={0}>
              Contact
            </h2>
          </div>
          <div className="contact-div">
            <p className="main-title" id={"contact-desc"} tabIndex={0}>
              Wanna have some fun? Lets do this! Im interested in freelance and
              small things that I can balance. (I&apos;m still in school!)
            </p>
            <p className="main-title">
              Contact me at: <br />
              <a id="mailto" href="mailto:jakeshankman15@gmail.com">
                jakeshankman15@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
