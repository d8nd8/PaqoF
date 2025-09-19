import React, { useState } from "react";
import {
  LangButton,
  WelcomeSliderWrapper,
  PinModalOverlay,
  PinModalContent,
  PinModalClose
} from './WelcomeSlider.styled';
import GlobeIcon from "@icons/globe.svg?react";
import CloseIcon from "@icons/close.svg?react";
import { Slider } from '@/features/slider/ui/Slider';
import { LanguageSwitcher } from '@/features/language-switcher/LanguageSwitcher';
import { SecurityPinCode } from '@/features/security-pin-code/SecurityPinCode';
import { useNavigate } from 'react-router-dom'


import homeImg1 from '@/assets/images/home1.png'
import homeImg2 from '@/assets/images/home2.png'

const slides = [
  {
    title: "Как крипто-карта, только крипто-СБП",
    description: "Пополняйте кошелёк удобными для вас криптовалютами",
    buttonText: "Перейти в кошелёк",
    image: homeImg2,
  },
  {
    title: "Быстрое пополнение счёта",
    description: "Пополняйте кошелёк удобными для вас криптовалютами",
    buttonText: "Перейти в кошелёк",
    image: homeImg1,
  },
  // {
  //   title: "Удобный вывод средств",
  //   description: "Моментальные переводы на карты и счета",
  //   buttonText: "Перейти в кошелёк",
  //   image: homeImg1,
  // },
];

export const WelcomeSlider: React.FC = () => {
  const navigate = useNavigate();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ru");
  const [isPinVisible, setIsPinVisible] = useState(false);

  const handleOpenLang = () => setIsLangOpen(true);
  const handleCloseLang = () => setIsLangOpen(false);
  const handleLanguageChange = (lang: string) => setSelectedLanguage(lang);
  const handleGoToWallet = () => {
    navigate("/main", { state: { openPin: true } });
  };
  const handlePinComplete = (pin: string) => {
    console.log("PIN введён:", pin);
    setIsPinVisible(false);
  };

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
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />

      {isPinVisible && (
        <PinModalOverlay>
          <PinModalContent>
            <PinModalClose onClick={() => setIsPinVisible(false)}>
              <CloseIcon />
            </PinModalClose>
            <SecurityPinCode mode="create" onComplete={handlePinComplete} />
          </PinModalContent>
        </PinModalOverlay>
      )}
    </WelcomeSliderWrapper>
  );
};
