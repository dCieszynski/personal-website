import React, { ReactNode } from "react";
import RowListElement from "./RowListElement";
import RowListHeader from "./RowListHeader";
import RowListContent from "./RowListContent";
import RowListRow from "./RowListRow";

type Props = {
  name: ReactNode;
  content: ReactNode;
};

function RowList({ name, content }: Props) {
  return (
    <div className="font-imb w-full flex flex-col items-center gap-6 animate-apear">
      {name}
      {content}
    </div>
  );
}

RowList.Name = RowListHeader;
RowList.Content = RowListContent;
RowList.Row = RowListRow;
RowList.Element = RowListElement;

export default RowList;
