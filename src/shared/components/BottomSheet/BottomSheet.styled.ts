import styled from '@emotion/styled'

interface OverlayProps {
  $isVisible: boolean;
  $isClosing: boolean;
}

export const Overlay = styled.div<OverlayProps>(({ $isVisible, $isClosing }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: 5000,
  pointerEvents: $isVisible ? 'auto' : 'none',
  opacity: $isVisible && !$isClosing ? 1 : 0,
  transition: 'opacity 350ms ease-in-out',
}));


interface SheetProps {
  $isVisible: boolean;
  $isClosing: boolean;
  $status?: 'default' | 'success' | 'error';
  $customBackground?: string;
}

export const Sheet = styled.div<SheetProps>((props) => {
  if (props.$customBackground) {
    return {
      willChange: 'transform, background',
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      bottom: '0',
      left: '0',
      right: '0',
      background: props.$customBackground,
      borderRadius: '20px 20px 0 0',
      zIndex: 100000,
      minHeight: '50vh',
      overflow: 'hidden',
      transform:
        props.$isVisible && !props.$isClosing
          ? 'translateY(0)'
          : 'translateY(100%)',
      transition: 'transform 300ms ease-out',
    };
  }

  // Базовая логика для статусов
  return {
    willChange: 'transform, background',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    bottom: '0',
    left: '0',
    right: '0',
    background:
      props.$status === 'success'
        ? [
          `radial-gradient(165.91% 110.87% at 0% 0%,
                ${props.theme.colors.primary300} 0%,
                rgba(242, 242, 247, 0) 60%)`,
          `radial-gradient(164.95% 98.92% at 52.53% 0%,
                 ${props.theme.colors.success500} 0%,
                rgba(242, 242, 247, 0) 60%)`,
          `radial-gradient(165.9% 110.75% at 100% 0%,
                 ${props.theme.colors.success400} 0%,
                rgba(242, 242, 247, 0) 60%)`,
          ` ${props.theme.colors.systemElevatedBackground}`,
        ].join(', ')
        : '#f5f5f5',
    borderRadius: '20px 20px 0 0',
    zIndex: 100000,
    minHeight: '50vh',
    overflow: 'hidden',
    transform:
      props.$isVisible && !props.$isClosing
        ? 'translateY(0)'
        : 'translateY(100%)',
    transition: 'transform 300ms ease-out',
  };
});

export const CloseIconButton = styled.button<{ $customCloseColor?: string }>`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 10px;
  color: ${({ $customCloseColor }) => $customCloseColor ?? '#9ca3af'};
  cursor: pointer;
  border-radius: 12px;
  display: grid;
  place-items: center;
  &:active {
    transform: translateY(-50%) scale(0.98);
  }
  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`

export const TopWrapper = styled.div({
});

export const Header = styled.div({
  position: 'relative',
  height: '44px',
  marginBottom: '14px',
  padding: '13px 0',
});

export const Title = styled.h2(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '600',
  color: theme.colors.neutral900,
  margin: 0,
  whiteSpace: 'nowrap',
  maxWidth: '70%',

  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
}));


export const CloseButton = styled.button<{ $customCloseColor?: string }>`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 10px;
  color: ${({ $customCloseColor }) => $customCloseColor ?? '#000000'};
  cursor: pointer;
  border-radius: 10px;
  &:active {
    transform: translateY(-50%) scale(0.98);
  }
`

export const Content = styled.div({
  padding: '0 14px',
  overflowY: 'auto'
});

export const Footer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 14px 40px',
});

export const BottomButton = styled.button<{ $disabled?: boolean }>(({theme}) => ({
  width: '100%',
  padding: '11px',
  backgroundColor: theme.colors.primary500,
  color: theme.colors.neutral900,
  border: 'none',
  borderRadius: '10px',
  fontSize: '15px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',

  '&:hover': {
    opacity: 0.7,
  },
}));