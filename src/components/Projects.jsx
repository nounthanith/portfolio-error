import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    image: "/projects/GroupProject.png",
    title: "Assignment Project",
    description: "A website using HTML and CSS only",
    tags: ["HTML", "CSS"],
    category: "basic",
    github: "https://github.com/nounthanith/group3",
    live: "https://nounthanith.github.io/group3/"
  },
  {
    image: "/projects/NewApi.png",
    title: "News Website",
    description: "News website using HTML, Tailwind CSS and JavaScript (Fetch News API)",
    tags: ["HTML", "Tailwind", "JavaScript"],
    category: "api",
    github: "https://github.com/nounthanith/news",
    live: "https://news-orpin-alpha.vercel.app/"
  },
  {
    image: "/projects/DashBoard.png",
    title: "Dashboard",
    description: "Dashboard project created following a YouTube tutorial",
    tags: ["React", "Tailwind"],
    category: "react",
    github: "https://github.com/nounthanith/dashboard",
    live: "https://dashboard-rho-wheat-10.vercel.app/"
  },
  {
    image: "/projects/MusicApp.png",
    title: "Music Website",
    description: "Music website created while learning Bootstrap and API integration",
    tags: ["React", "Bootstrap"],
    category: "react",
    github: "https://github.com/nounthanith/music",
    live: "https://music-rose-nu.vercel.app/"
  },
  {
    image: "/projects/Portfolio.png",
    title: "My Portfolio",
    description: "My personal portfolio website",
    tags: ["React", "Tailwind"],
    category: "react",
    github: "https://github.com/nounthanith/portfolio",
    live: "https://portfolio-tan-six-69.vercel.app/"
  },
  {
    image: "/projects/ChatBot.png",
    title: "Gemini Chat Bot",
    description: "Chatbot project built with Google API and Tailwind CSS",
    tags: ["React", "Tailwind", "API"],
    category: "api",
    github: "https://github.com/nounthanith/gimini-ai",
    live: "https://gimini-ai-ten.vercel.app/"
  },
  {
    image: "/projects/Family.png",
    title: "Family Gallery",
    description: "My Family Image Website",
    tags: ["React", "Tailwind"],
    category: "react",
    github: "https://github.com/nounthanith/my-family-gallery",
    live: "https://my-family-gallery.vercel.app/"
  },
  {
    image: "/projects/ModernPortfolio.png",
    title: "Modern Portfolio",
    description: "Modern UI",
    tags: ["React", "Tailwind"],
    category: "react",
    github: "https://github.com/nounthanith/modern-portfolio",
    live: "https://modern-portfolio-pi-two.vercel.app/"
  },
];

const categories = ["all", "react", "api", "basic"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
        >
          My <span className="text-rose-500">Projects</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Here are some of my recent projects with modern technologies and creative designs.
        </motion.p>

        {/* Category Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full capitalize transition-colors ${
                activeCategory === category
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-r flex items-center justify-center">
                <img src={project.image} alt={project.title} className="h-full object-cover w-full" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}