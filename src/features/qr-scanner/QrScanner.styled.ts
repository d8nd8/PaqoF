import styled from '@emotion/styled';

export const Overlay = styled.div({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'black',
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
  fontSize: 16,
  fontWeight: 600,
  color: 'white',
});

export const CloseButton = styled.button({
  position: 'absolute',
  width: '44px',
  height: '44px',
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'white',
  background: 'transparent',
  border: 'none',
  fontSize: 20,
});


export const CameraContainer = styled.div({
  position: 'relative',
  width: '100%',
  height: '90vh',
  paddingTop: '50px'
});

export const ScannerOverlay = styled.div({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

});

export const LoadingSpinner = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
});

export const BottomActions = styled.div({
  position: 'absolute',
  bottom: 14,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 14px',
  alignItems: 'center',
  gap: 40,
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
}));

export const ScanButton = styled.button({
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: 'white',
  border: '2px solid #fff',
});

export const Footer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: 12,
});

export const FooterHint = styled.div(({ theme }) => ({
  background: '#1C1C23',
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 500,
  color: 'white',
  padding: '8px 15px',
  textAlign: 'center',
  borderRadius: 16,
}));

export const ErrorMessage = styled.div({
  color: 'red',
  textAlign: 'center',
  marginTop: 8,
});

export const ErrorButton = styled.button({
  marginTop: 8,
});
