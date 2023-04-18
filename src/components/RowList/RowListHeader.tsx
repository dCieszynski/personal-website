import React from "react";

type Props = {
  header: string;
};

function RowListHeader({ header }: Props) {
  return <h2 className="font-bold text-2xl text-center">{header}</h2>;
}

export default RowListHeader;
