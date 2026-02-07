import styled from '@emotion/styled'

export const CodesSection = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '14px',
  borderRadius: '13px',
  backgroundColor: theme.colors.systemElevatedBackground,
  margin: '0 14px',
}))

export const CopyNotification = styled.div<{ $visible?: boolean }>(
  ({ theme, $visible }) => ({
    position: 'absolute',
    top: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    background: theme.colors.systemElevatedBackground,
    padding: '8px 12px',
    borderRadius: '12px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textPrimary,
    zIndex: 10,
    pointerEvents: $visible ? 'auto' : 'none',
    visibility: $visible ? 'visible' : 'hidden',
    opacity: $visible ? 1 : 0,
    animation: $visible ? 'fadeInOut 2s ease' : 'none',

    svg: {
      fill: theme.colors.success600,
      width: '16px',
      height: '16px',
    },

    '@keyframes fadeInOut': {
      '0%': { opacity: 0, transform: 'translateX(-50%) translateY(-10px)' },
      '10%': { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
      '90%': { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
      '100%': { opacity: 0, transform: 'translateX(-50%) translateY(-10px)' },
    },
  }),
)
