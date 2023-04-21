/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from "react";
import { MdOutlineDone } from "react-icons/md";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

type Props = {
  content: string;
};

function CopySpan({ content }: Props) {
  const { copiedText, copy } = useCopyToClipboard();

  return (
    <span className="font-bold cursor-pointer hover:border-b-2 hover:border-black hover:pb-[1px]" onClick={() => copy(content)}>
      {content}
      <MdOutlineDone />
      {copiedText && <MdOutlineDone title="Success" className="text-green-500 inline-block ml-2 border-none" />}
    </span>
  );
}

export default CopySpan;
