import React, { useState } from 'react';
import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Navbar, type NavbarItemConfig } from '../Navbar';
import HomeIcon         from '@icons/home.svg?react'
import HomeActiveIcon   from '@icons/home-active.svg?react'
import ClockIcon        from '@icons/clock.svg?react'
import ClockActiveIcon  from '@icons/clock-active.svg?react'
import QRIcon           from '@icons/qr.svg?react'
import BonusIcon        from '@icons/bonus.svg?react'
import BonusActiveIcon  from '@icons/bonus-active.svg?react'
import UserIcon         from '@icons/user.svg?react'
import UserActiveIcon   from '@icons/user-active.svg?react'

const defaultNavbarItems: NavbarItemConfig[] = [
  {
    id: 'home',
    label: 'Главная',
    icon: HomeIcon,
    activeIcon: HomeActiveIcon,
    to: '/',
  },
  {
    id: 'history',
    label: 'История',
    icon: ClockIcon,
    activeIcon: ClockActiveIcon,
    to: '/history',
  },
  {
    id: 'qr',
    label: '',
    icon: QRIcon,
    activeIcon: QRIcon,
    to: '/qr',
  },
  {
    id: 'bonus',
    label: 'Бонусы',
    icon: BonusIcon,
    activeIcon: BonusActiveIcon,
    to: '/bonus',
  },
  {
    id: 'profile',
    label: 'Профиль',
    icon: UserIcon,
    activeIcon: UserActiveIcon,
    to: '/profile',
  },
]


const MobileContainer = styled.div({
  width: '375px',
  height: '812px',
  margin: '0 auto',
  position: 'relative',
  backgroundColor: '#F2F2F7',
  overflow: 'hidden',
  border: '1px solid #E0E0E0',
  borderRadius: '20px',
});
const ContentArea = styled.div({
  padding: '40px 20px',
  paddingBottom: '100px',
  height: '100%',
  overflowY: 'auto',
});

const DemoTitle = styled.h2({ fontSize: '24px', fontWeight: 600, textAlign: 'center', marginBottom: '20px' });
const StateDemo = styled.div({ marginBottom: '30px' });
const StateTitle = styled.h3({ fontSize: '18px', fontWeight: 500, marginBottom: '15px' });
const StateDescription = styled.p({ fontSize: '14px', lineHeight: 1.4, marginBottom: '10px' });

const meta: Meta<typeof Navbar> = {
  title: 'HomeComponents/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Навигационная панель с тремя состояниями: default, active, history'
      }
    }
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MobileContainer>
        <ContentArea>
          <Story />
        </ContentArea>
      </MobileContainer>
    )
  ]
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function NavbarDemo() {
    const [activeItem, setActiveItem] = useState<string>('home');
    const [historyItems, setHistoryItems] = useState<string[]>([]);

    const handleItemClick = (itemId: string) => {
      if (itemId !== activeItem) {
        setHistoryItems(prev =>
          prev.includes(activeItem) ? prev : [...prev, activeItem]
        );
        setActiveItem(itemId);
      }
      action('navbar-item-clicked')(itemId);
    };

    const items: NavbarItemConfig[] = defaultNavbarItems.map(item => ({
      ...item,
      state:
        item.id === activeItem
          ? 'active'
          : historyItems.includes(item.id)
            ? 'history'
            : 'default'
    }));

    return (
      <>
        <DemoTitle>Navbar States Demo</DemoTitle>

        <StateDemo>
          <StateTitle>🟢 Active State</StateTitle>
          <StateDescription>
            Увеличенный размер (60×60), скругление 20px — текущая активная кнопка.
          </StateDescription>
        </StateDemo>
        <StateDemo>
          <StateTitle>🟡 History State</StateTitle>
          <StateDescription>
            Размер 50×50, скругление 12px — кнопка, на которую уже заходили.
          </StateDescription>
        </StateDemo>
        <StateDemo>
          <StateTitle>⚪ Default State</StateTitle>
          <StateDescription>
            Размер 50×50, серый цвет — обычное состояние.
          </StateDescription>
        </StateDemo>

        <Navbar items={items} onItemClick={handleItemClick} />
      </>
    );
  }
};
Default.storyName = 'Demo';
