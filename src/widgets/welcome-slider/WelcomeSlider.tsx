import React from "react";
import {
  SliderWrapper,
  Header,
  LangButton
} from "./WelcomeSlider.styled";
import GlobeIcon from "@icons/globe.svg?react";
import { Slider } from '@/features/slider/ui/Slider'

const slides = [
  {
    title: "Как крипто-карта, только крипто-СБП",
    description: "Пополняйте кошелёк удобными для вас криптовалютами",
    buttonText: "Перейти в кошелёк",
  },
  {
    title: "Быстрое пополнение счёта",
    description: "Пополняйте кошелёк удобными для вас криптовалютами",
    buttonText: "Перейти в кошелёк",
  },
  {
    title: "Удобный вывод средств",
    description: "Моментальные переводы на карты и счета",
    buttonText: "Перейти в кошелёк",
  },
];

export const WelcomeSlider: React.FC = () => {
  return (
    <SliderWrapper>
      <Header>
        <LangButton>
         <GlobeIcon />
        </LangButton>
      </Header>
      <Slider slides={slides} autoPlayDuration={5000} />
    </SliderWrapper>
  );
};
