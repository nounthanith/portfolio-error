// components/CustomCursor.jsx
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleMouseEnter = () => {
      setIsHovering(true)
    }
    
    const handleMouseLeave = () => {
      setIsHovering(false)
    }
    
    const handleMouseDown = () => {
      setIsClicking(true)
    }
    
    const handleMouseUp = () => {
      setIsClicking(false)
    }
    
    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [data-cursor-hover]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    
    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isClicking ? 0.7 : isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? '#f43f5e' : '#ffffff'
      }}
      transition={{
        type: 'spring',
        mass: 0.1,
        stiffness: 500,
        damping: 20
      }}
    >
      {isHovering && (
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          {isClicking ? '👆' : '👉'}
        </motion.span>
      )}
    </motion.div>
  )
}