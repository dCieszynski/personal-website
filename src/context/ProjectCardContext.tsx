import { createContext, useContext } from "react";
import { TProjectCardContext } from "../types";

const ProjectCardContext = createContext<TProjectCardContext | null>(null);

export const useProjectCardContext = () => {
  const context = useContext(ProjectCardContext);

  if (!context) {
    throw new Error("useProjectCardContext must be used within a ProjectCardContextProvider");
  }

  return context;
};

export default ProjectCardContext;
