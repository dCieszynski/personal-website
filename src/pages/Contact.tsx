import React from "react";
import PageHeader from "../components/PageHeader";
import CopySpan from "../components/CopySpan";

function Contact() {
  return (
    <main className="self-start w-full flex flex-col items-center gap-12">
      <div className="flex flex-col w-full pt-8">
        <div className="w-full">
          <PageHeader content="Contact" />
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:max-w-[1280px] gap-8 pt-16 animate-apear">
          <p className="font-imb md:text-xl">
            Feel free to contact me via: <CopySpan content="dcieszynski99@gmail.com" />
          </p>
        </div>
      </div>
    </main>
  );
}

export default Contact;
