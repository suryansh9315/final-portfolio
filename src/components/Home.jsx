import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Socials from "./Socials";
import Photo from "./Photo";
import Stats from "./Stats";

const Home = () => {
  return (
    <div className="h-full text-white">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-40 xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-blue-600">Suryansh Sharma</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Seasoned Software Developer with a year of expertise, specializing
              in data structures and algorithms, data security and full-stack
              development.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/SuryanshSharma.pdf" target="_blank">
                <Button
                  variant="outline"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-blue-600 rounded-full flex justify-center items-center text-blue-600 text-base hover:bg-blue-600 hover:text-[#03061f] hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default Home;
