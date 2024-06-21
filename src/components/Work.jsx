import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderHandles from "./WorkSliderHandles";

const projects = [
  {
    num: "01",
    category: "crypto",
    title: "All Swap",
    description:
      "Developed a React application enabling users to seamlessly swap ETH for various tokens on the Ethereum mainnet and Goerli testnet.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "React" },
      { name: "Uniswap" },
      { name: "ethers.js" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/allswap.png",
    live: "https://all-swap-flax.vercel.app/",
    github: "https://github.com/suryansh9315/eth-swap",
  },
  {
    num: "02",
    category: "full stack",
    title: "3d Viewer",
    description:
      "Developed a React application allowing users to customize T-shirt designs. Integrated Three.js to implement a 3D rendering environment, providing users with a realistic preview of their customized T-shirt.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "React" },
      { name: "three.js" },
      { name: "tailwindcss" },
      { name: "node.js" },
      { name: "openAI" },
    ],
    image: "/assets/work/3d.png",
    live: "https://3d-viewer-three.vercel.app/",
    github: "https://github.com/suryansh9315/3d-viewer",
  },
  {
    num: "03",
    category: "frontend",
    title: "Firebase Chat",
    description:
      "Developed a feature-rich chat application using Firebase, Redux, Material-UI, and Cloud Firestore.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "React" },
      { name: "MaterialUI" },
      { name: "Firebase" },
      { name: "Redux" },
    ],
    image: "/assets/work/chat.png",
    live: "https://chat-7e7a5.web.app/",
    github: "https://github.com/suryansh9315/firebase-chat",
  },
  {
    num: "04",
    category: "AI/ML",
    title: "BRS",
    description:
      "Developed an AI powered books recommendation system.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
      { name: "node.js" },
      { name: "MongoDB" },
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Jupyter" },
      { name: "Scikit Learn" },
    ],
    image: "/assets/work/brs.png",
    live: "https://brs-seven.vercel.app/",
    github: "https://github.com/suryansh9315/brs",
  },
  {
    num: "05",
    category: "crypto",
    title: "Crowdfunding",
    description:
      "Developed a Crowdfunding website for blockchain startups making it easy for them to aquire funding in just few clicks.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "ethers.js" },
      { name: "Thirdweb" },
    ],
    image: "/assets/work/crowd.png",
    live: "https://crowd-funding-seven.vercel.app/",
    github: "https://github.com/suryansh9315/crowd-funding",
  },
  {
    num: "06",
    category: "frontend",
    title: "SS Store",
    description:
      "Developed a ecommerce website. Integrated sanity as content managament service and stripe as payment gateway.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "React" },
      { name: "next.js" },
      { name: "Sanity" },
      { name: "Sripe" },
    ],
    image: "/assets/work/ss.png",
    live: "https://ecom-sanity-stripe.vercel.app/",
    github: "https://github.com/suryansh9315/ecom-sanity-stripe",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto text-white">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="leading-none text-8xl font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div className="font-bold text-[42px] leading-none text-white group-hover:text-blue-600 transition-all duration-500 capitalize">
                {project.title}
              </div>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-blue-600">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <a target="_blank" href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-blue-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
                <a target="_blank" href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-blue-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-[#03061f]">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <img
                        src={project.image}
                        alt=""
                        className="h-[460px] object-contain w-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderHandles
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-blue-600 hover:bg-blue-400 text-[#03061f] text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
