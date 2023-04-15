import React from "react";
import { Link } from "react-router-dom";
import { TLink } from "../types";

type Props = {
  links: TLink[];
};

function Navbar({ links }: Props) {
  return (
    <div className="fixed w-screen font-imb font-bold text-sm md:text-lg z-50">
      <div className="-z-10 bg-black border-b-2 border-black h-[80px] absolute w-full rounded shadow-brutal" />
      <ul className="bg-personal-orange-2 border-r-4 border-y-4 border-black h-[80px] flex items-center rounded">
        {links.map((link) => (
          <li key={link.to} className="h-full w-full border-l-4 border-black ease-out transition-all hover:bg-personal-orange-1">
            <Link to={link.to} className="w-full h-full flex justify-center items-center">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
