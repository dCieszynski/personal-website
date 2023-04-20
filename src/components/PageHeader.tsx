import React from "react";

type Props = {
  content: string;
};

function PageHeader({ content }: Props) {
  return <h1 className="font-[700] text-[2rem] absolute animate-move-from-left">{content}</h1>;
}

export default PageHeader;
