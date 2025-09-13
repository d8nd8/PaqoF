import styled from '@emotion/styled';

export const Overlay = styled.div({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'black',
  zIndex: 999,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
});

export const CameraContainer = styled.div({
  position: 'relative',
  width: '100%',
  height: '80vh',
  background: '#000',
});

export const CameraFeed = styled.div({
  position: 'absolute',
  inset: 0,
  zIndex: 1,

  backgroundColor: '#0e1016',
  backgroundImage:
    'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),' +
    'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
  backgroundPosition: '0 0, 25px 25px',
  backgroundSize: '50px 50px',
  height: '100%',

  '&::after': {
    content: '"Предпросмотр камеры (тестовый фон)"',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
  },
  '&:has(video, canvas)::after': { display: 'none' },

  '& video, & canvas': {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: "100%",
    objectFit: 'cover',
  },
});

export const Header = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 56,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 14px',
  zIndex: 3,
  pointerEvents: 'auto',
});

export const Title = styled.div({
  fontSize: 16,
  fontWeight: 600,
  color: 'white',
});

export const CloseButton = styled.button({
  position: 'absolute',
  width: 44,
  height: 44,
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'white',
  background: 'transparent',
  border: 'none',
  fontSize: 20,
  cursor: 'pointer',
});

export const ScannerOverlay = styled.div({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
  pointerEvents: 'none',
});

export const LoadingSpinner = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  zIndex: 2,
});

export const BottomActions = styled.div({
  position: 'absolute',
  bottom: 14,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 14px',
  alignItems: 'center',
  gap: 40,
  zIndex: 3,
});

export const ActionButton = styled.button(({ theme }) => ({
  width: 44,
  height: 44,
  backgroundColor: theme.colors.systemBlurryOverlay,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
}));

export const ScanButton = styled.button({
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: 'white',
  border: '2px solid #fff',
  cursor: 'pointer',
});

export const Footer = styled.div({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: 12,
  width: '100%',
  zIndex: 10001,
  bottom: '-50px'
});

export const FooterHint = styled.div({
  background: '#1C1C23',
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 500,
  color: 'white',
  padding: '8px 15px',
  textAlign: 'center',
  borderRadius: 16,
});

export const ErrorMessage = styled.div({
  color: 'red',
  textAlign: 'center',
  marginTop: 8,
});

export const ErrorButton = styled.button({
  marginTop: 8,
});
