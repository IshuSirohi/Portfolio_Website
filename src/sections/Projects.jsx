import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Code } from 'lucide-react';


 const Projects = () => {
  const projects = [
    {
      title: 'Forge-play site',
      description: 'A responsive anime like website with a sleek design, featuring a dynamic hero section, interactive navigation, and a modern layout.',
       image: '/forgeplay.png',
      technologies: ['React', 'TailwindCss'],
      demoLink: 'https://forge-play-site.vercel.app/',
      githubLink: 'https://github.com/IshuSirohi/ForgePlay_Site',
      category: 'Web Application',
      icon: <Globe size={20} />,
    },
    {
      title: 'Razorpay Clone',
      description: 'A clone of the Razorpay payment gateway using TailwindCss, featuring a responsive design and interactive elements.',
      image: '/razorpay.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript','TailwindCss'],
      demoLink: '#',
      githubLink: 'https://github.com/IshuSirohi/Razorpay-_Clone',
      category: 'Web Application',
      icon: <Globe size={20} />,
    },
    {
      title: 'Weather App',
      description: 'A weather application that provides real-time weather updates and forecasts.',
      image: '/unnamed.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      githubLink: 'https://github.com/IshuSirohi/WeatherApp',
      category: 'Web Application',
      icon: <Globe size={20} />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development. Click on the project title to view the live demo or the source code.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full flex items-center gap-1">
                    {project.icon}
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            <a href="https://github.com/IshuSirohi?tab=repositories">View All Projects</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;