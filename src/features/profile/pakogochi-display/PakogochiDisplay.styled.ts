import styled from '@emotion/styled'

export const PakogochiContainer = styled.div({
  position: 'relative',
  width: '100%',
  aspectRatio: '9 / 16',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  overflow: 'hidden',
})

export const PakogochiImage = styled.img({
  position: 'absolute',
  top: -70,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  zIndex: 1,
})

export const InfoCard = styled.div(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%) translateY(-5%)',
  background: theme.colors.systemElevatedBackground,
  borderRadius: '16px',
  width: '100%',
  maxWidth: '347px',
  zIndex: 2,
  padding: '14px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
}))

export const CardTitle = styled.h3(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '25px',
  fontWeight: 600,
  color: theme.colors.textPrimary,
  textAlign: 'center',
  marginBottom: '10px',
}))

export const ActionsGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '8px',
})

export const ActionItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '8px',
})

export const ActionIcon = styled.div(({ theme }) => ({
  width: '50px',
  height: '50px',
  borderRadius: '10px',
  background: theme.colors.primary300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const ActionText = styled.p({
  fontSize: '12px',
  letterSpacing: '-0.08px',
  whiteSpace: 'pre-wrap',
  fontWeight: 400,
  lineHeight: '14px',
  color: '#666',
  margin: 0,
})
