import React, { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'

import { SliderPagination } from '@/features/slider/ui/SliderPagination'
import TelegramMainButton from '@/shared/components/TelegramMainButton/TelegramMainButton'
import { useTranslation } from 'react-i18next'

import * as S from './Slider.styled'

interface Slide {
  title: string
  description: string
  image?: string
  backgroundSize?: string
  backgroundPosition?: string
  /** Bottom offset in px: background is drawn in area above this, image anchored to top (no crop) */
  backgroundBottomOffset?: number
}

interface SliderProps {
  showButton?: boolean
  slides: Slide[]
  autoPlayDuration?: number
  onButtonClick?: () => void
}

export const Slider: React.FC<SliderProps> = ({
  showButton = true,
  slides,
  autoPlayDuration = 5000,
  onButtonClick,
}) => {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
    swiperRef.current?.slideToLoop(index)
  }

  return (
    <S.SliderContainer>
      <S.SwipeAreaLeft onClick={() => swiperRef.current?.slidePrev()} />
      <S.SwipeAreaRight onClick={() => swiperRef.current?.slideNext()} />

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="slide"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{ delay: autoPlayDuration, disableOnInteraction: false }}
        allowTouchMove={true}
        touchStartPreventDefault={false}
        resistanceRatio={0.85}
        speed={700}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{
          flex: 1,
          marginTop: '60px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        slidesPerView={1}
        centeredSlides={false}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="slider-slide"
          >
            <S.SlideCenter
              style={
                slide.backgroundBottomOffset
                  ? undefined
                  : {
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: slide.backgroundSize,
                      backgroundPosition: slide.backgroundPosition,
                      backgroundRepeat: 'no-repeat',
                    }
              }
            >
              {slide.backgroundBottomOffset != null && slide.image && (
                <S.SlideBackgroundZone
                  style={{
                    height: `calc(100% - ${slide.backgroundBottomOffset}px)`,
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'bottom',
                  }}
                />
              )}
              <S.Title>{slide.title}</S.Title>
              <S.Description>{slide.description}</S.Description>
            </S.SlideCenter>
          </SwiperSlide>
        ))}

        <SliderPagination
          totalSlides={slides.length}
          currentSlide={currentSlide}
          onSlideChange={handleSlideChange}
          autoPlayDuration={autoPlayDuration}
          isAutoPlaying
        />
      </Swiper>
      {showButton ? (
        <TelegramMainButton
          text={t('welcome.buttonText')}
          callback={onButtonClick || (() => {})}
        />
      ) : (
        <div style={{ opacity: showButton ? 1 : 0, height: 70 }}></div>
      )}
    </S.SliderContainer>
  )
}
