import styled from '@emotion/styled'

interface OverlayProps {
  $isVisible: boolean;
  $isClosing: boolean;
}

export const Overlay = styled.div<OverlayProps>((props) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: 1000,
  display: props.$isVisible ? 'block' : 'none',
  opacity: props.$isClosing ? 0 : 1,
  transition: 'opacity 300ms ease-out'
}));

interface SheetProps {
  $isVisible: boolean;
  $isClosing: boolean;
  $status?: 'default' | 'success' | 'error';
}

export const Sheet = styled.div<SheetProps>((props) => ({
  willChange: 'transform, background',
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'space-between',
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
  zIndex: 1001,
  minHeight: '50vh',
  overflow: 'hidden',
  transform:
    props.$isVisible && !props.$isClosing
      ? 'translateY(0)'
      : 'translateY(100%)',
  transition: 'transform 300ms ease-out',
}));

export const Handle = styled.div<{ $status?: 'default' | 'success' }>(({$status, theme}) => ({
  color: theme.colors.textPrimary,
  textAlign: 'center',
  fontSize: '13px',
  fontWeight: '600',
  lineHeight: '18px',
  letterSpacing: '-0.08px',
  display: $status === 'success' ? 'none' : 'block',
}));

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

  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
}));

export const CloseButton = styled.div(({ theme }) => ({
  position: 'absolute',
  right: '20px',
  top: '16px',
  fontSize: '13px',
  color: theme.colors.textPrimary,
  cursor: 'pointer',
  fontWeight: '600',
  '&:hover': { opacity: 0.7 },
}));

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
  padding: '16px',
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