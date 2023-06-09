import React from "react";
import { useProjectCardContext } from "../../context/ProjectCardContext";

function ProjectCardImage() {
  const { image, alt } = useProjectCardContext();
  return (
    <div className="h-[210px] border-b-4 border-b-black">
      <img className="w-full h-full object-cover" src={image} alt={alt} />
    </div>
  );
}

export default ProjectCardImage;
