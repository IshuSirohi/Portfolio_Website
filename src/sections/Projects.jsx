import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
        {
      title: 'Job Tracker Apllication',
      description: 'A application for keeping track of jobs using React and Tailwind.',
      image: '/unnamed.png',
      technologies: ['React, Tailwind CSS'],
      demoLink: 'https://job-tracker-pi-one.vercel.app/#/dashboard',
      githubLink: 'https://github.com/IshuSirohi/Job_Tracker',
      category: 'Web App',
      icon: <Globe size={18} />,
    },
    {
      title: 'Forge-play site',
      description: 'A responsive anime-like website with a sleek design, featuring a dynamic hero section, interactive navigation, and a modern layout.',
      image: '/forgeplay.png',
      technologies: ['React', 'Tailwind CSS'],
      demoLink: 'https://forge-play-site.vercel.app/',
      githubLink: 'https://github.com/IshuSirohi/ForgePlay_Site',
      category: 'Web App',
      icon: <Globe size={18} />,
    },
    {
      title: 'Razorpay Clone',
      description: 'A clone of the Razorpay payment gateway using TailwindCss, featuring a responsive design and interactive elements.',
      image: '/razorpay.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'TailwindCss'],
      demoLink: '#',
      githubLink: 'https://github.com/IshuSirohi/Razorpay-_Clone',
      category: 'Web App',
      icon: <Globe size={18} />,
    },

  ];

  return (
    <section id="projects" className="py-20 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
            🚀 Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in full-stack development. Explore the live demos or dig into the code.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 rounded-2xl shadow-md hover:shadow-purple-700/30 transition duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  {project.icon}
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-800 border border-gray-700 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-all duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/IshuSirohi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
