import React, { useState } from "react";
import SecotionTitle from "../../Components/SecotionTitle";
import { projects } from "../../resources/projects";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SecotionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              className="cursor-pointer"
              onClick={() => {
                setSelectedItemIndex(index);
              }}
            >
              <h1
                className={`text-xl px-10  ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 rounded-md -ml-[3px] bg-[#1a7f5a31] py-3"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            srcset=""
            className="h-45 w-40"
          />
          <div className="flex flex-col gap-5">
            {projects[selectedItemIndex].link ? (
              <a
                href={projects[selectedItemIndex].link}
                target={
                  projects[selectedItemIndex].link.startsWith("https://")
                    ? "_blank"
                    : undefined
                }
                rel={
                  projects[selectedItemIndex].link.startsWith("https://")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <h1 className="text-secondary text-xl">
                  {projects[selectedItemIndex].title}
                </h1>
              </a>
            ) : (
              <h1 className="text-secondary text-xl">
                {projects[selectedItemIndex].title}
              </h1>
            )}

            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
