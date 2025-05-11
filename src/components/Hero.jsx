// components/Hero.jsx
import { motion } from "framer-motion";
import {
  FiFacebook,
  FiFileText,
  FiGithub,
  FiInstagram,
} from "react-icons/fi";
import { Link } from "react-scroll";
import me from "./../assets/Me.jpg";
import cv from "./../../public/Cv.pdf"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Hi, I'm <span className="text-rose-500">Nuon Thanith</span>
          </motion.h1>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            FrontEnd Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap space-x-4"
          >
            <Link
              to="projects"
              className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
            >
              View Work
            </Link>
            
            <a
                href={cv}
                download={cv}
                className="px-8 py-3 border-2 border-rose-500 text-rose-500 dark:text-white rounded-full hover:bg-rose-500 hover:text-white transition-colors"
              >
                Download CV
              </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex mt-8 space-x-6"
          >
            <a href="https://github.com/nounthanith" target="_blank">
              <FiGithub className="text-2xl text-gray-700 dark:text-gray-300 hover:text-rose-500 cursor-pointer" />
            </a>
            <a href="https://web.facebook.com/tha.nith.549" target="_blank">
              <FiFacebook className="text-2xl text-gray-700 dark:text-gray-300 hover:text-rose-500 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/tonq_tong/" target="_blank">
              <FiInstagram className="text-2xl text-gray-700 dark:text-gray-300 hover:text-rose-500 cursor-pointer" />
            </a>
            <a href="https://t.me/Nuon_Thanith" target="_blank">
              <FiFileText className="text-2xl text-gray-700 dark:text-gray-300 hover:text-rose-500 cursor-pointer" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Your image or animated SVG */}
            <div className="absolute inset-0 bg-rose-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="relative z-10 w-full h-full bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              <img
                src={me}
                alt=""
                className="w-64 h-64 md:w-80 md:h-80 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
