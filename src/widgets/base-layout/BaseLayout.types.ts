import type { NavbarItemConfig } from '@/features/navbar'
import BonusActiveIcon from '@icons/bonus-active.svg?react'
import BonusIcon from '@icons/bonus.svg?react'
import ClockActiveIcon from '@icons/clock-active.svg?react'
import ClockIcon from '@icons/clock.svg?react'
import HomeActiveIcon from '@icons/home-active.svg?react'
import HomeIcon from '@icons/home.svg?react'
import QRIcon from '@icons/qr.svg?react'
import UserActiveIcon from '@icons/user-active.svg?react'
import UserIcon from '@icons/user.svg?react'

export interface IBaseLayoutProps {
  children: React.ReactNode
  className?: string
  shortBottomPadding?: boolean
  headerOffset?: boolean
  disableBackButton?: boolean
  showNavbar?: boolean
  centered?: boolean
  title?: string
  showBackButton?: boolean
  wrapperStyle?: React.CSSProperties
  onBack?: () => void
}

export type NavbarItemState = 'default' | 'active' | 'history'

export const NavbarItems: NavbarItemConfig[] = [
  {
    id: 'home',
    label: 'common.navbar.home',
    icon: HomeIcon,
    activeIcon: HomeActiveIcon,
    to: '/main',
  },
  {
    id: 'history',
    label: 'common.navbar.history',
    icon: ClockIcon,
    activeIcon: ClockActiveIcon,
    to: '/history',
  },
  {
    id: 'qr',
    label: '',
    icon: QRIcon,
    activeIcon: QRIcon,
  },
  {
    id: 'bonus',
    label: 'common.navbar.bonus',
    icon: BonusIcon,
    activeIcon: BonusActiveIcon,
    to: '/bonus',
  },
  {
    id: 'profile',
    label: 'common.navbar.profile',
    icon: UserIcon,
    activeIcon: UserActiveIcon,
    to: '/profile',
  },
]
