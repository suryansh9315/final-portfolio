import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav = () => {
  const pathname = useLocation().pathname;
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-blue-600" />
      </SheetTrigger>
      <SheetContent className="flex flex-col text-white">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link to={"/"}>
            <h1 className="text-4xl font-semibold">
              Suryansh<span className="text-blue-600">.</span>
            </h1>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className={`${
                link.path === pathname &&
                "text-blue-600 border-b-2 border-blue-600"
              } text-xl capitalize hover:text-blue-600 transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
