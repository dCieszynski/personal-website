import React, { ReactNode } from "react";

type Props = {
  content: ReactNode;
  onClick?: () => void;
  color?: string;
};

const defaultProps = {
  onClick: () => {},
  color: undefined,
};

function Button({ content, onClick, color }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-[200px] h-16 md:w-[250px] md:h-20 md:text-xl border-4 font-bold font-imb rounded ${
        !color ? "border-black bg-personal-orange-1 shadow-brutal" : "border-white bg-black text-white shadow-brutal-white"
      }`}
    >
      {content}
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button;
