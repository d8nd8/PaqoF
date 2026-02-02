import styled from '@emotion/styled'

export const OverlayScannerContent = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  height: '70svh',
  padding: '0 14px',
})

export const ImageContainer = styled.div({
  width: '100%',
  borderRadius: '13px',
  overflow: 'hidden',
  marginBottom: '14px',
})

export const ScannerImage = styled.img({
  width: '100%',
  height: 'auto',
  display: 'block',
  objectFit: 'cover',
  objectPosition: 'center',
})

export const TextSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '20px',
})

export const ScannerTitle = styled.h2(({ theme }) => ({
  fontSize: '20px',
  fontWeight: '600',
  color: theme.colors.systemElevatedBackground,
  lineHeight: '28px',
  letterSpacing: '-0.45px',
  marginBottom: '5px',
}))

export const ScannerDescription = styled.p(() => ({
  fontSize: '15px !important',
  fontWeight: '400 !important',
  color: `rgba(235, 235, 245, 0.60) !important`,
  lineHeight: '20px !important',
  letterSpacing: '-0.23px !important',
}))
