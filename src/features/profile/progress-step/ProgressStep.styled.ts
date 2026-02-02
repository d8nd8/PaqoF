import styled from '@emotion/styled'

import type {
  ProgressContainerProps,
  ProgressLineProps,
  ProgressStepProps,
} from './ProgressStep.types'

export const ProgressContainer = styled.div(({ theme }) => ({
  background: theme.colors?.systemElevatedBackground,
  borderRadius: '16px',
  padding: '14px',
  margin: '0 14px',
}))

export const ProgressTitle = styled.h3(({ theme }) => ({
  fontSize: '15px',
  lineHeight: '30px',
  fontWeight: 600,
  color: theme.colors?.textPrimary,
}))

export const ProgressDescription = styled.p(({ theme }) => ({
  fontSize: '13px',
  color: theme.colors?.textSecondary,
  margin: '0 0 16px 0',
  lineHeight: '18px',
}))

export const ProgressTrack = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
}))

export const ProgressLine = styled.div<ProgressLineProps>(({ theme, progress }) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 50)
  const progressPercentage = (clampedProgress / 50) * 100

  return {
    position: 'absolute',
    left: '26px',
    right: '26px',
    top: '50%',
    height: '8px',
    background: `linear-gradient(to right, #CEFD0F 0%, #CEFD0F ${progressPercentage}%, #F2F2F7 ${progressPercentage}%, #F2F2F7 100%)`,
    borderRadius: '4px',
    transform: 'translateY(-50%)',
    zIndex: 1,
    transition: 'all 0.3s ease',
  }
})

export const ProgressSteps = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  zIndex: 2,
}))

export const ProgressStep = styled.div<ProgressStepProps>(
  ({ theme, active, completed }) => ({
    width: '46px',
    height: '28px',
    background: completed ? theme.colors.primary500 : theme.colors.systemBackground,
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '15px',
    fontWeight: 600,
    color: theme.colors.textPrimary,
    transition: 'all 0.3s ease',
    position: 'relative',
  }),
)

export const NextLevelInfo = styled.div(({ theme }) => ({
  textAlign: 'center',
  marginTop: '16px',
}))

export const NextLevelText = styled.p(({ theme }) => ({
  fontSize: '11px',
  lintHeight: '13px',
  color: theme.colors?.textSecondary,
}))

export const NextLevelValue = styled.p(({ theme }) => ({
  fontSize: '13px',
  lineHeight: '18px',
  fontWeight: 600,
  color: theme.colors?.textPrimary,
  margin: 0,
}))

export const MaxLevelBadge = styled.div(({ theme }) => ({
  background: theme.colors.primary500,
  color: theme.colors?.textPrimary,
  padding: '8px 16px',
  borderRadius: '12px',
  fontSize: '14px',
  fontWeight: 600,
  textAlign: 'center',
  marginTop: '16px',
}))
