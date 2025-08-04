import styled from '@emotion/styled';

export const BannerContainer = styled.div(({theme}) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.colors.primary100,
  borderRadius: '16px',
  padding: '16px',
  width: '100%',
  boxSizing: 'border-box',
  minWidth: 347,
  height: 100,
}));

export const BannerContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const BannerTitleWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
});

export const BannerTitle = styled.h3(({theme}) => ({
  margin: 0,
  fontSize: '20px',
  fontWeight: 700,
  color: theme.colors.neutral950,
  letterSpacing: '-0.45px'
}));

export const LevelBadge = styled.span(({theme}) => ({
  marginLeft: '4px',
  padding: '2px 6px',
  backgroundColor: theme.colors.textQuaternary,
  borderRadius: '6px',
  fontSize: '11px',
  fontWeight: 600,
  color: theme.colors.textSecondary,
}));

export const BannerSubtitle = styled.p(({theme}) => ({
  maxWidth: '222px',
  margin: 0,
  fontSize: '13px',
  lineHeight: 1.4,
  fontWeight: 400,
  color: theme.colors.neutral950,
  whiteSpace: 'pre-wrap',
}));

export const BannerImage = styled.img({
  position: 'absolute',
  right: 10,
  height: 'auto',
  objectFit: 'contain',
});
