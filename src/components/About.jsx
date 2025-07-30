import aboutImg from "../assets/About.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Heading */}
      <motion.h1
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About <span className="text-neutral-500"> Me</span>
      </motion.h1>

      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex items-center justify-center">
            <motion.img
              className="rounded-2xl"
              src={aboutImg}
              alt="about"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex justify-center lg:justify-start">
            <motion.p
              className="my-2 max-w-xl py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
