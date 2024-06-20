import React from "react";
import { Link } from "react-router-dom";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Our web development services go beyond just creating websites, we specialize in crafting digital experiences that resonate with your audience. From custom e-commerce platforms to dynamic content management systems, we leverage cutting-edge technologies to build scalable and responsive web solutions.",
    href: "",
  },
  {
    num: "02",
    title: "Android Development",
    description:
      "Our Android development team excels in building robust and user-friendly mobile applications that elevate your brand's presence on the Google Play Store. Whether you need a consumer-facing app, enterprise solution, or a game-changing innovation, we are here for you.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UI Designer",
    description:
      " At the heart of every successful digital product lies exceptional UI/UX design. Our team is dedicated to creating interfaces that not only look stunning but also prioritize usability and intuitive navigation.",
    href: "",
  },
  {
    num: "04",
    title: "Smart Contract Development",
    description:
      "Whether you're launching a decentralized application (dApp) or integrating smart contracts into your business processes, our experts ensure secure, transparent, and autonomous transactions on platforms like Ethereum.",
    href: "",
  },
  {
    num: "05",
    title: "SEO",
    description:
      "Drive organic traffic and enhance your online visibility with our SEO services. We employ proven strategies and ethical practices to optimize your website for search engines, improving its ranking and attracting qualified leads.",
    href: "",
  },
  {
    num: "06",
    title: "Penetration Testing",
    description:
      "Protect your digital assets and maintain trust with our comprehensive penetration testing services. Our certified ethical hackers simulate real-world cyberattacks to identify vulnerabilities in your systems, networks, and applications.",
    href: "",
  },
];

const Services = () => {
  return (
    <div className="text-white min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 xl:pb-10">
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
