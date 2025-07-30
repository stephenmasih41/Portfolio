import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3, FaPython, FaGithub } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { SiTypescript, SiTailwindcss, SiFigma } from "react-icons/si";
import { motion } from "motion/react";

const bounceTransition = {
  y: {
    duration: 0.6,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={bounceTransition}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={bounceTransition}
        >
          <FaHtml5 className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={bounceTransition}
        >
          <FaCss3 className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={bounceTransition}
        >
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={bounceTransition}
        >
          <FaPython className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={bounceTransition}
        >
          <FaGithub className="text-7xl text-white" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={bounceTransition}
        >
          <SiTypescript className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={bounceTransition}
        >
          <SiTailwindcss className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={bounceTransition}
        >
          <SiFigma className="text-7xl text-pink-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
