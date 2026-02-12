import styled from '@emotion/styled'

export const SwipeAreaLeft = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '50px',
  height: '100%',
  zIndex: 5,
  cursor: 'pointer',
})

export const SwipeAreaRight = styled.div({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '50px',
  height: '100%',
  zIndex: 5,
  cursor: 'pointer',
})

export const MAIN_BUTTON_HEIGHT = 80

export const SliderContainer = styled.div(({ theme }) => ({
  flex: 1,
  width: '100vw',
  maxWidth: '100vw',
  display: 'flex',
  height: 'var(--app-height)',
  flexDirection: 'column',
  background: theme.colors.systemBackground,
  // paddingBottom: '84px',

  '.slider-slide': {
    width: '100% !important',
    maxWidth: '100%',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
}))

export const SlideCenter = styled.div({
  position: 'relative',
  flex: 1,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 24px',
  textAlign: 'center',
})

export const SlideBackgroundZone = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  backgroundRepeat: 'no-repeat',
})

export const Title = styled.h2(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 700,
  lineHeight: '34px',
  color: theme.colors.textPrimary,
  whiteSpace: 'pre-line',
  marginBottom: '5px',
  letterSpacing: '0.38px',
}))

export const Description = styled.p(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '21px',
  color: `${theme.colors.textSecondary} !important`,
  marginBottom: '20px',
  letterSpacing: '-0.31px',
}))

export const ImageWrapper = styled.div({
  flexShrink: 0,
  width: '100%',
  maxWidth: '380px',
  height: '360px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
  },
})

export const TextBlock = styled.div({
  marginTop: '16px',
})

export const MainButtonSpacer = styled.div({
  flexShrink: 0,
  width: '100%',
  minHeight: MAIN_BUTTON_HEIGHT,
  height: MAIN_BUTTON_HEIGHT,
})
