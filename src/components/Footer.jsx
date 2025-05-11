// components/Footer.jsx
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFacebook } from 'react-icons/fi'

const socialLinks = [
  { icon: <FiGithub />, url: "https://github.com/nounthanith" },
  { icon: <FiFacebook />, url: "https://web.facebook.com/tha.nith.549" },
  { icon: <FiMail />, url: "mailto:nounthanith99@gmail.com" }
]

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Let's <span className="text-rose-500">Connect</span>
          </h3>
          
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#f43f5e' }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
            © {new Date().getFullYear()} Nuon Thanith. All rights reserved. 
            Built with React and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}