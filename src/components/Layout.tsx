import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const links = [
  { to: "/", title: "Home" },
  { to: "about", title: "About" },
  { to: "projects", title: "Projects" },
  { to: "contact", title: "Contact" },
];

function Layout() {
  return (
    <div>
      <Navbar links={links} />
      <div className="px-4 py-24 bg-personal-orange-2 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
