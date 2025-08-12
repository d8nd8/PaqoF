import React from 'react'
import { MainWidget } from '@/widgets/main-widget/MainWidget'
import { BaseLayout } from '@/widgets/base-layout'

export const MainPage: React.FC = () => {

  return (
    <BaseLayout showNavbar={true}>
      <MainWidget />
    </BaseLayout>
  );
};
