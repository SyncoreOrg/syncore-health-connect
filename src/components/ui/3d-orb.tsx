import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export default function Globe() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    if (!mountRef.current) return

    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight

    // Create scene, camera, and renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountRef.current.appendChild(renderer.domElement)

    // Syncore color scheme
    const syncoreColors = [
      new THREE.Color(0x3b82f6), // Syncore Blue
      new THREE.Color(0x8b5cf6), // Syncore Purple  
      new THREE.Color(0xec4899), // Syncore Pink
    ]

    // Create wireframe sphere
    const wireframeGeometry = new THREE.SphereGeometry(3, 32, 32)
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: syncoreColors[0],
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    })
    const wireframeSphere = new THREE.Mesh(wireframeGeometry, wireframeMaterial)
    scene.add(wireframeSphere)

    // Create solid sphere
    const solidGeometry = new THREE.SphereGeometry(2.85, 32, 32)
    const solidMaterial = new THREE.MeshPhongMaterial({
      color: syncoreColors[0],
      transparent: true,
      opacity: 0.3,
      shininess: 100,
    })
    const solidSphere = new THREE.Mesh(solidGeometry, solidMaterial)
    scene.add(solidSphere)

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    camera.position.z = 7

    let colorIndex = 0
    let nextColorIndex = 1
    let colorT = 0
    const colorTransitionSpeed = 0.01

    // Mouse interaction variables
    let mouseX = 0
    let mouseY = 0
    let targetRotationX = 0
    let targetRotationY = 0
    let isDragging = false

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return
      
      const deltaX = event.clientX - mouseX
      const deltaY = event.clientY - mouseY
      
      targetRotationY += deltaX * 0.01
      targetRotationX += deltaY * 0.01
      
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const handleMouseUp = () => {
      isDragging = false
    }

    const handleMouseEnter = () => {
      if (mountRef.current) {
        mountRef.current.style.cursor = 'grab'
      }
    }

    const handleMouseLeave = () => {
      if (mountRef.current) {
        mountRef.current.style.cursor = 'default'
      }
    }

    // Add event listeners
    mountRef.current.addEventListener('mousedown', handleMouseDown)
    mountRef.current.addEventListener('mousemove', handleMouseMove)
    mountRef.current.addEventListener('mouseup', handleMouseUp)
    mountRef.current.addEventListener('mouseleave', handleMouseUp)
    mountRef.current.addEventListener('mouseenter', handleMouseEnter)
    mountRef.current.addEventListener('mouseleave', handleMouseLeave)

    const lerpColor = (a: THREE.Color, b: THREE.Color, t: number) => {
      const color = new THREE.Color()
      color.r = a.r + (b.r - a.r) * t
      color.g = a.g + (b.g - a.g) * t
      color.b = a.b + (b.b - a.b) * t
      return color
    }

    let animationId: number

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Color transition
      colorT += colorTransitionSpeed
      if (colorT >= 1) {
        colorT = 0
        colorIndex = nextColorIndex
        nextColorIndex = (nextColorIndex + 1) % syncoreColors.length
      }

      const currentColor = lerpColor(syncoreColors[colorIndex], syncoreColors[nextColorIndex], colorT)

      // Update materials
      wireframeMaterial.color = currentColor
      solidMaterial.color = currentColor

      // Smooth rotation interpolation
      wireframeSphere.rotation.x += (targetRotationX - wireframeSphere.rotation.x) * 0.05
      wireframeSphere.rotation.y += (targetRotationY - wireframeSphere.rotation.y) * 0.05
      solidSphere.rotation.x += (targetRotationX - solidSphere.rotation.x) * 0.03
      solidSphere.rotation.y += (targetRotationY - solidSphere.rotation.y) * 0.03

      // Auto-rotation when not interacting
      if (!isDragging) {
        targetRotationY += 0.005
        targetRotationX += 0.002
      }

      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      const newWidth = mountRef.current?.clientWidth || width
      const newHeight = mountRef.current?.clientHeight || height
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }
    window.addEventListener("resize", handleResize)

    const hintTimer = setTimeout(() => {
      setShowHint(false)
    }, 3000)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      
      // Remove mouse event listeners
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousedown', handleMouseDown)
        mountRef.current.removeEventListener('mousemove', handleMouseMove)
        mountRef.current.removeEventListener('mouseup', handleMouseUp)
        mountRef.current.removeEventListener('mouseleave', handleMouseUp)
        mountRef.current.removeEventListener('mouseenter', handleMouseEnter)
        mountRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
      
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      clearTimeout(hintTimer)
    }
  }, [])

  return (
    <div ref={mountRef} className="w-full h-full relative">
      {showHint && (
        <div className="absolute bottom-4 right-4 bg-black/30 text-white text-xs px-3 py-2 rounded-full transition-opacity duration-1000 opacity-80 backdrop-blur-sm">
          Click and drag to rotate
        </div>
      )}
    </div>
  )
}
