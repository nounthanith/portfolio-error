// App.js
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Particles from './components/Particles'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 bg-gradient-to-br from-rose-100 to-teal-100">
        <Particles />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <AnimatePresence>
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
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App