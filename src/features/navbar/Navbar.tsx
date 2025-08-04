import React from 'react'
import {
  NavbarContainer,
  NavbarItem,
  NavbarLabel,
  type NavbarItemState,
} from './Navbar.styled'

export interface NavbarItemConfig {
  id: string
  label: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  activeIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  state: NavbarItemState
}

interface NavbarProps {
  items: NavbarItemConfig[]
  onItemClick: (itemId: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ items, onItemClick }) => (
  <NavbarContainer>
    {items.map(item => {
      const Icon = item.state === 'active' ? item.activeIcon : item.icon;

      return (
        <NavbarItem
          key={item.id}
          state={item.state}
          isQr={item.id === 'qr'}
          onClick={() => onItemClick(item.id)}
        >
          <Icon />
          {item.label && <NavbarLabel>{item.label}</NavbarLabel>}
        </NavbarItem>
      );
    })}
  </NavbarContainer>
);
