import type React from 'react';
import type { NavbarItemConfig } from '@/features/navbar'
import HomeIcon         from '@icons/home.svg?react'
import HomeActiveIcon   from '@icons/home-active.svg?react'
import ClockIcon        from '@icons/clock.svg?react'
import ClockActiveIcon  from '@icons/clock-active.svg?react'
import QRIcon           from '@icons/qr.svg?react'
import BonusIcon        from '@icons/bonus.svg?react'
import BonusActiveIcon  from '@icons/bonus-active.svg?react'
import UserIcon         from '@icons/user.svg?react'
import UserActiveIcon   from '@icons/user-active.svg?react'

export type NavbarItemState = 'default' | 'active' | 'history';

export interface IBaseLayoutProps {
  children: React.ReactNode;
  className?: string;
  shortBottomPadding?: boolean;
  headerOffset?: boolean;
  backRoute?: string;
  disableBackButton?: boolean;
  showNavbar?: boolean;
  centered?: boolean;
}

export const NavbarItems: NavbarItemConfig[] = [
  {
    id: 'home',
    label: 'Главная',
    icon: HomeIcon,
    activeIcon: HomeActiveIcon,
    state: 'default' as NavbarItemState,
  },
  {
    id: 'history',
    label: 'История',
    icon: ClockIcon,
    activeIcon: ClockActiveIcon,
    state: 'default' as NavbarItemState,
  },
  {
    id: 'qr',
    label: '',
    icon: QRIcon,
    activeIcon: QRIcon,
    state: 'default' as NavbarItemState,
  },
  {
    id: 'bonus',
    label: 'Бонусы',
    icon: BonusIcon,
    activeIcon: BonusActiveIcon,
    state: 'default' as NavbarItemState,
  },
  {
    id: 'profile',
    label: 'Профиль',
    icon: UserIcon,
    activeIcon: UserActiveIcon,
    state: 'default' as NavbarItemState,
  },
];