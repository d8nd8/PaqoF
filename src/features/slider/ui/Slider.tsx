import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { SliderPagination } from "@/features/slider/ui/SliderPagination";

interface Slide {
  title: string;
  description: string;
  buttonText: string;
}

interface SliderProps {
  slides: Slide[];
  autoPlayDuration?: number;
}

export const Slider: React.FC<SliderProps> = ({ slides, autoPlayDuration = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      loop
      autoplay={{ delay: autoPlayDuration, disableOnInteraction: false }}
      onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <SliderPagination
              totalSlides={slides.length}
              currentSlide={currentSlide}
              onSlideChange={handleSlideChange}
              autoPlayDuration={autoPlayDuration}
              isAutoPlaying
            />
            <button>{slide.buttonText}</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
