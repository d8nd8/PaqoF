import React, { useEffect, useState } from 'react'

import { PaginationContainer, PaginationDot } from './SliderPagination.styled'

interface SliderPaginationProps {
  totalSlides: number
  currentSlide: number
  onSlideChange: (index: number) => void
  autoPlayDuration?: number
  isAutoPlaying?: boolean
}

export const SliderPagination: React.FC<SliderPaginationProps> = ({
  totalSlides,
  currentSlide,
  onSlideChange,
  autoPlayDuration = 10000,
  isAutoPlaying = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isAutoPlaying) {
      setIsAnimating(true)

      const slideTimer = setTimeout(() => {
        const nextSlide = (currentSlide + 1) % totalSlides
        onSlideChange(nextSlide)
      }, autoPlayDuration)

      const animationTimer = setTimeout(() => {
        setIsAnimating(false)
      }, autoPlayDuration - 100)

      return () => {
        clearTimeout(slideTimer)
        clearTimeout(animationTimer)
      }
    } else {
      setIsAnimating(false)
    }
  }, [currentSlide, isAutoPlaying, autoPlayDuration, totalSlides, onSlideChange])

  return (
    <PaginationContainer>
      {Array.from({ length: totalSlides }, (_, index) => (
        <PaginationDot
          key={index}
          type="button"
          $isActive={index === currentSlide}
          $isAnimating={isAnimating}
          $duration={autoPlayDuration}
          onClick={() => onSlideChange(index)}
          aria-label={`Перейти к слайду ${index + 1}`}
        />
      ))}
    </PaginationContainer>
  )
}
