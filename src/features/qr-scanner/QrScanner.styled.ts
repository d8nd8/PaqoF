import styled from 'styled-components';

export const Overlay = styled.div({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'black',
  zIndex: 999,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

export const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 16,
});

export const Title = styled.div({
  fontSize: 16,
  fontWeight: 600,
  color: 'white',
});

export const CloseButton = styled.button({
  color: 'white',
  background: 'transparent',
  border: 'none',
});

export const CameraContainer = styled.div({
  width: '100%',
  height: '80vh',
  position: 'relative',
});

export const ScannerOverlay = styled.div({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ScannerFrame = styled.div({
  width: 240,
  height: 240,
  border: '2px solid white',
  position: 'relative',
});

export const ScannerFrameBottom = styled.div({});

export const ScanLine = styled.div({
  position: 'absolute',
  top: '50%',
  width: '100%',
  height: 2,
  backgroundColor: 'red',
  animation: 'scanline 1.5s linear infinite',
});

export const LoadingSpinner = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
});

export const InstructionText = styled.div({
  textAlign: 'center',
  marginTop: 12,
  fontSize: 15,
  color: 'white',
});

export const BottomActions = styled.div({
  paddingTop: 16,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 40,
  position: 'absolute',
  bottom: 24,
  width: '100%',
});

export const ActionButton = styled.button({
  width: 48,
  height: 48,
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  color: 'white',
});

export const ScanButton = styled.button({
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: 'white',
  border: '2px solid #fff',
});

export const Footer = styled.div({
  height: '20vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: 12,
});

export const FooterHint = styled.div({
  fontSize: 14,
  color: 'white',
  padding: '0 16px',
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: 16,
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 16,
  paddingRight: 16,
});

export const ErrorMessage = styled.div({
  color: 'red',
  textAlign: 'center',
  marginTop: 8,
});

export const ErrorButton = styled.button({
  marginTop: 8,
});
