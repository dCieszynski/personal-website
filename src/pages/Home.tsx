import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  return (
    <main className="flex flex-col items-center gap-12">
      <div className="pt-8 flex flex-col">
        <h1 className="text-5xl md:text-7xl font-bold font-imb flex flex-col gap-4">
          <h2 className="animate-typing overflow-hidden whitespace-nowrap">DAWID</h2>
          <h2 className="w-[288px] md:w-[432px] h-12 md:h-[72px] relative">
            <span className="absolute animate-move-from-right">CIESZYŃSKI</span>
          </h2>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold font-imb pt-8">
          <div className="animate-typing overflow-hidden whitespace-nowrap">Frontend Developer</div>
        </h2>
      </div>
      <div className="flex flex-col gap-6 animate-move-from-left">
        <Button content={<Link to="contact">Contact</Link>} />
        <Button content={<a href="https://github.com/dCieszynski">View Github</a>} color="black" />
      </div>
    </main>
  );
}

export default Home;
