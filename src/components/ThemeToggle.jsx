// components/ThemeToggle.jsx
import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useEffect } from 'react'

export default function ThemeToggle({ darkMode, setDarkMode }) {
  // Apply dark mode class to HTML document and set up transition
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, [setDarkMode]);

  useEffect(() => {
    // Apply the dark mode class to the HTML element
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle dark mode"
    >
      <motion.div
        key={darkMode ? 'dark' : 'light'}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 30, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </motion.div>
    </motion.button>
  )
}