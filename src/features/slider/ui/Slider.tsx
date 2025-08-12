import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { SliderPagination } from "@/features/slider/ui/SliderPagination";
import * as S from "./Slider.styled";

interface Slide {
  title: string;
  description: string;
}

interface SliderProps {
  slides: Slide[];
  autoPlayDuration?: number;
  onButtonClick?: () => void;
}

export const Slider: React.FC<SliderProps> = ({ slides, autoPlayDuration = 5000, onButtonClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <S.SliderContainer>
      <S.SwipeAreaLeft onClick={() => swiperRef.current?.slidePrev()} />
      <S.SwipeAreaRight onClick={() => swiperRef.current?.slideNext()} />

      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: autoPlayDuration, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{
          flex: 1,
          width: '100%',
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            height: '100%'
          }}>
            <S.SlideCenter>
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

      <S.BottomSection>

        <S.MainButton onClick={onButtonClick}>Перейти в кошелёк</S.MainButton>
      </S.BottomSection>
    </S.SliderContainer>
  );
};