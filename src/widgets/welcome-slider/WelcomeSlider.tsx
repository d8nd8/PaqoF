import React, { useState } from 'react'
import homeImg1 from '@/assets/images/home1.png'
import homeImg2 from '@/assets/images/home2.png'
import { LanguageSwitcher } from '@/features/language-switcher/LanguageSwitcher'
import { SecurityPinCode } from '@/features/security-pin-code/SecurityPinCode'
import { Slider } from '@/features/slider/ui/Slider'
import CloseIcon from '@icons/close.svg?react'
import GlobeIcon from '@icons/globe.svg?react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import {
  LangButton,
  PinModalClose,
  PinModalContent,
  PinModalOverlay,
  WelcomeSliderWrapper,
} from './WelcomeSlider.styled'

export const WelcomeSlider: React.FC = () => {
  const navigate = useNavigate()
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isPinVisible, setIsPinVisible] = useState(false)
  const { t } = useTranslation()

  const slides = [
    {
      title: t('welcome.slide1.title'),
      description: t('welcome.slide1.description'),
      buttonText: t('welcome.slide1.buttonText'),
      image: homeImg2,
      backgroundBottomOffset: 140,
    },
    {
      title: t('welcome.slide2.title'),
      description: t('welcome.slide2.description'),
      buttonText: t('welcome.slide2.buttonText'),
      image: homeImg1,
      backgroundPosition: 'center center',
      backgroundSize: 'contain',
    },
  ]

  const handleOpenLang = () => setIsLangOpen(true)
  const handleCloseLang = () => setIsLangOpen(false)
  const handleGoToWallet = () => {
    navigate('/main', { state: { openPin: true } })
  }
  const handlePinComplete = (pin: string) => {
    console.log('PIN введён:', pin)
    setIsPinVisible(false)
  }

  return (
    <WelcomeSliderWrapper>
      <LangButton onClick={handleOpenLang}>
        <GlobeIcon />
      </LangButton>

      <Slider
        slides={slides}
        autoPlayDuration={5000}
        onButtonClick={handleGoToWallet}
      />

      <LanguageSwitcher
        isOpen={isLangOpen}
        onClose={handleCloseLang}
      />

      {isPinVisible && (
        <PinModalOverlay>
          <PinModalContent>
            <PinModalClose onClick={() => setIsPinVisible(false)}>
              <CloseIcon />
            </PinModalClose>
            <SecurityPinCode
              mode="create"
              onComplete={handlePinComplete}
            />
          </PinModalContent>
        </PinModalOverlay>
      )}
    </WelcomeSliderWrapper>
  )
}
