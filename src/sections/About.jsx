import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-20 bg-neutral-900 text-white relative"
    >
      <motion.h2
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-transparent bg-clip-text drop-shadow-lg"
      >
        👋 About Me
      </motion.h2>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-lg md:text-xl text-gray-300 max-w-3xl text-center mb-12 leading-relaxed"
      >
        I'm a passionate Full-Stack Developer specializing in the MERN stack with an eye for sleek UI and emerging tech like voice interfaces. Currently building AI-enhanced web experiences that feel interactive and intuitive.
      </motion.p>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-3xl bg-neutral-800/70 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 md:p-12 shadow-lg transition-all duration-300 hover:shadow-purple-600/30"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-purple-400 tracking-wide">
          ⚙️ Skills
        </h3>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
          <div>
            <span className="font-semibold text-purple-400">Language:</span>{" "}
            Java, JavaScript, HTML, CSS
          </div>
          <div>
            <span className="font-semibold text-green-400">Technology:</span>{" "}
            Web Speech API
          </div>
          <div>
            <span className="font-semibold text-blue-400">Framework:</span>{" "}
            React.js, Tailwind CSS, Node.js, Express.js
          </div>
          <div>
            <span className="font-semibold text-yellow-300">Database:</span>{" "}
            MongoDB, MySQL
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

