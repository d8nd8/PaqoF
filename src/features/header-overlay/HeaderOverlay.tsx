import React from 'react';
import ChevronLeftIcon from '@icons/chevron-left.svg?react';
import * as S from './HeaderOverlay.styled';

export interface HeaderOverlayProps {
  title: string;
  leftButtonText?: string;
  rightButtonText?: string;
  onLeftButtonClick?: () => void;
  onRightButtonClick?: () => void;
  onLeftChevronClick?: () => void;
  onRightChevronClick?: () => void;
  showLeftChevron?: boolean;
  showRightChevron?: boolean;
  variant?: 'default' | 'white' | 'purple';
}

export const HeaderOverlay: React.FC<HeaderOverlayProps> = ({
                                                              title,
                                                              leftButtonText,
                                                              rightButtonText,
                                                              onLeftButtonClick,
                                                              onRightButtonClick,
                                                              onLeftChevronClick,
                                                              onRightChevronClick,
                                                              showLeftChevron = false,
                                                              showRightChevron = false,
                                                            }) => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.LeftSection>
          {showLeftChevron && (
            <S.ChevronButton onClick={onLeftChevronClick}>
              <ChevronLeftIcon />
            </S.ChevronButton>
          )}
          {leftButtonText && (
            <S.TextButton onClick={onLeftButtonClick}>
              {leftButtonText}
            </S.TextButton>
          )}
        </S.LeftSection>

        <S.CenterSection>
          <S.Title>{title}</S.Title>
        </S.CenterSection>

        <S.RightSection>
          {rightButtonText && (
            <S.TextButton onClick={onRightButtonClick}>
              {rightButtonText}
            </S.TextButton>
          )}
          {showRightChevron && (
            <S.ChevronButton onClick={onRightChevronClick}>
              <ChevronLeftIcon />
            </S.ChevronButton>
          )}
        </S.RightSection>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};