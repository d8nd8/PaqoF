import HomeIcon        from '@icons/home.svg?react'
import HomeActiveIcon  from '@icons/home-active.svg?react'
import ClockIcon       from '@icons/clock.svg?react'
import ClockActiveIcon from '@icons/clock-active.svg?react'
import QRIcon          from '@icons/qr.svg?react'
import BonusIcon       from '@icons/bonus.svg?react'
import BonusActiveIcon from '@icons/bonus-active.svg?react'
import UserIcon        from '@icons/user.svg?react'
import UserActiveIcon  from '@icons/user-active.svg?react'
import type { NavbarItemConfig } from '@/features/navbar'

export const NavbarItems: NavbarItemConfig[] = [
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
