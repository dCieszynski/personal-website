import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const links = [
  { to: "/", title: "Home" },
  { to: "about", title: "About" },
  { to: "projects", title: "Projects" },
];

function Layout() {
  return (
    <div>
      <Navbar links={links} />
      <div className="px-4 py-20 md:py-16 lg:pb-4 bg-personal-orange-2 min-h-screen flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
