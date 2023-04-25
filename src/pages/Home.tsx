import React, { useCallback, useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Button from "../components/Button";
import CopySpan from "../components/CopySpan";

function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [openContent, setOpenContent] = useState<string>("Contact");

  const handleContactClick = () => {
    setIsContactOpen(!isContactOpen);
  };

  const handleOpenContent = useCallback(() => {
    if (!isContactOpen) return;
    setOpenContent("Copied!");
    setTimeout(() => {
      setOpenContent("Contact");
    }, 2000);
  }, [isContactOpen]);

  useEffect(() => {
    handleOpenContent();
  }, [handleOpenContent]);

  return (
    <main className="flex flex-col items-center gap-12">
      <div className="pt-8 flex flex-col">
        <h1 className="text-5xl md:text-7xl font-bold font-imb flex flex-col gap-4">
          <div className="animate-typing overflow-hidden whitespace-nowrap">DAWID</div>
          <div className="w-[288px] md:w-[432px] h-12 md:h-[72px] relative">
            <span className="absolute animate-move-from-right">CIESZYŃSKI</span>
          </div>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold font-imb pt-8">
          <div className="animate-typing overflow-hidden whitespace-nowrap">Frontend Developer</div>
        </h2>
      </div>
      <div className="flex flex-col gap-6 animate-move-from-left">
        <Button content={isContactOpen ? <CopySpan content="dcieszynski99@gmail.com" /> : <span>{openContent}</span>} onClick={handleContactClick} />
        <Button content={<a href="https://github.com/dCieszynski">View Github</a>} color="black" />
      </div>
      <div className="absolute bottom-4 right-4 text-2xl flex flex-col gap-2">
        <a href="https://github.com/dCieszynski">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/dawid-cieszy%C5%84ski-521853273/">
          <AiFillLinkedin />
        </a>
      </div>
    </main>
  );
}

export default Home;
