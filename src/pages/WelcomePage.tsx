import React from 'react'
import { BaseLayout } from '@/widgets/base-layout'
import { WelcomeSlider } from '@/widgets/welcome-slider/WelcomeSlider'

export const WelcomePage: React.FC = () => {
  return (
    <BaseLayout
      className="welcome-page"
      wrapperStyle={{ minHeight: 'auto', height: '100%' }}
      showNavbar={false}
    >
      <WelcomeSlider />
    </BaseLayout>
  )
}
