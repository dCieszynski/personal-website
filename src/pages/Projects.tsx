import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { getProjects } from "../sanity/sanity-utils";
import { TProjectCardContext } from "../types";

function Projects() {
  const [projects, setProjects] = useState<TProjectCardContext[]>([]);

  const handleProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  useEffect(() => {
    handleProjects();
  }, []);

  return (
    <main className="self-start w-full flex flex-col items-center gap-12">
      <div className="flex flex-col items-center w-full pt-8">
        <div className="w-full">
          <PageHeader content="Projects" />
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center md:max-w-[1280px] md:justify-center gap-8 pt-16 animate-apear">
          {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard
                key={project.name}
                data={project}
                content={
                  <>
                    <ProjectCard.Header />
                    <ProjectCard.Image />
                    <ProjectCard.Description />
                    <ProjectCard.Links />
                  </>
                }
              />
            ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
