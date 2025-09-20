import React from "react";
import { WelcomeSlider } from '@/widgets/welcome-slider/WelcomeSlider'
import { BaseLayout } from '@/widgets/base-layout'

export const WelcomePage: React.FC = () => {
  return <BaseLayout showNavbar={false}><WelcomeSlider /></BaseLayout>;
};
