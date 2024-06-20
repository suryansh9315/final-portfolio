import React from "react";
import Nav from "./Nav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="bg-[#03061f] py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to={"/"}>
          <h1 className="text-4xl font-semibold">
            Suryansh<span className="text-blue-600">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link to={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
