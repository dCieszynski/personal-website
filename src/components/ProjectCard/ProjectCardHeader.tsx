import React from "react";
import { useProjectCardContext } from "../../context/ProjectCardContext";

function ProjectCardHeader() {
  const { title } = useProjectCardContext();

  return <h2 className="text-2xl font-bold border-b-4 border-b-black p-2">{title}</h2>;
}

export default ProjectCardHeader;
