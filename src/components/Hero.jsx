import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Hero.jpg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Stephen Masih
            </motion.h1>

            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Front-End Developer
            </motion.span>

            <motion.p
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex justify-center">
            <motion.img
              src={profilePic}
              alt="Profile"
              className="rounded-xl shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
