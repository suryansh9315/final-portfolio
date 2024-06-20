import { AnimatePresence, animate, motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const total = 6;
  return total - index - 1;
};

const StairTransition = () => {
  const pathname = useLocation().pathname;

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="text-white h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              variants={stairsAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
              }}
              className="h-full w-full bg-white relative"
            ></motion.div>
          ))}
        </div>
        <motion.div
          className="h-screen w-screen fixed top-0 bg-[#03061f] pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
        ></motion.div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
