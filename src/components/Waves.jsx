// components/Waves.jsx
import { useEffect, useRef } from 'react'

export default function Waves() {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let time = 0
    
    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = 200
    
    // Gradient colors
    const gradients = [
      { start: '#f43f5e', end: '#8b5cf6' },  // Rose to Purple
      { start: '#0ea5e9', end: '#10b981' },  // Sky to Emerald
      { start: '#f59e0b', end: '#ef4444' }   // Amber to Red
    ]
    
    function drawWave() {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw multiple waves
      for (let i = 0; i < 3; i++) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        gradient.addColorStop(0, gradients[i].start)
        gradient.addColorStop(1, gradients[i].end)
        
        ctx.fillStyle = gradient
        ctx.globalAlpha = 0.15
        
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)
        
        // Draw wave
        for (let x = 0; x < canvas.width; x++) {
          const y = Math.sin(x * 0.01 + time + i * 2) * 30 + 
                    Math.sin(x * 0.02 + time * 1.5 + i) * 20 + 
                    canvas.height - 50 - i * 20
          ctx.lineTo(x, y)
        }
        
        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()
        ctx.fill()
      }
      
      requestAnimationFrame(drawWave)
    }
    
    drawWave()
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <div className="relative w-full h-48 overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute bottom-0 left-0 w-full h-full"
      />
    </div>
  )
}