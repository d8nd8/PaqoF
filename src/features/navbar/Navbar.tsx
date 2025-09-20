import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  NavbarContainer,
  NavbarItem,
  NavbarLabel,
  NavbarIconWrapper,
} from './Navbar.styled'

export interface NavbarItemConfig {
  id: string
  label: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  activeIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  to?: string
}

interface NavbarProps {
  items: NavbarItemConfig[]
  onItemClick?: (id: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ items, onItemClick }) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <NavbarContainer>
      {items.map(item => {
        const isActive = item.to ? location.pathname === item.to : false
        const Icon = isActive ? item.activeIcon : item.icon

        return (
          <NavbarItem
            key={item.id}
            state={isActive ? 'active' : 'default'}
            isQr={item.id === 'qr'}
            onClick={() => {
              if (onItemClick) {
                onItemClick(item.id)
              }
              if (item.to && item.id !== 'qr') {
                navigate(item.to)
              }
            }}
          >
            <NavbarIconWrapper>
              <Icon width={24} height={24} />
            </NavbarIconWrapper>
            {item.label && <NavbarLabel>{item.label}</NavbarLabel>}
          </NavbarItem>
        )
      })}
    </NavbarContainer>
  )
}
