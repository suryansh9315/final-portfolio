import React from "react";
import { Link } from "react-router-dom";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto reiciendis eveniet pariatur aliquam architecto. Sequi, sint esse.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UI Designer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto reiciendis eveniet pariatur aliquam architecto. Sequi, sint esse.",
    href: "",
  },
  {
    num: "03",
    title: "Android Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto reiciendis eveniet pariatur aliquam architecto. Sequi, sint esse.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto reiciendis eveniet pariatur aliquam architecto. Sequi, sint esse.",
    href: "",
  },
];

const Services = () => {
  return (
    <div className="text-white min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  hrefLang={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-blue-600 transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-[#03061f] text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none group-hover:text-blue-600 transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
