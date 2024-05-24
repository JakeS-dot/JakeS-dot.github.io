import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const TagCloudComp = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "Python",
      "HTML",
      "CSS",
      "TypeScript",
      "JavaScript",
      "React",
      "npm",
      "Git",
      "JSON",
      "Data Science",
      "Node Js",
      "ES5/ES6",
      "Flask",
      "MongoDB",
      "GitHub",
      "AWS",
      "NumPy",
      "Linux",
      "Bash",
      "Ubuntu",
      "React Native",
      "Next.JS",
    ];

    const options = {
      radius: 360,
      maxSpeed: "fast",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
      <>
        <div className="text-sphere">
          <span className="tagcloud"/>
        </div>
      </>
  );
};

export default TagCloudComp;
