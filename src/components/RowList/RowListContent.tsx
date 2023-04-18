import React, { PropsWithChildren } from "react";

function RowListContent({ children }: PropsWithChildren) {
  return <div className="w-full flex flex-col items-center gap-2">{children}</div>;
}

export default RowListContent;
