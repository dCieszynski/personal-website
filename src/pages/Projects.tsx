import React from "react";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { TProjectCardContext } from "../types";
import pawurl from "../assets/paw.png";

function Projects() {
  const projects: TProjectCardContext[] = [
    {
      title: "Paw",
      description: "Paw is a Tinder like app for adopting pets from animal shelters",
      repository: "https://github.com/dCieszynski/paw-app",
      live: "https://main--dcieszynskipaw.netlify.app/",
      image: pawurl,
    },
  ];

  return (
    <main className="self-start w-full flex flex-col items-center gap-12">
      <div className="flex flex-col items-center w-full pt-8">
        <div className="w-full">
          <PageHeader content="Projects" />
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center md:max-w-[1280px] md:justify-center gap-8 pt-16 animate-apear">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
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
