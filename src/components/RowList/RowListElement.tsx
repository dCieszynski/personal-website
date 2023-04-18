import React, { ReactNode } from "react";

type Props = {
  name: string;
  icon: ReactNode;
};

function RowListElement({ name, icon }: Props) {
  return (
    <div className="flex justify-center items-center text-lg gap-3">
      {icon}
      {name}
    </div>
  );
}

export default RowListElement;
