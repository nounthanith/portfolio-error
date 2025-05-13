import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  const [scrollDirection, setScrollDirection] = useState(1)
  const [lastScroll, setLastScroll] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrollDirection(currentScroll > lastScroll ? 1 : -1)
      setLastScroll(currentScroll)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 z-[9998] origin-left"
      style={{ 
        scaleX,
        background: `linear-gradient(to right, #f43f5e, #8b5cf6)`
      }}
    >
      <motion.div
        animate={{ 
          x: scrollDirection > 0 ? [0, 20, 0] : [0, -20, 0],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut"
        }}
        className="absolute right-0 top-0 w-3 h-3 -mt-1 -mr-1.5 rounded-full bg-rose-500 shadow-lg"
      />
    </motion.div>
  )
}