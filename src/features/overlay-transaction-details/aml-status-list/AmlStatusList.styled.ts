import styled from '@emotion/styled'

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  margin: '20px 0',
})

export interface StatusItemProps {
  $status: 'success' | 'pending' | 'error' | 'warning' | 'default'
  $clickable: boolean
}

export const StatusItem = styled.div<StatusItemProps>(
  ({ theme, $status, $clickable }) => {
    const getStatusColors = () => {
      switch ($status) {
        case 'success':
          return {
            backgroundColor: theme.colors.success100,
          }
        case 'pending':
          return {
            backgroundColor: theme.colors.warning100,
          }
        case 'error':
          return {
            backgroundColor: theme.colors.error100,
          }
        case 'warning':
          return {
            backgroundColor: theme.colors.warning100,
          }
        default:
          return {
            backgroundColor: theme.colors.systemElevatedBackground,
          }
      }
    }

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px',
      borderRadius: '12px',
      transition: 'all 0.2s ease',
      border: 'none',
      ...getStatusColors(),
      ...($clickable && {
        cursor: 'pointer',

        '&:active': {
          transform: 'translateY(0)',
        },
      }),
    }
  },
)

export const StatusContent = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}))

export interface StatusIconProps {
  $status: 'success' | 'pending' | 'error' | 'warning' | 'default'
}

export const StatusIcon = styled.div<StatusIconProps>(({ theme, $status }) => {
  const getIconColors = () => {
    switch ($status) {
      case 'success':
        return {
          backgroundColor: theme.colors.success500,
          color: theme.colors.neutral100,
        }
      case 'pending':
        return {
          backgroundColor: theme.colors.warning500,
          color: theme.colors.neutral100,
        }
      case 'error':
        return {
          backgroundColor: theme.colors.error500,
          color: theme.colors.neutral100,
        }
      case 'warning':
        return {
          backgroundColor: theme.colors.warning500,
          color: theme.colors.neutral950,
        }
      default:
        return {
          backgroundColor: theme.colors.neutral500,
          color: theme.colors.neutral100,
        }
    }
  }

  return {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 700,
    flexShrink: 0,
    ...getIconColors(),
  }
})

export const StatusText = styled.div(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 600,
  color: theme.colors.neutral950,
  lineHeight: '18px',
  flex: 1,
}))

export const ChevronIcon = styled.div(({ theme }) => ({
  color: theme.colors.textSecondary,
  fontSize: '20px',
  fontWeight: 300,
  transform: 'rotate(0deg)',
  transition: 'transform 0.2s ease',
}))
