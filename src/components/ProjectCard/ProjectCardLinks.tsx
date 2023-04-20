import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { useProjectCardContext } from "../../context/ProjectCardContext";

function ProjectCardLinks() {
  const { repository, live } = useProjectCardContext();
  return (
    <div className="py-2 px-6 flex justify-between">
      <div className="flex items-center font-imb text-xs font-bold">
        Repository:
        <a className="w-8 h-8 text-2xl flex justify-center items-center bg-white rounded-2xl shadow-brutal" href={repository}>
          <AiOutlineGithub />
        </a>
      </div>
      <div className="flex items-center font-imb text-xs font-bold">
        Live:
        <a className="w-8 h-8 text-2xl flex justify-center items-center bg-white rounded-2xl shadow-brutal" href={live}>
          <FaGlobe />
        </a>
      </div>
    </div>
  );
}

export default ProjectCardLinks;
