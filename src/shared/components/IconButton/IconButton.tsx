import React from 'react';
import * as S from './IconButton.styled';
import type { IconButtonSize } from './IconButton.styled'

interface IconButtonProps {
  size?: IconButtonSize;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  hoverBackgroundColor?: string;
  hoverIconColor?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  ariaLabel?: string;
  title?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
                                                        size = 'l',
                                                        icon: Icon,
                                                        iconColor,
                                                        backgroundColor,
                                                        borderColor,
                                                        hoverBackgroundColor,
                                                        hoverIconColor,
                                                        disabled = false,
                                                        onClick,
                                                        className,
                                                        ariaLabel,
                                                        title,
                                                        ...rest
                                                      }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <S.IconButtonContainer
      $size={size}
      $iconColor={iconColor}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      $hoverIconColor={hoverIconColor}
      $disabled={disabled}
      onClick={handleClick}
      disabled={disabled}
      className={className}
      aria-label={ariaLabel}
      title={title}
      {...rest}
    >
      <S.IconWrapper
        $size={size}
        $iconColor={iconColor}
        $hoverIconColor={hoverIconColor}
        $disabled={disabled}
      >
        <Icon />
      </S.IconWrapper>
    </S.IconButtonContainer>
  );
};