import React from 'react'
import useUserStore from '@/shared/stores/user'
import { BaseLayout } from '@/widgets/base-layout'
import { WelcomeSlider } from '@/widgets/welcome-slider/WelcomeSlider'
import { Navigate } from 'react-router-dom'

export const WelcomePage: React.FC = () => {
  const { userFromServer } = useUserStore()

  if (userFromServer?.isNewUser === false) {
    return (
      <Navigate
        to="/main"
        replace
      />
    )
  }
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
