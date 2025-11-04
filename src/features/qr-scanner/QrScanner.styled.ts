import styled from '@emotion/styled';

export const Overlay = styled.div({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'transparent',
  zIndex: 999,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'end',
  paddingBottom: '60px',
});

export const CameraContainer = styled.div<{ $insetTop?: number; $insetBottom?: number }>(
  ({ $insetTop = 0, $insetBottom = 0 }) => ({
    position: 'relative',
    width: '100%',
    height: `calc(100vh - ${$insetTop}px)`,
    marginBottom: `${$insetBottom }px`,
    background: 'transparent',
  })
);

export const CameraFeed = styled.div({
  position: 'absolute',
  inset: 0,
  zIndex: 0,

  backgroundColor: 'transparent',
  backgroundPosition: '0 0, 25px 25px',
  backgroundSize: '50px 50px',
  height: '100%',

  '&::after': {
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

export const CloseButton = styled.button<{ $insetTop?: number }>(({ $insetTop = 0 }) => ({
  position: 'absolute',
  width: 44,
  height: 44,
  right: 16,
  top: `calc(${ $insetTop }px + 90px)`,
  color: 'white',
  background: 'transparent',
  border: 'none',
  fontSize: 20,
  cursor: 'pointer',
}));

export const ScannerOverlay = styled.div({
  position: 'absolute',
  inset: 0,
  zIndex: 2,
  pointerEvents: 'none',
  background: 'transparent',



  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '60%',
    height: '60%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    border: 'none',
  },
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

export const Footer = styled.div<{ $insetBottom?: number }>(
  ({ $insetBottom = 0 }) => ({
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 12,
    width: '100%',
    zIndex: 10001,
    bottom: `${$insetBottom}px)`,
  })
);

export const FooterHint = styled.button({
  background: '#1C1C23',
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 500,
  color: 'white',
  padding: '8px 15px',
  textAlign: 'center',
  borderRadius: 16,
});
