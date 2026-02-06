import styled from '@emotion/styled'

export const WelcomeSliderWrapper = styled.div<{ $insetTop?: number }>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  background: theme.colors.systemBackground,
  display: 'flex',
  flexDirection: 'column',
  padding: `60px 0 0`,
}))

export const LangButton = styled.button({
  position: 'absolute',
  zIndex: 10,
  left: '10px',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  width: 44,
  height: 44,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  img: {
    width: 20,
    height: 20,
  },
})

// стили для пинкода

export const PinModalOverlay = styled.div({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
})

export const PinModalContent = styled.div(({ theme }) => ({
  background: theme.colors.systemBackground,
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const PinModalClose = styled.button({
  position: 'absolute',
  top: 60,
  right: 0,
  background: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 44,
  height: 44,
})
