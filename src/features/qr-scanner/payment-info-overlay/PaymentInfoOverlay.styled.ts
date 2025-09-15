import styled from '@emotion/styled';

export const OverlayScannerContent = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '101px'
});

export const ImageContainer = styled.div({
  width: '100%',
  borderRadius: '13px',
  overflow: 'hidden',
  marginBottom: '24px'
});

export const ScannerImage = styled.img({
  width: '100%',
  height: 'auto',
  display: 'block',
  objectFit: 'cover'
});

export const TextSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
});

export const ScannerTitle = styled.h2(({ theme }) => ({
  fontSize: '20px',
  fontWeight: '600',
  color: theme.colors.systemElevatedBackground,
  lineHeight: '28px',
  letterSpacing: '0.4px',
  marginBottom: '4px'
}));

export const ScannerDescription = styled.p(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '400',
  color: theme.colors.systemBlurryOverlay,
  lineHeight: '22px',
  letterSpacing: '0.2px'
}));