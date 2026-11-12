import * as THREE from 'three'

export type AutumnScene = { setRunning: (running: boolean) => void; dispose: () => void }

type Particle = {
  x: number; y: number; z: number; size: number; speed: number; phase: number; spin: number; sway: number
}
type Batch = { mesh: THREE.InstancedMesh; particles: Particle[]; tier: number }

export async function createAutumnScene(host: HTMLDivElement, atlasUrl: string): Promise<AutumnScene> {
  const image = new Image()
  image.src = atlasUrl
  await image.decode()

  const mobile = matchMedia('(max-width: 767px)').matches
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: mobile ? 'low-power' : 'default' })
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1 : 1.5))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.1
  renderer.domElement.setAttribute('aria-hidden', 'true')
  host.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(42, 1, .1, 40)
  camera.position.z = 12
  scene.add(new THREE.HemisphereLight('#fff4dc', '#886344', 2.2))
  const sun = new THREE.DirectionalLight('#fff0ca', 2.5)
  sun.position.set(-3, 6, 8)
  scene.add(sun)
  const backlight = new THREE.DirectionalLight('#ffbf7d', 1.2)
  backlight.position.set(4, 3, -5)
  scene.add(backlight)

  // A bent surface catches the sun differently as it rolls; the atlas supplies real serrations and veins.
  const geometry = new THREE.PlaneGeometry(1, 1, 8, 10)
  const positions = geometry.attributes.position
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i), y = positions.getY(i)
    positions.setZ(i, .17 * x * x + .065 * Math.sin(y * 5 + x * 3) + .09 * y * y)
  }
  geometry.computeVertexNormals()

  const textures: THREE.Texture[] = []
  const materials: THREE.MeshStandardMaterial[] = []
  const batches: Batch[] = []
  let randomState = 4242
  const random = () => { randomState = (randomState * 1664525 + 1013904223) >>> 0; return randomState / 4294967296 }
  let aspect = 1
  const halfHeight = (z: number) => Math.tan(THREE.MathUtils.degToRad(21)) * (12 - z)

  for (let tier = 0; tier < 3; tier++) {
    // Soft-focus source variants avoid the cost of full-screen depth-of-field postprocessing.
    const canvas = document.createElement('canvas')
    canvas.width = image.naturalWidth
    canvas.height = image.naturalHeight
    const context = canvas.getContext('2d')!
    context.filter = tier === 0 ? 'blur(3px)' : tier === 2 ? 'blur(5px)' : 'none'
    context.drawImage(image, 0, 0)
    const baseTexture = new THREE.CanvasTexture(canvas)
    baseTexture.colorSpace = THREE.SRGBColorSpace
    textures.push(baseTexture)

    for (let variant = 0; variant < 3; variant++) {
      const texture = baseTexture.clone()
      texture.repeat.set(1 / 3, 1)
      texture.offset.x = variant / 3
      texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy())
      texture.needsUpdate = true
      textures.push(texture)
      const material = new THREE.MeshStandardMaterial({
        map: texture, side: THREE.DoubleSide, transparent: true, opacity: [.48, .88, .8][tier],
        alphaTest: .035, depthWrite: false, roughness: .95, metalness: 0,
        emissive: '#633117', emissiveIntensity: .1,
      })
      material.forceSinglePass = true
      materials.push(material)
      // One viewport-sized scene serves the entire page: six leaves on desktop, two on phones.
      const count = mobile
        ? [variant === 1 ? 1 : 0, variant === 0 ? 1 : 0, 0][tier]
        : [1, variant !== 1 ? 1 : 0, variant === 1 ? 1 : 0][tier]
      if (!count) continue
      const particles: Particle[] = Array.from({ length: count }, () => {
        const z = [-5, 0, 5][tier] + (random() - .5) * 1.5
        return {
          x: tier === 2 ? .15 + random() * .8 : random() * 2 - 1,
          y: (random() * 2 - 1) * (halfHeight(z) + 1), z,
          size: [.19, .36, .62][tier] * (.7 + random() * .6),
          speed: [.15, .21, .25][tier] * (.7 + random() * .6),
          phase: random() * Math.PI * 2, spin: (random() - .5) * .7, sway: .3 + random() * .5,
        }
      })
      const mesh = new THREE.InstancedMesh(geometry, material, count)
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
      mesh.frustumCulled = false
      mesh.renderOrder = tier
      scene.add(mesh)
      batches.push({ mesh, particles, tier })
    }
  }

  let disposed = false, running = false, contextLost = false, frame = 0, time = 0, previous = 0
  let measuredFrames = 0, measuredSeconds = 0, adapted = false
  const transform = new THREE.Object3D()
  const pointer = new THREE.Vector2()
  const targetPointer = new THREE.Vector2()
  const resize = () => {
    const { width, height } = host.getBoundingClientRect()
    if (!width || !height || disposed) return
    aspect = width / height
    camera.aspect = aspect
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }
  const observer = new ResizeObserver(resize)
  observer.observe(host)
  resize()
  const onPointer = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse') return
    targetPointer.set(event.clientX / innerWidth * 2 - 1, event.clientY / innerHeight * 2 - 1)
  }
  window.addEventListener('pointermove', onPointer, { passive: true })
  const onContextLost = (event: Event) => {
    event.preventDefault()
    setRunning(false)
    contextLost = true
    host.dataset.state = 'fallback'
    renderer.domElement.style.visibility = 'hidden'
  }
  renderer.domElement.addEventListener('webglcontextlost', onContextLost)

  const draw = (now: number) => {
    if (!running || disposed) return
    const dt = previous ? Math.min((now - previous) / 1000, .05) : 0
    previous = now
    time += dt
    const wind = Math.sin(time * .23) * .35 + Math.sin(time * .57) * .12
    pointer.lerp(targetPointer, 1 - Math.exp(-dt * 2))
    camera.position.x = pointer.x * .12
    camera.position.y = -pointer.y * .08
    camera.lookAt(0, 0, 0)
    for (const { mesh, particles } of batches) {
      for (let i = 0; i < mesh.count; i++) {
        const leaf = particles[i]
        const half = halfHeight(leaf.z)
        leaf.y -= leaf.speed * dt
        if (leaf.y < -half - 1.3) {
          leaf.y = half + 1.3
          leaf.x = random() * 2 - 1
        }
        const flutter = Math.sin(time * .8 + leaf.phase)
        transform.position.set(
          leaf.x * half * aspect + Math.sin(time * .47 + leaf.phase) * leaf.sway + wind,
          leaf.y + Math.sin(time * 1.1 + leaf.phase) * .06,
          leaf.z + Math.sin(time * .35 + leaf.phase) * .2,
        )
        transform.rotation.set(flutter * .9, time * leaf.spin + Math.sin(time * .6 + leaf.phase) * .8, flutter * .55 + leaf.phase)
        transform.scale.setScalar(leaf.size)
        transform.updateMatrix()
        mesh.setMatrixAt(i, transform.matrix)
      }
      mesh.instanceMatrix.needsUpdate = true
    }
    renderer.render(scene, camera)
    // Lower the fill cost and density once if the device sustains less than ~40fps.
    if (!adapted && dt > 0) {
      measuredFrames++
      measuredSeconds += dt
      if (measuredFrames >= 100) {
        if (measuredSeconds / measuredFrames > .025) {
          renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? .8 : 1))
          for (const batch of batches) batch.mesh.count = Math.max(1, Math.floor(batch.mesh.count * .65))
          host.dataset.leafCount = String(batches.reduce((sum, batch) => sum + batch.mesh.count, 0))
          resize()
          host.dataset.quality = 'economy'
        }
        adapted = true
      }
    }
    frame = requestAnimationFrame(draw)
  }

  const setRunning = (active: boolean) => {
    if (disposed || contextLost) return
    host.dataset.state = active ? 'running' : 'paused'
    if (running === active) return
    running = active
    previous = 0
    if (active) frame = requestAnimationFrame(draw)
    else cancelAnimationFrame(frame)
  }
  host.dataset.leafCount = String(batches.reduce((sum, batch) => sum + batch.mesh.count, 0))
  host.dataset.quality = mobile ? 'mobile' : 'high'

  return {
    setRunning,
    dispose() {
      setRunning(false)
      disposed = true
      observer.disconnect()
      window.removeEventListener('pointermove', onPointer)
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost)
      for (const { mesh } of batches) mesh.dispose()
      geometry.dispose()
      for (const material of materials) material.dispose()
      for (const texture of textures) texture.dispose()
      scene.clear()
      renderer.dispose()
      renderer.forceContextLoss()
      renderer.domElement.remove()
    },
  }
}
