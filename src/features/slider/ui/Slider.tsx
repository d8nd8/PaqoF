import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { SliderPagination } from "@/features/slider/ui/SliderPagination";
import * as S from "./Slider.styled";

interface Slide {
  title: string;
  description: string;
  image?: string;
}

interface SliderProps {
  slides: Slide[];
  autoPlayDuration?: number;
  onButtonClick?: () => void;
}

export const Slider: React.FC<SliderProps> = ({
                                                slides,
                                                autoPlayDuration = 5000,
                                                onButtonClick,
                                              }) => {
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
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{ delay: autoPlayDuration, disableOnInteraction: false }}
        allowTouchMove={true} // включаем свайп
        touchStartPreventDefault={false} // чтобы свайп был мягче
        resistanceRatio={0.85} // "дрейф" при свайпе
        speed={700} // мягкость анимации
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
        slidesPerView={1}
        centeredSlides={false}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="slider-slide">
            <S.SlideCenter>
              {slide.image && (
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    width: "100%",
                    maxWidth: "380px",
                    height: "auto",
                    objectFit: "contain",
                    marginBottom: "16px",
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

      <S.BottomSection>
        <S.MainButton onClick={onButtonClick}>Перейти в кошелёк</S.MainButton>
      </S.BottomSection>
    </S.SliderContainer>
  );
};
