import styled from '@emotion/styled'

type NavbarItemState = 'default' | 'active'

interface NavbarItemStyledProps {
  state: NavbarItemState
  isQr: boolean
}

export const NavbarContainer = styled.div(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  height: '81px',
  backgroundColor: theme.colors.systemElevatedBackground,
  borderTop: '1px solid #E0E0E0',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  padding: '10px 20px 20px',
  zIndex: 9999,
  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
}))

export const NavbarItem = styled.button<NavbarItemStyledProps>((props) => {
  const base = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    gap: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    outline: 'none',
    fontSize: '11px',
    fontWeight: 400,
    lineHeight: '13px',
    position: 'relative' as const,
    backgroundColor: 'transparent',
    color: props.theme.colors.textSecondary,
  }

  if (props.isQr) {
    return {
      ...base,
      width: '50px',
      height: '50px',
      borderRadius: '18px',
      backgroundColor: props.theme.colors.primary500,
      '&:focus': {
        outline: 'none',
      },
    }
  }

  if (props.state === 'active') {
    return {
      ...base,
      color: props.theme.colors.textPrimary,
      width: '50px',
      height: '50px',
      borderRadius: '20px',
      '&:focus': { outline: 'none' },
    }
  }

  return {
    ...base,
    color: props.theme.colors.textSecondary,
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    '&:focus': { outline: 'none' },
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      transform: 'translateY(-1px)',
    },
  }
})

export const NavbarLabel = styled.span({
  fontSize: '11px',
  fontWeight: '400',
  lineHeight: '13px',
  textAlign: 'center',
  whiteSpace: 'nowrap',
})

export const NavbarIconWrapper = styled.div({
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
