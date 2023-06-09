/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from "react";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

type Props = {
  content: string;
};

function CopySpan({ content }: Props) {
  const { copy } = useCopyToClipboard();

  return (
    <span className="text-sm font-bold cursor-pointer hover:border-b-2 hover:border-black hover:pb-[1px]" onClick={() => copy(content)}>
      {content}
    </span>
  );
}

export default CopySpan;
