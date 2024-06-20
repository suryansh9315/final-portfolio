import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = useLocation().pathname;

  return (
    <div className="flex gap-8">
      {links.map((link, index) => (
        <Link
          to={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-blue-600 border-b-2 border-blue-600"
          } capitalize font-medium hover:text-blue-600 transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
