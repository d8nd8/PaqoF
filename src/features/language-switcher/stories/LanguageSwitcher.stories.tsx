import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/internal/actions';
import styled from 'styled-components';



import { LanguageSwitcher } from '../LanguageSwitcher'


const DemoContainer = styled.div({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px'
});

const StatusText = styled.p({
  color: 'white',
  fontSize: '18px',
  margin: '0 0 20px 0',
  textAlign: 'center'
});

const TriggerButton = styled.button({
  padding: '16px 32px',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '12px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.2s ease',

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
  },

  '&:active': {
    transform: 'translateY(0)'
  }
});

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'OnboardingComponents/LanguageSwitcher',
  component: LanguageSwitcher,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Компонент для переключения языка приложения с использованием BottomSheet'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    selectedLanguage: {
      control: { type: 'select' },
      options: ['ru', 'en'],
      description: 'Текущий выбранный язык'
    },
    languages: {
      description: 'Массив доступных языков'
    }
  },
  decorators: [
    (Story) => React.createElement(DemoContainer, {}, React.createElement(Story))
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function DefaultLanguageSwitcher(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('ru');

    const getLanguageName = (code: string) => {
      const language = args.languages?.find(lang => lang.code === code);
      return language?.name || code;
    };

    const handleLanguageChange = (language: string) => {
      setSelectedLanguage(language);
      action('language-changed')(language);
    };

    return React.createElement('div', {}, [
      React.createElement(StatusText, {
        key: 'status'
      }, `Текущий язык: ${getLanguageName(selectedLanguage)}`),

      React.createElement(TriggerButton, {
        key: 'trigger',
        onClick: () => setIsOpen(true)
      }, 'Изменить язык'),

      React.createElement(LanguageSwitcher, {
        key: 'Switcher',
        ...args,
        isOpen: isOpen,
        onClose: () => {
          setIsOpen(false);
          action('close')();
        },
        selectedLanguage: selectedLanguage,
        onLanguageChange: handleLanguageChange
      })
    ]);
  },
  args: {
    languages: [
      { code: 'ru', name: 'Русский' },
      { code: 'en', name: 'English' }
    ]
  }
};

export const WithMoreLanguages: Story = {
  render: function MoreLanguagesStory(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('ru');

    const getLanguageName = (code: string) => {
      const language = args.languages?.find(lang => lang.code === code);
      return language?.name || code;
    };

    const handleLanguageChange = (language: string) => {
      setSelectedLanguage(language);
      action('language-changed')(language);
    };

    return React.createElement('div', {}, [
      React.createElement(StatusText, {
        key: 'status'
      }, `Текущий язык: ${getLanguageName(selectedLanguage)}`),

      React.createElement(TriggerButton, {
        key: 'trigger',
        onClick: () => setIsOpen(true)
      }, 'Выбрать язык'),

      React.createElement(LanguageSwitcher, {
        key: 'Switcher',
        ...args,
        isOpen: isOpen,
        onClose: () => {
          setIsOpen(false);
          action('close')();
        },
        selectedLanguage: selectedLanguage,
        onLanguageChange: handleLanguageChange
      })
    ]);
  },
  args: {
    languages: [
      { code: 'ru', name: 'Русский' },
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Español' },
      { code: 'fr', name: 'Français' },
      { code: 'de', name: 'Deutsch' }
    ]
  }
};