import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite'



import { BottomSheet } from '../BottomSheet';
import { action } from 'storybook/actions'


const meta: Meta<typeof BottomSheet> = {
  title: 'shared/components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Переиспользуемая выдвижная панель снизу с настраиваемыми кнопками и контентом'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Заголовок панели'
    },
    bottomButtonText: {
      control: { type: 'text' },
      description: 'Текст нижней кнопки'
    },
    closeButtonText: {
      control: { type: 'text' },
      description: 'Текст кнопки закрытия'
    },
    showBottomButton: {
      control: { type: 'boolean' },
      description: 'Показывать ли нижнюю кнопку'
    },
    isBottomButtonDisabled: {
      control: { type: 'boolean' },
      description: 'Заблокирована ли нижняя кнопка'
    }
  },
  decorators: [
    (Story) => React.createElement('div', {
      style: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Story))
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function DefaultBottomSheet(args) {
    const [isOpen, setIsOpen] = useState(false);

    return React.createElement('div', {}, [
      React.createElement('button', {
        key: 'trigger',
        onClick: () => setIsOpen(true),
        style: {
          padding: '16px 32px',
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }
      }, 'Открыть BottomSheet'),

      React.createElement(BottomSheet, {
        key: 'sheet',
        ...args,
        isOpen: isOpen,
        onClose: () => {
          setIsOpen(false);
          action('close')();
        },
        onBottomButtonClick: () => {
          action('bottom-button-click')();
          setIsOpen(false);
        }
      }, React.createElement('div', {
        style: { textAlign: 'center' }
      }, [
        React.createElement('h3', {
          key: 'title',
          style: { margin: '0 0 16px', color: '#333' }
        }, 'Контент панели'),
        React.createElement('p', {
          key: 'text',
          style: { margin: '0', color: '#666', lineHeight: '1.5' }
        }, 'Здесь может быть любой контент. Попробуйте изменить настройки в Controls.')
      ]))
    ]);
  },
  args: {
    title: 'Заголовок панели',
    bottomButtonText: 'Сохранить',
    closeButtonText: 'Закрыть',
    showBottomButton: true,
    isBottomButtonDisabled: false
  }
};

export const WithoutBottomButton: Story = {
  render: function WithoutBottomButtonStory(args) {
    const [isOpen, setIsOpen] = useState(false);

    return React.createElement('div', {}, [
      React.createElement('button', {
        key: 'trigger',
        onClick: () => setIsOpen(true),
        style: {
          padding: '16px 32px',
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }
      }, 'Открыть информацию'),

      React.createElement(BottomSheet, {
        key: 'sheet',
        ...args,
        isOpen: isOpen,
        onClose: () => {
          setIsOpen(false);
          action('close')();
        }
      }, React.createElement('div', {}, [
        React.createElement('h3', {
          key: 'title',
          style: { margin: '0 0 16px', color: '#333' }
        }, 'Информация'),
        React.createElement('p', {
          key: 'text1',
          style: { margin: '0 0 16px', color: '#666', lineHeight: '1.5' }
        }, 'Это пример информационной панели без нижней кнопки.'),
        React.createElement('p', {
          key: 'text2',
          style: { margin: '0', color: '#666', lineHeight: '1.5' }
        }, 'Закрыть можно только через кнопку "Закрыть" или клик по оверлею.')
      ]))
    ]);
  },
  args: {
    title: 'О приложении',
    showBottomButton: false,
    closeButtonText: 'Закрыть'
  }
};

export const DisabledButton: Story = {
  render: function DisabledButtonStory(args) {
    const [isOpen, setIsOpen] = useState(false);

    return React.createElement('div', {}, [
      React.createElement('button', {
        key: 'trigger',
        onClick: () => setIsOpen(true),
        style: {
          padding: '16px 32px',
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }
      }, 'Форма с валидацией'),

      React.createElement(BottomSheet, {
        key: 'sheet',
        ...args,
        isOpen: isOpen,
        onClose: () => {
          setIsOpen(false);
          action('close')();
        },
        onBottomButtonClick: () => {
          action('form-submit')();
          setIsOpen(false);
        }
      }, React.createElement('div', {}, [
        React.createElement('h3', {
          key: 'title',
          style: { margin: '0 0 16px', color: '#333' }
        }, 'Заполните форму'),
        React.createElement('p', {
          key: 'text',
          style: { margin: '0 0 16px', color: '#666', lineHeight: '1.5' }
        }, 'Кнопка "Отправить" заблокирована, пока форма не будет заполнена.'),
        React.createElement('input', {
          key: 'input',
          type: 'text',
          placeholder: 'Введите текст...',
          style: {
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px'
          }
        })
      ]))
    ]);
  },
  args: {
    title: 'Обратная связь',
    bottomButtonText: 'Отправить',
    closeButtonText: 'Отмена',
    showBottomButton: true,
    isBottomButtonDisabled: true
  }
};