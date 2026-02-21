import { colors } from '@/styles/theme'
import Lottie from 'lottie-react'

import icon from './loader-icon.json'

const Loader = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: colors.systemBackground,
      }}
    >
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
