import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});


const socialLinks = [
  {
    icon: Github,
    url: "https://github.com/IshuSirohi",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ishu-choudhary-8b9763330/",
  },
  {
    icon: Mail,
    url: "https://mail.google.com/mail/u/0/#inbox?compose=jrjtXFBwQLJcPcHbNvkhGLWDxlrjCTgXMscDxXGtTwZRHjcbWGVfhNZWgFRrlrLlnQNgfMhW",
  },
];


const Home = ({ onNavigate }) => {
  return (
    <section
  id="home"
  className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#0f0f0f] text-white overflow-hidden"
>
  {/* Left Side: Text Content */}
  <div className="w-full md:w-1/2 relative z-10 px-40 py-20 text-center md:text-left">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Avatar */}
      <motion.div
        variants={fadeIn(0)}
        whileHover={{ rotateY: 15, rotateX: 5, scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="w-32 h-32 rounded-full bg-gradient-to-tr from-pink-500 via-indigo-500 to-purple-500 p-[2px] mx-auto md:mx-0 mb-8 shadow-2xl"
      >
        <div className="bg-[#0a0a23] rounded-full w-full h-full flex items-center justify-center text-3xl font-bold text-white">
          IS
        </div>
      </motion.div>

      {/* Title and Description */}
      <motion.div variants={fadeIn(0.1)} className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-md">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hi, I am Ishu 
          </span>
        </h1>
        <p className="text-lg text-gray-300">
          A passionate Full-Stack Developer (MERN) crafting clean and interactive web experiences.
        </p>
        <p className="text-sm text-gray-400 max-w-xl">
          Let's build something awesome together.
        </p>
      </motion.div>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-start gap-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md"
          onClick={() => onNavigate('projects')}
        >
          <a href="#projects"> 🚀 Projects</a>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 rounded-lg border border-gray-500 text-white hover:bg-white/10 shadow-md"
          onClick={() => onNavigate('contact')}
        >
          <a href="#contact"> 📩 Contact</a>
        </motion.button>
      </div>

      {/* Social Links */}
      <div className="flex justify-start gap-6 mt-10">
        {socialLinks.map(({ icon: Icon, url }, i) => (
          <motion.a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white  hover:text-blue-400"
          >
            <Icon size={24} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  </div>


  {/* Right Side: Animated Spline */}
<div className="hidden md:block w-full md:w-1/2 h-[1000px] md:h-screen">
  <iframe
    src="https://my.spline.design/robotfollowcursorforlandingpagemc-uvRUSBe3YzEXIvwwzvOfWWz6/"
    frameBorder="0"
    width="100%"
    height="100%"
    className="rounded-md"
  ></iframe>
</div>

</section>

  );
};

export default Home;
