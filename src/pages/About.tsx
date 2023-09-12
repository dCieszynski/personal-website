import React from "react";
import { FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import RowList from "../components/RowList/RowList";
import aboutUrl from "../assets/about.svg";
import PageHeader from "../components/PageHeader";

function About() {
  const techList = [
    {
      row: [
        {
          name: "HTML5",
          icon: <FaHtml5 />,
        },
        {
          name: "React.js",
          icon: <FaReact />,
        },
      ],
    },
    {
      row: [
        {
          name: "Javascript",
          icon: <SiJavascript />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
        },
      ],
    },
    {
      row: [
        {
          name: "Typescript",
          icon: <SiTypescript />,
        },
        {
          name: "Sass",
          icon: <FaSass />,
        },
      ],
    },
  ];

  return (
    <main className="self-start flex flex-col items-center gap-12">
      <div className="md:max-w-[960px] flex flex-col items-center gap-10 font-imb pt-8">
        <div className="flex flex-col items-center gap-10">
          <div>
            <PageHeader content="About" />
            <p className="font-normal pt-16 animate-apear">
              Aspiring software developer for now mainly focused on frontend development. I have the most experience with React.js with Typescript.
              Big fan of Tailwind CSS. Currently learning Next.js. In the future I would like to learn more about backend development. I am currently
              looking for a job as a junior frontend developer. I am also open to freelance projects, like creating websites or web applications.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex justify-center max-w-[480px] animate-apear">
            <img src={aboutUrl} alt="About Dawid Cieszyński" className="w-full h-full object-cover" />
          </div>
          {/* eslint-disable react/no-array-index-key */}
          <RowList
            name={<RowList.Name header="Tech Stack" />}
            content={
              <RowList.Content>
                {techList.map((row, index) => (
                  <RowList.Row
                    key={index}
                    elements={row.row.map((element) => (
                      <RowList.Element key={element.name} icon={element.icon} name={element.name} />
                    ))}
                  />
                ))}
              </RowList.Content>
            }
          />
          {/* eslint-enable react/no-array-index-key */}
        </div>
      </div>
    </main>
  );
}

export default About;
