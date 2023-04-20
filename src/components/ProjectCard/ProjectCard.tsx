import React, { ReactNode, useMemo } from "react";
import ProjectCardHeader from "./ProjectCardHeader";
import ProjectCardImage from "./ProjectCardImage";
import ProjectCardDescription from "./ProjectCardDescription";
import ProjectCardLinks from "./ProjectCardLinks";
import { TProjectCardContext } from "../../types";
import ProjectCardContext from "../../context/ProjectCardContext";

type Props = {
  data: TProjectCardContext;
  content: ReactNode;
};

function ProjectCard({ data, content }: Props) {
  const valueMemo = useMemo(() => data, [data]);
  return (
    <ProjectCardContext.Provider value={valueMemo}>
      <div className="w-[272px] h-[360px] bg-personal-orange-1 border-4 border-black shadow-brutal rounded">{content}</div>
    </ProjectCardContext.Provider>
  );
}

ProjectCard.Header = ProjectCardHeader;
ProjectCard.Image = ProjectCardImage;
ProjectCard.Description = ProjectCardDescription;
ProjectCard.Links = ProjectCardLinks;

export default ProjectCard;
