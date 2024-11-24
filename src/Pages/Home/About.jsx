import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SecotionTitle from "../../Components/SecotionTitle";

function About() {
  const skills = [
    "JavaScript",
    "React JS",
    "NodeJS",
    "MongoDB",
    "Express",
    "PostgreSQL",
  ];
  return (
    <div>
      <SecotionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[65vh] w-1/2 sm:px-2 sm:w-[70vh]">
          <DotLottieReact
            src="https://lottie.host/9d706cf1-4caf-48d2-848c-2115410f74f0/rUNVaaEA0T.lottie"
            loop
            autoplay
          />
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            {" "}
            Hello, My name is Harshit Pandey. Currently working as a Full-Stack
            Engineer at Hitachi. Building scalable web solutions while learning
            React.js and MongoDB. Automating tasks using PowerShell with AI
            tools to optimize workflows and drive innovation.
          </p>
          <p className="text-white">
            {" "}
            Hello, My name is Harshit Pandey. Currently working as a Full-Stack
            Engineer at Hitachi. Building scalable web solutions while learning
            React.js and MongoDB. Automating tasks using PowerShell with AI
            tools to optimize workflows and drive innovation.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are the some of the technologies, I have been working on recently
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, i) => (
            <div className="border border-tertiary px-10 py-4">
                <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
