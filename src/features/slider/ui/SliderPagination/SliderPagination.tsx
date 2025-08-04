import React, { useState, useEffect } from 'react';
import { PaginationContainer, Dot, ActiveDot } from './SliderPagination.styled';

interface SliderPaginationProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
  autoPlayDuration?: number;
  isAutoPlaying?: boolean;
}

export const SliderPagination: React.FC<SliderPaginationProps> = ({
                                                                    totalSlides,
                                                                    currentSlide,
                                                                    onSlideChange,
                                                                    autoPlayDuration = 10000,
                                                                    isAutoPlaying = false
                                                                  }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAutoPlaying) {
      setIsAnimating(true);

      // Таймер для переключения на следующий слайд
      const slideTimer = setTimeout(() => {
        const nextSlide = (currentSlide + 1) % totalSlides;
        onSlideChange(nextSlide);
      }, autoPlayDuration);

      // Таймер для остановки анимации (немного раньше переключения)
      const animationTimer = setTimeout(() => {
        setIsAnimating(false);
      }, autoPlayDuration - 100); // Останавливаем анимацию за 100мс до переключения

      return () => {
        clearTimeout(slideTimer);
        clearTimeout(animationTimer);
      };
    } else {
      setIsAnimating(false);
    }
  }, [currentSlide, isAutoPlaying, autoPlayDuration, totalSlides, onSlideChange]);

  return (
    <PaginationContainer>
      {Array.from({ length: totalSlides }, (_, index) => {
        const isActive = index === currentSlide;

        if (isActive) {
          return (
            <ActiveDot
              key={index}
              $isAnimating={isAnimating}
              $duration={autoPlayDuration}
            />
          );
        }

        return (
          <Dot
            key={index}
            onClick={() => onSlideChange(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        );
      })}
    </PaginationContainer>
  );
};