"use client";
import React from "react"
// import DancingLines from "react-dancing-lines/index.es.js"
import Image from "next/image";
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
          <Image src="nextjs-github-pages/favicon.png" alt="logo" height={'5dvh'} width={'auto'} priority/>
        </a>
        <a href={"#about"}>About</a>
        <a href={"#skills"}>Skills</a>
        <a href={"#work"}>Work</a>
        <a href={"#contact"}>Contact</a>
      </nav>
      <main>

        <div id={"home"}>
          {/* <DancingLines></DancingLines> */}
          <div className="title">
            <div className="title-flex1">
              <p>{wrapLetters("Hello,", "hello")}</p>
              <p>
                {wrapLetters("I'm ")}
                <span className={"marque-overlay"}>
                  {wrapLetters("Jake Shankman", "title-marque")}
                </span>
              </p>
              <p>{wrapLetters("A Web Developer", "smaller-title")}</p>
              <p id="title-desc">Specializing in Next.js and React</p>
              <p id={"title-button-wrapper"}>
                <a href={"#contact"} id="title-button">
                  Contact Me!
                </a>
              </p>
            </div>
          </div>
        </div>
        <section id="about"></section>
        <section id="skills"></section>
        <section id="work"></section>
        <section id="contact"></section>
      </main>
    </div>
  );
}
