import React, { useState } from 'react';
import { SliderPagination } from '../SliderPagination'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { action } from 'storybook/actions'


const meta: Meta<typeof SliderPagination> = {
  title: 'OnboardingComponents/SliderPagination',
  component: SliderPagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент пагинации для слайдера с анимированным прогрессом активной точки'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    totalSlides: {
      control: { type: 'range', min: 2, max: 8, step: 1 },
      description: 'Количество слайдов'
    },
    currentSlide: {
      control: { type: 'range', min: 0, max: 7, step: 1 },
      description: 'Текущий активный слайд'
    },
    autoPlayDuration: {
      control: { type: 'range', min: 1000, max: 5000, step: 500 },
      description: 'Длительность анимации (мс)'
    },
    isAutoPlaying: {
      control: { type: 'boolean' },
      description: 'Включить анимацию автопроигрывания'
    },
    onSlideChange: {
      description: 'Колбэк при смене слайда'
    }
  },
  decorators: [
    (Story) => React.createElement('div', {
      style: {
        padding: '40px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '8px',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Story))
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

// Основная настраиваемая история
export const Default: Story = {
  args: {
    totalSlides: 4,
    currentSlide: 0,
    autoPlayDuration: 3000,
    isAutoPlaying: false,
    onSlideChange: action('slide-changed')
  }
};

// Интерактивная версия с автоплеем
export const Interactive: Story = {
  render: function InteractiveSlider(args) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);

    const handleSlideChange = (index: number) => {
      setCurrentSlide(index);
      action('slide-changed')(index);
    };

    const toggleAutoPlay = () => {
      setIsAutoPlaying(!isAutoPlaying);
    };

    return React.createElement('div', { style: { textAlign: 'center' } }, [
      React.createElement('div', {
        key: 'title',
        style: {
          marginBottom: '20px',
          color: 'white',
          fontSize: '18px',
          fontWeight: '500'
        }
      }, `Слайд ${currentSlide + 1} из ${args.totalSlides}`),

      React.createElement(SliderPagination, {
        key: 'pagination',
        totalSlides: args.totalSlides,
        currentSlide: currentSlide,
        autoPlayDuration: args.autoPlayDuration,
        isAutoPlaying: isAutoPlaying,
        onSlideChange: handleSlideChange,
      }),

      React.createElement('button', {
        key: 'button',
        onClick: toggleAutoPlay,
        style: {
          marginTop: '20px',
          padding: '10px 20px',
          background: isAutoPlaying ? '#ff4757' : '#2ed573',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '500'
        }
      }, `${isAutoPlaying ? 'Остановить' : 'Запустить'} автоплей`)
    ]);
  },
  args: {
    totalSlides: 5,
    autoPlayDuration: 2500,
    onSlideChange: action('slide-changed')
  }
};