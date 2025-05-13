import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const colors = [
  'from-rose-200 to-red-800',
  'from-purple-500 to-blue-200',
  'from-blue-500 to-red-500',
  'from-emerald-500 to-sky-500',
  'from-amber-500 to-pink-500'
]

export default function GradientText({ text, className = '' }) {
  const [currentColor, setCurrentColor] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.span
      key={currentColor}
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: '100% 50%' }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse'
      }}
      className={`bg-gradient-to-r ${colors[currentColor]} bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
    >
      {text}
    </motion.span>
  )
}