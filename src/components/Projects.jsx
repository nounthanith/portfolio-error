// components/Projects.jsx
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    image: "/projects/GroupProject.png",
    title: "Asigment Project",
    description: "A assigment website using Html and Css only",
    tags: ["Html", "Css",],
    github: "https://github.com/nounthanith/group3",
    live: "https://nounthanith.github.io/group3/"
  },
  {
    image: "/projects/NewApi.png",
    title: "News",
    description: "A News website create with Html TailwindCss and JavaScript(Fecth News api)",
    tags: ["Html", "Tailwind",],
    github: "https://github.com/nounthanith/news",
    live: "https://news-orpin-alpha.vercel.app/"
  },
  {
    image: "/projects/DashBoard.png",
    title: "Dash Board",
    description: "A dashboard project I created by following a YouTube tutorial.",
    tags: ["React", "Tailwind",],
    github: "https://github.com/nounthanith/dashboard",
    live: "https://dashboard-rho-wheat-10.vercel.app/"
  },
  {
    image: "/projects/MusicApp.png",
    title: "Music Website",
    description: "A music website I created while learning Bootstrap and integrating APIs.",
    tags: ["React", "BootStrap",],
    github: "https://github.com/nounthanith/music",
    live: "https://music-rose-nu.vercel.app/"
  },
  {
    image: "/projects/Portfolio.png",
    title: "My Portfolio",
    description: "My Portfolio that I use.",
    tags: ["React", "Tailwind",],
    github: "https://github.com/nounthanith/portfolio",
    live: "https://portfolio-tan-six-69.vercel.app/"
  },
  {
    image: "/projects/ChatBot.png",
    title: "Gimi Chat Bot",
    description: "A chatbot project built with Google API and styled with Tailwind CSS.",
    tags: ["React", "Tailwind",],
    github: "https://github.com/nounthanith/gimini-ai",
    live: "https://gimini-ai-ten.vercel.app/"
  },
]

export default function Projects() {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-rose-400 to-purple-500 flex items-center justify-center">
                <img src={project.image} alt="" />
              </div>
              
              <div className="p-6 mt-10">
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
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.live} 
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
  )
}