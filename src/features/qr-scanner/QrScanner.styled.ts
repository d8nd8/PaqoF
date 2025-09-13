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
  zIndex: 3, // всегда над видеопотоком
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
  height: '80vh',            // область камеры ~80% экрана
  background: '#000',        // базовый фон под всем
});

// НОВОЕ: сам контейнер превью с тестовым фоном
export const CameraFeed = styled.div({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  top: 56,                   // отступ под шапку 56px
  overflow: 'hidden',
  borderRadius: 12,
  width: '100%',
  height: '100%',

  // Тестовый фон (виден на ПК без камеры)
  backgroundColor: '#0e1016',
  backgroundImage:
    'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),' +
    'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
  backgroundPosition: '0 0, 25px 25px',
  backgroundSize: '50px 50px',

  // Подсказка по центру, исчезает когда появится <video>/<canvas>
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

  // Видео/canvas от html5-qrcode
  '& video, & canvas': {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export const ScannerOverlay = styled.div({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  top: 56,                  // чтобы не перекрывать шапку
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pointerEvents: 'none',
  zIndex: 2,
});

export const LoadingSpinner = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
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
  zIndex: 3,               // над видео
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
