import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const fillAnimation = keyframes({
  from: { transform: 'scaleX(0)' },
  to: { transform: 'scaleX(1)' },
})

export const PaginationContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

interface PaginationDotProps {
  $isActive: boolean
  $isAnimating: boolean
  $duration: number
}

export const PaginationDot = styled.button<PaginationDotProps>(
  ({ theme, $isActive, $isAnimating, $duration }) => ({
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    flexShrink: 0,
    overflow: 'hidden',
    transition: 'all 0.25s ease !important',

    ...($isActive
      ? {
          width: '35px',
          height: '7px',
          borderRadius: '360px',
          backgroundColor: theme.colors.textTertiary,
        }
      : {
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          backgroundColor: theme.colors.textTertiary,
        }),

    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.textPrimary,
      borderRadius: 'inherit',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      animation:
        $isActive && $isAnimating ? `${fillAnimation} ${$duration}ms ease-out` : 'none',
    },
  }),
)
