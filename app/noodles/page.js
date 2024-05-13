"use client";
import styles from "./noodles.module.css";
import React, { useRef, useState } from "react";
import Image from "next/image";
const AfterPlayButton = () => {
  return <div style={{ display: "none" }}></div>;
};
const PlayButton = () => {
  return (
    <div>
      <Image
        src={
          "https://www.freepnglogos.com/uploads/play-button-png/play-button-watch-video-understand-the-power-clarip-less-than-minute-7.png"
        }
        alt={"play_button"}
        height={50}
        width={50}
        style={{ height: "50vh", width: "auto", cursor: "pointer" }}
      />
    </div>
  );
};
const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      return;
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button className={styles.playButton} onClick={togglePlay}>
        {isPlaying ? [AfterPlayButton()] : [PlayButton()]}
      </button>
      <audio ref={audioRef} loop style={{ display: "none" }}>
        <source src="/The Noodle Song.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};
function darkenColor(color) {
  // Assuming the color is in the format of "#RRGGBB"
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  // Reduce the brightness or increase the darkness by subtracting a value from each RGB component
  const darkerR = Math.max(r - 20, 0);
  const darkerG = Math.max(g - 20, 0);
  const darkerB = Math.max(b - 20, 0);

  // Convert the darker RGB values back to hexadecimal format
  return `#${darkerR.toString(16).padStart(2, "0")}${darkerG
    .toString(16)
    .padStart(2, "0")}${darkerB.toString(16).padStart(2, "0")}`;
}

const RainbowText = ({ count, font }) => {
  const text = "NOODLESDANNY";
  const colors = [
    "#f15654",
    "#ff8950",
    "#ffb64f",
    "#faff50",
    "#b2ff80",
    "#60ff61",
    "#50feff",
    "#5084ff",
    "#6c4cfb",
    "#b14ffe",
    "#ff50fe",
    "#f675ff",
  ];
  const repeatedText = text.repeat(count);

  return (
    <div className={styles.marquee}>
      <div className={styles.track} style={{ marginTop: font - 15 }}>
        {repeatedText.split("").map((letter, index) => (
          <span
            key={index}
            style={{
              color: colors[index % colors.length],
              fontSize: font,
              textShadow: `${font / 8}px 0px 0 ${darkenColor(
                darkenColor(colors[index % colors.length]),
              )}, ${font / 4}px 0px 0 ${darkenColor(
                darkenColor(darkenColor(colors[index % colors.length])),
              )}`,
              letterSpacing: "0.1em",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Noodles() {
  return (
    <>
      <div className={styles.body}>
        <AudioPlayer />
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -48.5, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -48.7, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -48.7, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -48.7, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>{" "}
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -48.5, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -48.7, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div className={styles.noodles}></div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
        <div style={{ marginTop: -49, marginBottom: 0 }}>
          <RainbowText count={26} font={32} />
        </div>
      </div>
      <div
        style={{
          marginTop: "-5dvh",
          marginBottom: 0,
          fontSize: 24,
          display: "flex",
          zIndex: 69,
          cursor: "pointer",
          fontWeight: 700,
          justifyContent: "space-between",
        }}
      >
        <span style={{ marginLeft: 10, zIndex: 5 }}>Made by Jake.S</span>
        <span style={{ marginRight: 10, zIndex: 5 }}>For Danny</span>
      </div>
    </>
  );
}
