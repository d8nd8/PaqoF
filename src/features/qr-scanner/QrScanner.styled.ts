import styled from '@emotion/styled';

export const Overlay = styled.div({
  position: 'fixed',
  inset: 0,
  backgroundColor: '#000',
  zIndex: 999,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const Header = styled.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 14px',
  height: 56,
});

export const Title = styled.div({
  fontSize: 17,
  fontWeight: 500,
  color: '#fff',
});

export const CloseButton = styled.button({
  position: 'absolute',
  width: 44,
  height: 44,
  right: 8,
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'rgba(255,255,255,0.9)',
  background: 'transparent',
  border: 'none',
  fontSize: 22,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});

export const CameraContainer = styled.div({
  position: 'relative',
  flex: 1,
  width: '100%',
  overflow: 'hidden',
});

export const ScannerOverlay = styled.div({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 240,
    height: 240,
    transform: 'translate(-50%, -50%)',
    border: '2px solid #fff',
    borderRadius: 6,
    boxSizing: 'border-box',
  },

  backgroundColor: 'rgba(0,0,0,0.5)',
  backdropFilter: 'blur(2px)',
});

export const LoadingSpinner = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
});

export const BottomActions = styled.div({
  position: 'absolute',
  bottom: 40,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 60px',
  alignItems: 'center',
});

export const ActionButton = styled.button({
  width: 44,
  height: 44,
  backgroundColor: 'rgba(60,60,67,0.6)',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
});

export const ScanButton = styled.button({
  width: 68,
  height: 68,
  borderRadius: '50%',
  backgroundColor: '#fff',
  border: '2px solid #fff',
  boxShadow: '0 0 4px rgba(0,0,0,0.4)',
  cursor: 'pointer',
});

export const Footer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingBottom: 24,
});

export const FooterHint = styled.div({
  background: 'rgba(44,44,46,0.8)',
  fontSize: 13,
  lineHeight: '17px',
  fontWeight: 500,
  color: '#fff',
  padding: '8px 18px',
  textAlign: 'center',
  borderRadius: 18,
});

export const ErrorMessage = styled.div({
  color: 'red',
  textAlign: 'center',
  marginTop: 8,
});

export const ErrorButton = styled.button({
  marginTop: 8,
});
