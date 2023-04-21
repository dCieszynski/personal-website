/* eslint-disable react/no-array-index-key */
import React from "react";

type Props = {
  elements: React.ReactNode[];
};

function RowListRow({ elements }: Props) {
  return (
    <div className="w-full md:w-[420px] flex flex-col md:flex-row justify-between gap-2 md:gap-0">
      {elements.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
    </div>
  );
}

export default RowListRow;
