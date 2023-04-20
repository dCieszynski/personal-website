import React from "react";
import { useProjectCardContext } from "../../context/ProjectCardContext";

function ProjectCardDescription() {
  const { description } = useProjectCardContext();
  return <p className="px-2 pt-2 font-imb text-xs font-bold">{description}</p>;
}

export default ProjectCardDescription;
