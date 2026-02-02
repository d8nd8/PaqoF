import styled from '@emotion/styled'

export type IconButtonSize = 'l'

interface IconButtonStyledProps {
  $size: IconButtonSize
  $iconColor?: string
  $backgroundColor?: string
  $borderColor?: string
  $hoverBackgroundColor?: string
  $hoverIconColor?: string
  $disabled?: boolean
}

const getSizeStyles = (size: IconButtonSize) => {
  switch (size) {
    case 'l':
      return {
        width: '50px',
        height: '50px',
        iconSize: '24px',
      }
    default:
      return {
        width: '50px',
        height: '50px',
        iconSize: '24px',
      }
  }
}

export const IconButtonContainer = styled.button<IconButtonStyledProps>((props) => {
  const sizeStyles = getSizeStyles(props.$size)

  return {
    width: sizeStyles.width,
    height: sizeStyles.height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: props.$borderColor ? `1px solid ${props.$borderColor}` : 'none',
    borderRadius: '18px',
    backgroundColor: props.$backgroundColor || 'transparent',
    cursor: props.$disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    position: 'relative',
    outline: 'none',
    opacity: props.$disabled ? 0.5 : 1,

    '&:active': props.$disabled
      ? {}
      : {
          transform: 'scale(0.95)',
        },

    '&:focus-visible': {
      outline: `2px solid ${props.theme.colors.primary500}`,
      outlineOffset: '2px',
    },
  }
})

export const IconWrapper = styled.div<IconButtonStyledProps>(
  ({ $size, $iconColor, $disabled, $hoverIconColor, theme }) => {
    const sizeStyles = getSizeStyles($size)

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: sizeStyles.iconSize,
      height: sizeStyles.iconSize,
      color: $iconColor || theme.colors.textPrimary,
      transition: 'color 0.2s ease',

      '& svg': {
        width: '100%',
        height: '100%',
        fill: 'currentColor',
      },

      [`${IconButtonContainer}:hover &`]: $disabled
        ? {}
        : {
            color: $hoverIconColor || $iconColor || theme.colors.textPrimary,
          },
    }
  },
)
