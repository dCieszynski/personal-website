import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  return (
    <main className="flex flex-col items-center gap-16">
      <div className="pt-8 flex flex-col gap-4">
        <h1 className="text-5xl md:text-7xl font-bold font-imb flex flex-col gap-4">
          <div>DAWID</div>
          <div>CIESZYŃSKI</div>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold font-imb">Frontend Developer</h2>
      </div>
      <div className="flex flex-col gap-6">
        <Button content={<Link to="contact">Contact</Link>} />
        <Button content={<a href="https://github.com/dCieszynski">View Github</a>} color="black" />
      </div>
    </main>
  );
}

export default Home;
