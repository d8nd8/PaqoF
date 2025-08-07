import styled from '@emotion/styled';

export const OverlayCommissionContent = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '101px'
});

export const ImageContainer = styled.div({
  width: '100%',
  borderRadius: '13px',
  overflow: 'hidden',
  marginBottom: '14px'
});

export const InfoImage = styled.img({
  width: '100%',
  height: 'auto',
  display: 'block',
  objectFit: 'cover'
});

export const TextSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px'
});

export const InfoTitle = styled.h2(({theme}) => ({
  fontSize: '20px',
  fontWeight: '600',
  color: theme.colors.neutral950,
  lineHeight: '25px',
}));

export const InfoDescription = styled.p(({theme}) => ({
  fontSize: '15px',
  fontWeight: '400',
  color: theme.colors.textSecondary,
  lineHeight: '20px',
}));
