import { useEffect, useRef } from 'react'

export default function Particles() {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    
    const colors = ['#f43f5e', '#8b5cf6', '#0ea5e9', '#10b981']
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
      }
      
      update() {
        this.x += this.speedX
        this.y += this.speedY
        
        if (this.size > 0.2) this.size -= 0.01
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }
      
      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    
    function init() {
      particles = []
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle())
      }
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
        
        // Regenerate particles that are too small
        if (particles[i].size <= 0.2) {
          particles.splice(i, 1)
          particles.push(new Particle())
        }
      }
      
      connectParticles()
      requestAnimationFrame(animate)
    }
    
    function connectParticles() {
      let opacity = 1
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = Math.sqrt(
            Math.pow(particles[a].x - particles[b].x, 2) + 
            Math.pow(particles[a].y - particles[b].y, 2)
          )
          
          if (distance < 100) {
            opacity = 1 - distance / 100
            ctx.strokeStyle = `rgba(244, 63, 94, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }
    
    init()
    animate()
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}