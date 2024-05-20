"use client";
import { useState } from "react";
import styles from "./closet.module.css";
export default function Closet() {
  const [state, setState] = useState("");

  function checkName(name) {
    if (name === "Jacob Alexander Shankman") {
      setState("joke");
    }
    else {
        setState("");
    }
  }

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [middlename, setMiddleName] = useState("");
  return (
      <div style={{textAlign: "center"}}>
          <h1 className={styles.h1}>Welcome to the closet!</h1>
          <h1 className={styles.h1}>Answer me one question...</h1>
          <p className={styles.big}>Who is in the closet?</p>

          <div style={{display: "flex", justifyContent: "space-between"}}>
              <input
                  type="text"
                  className={styles.input}
                  placeholder={"First"}
                  onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                  type="text"
                  className={styles.input}
                  placeholder={"Middle"}
                  onChange={(e) => setMiddleName(e.target.value)}
              />
              <input
                  type="text"
                  className={styles.input}
                  placeholder={"Last"}
                  onChange={(e) => setLastName(e.target.value)}
              />
          </div>

          <div>{state !== 'joke' && <h1 style={{margin: 20}}> Wrong! Idiot, click submit or something!</h1>}</div><div>{state === 'joke' && <div className={styles.joke}>Ha ha ha! You`$apos`re so Funny!... <span className={styles.jokesmall}>but maybe right...</span></div>}</div>
          <button
              className={styles.input}
              onClick={() => checkName(`${firstname} ${middlename} ${lastname}`)}
          >
              Submit
          </button>
      </div>
  );
}
