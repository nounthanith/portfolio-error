// App.js
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Particles from './components/Particles'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import { Toaster } from 'react-hot-toast';
import ThemeToggle from './components/ThemeToggle'
import GradientText from "./components/GradientText.jsx";
import {CgHello} from "react-icons/cg";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  // Apply dark mode to HTML element and initialize from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <div className="dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 bg-gradient-to-br from-rose-100 to-teal-100">
        <Particles />
        <CustomCursor />
        <ScrollProgress />
        <Toaster  position="top-right"/>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <AnimatePresence>'
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App