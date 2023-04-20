import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import pawUrl from "../assets/paw.png";

function Projects() {
  return (
    <main className="self-start flex flex-col items-center gap-12">
      <div className="md:max-w-[960px] flex flex-col items-center gap-10 font-imb pt-8">
        <div className="w-full h-12">
          <PageHeader content="Projects" />
          <div className="pt-16">
            <div className="w-[272px] h-[360px] bg-personal-orange-1 border-4 border-black shadow-brutal rounded">
              <h2 className="text-2xl font-bold border-b-4 border-b-black p-2">Paw</h2>
              <div className="h-[210px] border-b-4 border-b-black">
                <img className="w-full h-full object-cover" src={pawUrl} alt="Paw" />
              </div>
              <p className="px-2 pt-2 font-imb text-xs font-bold">Paw is a Tinder like app for adopting pets from animal shelters</p>
              <div className="py-2 px-6 flex justify-between">
                <div className="flex items-center font-imb text-xs font-bold">
                  Repository:
                  <a
                    className="w-8 h-8 text-2xl flex justify-center items-center bg-white rounded-2xl shadow-brutal"
                    href="https://github.com/dCieszynski/paw-app"
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
                <div className="flex items-center font-imb text-xs font-bold">
                  Live:
                  <a
                    className="w-8 h-8 text-2xl flex justify-center items-center bg-white rounded-2xl shadow-brutal"
                    href="https://main--dcieszynskipaw.netlify.app/"
                  >
                    <FaGlobe />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
