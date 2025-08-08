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
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-10 bg-neutral-800 text-white">
      <motion.h2
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold mb-4 text-center"
      >
        👋 About Me
      </motion.h2>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-lg text-gray-300 max-w-3xl text-center mb-8"
      >
        I'm a passionate Full-Stack Developer specializing in the MERN stack with an eye for sleek UI and emerging tech like voice interfaces. Currently building AI-enhanced web experiences that feel interactive and intuitive.
      </motion.p>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="bg-[#1a1a1a] p-6 md:p-10 rounded-2xl shadow-lg max-w-3xl w-full"
      >
        <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2 text-center">⚙️ Skills</h3>

        <div className="space-y-4 text-base leading-relaxed">
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
