import Lottie from 'lottie-react'

import Grainient from './Gradient'
import icon from './loader-icon.json'

const Loader = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Grainient
        color1="#d9eb37"
        color2="#9ca50e"
        color3="#505504"
        timeSpeed={1.55}
        colorBalance={0}
        warpStrength={1.05}
        warpFrequency={4.1}
        warpSpeed={1.9}
        warpAmplitude={50}
        blendAngle={82}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
      <Lottie
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 100,
          height: 100,
        }}
        animationData={icon}
        loop={true}
      />
    </div>
  )
}

export default Loader
